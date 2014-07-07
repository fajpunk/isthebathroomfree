(ns itbf-web.door-state
  (:require [taoensso.carmine :as car]
            [environ.core :refer [env]]))

(def redis-conn {:spec { :uri (env :redistogo-url)}})
(def redis-key "itbf:door-state")

(defn set [state]
  (car/wcar redis-conn
            (car/set redis-key state)))

(defn get []
  (car/wcar redis-conn
            (car/get redis-key)))
