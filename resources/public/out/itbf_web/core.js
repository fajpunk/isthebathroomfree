// Compiled by ClojureScript 0.0-2234
goog.provide('itbf_web.core');
goog.require('cljs.core');
goog.require('taoensso.sente');
goog.require('taoensso.encore');
goog.require('ajax.core');
goog.require('taoensso.sente');
goog.require('ajax.core');
goog.require('weasel.repl');
goog.require('dommy.core');
goog.require('taoensso.sente');
goog.require('taoensso.encore');
goog.require('dommy.core');
goog.require('clojure.string');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('clojure.string');
goog.require('taoensso.encore');
goog.require('cljs.core.match');
goog.require('weasel.repl');
cljs.core.enable_console_print_BANG_.call(null);
var map__12538_12539 = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk");var map__12538_12540__$1 = ((cljs.core.seq_QMARK_.call(null,map__12538_12539))?cljs.core.apply.call(null,cljs.core.hash_map,map__12538_12539):map__12538_12539);var state_12541 = cljs.core.get.call(null,map__12538_12540__$1,new cljs.core.Keyword(null,"state","state",1123661827));var send_fn_12542 = cljs.core.get.call(null,map__12538_12540__$1,new cljs.core.Keyword(null,"send-fn","send-fn",2993769631));var ch_recv_12543 = cljs.core.get.call(null,map__12538_12540__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",1704942016));var chsk_12544 = cljs.core.get.call(null,map__12538_12540__$1,new cljs.core.Keyword(null,"chsk","chsk",1016957167));itbf_web.core.chsk = chsk_12544;
itbf_web.core.ch_chsk = ch_recv_12543;
itbf_web.core.chsk_send_BANG_ = send_fn_12542;
itbf_web.core.chsk_state = state_12541;
itbf_web.core.state_map = new cljs.core.PersistentArrayMap(null, 2, ["closed","Occupied :(","opened","Free!!"], null);
itbf_web.core.update_door_state = (function update_door_state(state){var door_state_el = document.getElementById("door-state");var buttons_el = document.getElementById("buttons");dommy.core.set_text_BANG_.call(null,door_state_el,cljs.core.get.call(null,itbf_web.core.state_map,state));
if(cljs.core._EQ_.call(null,state,"opened"))
{return dommy.core.hide_BANG_.call(null,buttons_el);
} else
{return dommy.core.show_BANG_.call(null,buttons_el);
}
});
itbf_web.core.event_handler = (function event_handler(p__12545,_){var vec__12568 = p__12545;var id = cljs.core.nth.call(null,vec__12568,0,null);var data = cljs.core.nth.call(null,vec__12568,1,null);var ev = vec__12568;taoensso.encore.logf.call(null,"Event: %s",ev);
try{if(cljs.core.keyword_identical_QMARK_.call(null,id,new cljs.core.Keyword("chsk","state","chsk/state",1318408525)))
{try{if((function (){var G__12588 = data;if(G__12588)
{var bit__4204__auto__ = (G__12588.cljs$lang$protocol_mask$partition0$ & 256);if((bit__4204__auto__) || (G__12588.cljs$core$ILookup$))
{return true;
} else
{if((!G__12588.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__12588);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__12588);
}
})())
{try{var data_first_open_QMARK___12573 = cljs.core.get.call(null,data,new cljs.core.Keyword(null,"first-open?","first-open?",3183196490),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if((data_first_open_QMARK___12573 === true))
{return taoensso.encore.logf.call(null,"Channel socket successfully established!");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e12589){if((e12589 instanceof Error))
{var e__6894__auto__ = e12589;if((e__6894__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__6894__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12589;
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
}catch (e12587){if((e12587 instanceof Error))
{var e__6894__auto__ = e12587;if((e__6894__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__6894__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12587;
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
}catch (e12579){if((e12579 instanceof Error))
{var e__6894__auto__ = e12579;if((e__6894__auto__ === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,id,new cljs.core.Keyword("chsk","state","chsk/state",1318408525)))
{var new_state = data;return taoensso.encore.logf.call(null,"Chsk state change: %s",new_state);
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,id,new cljs.core.Keyword("chsk","recv","chsk/recv",1214957308)))
{try{if((cljs.core.vector_QMARK_.call(null,data)) && ((cljs.core.count.call(null,data) === 2)))
{try{var data_0__12574 = cljs.core.nth.call(null,data,0);if(cljs.core.keyword_identical_QMARK_.call(null,data_0__12574,new cljs.core.Keyword("itbf","door-event","itbf/door-event",3938501417)))
{try{var data_1__12575 = cljs.core.nth.call(null,data,1);if((function (){var G__12585 = data_1__12575;if(G__12585)
{var bit__4204__auto__ = (G__12585.cljs$lang$protocol_mask$partition0$ & 256);if((bit__4204__auto__) || (G__12585.cljs$core$ILookup$))
{return true;
} else
{if((!G__12585.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__12585);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__12585);
}
})())
{try{var data_1__12575_door_state__12578 = cljs.core.get.call(null,data_1__12575,new cljs.core.Keyword(null,"door-state","door-state",3746100516),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if(cljs.core.not_EQ_.call(null,data_1__12575_door_state__12578,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962)))
{var door_state = cljs.core.get.call(null,data_1__12575,new cljs.core.Keyword(null,"door-state","door-state",3746100516));return itbf_web.core.update_door_state.call(null,door_state);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e12586){if((e12586 instanceof Error))
{var e__6894__auto____$1 = e12586;if((e__6894__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__6894__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12586;
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
}catch (e12584){if((e12584 instanceof Error))
{var e__6894__auto____$1 = e12584;if((e__6894__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__6894__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12584;
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
}catch (e12583){if((e12583 instanceof Error))
{var e__6894__auto____$1 = e12583;if((e__6894__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__6894__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12583;
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
}catch (e12582){if((e12582 instanceof Error))
{var e__6894__auto____$1 = e12582;if((e__6894__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__6894__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12582;
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
}catch (e12580){if((e12580 instanceof Error))
{var e__6894__auto____$1 = e12580;if((e__6894__auto____$1 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,id,new cljs.core.Keyword("chsk","recv","chsk/recv",1214957308)))
{var payload = data;return taoensso.encore.logf.call(null,"Push event from server: %s",payload);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e12581){if((e12581 instanceof Error))
{var e__6894__auto____$2 = e12581;if((e__6894__auto____$2 === cljs.core.match.backtrack))
{return taoensso.encore.logf.call(null,"Unmatched event: %s",ev);
} else
{throw e__6894__auto____$2;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12581;
} else
{return null;
}
}
}} else
{throw e__6894__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12580;
} else
{return null;
}
}
}} else
{throw e__6894__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12579;
} else
{return null;
}
}
}});
if(typeof itbf_web.core.chsk_router !== 'undefined')
{} else
{itbf_web.core.chsk_router = taoensso.sente.start_chsk_router_loop_BANG_.call(null,itbf_web.core.event_handler,itbf_web.core.ch_chsk);
}
dommy.core.listen_BANG_.call(null,document.getElementById("hurry-up"),new cljs.core.Keyword(null,"click","click",1108654330),(function (){return ajax.core.POST.call(null,"/start-buzzer");
}));
dommy.core.listen_BANG_.call(null,document.getElementById("take-your-time"),new cljs.core.Keyword(null,"click","click",1108654330),(function (){return ajax.core.POST.call(null,"/stop-buzzer");
}));

//# sourceMappingURL=core.js.map