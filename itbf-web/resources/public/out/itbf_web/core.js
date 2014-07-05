// Compiled by ClojureScript 0.0-2234
goog.provide('itbf_web.core');
goog.require('cljs.core');
goog.require('taoensso.sente');
goog.require('taoensso.encore');
goog.require('cljs.core.async');
goog.require('taoensso.sente');
goog.require('weasel.repl');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('taoensso.sente');
goog.require('taoensso.encore');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('taoensso.encore');
goog.require('cljs.core.match');
goog.require('weasel.repl');
cljs.core.enable_console_print_BANG_.call(null);
var map__15183_15184 = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk");var map__15183_15185__$1 = ((cljs.core.seq_QMARK_.call(null,map__15183_15184))?cljs.core.apply.call(null,cljs.core.hash_map,map__15183_15184):map__15183_15184);var state_15186 = cljs.core.get.call(null,map__15183_15185__$1,new cljs.core.Keyword(null,"state","state",1123661827));var send_fn_15187 = cljs.core.get.call(null,map__15183_15185__$1,new cljs.core.Keyword(null,"send-fn","send-fn",2993769631));var ch_recv_15188 = cljs.core.get.call(null,map__15183_15185__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",1704942016));var chsk_15189 = cljs.core.get.call(null,map__15183_15185__$1,new cljs.core.Keyword(null,"chsk","chsk",1016957167));itbf_web.core.chsk = chsk_15189;
itbf_web.core.ch_chsk = ch_recv_15188;
itbf_web.core.chsk_send_BANG_ = send_fn_15187;
itbf_web.core.chsk_state = state_15186;
itbf_web.core.update_door_state = (function update_door_state(state){taoensso.encore.logf.call(null,"Updating door-state: %s",state);
var el = document.querySelector("#door-state");return el.innerHTML = state;
});
itbf_web.core.event_handler = (function event_handler(p__15190,_){var vec__15213 = p__15190;var id = cljs.core.nth.call(null,vec__15213,0,null);var data = cljs.core.nth.call(null,vec__15213,1,null);var ev = vec__15213;taoensso.encore.logf.call(null,"Event: %s",ev);
try{if(cljs.core.keyword_identical_QMARK_.call(null,id,new cljs.core.Keyword("chsk","state","chsk/state",1318408525)))
{try{if((function (){var G__15233 = data;if(G__15233)
{var bit__4204__auto__ = (G__15233.cljs$lang$protocol_mask$partition0$ & 256);if((bit__4204__auto__) || (G__15233.cljs$core$ILookup$))
{return true;
} else
{if((!G__15233.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__15233);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__15233);
}
})())
{try{var data_first_open_QMARK___15218 = cljs.core.get.call(null,data,new cljs.core.Keyword(null,"first-open?","first-open?",3183196490),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if((data_first_open_QMARK___15218 === true))
{return taoensso.encore.logf.call(null,"Channel socket successfully established!");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e15234){if((e15234 instanceof Error))
{var e__6236__auto__ = e15234;if((e__6236__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__6236__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15234;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e15232){if((e15232 instanceof Error))
{var e__6236__auto__ = e15232;if((e__6236__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__6236__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15232;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e15224){if((e15224 instanceof Error))
{var e__6236__auto__ = e15224;if((e__6236__auto__ === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,id,new cljs.core.Keyword("chsk","state","chsk/state",1318408525)))
{var new_state = data;return taoensso.encore.logf.call(null,"Chsk state change: %s",new_state);
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,id,new cljs.core.Keyword("chsk","recv","chsk/recv",1214957308)))
{try{if((cljs.core.vector_QMARK_.call(null,data)) && ((cljs.core.count.call(null,data) === 2)))
{try{var data_0__15219 = cljs.core.nth.call(null,data,0);if(cljs.core.keyword_identical_QMARK_.call(null,data_0__15219,new cljs.core.Keyword("itbf","door-event","itbf/door-event",3938501417)))
{try{var data_1__15220 = cljs.core.nth.call(null,data,1);if((function (){var G__15230 = data_1__15220;if(G__15230)
{var bit__4204__auto__ = (G__15230.cljs$lang$protocol_mask$partition0$ & 256);if((bit__4204__auto__) || (G__15230.cljs$core$ILookup$))
{return true;
} else
{if((!G__15230.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__15230);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__15230);
}
})())
{try{var data_1__15220_door_state__15223 = cljs.core.get.call(null,data_1__15220,new cljs.core.Keyword(null,"door-state","door-state",3746100516),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if(cljs.core.not_EQ_.call(null,data_1__15220_door_state__15223,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962)))
{var door_state = cljs.core.get.call(null,data_1__15220,new cljs.core.Keyword(null,"door-state","door-state",3746100516));return itbf_web.core.update_door_state.call(null,door_state);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e15231){if((e15231 instanceof Error))
{var e__6236__auto____$1 = e15231;if((e__6236__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__6236__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15231;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e15229){if((e15229 instanceof Error))
{var e__6236__auto____$1 = e15229;if((e__6236__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__6236__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15229;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e15228){if((e15228 instanceof Error))
{var e__6236__auto____$1 = e15228;if((e__6236__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__6236__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15228;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e15227){if((e15227 instanceof Error))
{var e__6236__auto____$1 = e15227;if((e__6236__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__6236__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15227;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e15225){if((e15225 instanceof Error))
{var e__6236__auto____$1 = e15225;if((e__6236__auto____$1 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,id,new cljs.core.Keyword("chsk","recv","chsk/recv",1214957308)))
{var payload = data;return taoensso.encore.logf.call(null,"Push event from server: %s",payload);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e15226){if((e15226 instanceof Error))
{var e__6236__auto____$2 = e15226;if((e__6236__auto____$2 === cljs.core.match.backtrack))
{return taoensso.encore.logf.call(null,"Unmatched event: %s",ev);
} else
{throw e__6236__auto____$2;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15226;
} else
{return null;
}
}
}} else
{throw e__6236__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15225;
} else
{return null;
}
}
}} else
{throw e__6236__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15224;
} else
{return null;
}
}
}});
if(typeof itbf_web.core.chsk_router !== 'undefined')
{} else
{itbf_web.core.chsk_router = taoensso.sente.start_chsk_router_loop_BANG_.call(null,itbf_web.core.event_handler,itbf_web.core.ch_chsk);
}

//# sourceMappingURL=core.js.map