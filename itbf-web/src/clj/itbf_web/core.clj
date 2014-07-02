(ns itbf-web.core
  (:require [org.httpkit.server :refer [run-server]]
            [ring.middleware.reload :as reload]
            [compojure.handler :refer [site]]
            [compojure.core :refer [defroutes GET POST]]
            [compojure.route :as route]
            [itbf-web.spark-event-client :as client]
            [environ.core :refer [env]]
            [clojure.core.async :refer [go go-loop >! <! chan]]))

(defn in-dev? []
  true)

(declare door-closed)
(declare door-opened)

(defroutes all-routes
  (GET "/" [] "handling-page")
  (GET "/api/door-closed" [] (door-closed))
  (GET "/api/door-opened" [] (door-opened))
  (route/resources "/")
  (route/not-found "<p>Page not found.</p>"))

(defn door-closed []
  (println "Door closed!")
  "")

(defn door-opened []
  (println "Door opened!")
  "")

(defn -main [& args] ;; entry point, lein run will pick up and start from here
  (let [event-chan (client/subscribe "door-closed" (env :spark-access-token))]
    (go
      (while true
        (println (<! event-chan)))))

  (let [handler (if (in-dev?)
                  (reload/wrap-reload (site #'all-routes)) ;; only reload when dev
                  (site all-routes))]
    (run-server handler {:port 8080})))
