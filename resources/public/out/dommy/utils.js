// Compiled by ClojureScript 0.0-2234
goog.provide('dommy.utils');
goog.require('cljs.core');
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
dommy.utils.dissoc_in = (function dissoc_in(m,p__12310){var vec__12312 = p__12310;var k = cljs.core.nth.call(null,vec__12312,0,null);var ks = cljs.core.nthnext.call(null,vec__12312,1);if(cljs.core.truth_(m))
{var temp__4124__auto__ = (function (){var and__3542__auto__ = ks;if(and__3542__auto__)
{return dissoc_in.call(null,m.call(null,k),ks);
} else
{return and__3542__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var res = temp__4124__auto__;return cljs.core.assoc.call(null,m,k,res);
} else
{var res = cljs.core.dissoc.call(null,m,k);if(cljs.core.empty_QMARK_.call(null,res))
{return null;
} else
{return res;
}
}
} else
{return null;
}
});
dommy.utils.__GT_Array = (function __GT_Array(array_like){return Array.prototype.slice.call(array_like);
});

//# sourceMappingURL=utils.js.map