(ns itbf-web.core)

(enable-console-print!)

(defn testems [message]
  (let [el (.querySelector js/document "#door-state")]
    (.log js/console el)
    (set! (.-innerHTML el) "C'mon now...")))


(def ws (js/WebSocket. "ws://localhost:8080/ws/door-state"))
(set! (.-onmessage ws) testems)
