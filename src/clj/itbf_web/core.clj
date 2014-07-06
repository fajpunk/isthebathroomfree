(ns itbf-web.core
  (:require [org.httpkit.server :refer [run-server send! with-channel on-close]]
            [ring.middleware.reload :as reload]
            [compojure.handler :refer [site]]
            [compojure.core :refer [defroutes GET POST]]
            [compojure.route :as route]
            [itbf-web.spark-event-client :as client]
            [environ.core :refer [env]]
            [taoensso.timbre :as timbre]
            [taoensso.carmine :as car]
            [taoensso.sente :as sente]
            [taoensso.encore :as encore]
            [clojure.core.match :refer [match]]
            [clojure.core.async :refer [go go-loop >! <! chan alt! alt!!]]))

(timbre/refer-timbre)

(defn in-dev? []
  (= "development" (env :rack-env)))

(declare door-state-handler)
(declare door-closed)
(declare door-opened)


(let [{:keys [ch-recv send-fn ajax-post-fn ajax-get-or-ws-handshake-fn
              connected-uids]}
      (sente/make-channel-socket! {})]
  (def ring-ajax-post ajax-post-fn)
  (def ring-ajax-get-or-ws-handshake ajax-get-or-ws-handshake-fn)
  (def ch-chsk ch-recv) ; ChannelSocket's receive channel
  (def chsk-send! send-fn) ; ChannelSocket's send API fn
  (def connected-uids connected-uids) ; Watchable, read-only atom
  )

(defroutes all-routes
  (GET "/" [] "handling-page")
  (GET "/chsk" req (ring-ajax-get-or-ws-handshake req))
  (route/resources "/")
  (route/not-found "<p>Page not found.</p>"))


(def redis-conn {:spec { :uri (env :redistogo-url)}})

(defn- push-door-state [state]
  (car/wcar redis-conn
            (car/set "itbf:door-state" state))
  (doseq [uid (:any @connected-uids)]
    (chsk-send! uid
      [:itbf/door-event
        {:door-state state}])))

(defn- get-door-state []
  (car/wcar redis-conn
            (car/get "itbf:door-state")))

(defn- event-handler
  [{:as ev-msg :keys [ring-req event ?reply-fn]} _]
  (let [session (:session ring-req)
        uid     (:uid session)
        [id data :as ev] event]
    (chsk-send! uid
      [:itbf/door-event {:door-state (get-door-state)}])))

(defn -main [port]
  (defonce door-closed-chan (client/subscribe "door-closed" (env :spark-access-token)))
  (defonce door-opened-chan (client/subscribe "door-opened" (env :spark-access-token)))
  (debug "Subscribed to spark channels")

  (defonce door-state-broadcaster
    (go
      (while true
        (alt!
          [door-closed-chan] (push-door-state "closed")
          [door-opened-chan] (push-door-state "opened")))))

  (defonce chsk-router
    (sente/start-chsk-router-loop! event-handler ch-chsk))

  (let [handler (if (in-dev?)
                  (reload/wrap-reload (site #'all-routes)) ;; only reload when dev
                  (site all-routes))]
    (run-server handler {:port (Integer. port)})))
