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
var map__15235_15236 = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk");var map__15235_15237__$1 = ((cljs.core.seq_QMARK_.call(null,map__15235_15236))?cljs.core.apply.call(null,cljs.core.hash_map,map__15235_15236):map__15235_15236);var state_15238 = cljs.core.get.call(null,map__15235_15237__$1,new cljs.core.Keyword(null,"state","state",1123661827));var send_fn_15239 = cljs.core.get.call(null,map__15235_15237__$1,new cljs.core.Keyword(null,"send-fn","send-fn",2993769631));var ch_recv_15240 = cljs.core.get.call(null,map__15235_15237__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",1704942016));var chsk_15241 = cljs.core.get.call(null,map__15235_15237__$1,new cljs.core.Keyword(null,"chsk","chsk",1016957167));itbf_web.core.chsk = chsk_15241;
itbf_web.core.ch_chsk = ch_recv_15240;
itbf_web.core.chsk_send_BANG_ = send_fn_15239;
itbf_web.core.chsk_state = state_15238;
itbf_web.core.update_door_state = (function update_door_state(state){taoensso.encore.logf.call(null,"Updating door-state: %s",state);
var el = document.querySelector("#door-state");return el.innerHTML = state;
});
itbf_web.core.event_handler = (function event_handler(p__15242,_){var vec__15265 = p__15242;var id = cljs.core.nth.call(null,vec__15265,0,null);var data = cljs.core.nth.call(null,vec__15265,1,null);var ev = vec__15265;taoensso.encore.logf.call(null,"Event: %s",ev);
try{if(cljs.core.keyword_identical_QMARK_.call(null,id,new cljs.core.Keyword("chsk","state","chsk/state",1318408525)))
{try{if((function (){var G__15285 = data;if(G__15285)
{var bit__4204__auto__ = (G__15285.cljs$lang$protocol_mask$partition0$ & 256);if((bit__4204__auto__) || (G__15285.cljs$core$ILookup$))
{return true;
} else
{if((!G__15285.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__15285);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__15285);
}
})())
{try{var data_first_open_QMARK___15270 = cljs.core.get.call(null,data,new cljs.core.Keyword(null,"first-open?","first-open?",3183196490),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if((data_first_open_QMARK___15270 === true))
{return taoensso.encore.logf.call(null,"Channel socket successfully established!");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e15286){if((e15286 instanceof Error))
{var e__6236__auto__ = e15286;if((e__6236__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__6236__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15286;
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
}catch (e15284){if((e15284 instanceof Error))
{var e__6236__auto__ = e15284;if((e__6236__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__6236__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15284;
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
}catch (e15276){if((e15276 instanceof Error))
{var e__6236__auto__ = e15276;if((e__6236__auto__ === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,id,new cljs.core.Keyword("chsk","state","chsk/state",1318408525)))
{var new_state = data;return taoensso.encore.logf.call(null,"Chsk state change: %s",new_state);
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,id,new cljs.core.Keyword("chsk","recv","chsk/recv",1214957308)))
{try{if((cljs.core.vector_QMARK_.call(null,data)) && ((cljs.core.count.call(null,data) === 2)))
{try{var data_0__15271 = cljs.core.nth.call(null,data,0);if(cljs.core.keyword_identical_QMARK_.call(null,data_0__15271,new cljs.core.Keyword("itbf","door-event","itbf/door-event",3938501417)))
{try{var data_1__15272 = cljs.core.nth.call(null,data,1);if((function (){var G__15282 = data_1__15272;if(G__15282)
{var bit__4204__auto__ = (G__15282.cljs$lang$protocol_mask$partition0$ & 256);if((bit__4204__auto__) || (G__15282.cljs$core$ILookup$))
{return true;
} else
{if((!G__15282.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__15282);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__15282);
}
})())
{try{var data_1__15272_door_state__15275 = cljs.core.get.call(null,data_1__15272,new cljs.core.Keyword(null,"door-state","door-state",3746100516),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if(cljs.core.not_EQ_.call(null,data_1__15272_door_state__15275,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962)))
{var door_state = cljs.core.get.call(null,data_1__15272,new cljs.core.Keyword(null,"door-state","door-state",3746100516));return itbf_web.core.update_door_state.call(null,door_state);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e15283){if((e15283 instanceof Error))
{var e__6236__auto____$1 = e15283;if((e__6236__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__6236__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15283;
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
}catch (e15281){if((e15281 instanceof Error))
{var e__6236__auto____$1 = e15281;if((e__6236__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__6236__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15281;
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
}catch (e15280){if((e15280 instanceof Error))
{var e__6236__auto____$1 = e15280;if((e__6236__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__6236__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15280;
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
}catch (e15279){if((e15279 instanceof Error))
{var e__6236__auto____$1 = e15279;if((e__6236__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__6236__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15279;
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
}catch (e15277){if((e15277 instanceof Error))
{var e__6236__auto____$1 = e15277;if((e__6236__auto____$1 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,id,new cljs.core.Keyword("chsk","recv","chsk/recv",1214957308)))
{var payload = data;return taoensso.encore.logf.call(null,"Push event from server: %s",payload);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e15278){if((e15278 instanceof Error))
{var e__6236__auto____$2 = e15278;if((e__6236__auto____$2 === cljs.core.match.backtrack))
{return taoensso.encore.logf.call(null,"Unmatched event: %s",ev);
} else
{throw e__6236__auto____$2;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15278;
} else
{return null;
}
}
}} else
{throw e__6236__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15277;
} else
{return null;
}
}
}} else
{throw e__6236__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15276;
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