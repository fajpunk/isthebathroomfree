// Compiled by ClojureScript 0.0-2234
goog.provide('itbf_web.core');
goog.require('cljs.core');
cljs.core.enable_console_print_BANG_.call(null);
itbf_web.core.testems = (function testems(message){var el = document.querySelector("#door-state");console.log(el);
return el.innerHTML = "C'mon now...";
});
itbf_web.core.ws = (new WebSocket("ws://localhost:8080/ws/door-state"));
itbf_web.core.ws.onmessage = itbf_web.core.testems;

//# sourceMappingURL=core.js.map