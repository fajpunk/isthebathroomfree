(ns itbf-web.core
  (:require-macros
    [cljs.core.match.macros :refer (match)]
    [cljs.core.async.macros :as asyncm :refer (go go-loop)]
    [dommy.macros :refer [node sel sel1]])
  (:require
    [dommy.utils :as utils]
    [dommy.core :as dommy]
    [weasel.repl :as ws-repl]
    [clojure.string  :as str]
    [cljs.core.match]
    [ajax.core :refer [POST]]
    [taoensso.encore :as encore :refer (logf)]
    [taoensso.sente  :as sente  :refer (cb-success?)]))
(enable-console-print!)

;; WebSockets
(let [{:keys [chsk ch-recv send-fn state]}
      (sente/make-channel-socket! "/chsk")]
  (def chsk chsk)
  (def ch-chsk ch-recv) ; ChannelSocket's receive channel
  (def chsk-send! send-fn) ; ChannelSocket's send API fn
  (def chsk-state state) ; Watchable, read-only atom
  )


(defn- update-door-state [state]
  (let [door-state-el (sel1 :#door-state)
        buttons-el (sel1 :#buttons)]
    (-> door-state-el
        (dommy/set-text! state))
    (if (= state "opened")
      (dommy/hide! buttons-el)
      (dommy/show! buttons-el))))


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

;; Buttons
(dommy/listen! (sel1 :#hurry-up) :click #(POST "/start-buzzer"))
(dommy/listen! (sel1 :#take-your-time) :click #(POST "/stop-buzzer"))
