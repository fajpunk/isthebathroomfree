// Compiled by ClojureScript 0.0-2234
goog.provide('itbf_web.core');
goog.require('cljs.core');
goog.require('taoensso.sente');
goog.require('taoensso.encore');
goog.require('ajax.core');
goog.require('taoensso.sente');
goog.require('ajax.core');
goog.require('weasel.repl');
goog.require('taoensso.sente');
goog.require('taoensso.encore');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('taoensso.encore');
goog.require('cljs.core.match');
goog.require('weasel.repl');
cljs.core.enable_console_print_BANG_.call(null);
var map__11415_11416 = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk");var map__11415_11417__$1 = ((cljs.core.seq_QMARK_.call(null,map__11415_11416))?cljs.core.apply.call(null,cljs.core.hash_map,map__11415_11416):map__11415_11416);var state_11418 = cljs.core.get.call(null,map__11415_11417__$1,new cljs.core.Keyword(null,"state","state",1123661827));var send_fn_11419 = cljs.core.get.call(null,map__11415_11417__$1,new cljs.core.Keyword(null,"send-fn","send-fn",2993769631));var ch_recv_11420 = cljs.core.get.call(null,map__11415_11417__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",1704942016));var chsk_11421 = cljs.core.get.call(null,map__11415_11417__$1,new cljs.core.Keyword(null,"chsk","chsk",1016957167));itbf_web.core.chsk = chsk_11421;
itbf_web.core.ch_chsk = ch_recv_11420;
itbf_web.core.chsk_send_BANG_ = send_fn_11419;
itbf_web.core.chsk_state = state_11418;
itbf_web.core.update_door_state = (function update_door_state(state){taoensso.encore.logf.call(null,"Updating door-state: %s",state);
var el = document.querySelector("#door-state");return el.innerHTML = state;
});
itbf_web.core.event_handler = (function event_handler(p__11422,_){var vec__11445 = p__11422;var id = cljs.core.nth.call(null,vec__11445,0,null);var data = cljs.core.nth.call(null,vec__11445,1,null);var ev = vec__11445;taoensso.encore.logf.call(null,"Event: %s",ev);
try{if(cljs.core.keyword_identical_QMARK_.call(null,id,new cljs.core.Keyword("chsk","state","chsk/state",1318408525)))
{try{if((function (){var G__11465 = data;if(G__11465)
{var bit__4204__auto__ = (G__11465.cljs$lang$protocol_mask$partition0$ & 256);if((bit__4204__auto__) || (G__11465.cljs$core$ILookup$))
{return true;
} else
{if((!G__11465.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__11465);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__11465);
}
})())
{try{var data_first_open_QMARK___11450 = cljs.core.get.call(null,data,new cljs.core.Keyword(null,"first-open?","first-open?",3183196490),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if((data_first_open_QMARK___11450 === true))
{return taoensso.encore.logf.call(null,"Channel socket successfully established!");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e11466){if((e11466 instanceof Error))
{var e__6735__auto__ = e11466;if((e__6735__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__6735__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11466;
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
}catch (e11464){if((e11464 instanceof Error))
{var e__6735__auto__ = e11464;if((e__6735__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__6735__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11464;
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
}catch (e11456){if((e11456 instanceof Error))
{var e__6735__auto__ = e11456;if((e__6735__auto__ === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,id,new cljs.core.Keyword("chsk","state","chsk/state",1318408525)))
{var new_state = data;return taoensso.encore.logf.call(null,"Chsk state change: %s",new_state);
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,id,new cljs.core.Keyword("chsk","recv","chsk/recv",1214957308)))
{try{if((cljs.core.vector_QMARK_.call(null,data)) && ((cljs.core.count.call(null,data) === 2)))
{try{var data_0__11451 = cljs.core.nth.call(null,data,0);if(cljs.core.keyword_identical_QMARK_.call(null,data_0__11451,new cljs.core.Keyword("itbf","door-event","itbf/door-event",3938501417)))
{try{var data_1__11452 = cljs.core.nth.call(null,data,1);if((function (){var G__11462 = data_1__11452;if(G__11462)
{var bit__4204__auto__ = (G__11462.cljs$lang$protocol_mask$partition0$ & 256);if((bit__4204__auto__) || (G__11462.cljs$core$ILookup$))
{return true;
} else
{if((!G__11462.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__11462);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__11462);
}
})())
{try{var data_1__11452_door_state__11455 = cljs.core.get.call(null,data_1__11452,new cljs.core.Keyword(null,"door-state","door-state",3746100516),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if(cljs.core.not_EQ_.call(null,data_1__11452_door_state__11455,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962)))
{var door_state = cljs.core.get.call(null,data_1__11452,new cljs.core.Keyword(null,"door-state","door-state",3746100516));return itbf_web.core.update_door_state.call(null,door_state);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e11463){if((e11463 instanceof Error))
{var e__6735__auto____$1 = e11463;if((e__6735__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__6735__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11463;
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
}catch (e11461){if((e11461 instanceof Error))
{var e__6735__auto____$1 = e11461;if((e__6735__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__6735__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11461;
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
}catch (e11460){if((e11460 instanceof Error))
{var e__6735__auto____$1 = e11460;if((e__6735__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__6735__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11460;
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
}catch (e11459){if((e11459 instanceof Error))
{var e__6735__auto____$1 = e11459;if((e__6735__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__6735__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11459;
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
}catch (e11457){if((e11457 instanceof Error))
{var e__6735__auto____$1 = e11457;if((e__6735__auto____$1 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,id,new cljs.core.Keyword("chsk","recv","chsk/recv",1214957308)))
{var payload = data;return taoensso.encore.logf.call(null,"Push event from server: %s",payload);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e11458){if((e11458 instanceof Error))
{var e__6735__auto____$2 = e11458;if((e__6735__auto____$2 === cljs.core.match.backtrack))
{return taoensso.encore.logf.call(null,"Unmatched event: %s",ev);
} else
{throw e__6735__auto____$2;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11458;
} else
{return null;
}
}
}} else
{throw e__6735__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11457;
} else
{return null;
}
}
}} else
{throw e__6735__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11456;
} else
{return null;
}
}
}});
if(typeof itbf_web.core.chsk_router !== 'undefined')
{} else
{itbf_web.core.chsk_router = taoensso.sente.start_chsk_router_loop_BANG_.call(null,itbf_web.core.event_handler,itbf_web.core.ch_chsk);
}
itbf_web.core.buzz_button = document.querySelector("#hurry-up");
itbf_web.core.no_buzz_button = document.querySelector("#take-your-time");
itbf_web.core.buzz_button.onclick = (function (){return ajax.core.POST.call(null,"/start-buzzer");
});
itbf_web.core.no_buzz_button.onclick = (function (){return ajax.core.POST.call(null,"/stop-buzzer");
});

//# sourceMappingURL=core.js.map