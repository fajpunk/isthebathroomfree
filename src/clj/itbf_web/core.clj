(ns itbf-web.core
  (:require [org.httpkit.server :refer [run-server]]
            [ring.middleware.reload :as reload]
            [compojure.handler :refer [site]]
            [compojure.core :refer [defroutes GET POST]]
            [compojure.route :as route]
            [itbf-web.spark-event-client :as client]
            [itbf-web.door-state :as ds]
            [environ.core :refer [env]]
            [taoensso.timbre :as timbre]
            [taoensso.sente :as sente]
            [taoensso.encore :as encore]
            [hiccup.core :refer [html]]
            [clojure.core.match :refer [match]]
            [clojure.core.async :refer [go go-loop >! <! chan alt! alt!!]]))
(timbre/refer-timbre)
;(timbre/set-level! :trace)

(def access-token (env :spark-access-token))
(def device-id (env :spark-device-id))

(defn in-dev? []
  (= "development" (env :rack-env)))

(declare door-state-handler)
(declare door-closed)
(declare door-opened)


(let [{:keys [ch-recv send-fn ajax-post-fn ajax-get-or-ws-handshake-fn
              connected-uids]}
      (sente/make-channel-socket! {:user-id-fn (fn [req] (encore/uuid-str))})]
  (def ring-ajax-post ajax-post-fn)
  (def ring-ajax-get-or-ws-handshake ajax-get-or-ws-handshake-fn)
  (def ch-chsk ch-recv) ; ChannelSocket's receive channel
  (def chsk-send! send-fn) ; ChannelSocket's send API fn
  (def connected-uids connected-uids) ; Watchable, read-only atom
  )

(defn index []
  (html
    [:head [:title "Is the bathroom free?"]]
    [:body
     [:h2 "The bathroom door is:"]
     [:div#door-state]
     [:div#buttons 
      [:button#hurry-up "Hurry up!"]
      [:button#take-your-time "take-your-time"]]
     [:script {:src "out/goog/base.js" :type "text/javascript"}]
     [:script {:src "itbf_web.js" :type "text/javascript"}]
     [:script {:type "text/javascript"} "goog.require(\"itbf_web.core\")"]]))

(defroutes all-routes
  (GET "/" [] (index))
  (GET "/chsk" req (ring-ajax-get-or-ws-handshake req))
  (POST "/start-buzzer" [] (do (client/start-buzzer access-token device-id) {:status 200}))
  (POST "/stop-buzzer" [] (do (client/stop-buzzer access-token device-id) {:status 200}))
  (route/resources "/")
  (route/not-found "<p>Page not found.</p>"))

(defn- push-door-state [state]
  (ds/set state)
  (doseq [uid (:any @connected-uids)]
    (debug "Pushing door-state to uid:" uid)
    (chsk-send! uid
                [:itbf/door-event
                 {:door-state state}])))

(defn- event-handler
  [{:as ev-msg :keys [ring-req event ?reply-fn]} _]
  (let [session (:session ring-req)
        uid (subs (:client-uuid ev-msg) 0 36) ; Apparently, this gets truncated :(
        [id data :as ev] event]
    (cond
      (= id :chsk/uidport-open) 
      (do (chsk-send! uid [:itbf/door-event {:door-state (ds/get)}]))
      :else nil)))

(defn -main [port]
  (defonce door-closed-chan (client/subscribe "door-closed" access-token))
  (defonce door-opened-chan (client/subscribe "door-opened" access-token))
  (debug "Subscribed to spark channels")

  (defonce door-state-broadcaster
    (go
      (while true
        (<! door-closed-chan)
        (push-door-state "closed"))))

  (defonce door-state-broadcaster2
    (go
      (while true
        (<! door-opened-chan)
        (push-door-state "opened"))))

  (defonce chsk-router
    (sente/start-chsk-router-loop! event-handler ch-chsk))

  (let [handler (if (in-dev?)
                  (reload/wrap-reload (site #'all-routes)) ;; only reload when dev
                  (site all-routes))]
    (run-server handler {:port (Integer. port)})))
