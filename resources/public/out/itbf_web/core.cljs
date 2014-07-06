(ns itbf-web.core
  (:require-macros
    [cljs.core.match.macros :refer (match)]
    [cljs.core.async.macros :as asyncm :refer (go go-loop)])
  (:require
    [weasel.repl :as ws-repl]
    [clojure.string  :as str]
    [cljs.core.match]
    [cljs.core.async :as async  :refer (<! >! put! chan)]
    [taoensso.encore :as encore :refer (logf)]
    [taoensso.sente  :as sente  :refer (cb-success?)]))

(enable-console-print!)

(let [{:keys [chsk ch-recv send-fn state]}
      (sente/make-channel-socket! "/chsk")]
  (def chsk chsk)
  (def ch-chsk ch-recv) ; ChannelSocket's receive channel
  (def chsk-send! send-fn) ; ChannelSocket's send API fn
  (def chsk-state state) ; Watchable, read-only atom
  )


(defn- update-door-state [state]
  (logf  "Updating door-state: %s" state)
  (let [el (.querySelector js/document "#door-state")]
    (set! (.-innerHTML el) state)))


(defn- event-handler [[id data :as ev] _]
  (logf "Event: %s" ev)
  (match [id data]
         [:chsk/state {:first-open? true}] (logf "Channel socket successfully established!")
         [:chsk/state new-state] (logf "Chsk state change: %s" new-state)
         [:chsk/recv  [:itbf/door-event {:door-state door-state}]] (update-door-state door-state)
         [:chsk/recv  payload]   (logf "Push event from server: %s" payload)
         :else (logf "Unmatched event: %s" ev)))

(defonce chsk-router
  (sente/start-chsk-router-loop! event-handler ch-chsk))
