(ns itbf-web.spark-event-client
  (:require [clojure.data.json :as json]
            [taoensso.timbre :as timbre]
            [environ.core :refer  [env]]
            [itbf-web.sse-client :as sse]))
(timbre/refer-timbre)

(defn- url [event-name]
  (str "https://api.spark.io/v1/events/" event-name))

(defn- headers [access-token]
  {"Authorization" (str "Bearer " access-token)})

(defn subscribe [event-name access-token]
  (sse/subscribe (url event-name) {:headers (headers access-token)}))
