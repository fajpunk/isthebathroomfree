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
var map__12226_12227 = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk");var map__12226_12228__$1 = ((cljs.core.seq_QMARK_.call(null,map__12226_12227))?cljs.core.apply.call(null,cljs.core.hash_map,map__12226_12227):map__12226_12227);var state_12229 = cljs.core.get.call(null,map__12226_12228__$1,new cljs.core.Keyword(null,"state","state",1123661827));var send_fn_12230 = cljs.core.get.call(null,map__12226_12228__$1,new cljs.core.Keyword(null,"send-fn","send-fn",2993769631));var ch_recv_12231 = cljs.core.get.call(null,map__12226_12228__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",1704942016));var chsk_12232 = cljs.core.get.call(null,map__12226_12228__$1,new cljs.core.Keyword(null,"chsk","chsk",1016957167));itbf_web.core.chsk = chsk_12232;
itbf_web.core.ch_chsk = ch_recv_12231;
itbf_web.core.chsk_send_BANG_ = send_fn_12230;
itbf_web.core.chsk_state = state_12229;
itbf_web.core.update_door_state = (function update_door_state(state){var door_state_el = document.getElementById("door-state");var buttons_el = document.getElementById("buttons");dommy.core.set_text_BANG_.call(null,door_state_el,state);
if(cljs.core._EQ_.call(null,state,"opened"))
{return dommy.core.hide_BANG_.call(null,buttons_el);
} else
{return dommy.core.show_BANG_.call(null,buttons_el);
}
});
itbf_web.core.event_handler = (function event_handler(p__12233,_){var vec__12256 = p__12233;var id = cljs.core.nth.call(null,vec__12256,0,null);var data = cljs.core.nth.call(null,vec__12256,1,null);var ev = vec__12256;taoensso.encore.logf.call(null,"Event: %s",ev);
try{if(cljs.core.keyword_identical_QMARK_.call(null,id,new cljs.core.Keyword("chsk","state","chsk/state",1318408525)))
{try{if((function (){var G__12276 = data;if(G__12276)
{var bit__4204__auto__ = (G__12276.cljs$lang$protocol_mask$partition0$ & 256);if((bit__4204__auto__) || (G__12276.cljs$core$ILookup$))
{return true;
} else
{if((!G__12276.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__12276);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__12276);
}
})())
{try{var data_first_open_QMARK___12261 = cljs.core.get.call(null,data,new cljs.core.Keyword(null,"first-open?","first-open?",3183196490),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if((data_first_open_QMARK___12261 === true))
{return taoensso.encore.logf.call(null,"Channel socket successfully established!");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e12277){if((e12277 instanceof Error))
{var e__6894__auto__ = e12277;if((e__6894__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__6894__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12277;
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
}catch (e12275){if((e12275 instanceof Error))
{var e__6894__auto__ = e12275;if((e__6894__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__6894__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12275;
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
}catch (e12267){if((e12267 instanceof Error))
{var e__6894__auto__ = e12267;if((e__6894__auto__ === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,id,new cljs.core.Keyword("chsk","state","chsk/state",1318408525)))
{var new_state = data;return taoensso.encore.logf.call(null,"Chsk state change: %s",new_state);
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,id,new cljs.core.Keyword("chsk","recv","chsk/recv",1214957308)))
{try{if((cljs.core.vector_QMARK_.call(null,data)) && ((cljs.core.count.call(null,data) === 2)))
{try{var data_0__12262 = cljs.core.nth.call(null,data,0);if(cljs.core.keyword_identical_QMARK_.call(null,data_0__12262,new cljs.core.Keyword("itbf","door-event","itbf/door-event",3938501417)))
{try{var data_1__12263 = cljs.core.nth.call(null,data,1);if((function (){var G__12273 = data_1__12263;if(G__12273)
{var bit__4204__auto__ = (G__12273.cljs$lang$protocol_mask$partition0$ & 256);if((bit__4204__auto__) || (G__12273.cljs$core$ILookup$))
{return true;
} else
{if((!G__12273.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__12273);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__12273);
}
})())
{try{var data_1__12263_door_state__12266 = cljs.core.get.call(null,data_1__12263,new cljs.core.Keyword(null,"door-state","door-state",3746100516),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if(cljs.core.not_EQ_.call(null,data_1__12263_door_state__12266,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962)))
{var door_state = cljs.core.get.call(null,data_1__12263,new cljs.core.Keyword(null,"door-state","door-state",3746100516));return itbf_web.core.update_door_state.call(null,door_state);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e12274){if((e12274 instanceof Error))
{var e__6894__auto____$1 = e12274;if((e__6894__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__6894__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12274;
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
}catch (e12272){if((e12272 instanceof Error))
{var e__6894__auto____$1 = e12272;if((e__6894__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__6894__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12272;
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
}catch (e12271){if((e12271 instanceof Error))
{var e__6894__auto____$1 = e12271;if((e__6894__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__6894__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12271;
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
}catch (e12270){if((e12270 instanceof Error))
{var e__6894__auto____$1 = e12270;if((e__6894__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__6894__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12270;
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
}catch (e12268){if((e12268 instanceof Error))
{var e__6894__auto____$1 = e12268;if((e__6894__auto____$1 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,id,new cljs.core.Keyword("chsk","recv","chsk/recv",1214957308)))
{var payload = data;return taoensso.encore.logf.call(null,"Push event from server: %s",payload);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e12269){if((e12269 instanceof Error))
{var e__6894__auto____$2 = e12269;if((e__6894__auto____$2 === cljs.core.match.backtrack))
{return taoensso.encore.logf.call(null,"Unmatched event: %s",ev);
} else
{throw e__6894__auto____$2;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12269;
} else
{return null;
}
}
}} else
{throw e__6894__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12268;
} else
{return null;
}
}
}} else
{throw e__6894__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12267;
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