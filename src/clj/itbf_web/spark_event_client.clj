(ns itbf-web.spark-event-client
  (:require [clojure.data.json :as json]
            [org.httpkit.client :as http]
            [taoensso.timbre :as timbre]
            [environ.core :refer  [env]]
            [itbf-web.sse-client :as sse]))
(timbre/refer-timbre)

(defn- event-url [event-name]
  (str "https://api.spark.io/v1/events/" event-name))

(defn- function-url [function device-id]
  (str "https://api.spark.io/v1/devices/" device-id "/" function))

(defn- call-function [access-token device-id function]
  (http/post (function-url function device-id) {:form-params {:access_token access-token}}))

(defn- headers [access-token]
  {"Authorization" (str "Bearer " access-token)})


(defn subscribe [event-name access-token]
  (sse/subscribe (event-url event-name) {:headers (headers access-token)}))

(defn start-buzzer [access-token device-id]
  (call-function access-token device-id "buzzer_on"))

(defn stop-buzzer [access-token device-id]
  (call-function access-token device-id "buzzer_off"))
