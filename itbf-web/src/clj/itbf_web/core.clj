(ns itbf-web.core
  (:require [org.httpkit.server :refer [run-server send! with-channel]]
            [ring.middleware.reload :as reload]
            [compojure.handler :refer [site]]
            [compojure.core :refer [defroutes GET POST]]
            [compojure.route :as route]
            [itbf-web.spark-event-client :as client]
            [environ.core :refer [env]]
            [taoensso.timbre :refer [debug info warn error]]
            [taoensso.carmine :as car]
            [clojure.core.async :refer [go go-loop >! <! chan alt!]]))

(defn in-dev? []
  true)

(declare door-state-handler)

(defroutes all-routes
  (GET "/" [] "handling-page")
  (GET "/ws/door-state" [] door-state-handler)
  (route/resources "/")
  (route/not-found "<p>Page not found.</p>"))

(defn door-state-handler [request]
  (with-channel request channel
    (send! channel "From the channel")))

(defn door-closed []
  (car/wcar nil
            (car/set "itbf:door-state" "closed"))
  (println "Door closed!"))

(defn door-opened []
  (car/wcar nil
            (car/set "itbf:door-state" "opened"))
  (println "Door opened"))

(defn -main [& args]
  (car/wcar nil
        (car/set "itbf:door-state" "opened"))
  (let [door-closed-chan (client/subscribe "door-closed" (env :spark-access-token))
        door-opened-chan (client/subscribe "door-opened" (env :spark-access-token))]
    (debug "Subscribed to spark channels")
    (go
      (while true
        (alt!
          [door-closed-chan] (door-closed)
          [door-opened-chan] (door-opened)))))

  (let [handler (if (in-dev?)
                  (reload/wrap-reload (site #'all-routes)) ;; only reload when dev
                  (site all-routes))]
    (run-server handler {:port 8080})))
