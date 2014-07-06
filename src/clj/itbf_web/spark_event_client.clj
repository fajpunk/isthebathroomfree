(ns itbf-web.spark-event-client
  (:require [clj-http.client :as client]
            [clojure.data.json :as json]
            [clojure.string :refer [trim]]
            [taoensso.timbre :refer [debug info warn error]]
            [clojure.core.async :refer [go go-loop >! <! chan]]))

(defn- url [event-name]
  (str "https://api.spark.io/v1/events/" event-name))

(defn- headers [access-token]
  {"Authorization" "Bearer 792e2af48ebcc516b6ec5d28b99bfb677933fe27"})

(defn- connect
  "Return a streaming HTTP connection"
  [event-name access-token]
  (let [options {:headers (headers access-token) :as :stream}
        url (url event-name)]
    (client/get url options)))

(defn- read-char
  [stream]
  (char (.read stream)))

(defn- read-and-compare
  "Takes a stream and a character. Reads a character off of the stream and
   compares with the passed in character"
  [stream c]
  (let [stream-char (read-char stream)]
    (= stream-char c)))

(defn- init-stream
  "Read the start of the event stream.  At some future time, raise an exception
   or something if the first 5 chars are not :ok\n\n"
  [stream]
  (let [start-sig ":ok\n\n"]
    (doseq [c start-sig] (read-and-compare stream c))))

(defn- ended?
  [event]
  (= (apply str (take-last 2 event)) "\n\n"))

(defn- parse-event
  "Parse a server-side event into a clojure data structure.  Assume that the
   data in the event is JSON"
  [event]
  (let [matches (re-matches #"\s*event:(.*)\ndata:(.*)\s*" event)
        event-name (trim (get matches 1 "name-not-found"))
        event-data (trim (get matches 2 "\"data-not-found\""))]
    {:event event-name
     :data (json/read-str event-data)}))


(defn- curr-event [event next-byte]
  (conj event (char next-byte)))

(defn subscribe
  "Returns a core.async channel that will have events posted to it.  Will block
   until the event stream is ready to be read from."
  [event-name access-token]
  (let [event-stream (:body (connect event-name access-token))
        event-chan (chan)]
    (init-stream event-stream)

    (go-loop [stream event-stream 
              event [] 
              receiving false]
      (let [next-byte (.read stream)]
        (cond
          (= -1 next-byte)
          (recur (:body (connect event-name access-token)) [] false)

          (and (not receiving) (= (char next-byte) \newline))
          (recur stream [] false)

          (and (not receiving) (not= (char next-byte) \newline))
          (recur stream (curr-event event next-byte) true)

          (and receiving (ended? (curr-event event next-byte)))
          (do
            (>! event-chan (parse-event (apply str (curr-event event next-byte))))
            (recur stream [] false))

          (and receiving (not (ended? (curr-event event next-byte))))
          (recur stream (curr-event event next-byte) true))))
    event-chan))
