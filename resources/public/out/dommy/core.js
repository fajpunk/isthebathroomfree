// Compiled by ClojureScript 0.0-2234
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.template');
goog.require('dommy.template');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.core.has_class_QMARK_ = dommy.attrs.has_class_QMARK_;
dommy.core.add_class_BANG_ = dommy.attrs.add_class_BANG_;
dommy.core.remove_class_BANG_ = dommy.attrs.remove_class_BANG_;
dommy.core.toggle_class_BANG_ = dommy.attrs.toggle_class_BANG_;
dommy.core.set_attr_BANG_ = dommy.attrs.set_attr_BANG_;
dommy.core.set_style_BANG_ = dommy.attrs.set_style_BANG_;
dommy.core.set_px_BANG_ = dommy.attrs.set_px_BANG_;
dommy.core.px = dommy.attrs.px;
dommy.core.style_str = dommy.attrs.style_str;
dommy.core.style = dommy.attrs.style;
dommy.core.remove_attr_BANG_ = dommy.attrs.remove_attr_BANG_;
dommy.core.toggle_attr_BANG_ = dommy.attrs.toggle_attr_BANG_;
dommy.core.attr = dommy.attrs.attr;
dommy.core.hidden_QMARK_ = dommy.attrs.hidden_QMARK_;
dommy.core.toggle_BANG_ = dommy.attrs.toggle_BANG_;
dommy.core.hide_BANG_ = dommy.attrs.hide_BANG_;
dommy.core.show_BANG_ = dommy.attrs.show_BANG_;
dommy.core.bounding_client_rect = dommy.attrs.bounding_client_rect;
dommy.core.scroll_into_view = dommy.attrs.scroll_into_view;
dommy.core.dissoc_in = dommy.utils.dissoc_in;
dommy.core.__GT_Array = dommy.utils.__GT_Array;
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.innerHTML = html;
return elem__$1;
});
dommy.core.html = (function html(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML;
});
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var prop = (cljs.core.truth_(elem__$1.textContent)?"textContent":"innerText");(elem__$1[prop] = text);
return elem__$1;
});
dommy.core.text = (function text(elem){var or__3554__auto__ = elem.textContent;if(cljs.core.truth_(or__3554__auto__))
{return or__3554__auto__;
} else
{return elem.innerText;
}
});
dommy.core.value = (function value(elem){return dommy.template.__GT_node_like.call(null,elem).value;
});
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.value = value;
return elem__$1;
});
/**
* append `child` to `parent`. 'parent' and 'child' should be node-like
* (work with dommy.template/->node-like). The node-like projection
* of parent is returned after appending child.
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){var G__11480 = dommy.template.__GT_node_like.call(null,parent);G__11480.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__11480;
});
var append_BANG___3 = (function() { 
var G__11485__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__11481_11486 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__11482_11487 = null;var count__11483_11488 = 0;var i__11484_11489 = 0;while(true){
if((i__11484_11489 < count__11483_11488))
{var c_11490 = cljs.core._nth.call(null,chunk__11482_11487,i__11484_11489);append_BANG_.call(null,parent__$1,c_11490);
{
var G__11491 = seq__11481_11486;
var G__11492 = chunk__11482_11487;
var G__11493 = count__11483_11488;
var G__11494 = (i__11484_11489 + 1);
seq__11481_11486 = G__11491;
chunk__11482_11487 = G__11492;
count__11483_11488 = G__11493;
i__11484_11489 = G__11494;
continue;
}
} else
{var temp__4126__auto___11495 = cljs.core.seq.call(null,seq__11481_11486);if(temp__4126__auto___11495)
{var seq__11481_11496__$1 = temp__4126__auto___11495;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11481_11496__$1))
{var c__4310__auto___11497 = cljs.core.chunk_first.call(null,seq__11481_11496__$1);{
var G__11498 = cljs.core.chunk_rest.call(null,seq__11481_11496__$1);
var G__11499 = c__4310__auto___11497;
var G__11500 = cljs.core.count.call(null,c__4310__auto___11497);
var G__11501 = 0;
seq__11481_11486 = G__11498;
chunk__11482_11487 = G__11499;
count__11483_11488 = G__11500;
i__11484_11489 = G__11501;
continue;
}
} else
{var c_11502 = cljs.core.first.call(null,seq__11481_11496__$1);append_BANG_.call(null,parent__$1,c_11502);
{
var G__11503 = cljs.core.next.call(null,seq__11481_11496__$1);
var G__11504 = null;
var G__11505 = 0;
var G__11506 = 0;
seq__11481_11486 = G__11503;
chunk__11482_11487 = G__11504;
count__11483_11488 = G__11505;
i__11484_11489 = G__11506;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__11485 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11485__delegate.call(this,parent,child,more_children);};
G__11485.cljs$lang$maxFixedArity = 2;
G__11485.cljs$lang$applyTo = (function (arglist__11507){
var parent = cljs.core.first(arglist__11507);
arglist__11507 = cljs.core.next(arglist__11507);
var child = cljs.core.first(arglist__11507);
var more_children = cljs.core.rest(arglist__11507);
return G__11485__delegate(parent,child,more_children);
});
G__11485.cljs$core$IFn$_invoke$arity$variadic = G__11485__delegate;
return G__11485;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append_BANG_.cljs$lang$maxFixedArity = 2;
append_BANG_.cljs$lang$applyTo = append_BANG___3.cljs$lang$applyTo;
append_BANG_.cljs$core$IFn$_invoke$arity$2 = append_BANG___2;
append_BANG_.cljs$core$IFn$_invoke$arity$variadic = append_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return append_BANG_;
})()
;
/**
* prepend `child` to `parent`, both node-like
* return ->node-like projection of `parent`
* @param {...*} var_args
*/
dommy.core.prepend_BANG_ = (function() {
var prepend_BANG_ = null;
var prepend_BANG___2 = (function (parent,child){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);return parent__$1.insertBefore(dommy.template.__GT_node_like.call(null,child),parent__$1.firstChild);
});
var prepend_BANG___3 = (function() { 
var G__11516__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__11512_11517 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__11513_11518 = null;var count__11514_11519 = 0;var i__11515_11520 = 0;while(true){
if((i__11515_11520 < count__11514_11519))
{var c_11521 = cljs.core._nth.call(null,chunk__11513_11518,i__11515_11520);prepend_BANG_.call(null,parent__$1,c_11521);
{
var G__11522 = seq__11512_11517;
var G__11523 = chunk__11513_11518;
var G__11524 = count__11514_11519;
var G__11525 = (i__11515_11520 + 1);
seq__11512_11517 = G__11522;
chunk__11513_11518 = G__11523;
count__11514_11519 = G__11524;
i__11515_11520 = G__11525;
continue;
}
} else
{var temp__4126__auto___11526 = cljs.core.seq.call(null,seq__11512_11517);if(temp__4126__auto___11526)
{var seq__11512_11527__$1 = temp__4126__auto___11526;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11512_11527__$1))
{var c__4310__auto___11528 = cljs.core.chunk_first.call(null,seq__11512_11527__$1);{
var G__11529 = cljs.core.chunk_rest.call(null,seq__11512_11527__$1);
var G__11530 = c__4310__auto___11528;
var G__11531 = cljs.core.count.call(null,c__4310__auto___11528);
var G__11532 = 0;
seq__11512_11517 = G__11529;
chunk__11513_11518 = G__11530;
count__11514_11519 = G__11531;
i__11515_11520 = G__11532;
continue;
}
} else
{var c_11533 = cljs.core.first.call(null,seq__11512_11527__$1);prepend_BANG_.call(null,parent__$1,c_11533);
{
var G__11534 = cljs.core.next.call(null,seq__11512_11527__$1);
var G__11535 = null;
var G__11536 = 0;
var G__11537 = 0;
seq__11512_11517 = G__11534;
chunk__11513_11518 = G__11535;
count__11514_11519 = G__11536;
i__11515_11520 = G__11537;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__11516 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11516__delegate.call(this,parent,child,more_children);};
G__11516.cljs$lang$maxFixedArity = 2;
G__11516.cljs$lang$applyTo = (function (arglist__11538){
var parent = cljs.core.first(arglist__11538);
arglist__11538 = cljs.core.next(arglist__11538);
var child = cljs.core.first(arglist__11538);
var more_children = cljs.core.rest(arglist__11538);
return G__11516__delegate(parent,child,more_children);
});
G__11516.cljs$core$IFn$_invoke$arity$variadic = G__11516__delegate;
return G__11516;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prepend_BANG_.cljs$lang$maxFixedArity = 2;
prepend_BANG_.cljs$lang$applyTo = prepend_BANG___3.cljs$lang$applyTo;
prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = prepend_BANG___2;
prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return prepend_BANG_;
})()
;
/**
* insert `node` before `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);if(cljs.core.truth_(other__$1.parentNode))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"other","other",-1534461751,null)))))));
}
other__$1.parentNode.insertBefore(actual_node,other__$1);
return actual_node;
});
/**
* insert `node` after `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4124__auto___11539 = other__$1.nextSibling;if(cljs.core.truth_(temp__4124__auto___11539))
{var next_11540 = temp__4124__auto___11539;parent.insertBefore(actual_node,next_11540);
} else
{parent.appendChild(actual_node);
}
return actual_node;
});
/**
* replace `elem` with `new`, both node-like, return node-like projection of new.
* node-like projection of elem must have parent.
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){var new$__$1 = dommy.template.__GT_node_like.call(null,new$);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(elem__$1.parentNode))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"elem","elem",-1637415608,null)))))));
}
elem__$1.parentNode.replaceChild(new$__$1,elem__$1);
return new$__$1;
});
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__11542 = dommy.template.__GT_node_like.call(null,parent);G__11542.innerHTML = "";
dommy.core.append_BANG_.call(null,G__11542,node_like);
return G__11542;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__11544 = elem__$1.parentNode;G__11544.removeChild(elem__$1);
return G__11544;
});
/**
* clears all children from `elem`
*/
dommy.core.clear_BANG_ = (function clear_BANG_(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML = "";
});
dommy.core.selector = (function selector(data){if(cljs.core.coll_QMARK_.call(null,data))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,selector,data));
} else
{if((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))
{return cljs.core.name.call(null,data);
} else
{return null;
}
}
});
dommy.core.selector_map = (function selector_map(template,key_selectors_map){var container = dommy.template.__GT_node_like.call(null,template);if(!(cljs.core.contains_QMARK_.call(null,key_selectors_map,new cljs.core.Keyword(null,"container","container",602947571))))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-2051487815,null),new cljs.core.Symbol(null,"key-selectors-map","key-selectors-map",19054414,null),new cljs.core.Keyword(null,"container","container",602947571))))))));
}
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (container){
return (function (p__11550){var vec__11551 = p__11550;var k = cljs.core.nth.call(null,vec__11551,0,null);var v = cljs.core.nth.call(null,vec__11551,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t11552 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t11552 = (function (v,k,vec__11551,p__11550,container,key_selectors_map,template,selector_map,meta11553){
this.v = v;
this.k = k;
this.vec__11551 = vec__11551;
this.p__11550 = p__11550;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta11553 = meta11553;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t11552.cljs$lang$type = true;
dommy.core.t11552.cljs$lang$ctorStr = "dommy.core/t11552";
dommy.core.t11552.cljs$lang$ctorPrWriter = ((function (vec__11551,k,v,container){
return (function (this__4121__auto__,writer__4122__auto__,opt__4123__auto__){return cljs.core._write.call(null,writer__4122__auto__,"dommy.core/t11552");
});})(vec__11551,k,v,container))
;
dommy.core.t11552.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (vec__11551,k,v,container){
return (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});})(vec__11551,k,v,container))
;
dommy.core.t11552.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__11551,k,v,container){
return (function (_11554){var self__ = this;
var _11554__$1 = this;return self__.meta11553;
});})(vec__11551,k,v,container))
;
dommy.core.t11552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__11551,k,v,container){
return (function (_11554,meta11553__$1){var self__ = this;
var _11554__$1 = this;return (new dommy.core.t11552(self__.v,self__.k,self__.vec__11551,self__.p__11550,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta11553__$1));
});})(vec__11551,k,v,container))
;
dommy.core.__GT_t11552 = ((function (vec__11551,k,v,container){
return (function __GT_t11552(v__$1,k__$1,vec__11551__$1,p__11550__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta11553){return (new dommy.core.t11552(v__$1,k__$1,vec__11551__$1,p__11550__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta11553));
});})(vec__11551,k,v,container))
;
}
return (new dommy.core.t11552(v,k,vec__11551,p__11550,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
});})(container))
,key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__11555_SHARP_){return p1__11555_SHARP_.parentNode;
}),dommy.template.__GT_node_like.call(null,elem)));
});
/**
* returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){return matches_pred.call(null,document,selector);
});
var matches_pred__2 = (function (base,selector){var matches = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,dommy.template.__GT_node_like.call(null,base)).querySelectorAll(dommy.core.selector.call(null,selector)));return ((function (matches){
return (function (elem){return (matches.indexOf(elem) >= 0);
});
;})(matches))
});
matches_pred = function(base,selector){
switch(arguments.length){
case 1:
return matches_pred__1.call(this,base);
case 2:
return matches_pred__2.call(this,base,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
matches_pred.cljs$core$IFn$_invoke$arity$1 = matches_pred__1;
matches_pred.cljs$core$IFn$_invoke$arity$2 = matches_pred__2;
return matches_pred;
})()
;
/**
* closest ancestor of `node` (up to `base`, if provided)
* that matches `selector`
*/
dommy.core.closest = (function() {
var closest = null;
var closest__2 = (function (elem,selector){return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,selector),dommy.core.ancestor_nodes.call(null,dommy.template.__GT_node_like.call(null,elem))));
});
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,((function (base__$1,elem__$1){
return (function (p1__11556_SHARP_){return !((p1__11556_SHARP_ === base__$1));
});})(base__$1,elem__$1))
,dommy.core.ancestor_nodes.call(null,elem__$1))));
});
closest = function(base,elem,selector){
switch(arguments.length){
case 2:
return closest__2.call(this,base,elem);
case 3:
return closest__3.call(this,base,elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
closest.cljs$core$IFn$_invoke$arity$2 = closest__2;
closest.cljs$core$IFn$_invoke$arity$3 = closest__3;
return closest;
})()
;
/**
* is `descendant` a descendant of `ancestor`?
*/
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){var descendant__$1 = dommy.template.__GT_node_like.call(null,descendant);var ancestor__$1 = dommy.template.__GT_node_like.call(null,ancestor);if(cljs.core.truth_(ancestor__$1.contains))
{return ancestor__$1.contains(descendant__$1);
} else
{if(cljs.core.truth_(ancestor__$1.compareDocumentPosition))
{return ((ancestor__$1.compareDocumentPosition(descendant__$1) & (1 << 4)) != 0);
} else
{return null;
}
}
});
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__11557){var vec__11558 = p__11557;var special_mouse_event = cljs.core.nth.call(null,vec__11558,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__11558,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__11558,special_mouse_event,real_mouse_event){
return (function (f){return ((function (vec__11558,special_mouse_event,real_mouse_event){
return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3554__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3554__auto__))
{return or__3554__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__3542__auto__ = related_target;if(cljs.core.truth_(and__3542__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__3542__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
;})(vec__11558,special_mouse_event,real_mouse_event))
});})(vec__11558,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997),new cljs.core.Keyword(null,"mouseover","mouseover",1601081963),new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780),new cljs.core.Keyword(null,"mouseout","mouseout",894298107)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__3542__auto__ = selected_target;if(cljs.core.truth_(and__3542__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",1284845038)));
} else
{return and__3542__auto__;
}
})()))
{event.selectedTarget = selected_target;
return f.call(null,event);
} else
{return null;
}
});
});
/**
* Returns a nested map of event listeners on `nodes`
*/
dommy.core.event_listeners = (function event_listeners(elem){var or__3554__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__3554__auto__))
{return or__3554__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__11559){
var elem = cljs.core.first(arglist__11559);
arglist__11559 = cljs.core.next(arglist__11559);
var f = cljs.core.first(arglist__11559);
var args = cljs.core.rest(arglist__11559);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__11560_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__11560_SHARP_));
}),cljs.core.rest).call(null,elem_sel);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dommy.template.__GT_node_like.call(null,elem_sel),null], null);
}
});
/**
* Adds `f` as a listener for events of type `event-type` on
* `elem-sel`, which must either be a DOM node, or a sequence
* whose first item is a DOM node.
* 
* In other words, the call to `listen!` can take two forms:
* 
* If `elem-sel` is a DOM node, i.e., you're doing something like:
* 
* (listen! elem :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on the `elem`.
* 
* If `elem-sel` is a sequence:
* 
* (listen! [elem :.selector.for :.some.descendants] :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on descendants of `elem` that match the selector
* 
* Also accepts any number of event-type and handler pairs for setting
* multiple listeners at once:
* 
* (listen! some-elem :click click-handler :hover hover-handler)
* @param {...*} var_args
*/
dommy.core.listen_BANG_ = (function() { 
var listen_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null))))))));
}
var vec__11584_11607 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_11608 = cljs.core.nth.call(null,vec__11584_11607,0,null);var selector_11609 = cljs.core.nth.call(null,vec__11584_11607,1,null);var seq__11585_11610 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__11592_11611 = null;var count__11593_11612 = 0;var i__11594_11613 = 0;while(true){
if((i__11594_11613 < count__11593_11612))
{var vec__11601_11614 = cljs.core._nth.call(null,chunk__11592_11611,i__11594_11613);var orig_type_11615 = cljs.core.nth.call(null,vec__11601_11614,0,null);var f_11616 = cljs.core.nth.call(null,vec__11601_11614,1,null);var seq__11595_11617 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11615,new cljs.core.PersistentArrayMap.fromArray([orig_type_11615,cljs.core.identity], true, false)));var chunk__11597_11618 = null;var count__11598_11619 = 0;var i__11599_11620 = 0;while(true){
if((i__11599_11620 < count__11598_11619))
{var vec__11602_11621 = cljs.core._nth.call(null,chunk__11597_11618,i__11599_11620);var actual_type_11622 = cljs.core.nth.call(null,vec__11602_11621,0,null);var factory_11623 = cljs.core.nth.call(null,vec__11602_11621,1,null);var canonical_f_11624 = (cljs.core.truth_(selector_11609)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11608,selector_11609):cljs.core.identity).call(null,factory_11623.call(null,f_11616));dommy.core.update_event_listeners_BANG_.call(null,elem_11608,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11609,actual_type_11622,f_11616], null),canonical_f_11624);
if(cljs.core.truth_(elem_11608.addEventListener))
{elem_11608.addEventListener(cljs.core.name.call(null,actual_type_11622),canonical_f_11624);
} else
{elem_11608.attachEvent(cljs.core.name.call(null,actual_type_11622),canonical_f_11624);
}
{
var G__11625 = seq__11595_11617;
var G__11626 = chunk__11597_11618;
var G__11627 = count__11598_11619;
var G__11628 = (i__11599_11620 + 1);
seq__11595_11617 = G__11625;
chunk__11597_11618 = G__11626;
count__11598_11619 = G__11627;
i__11599_11620 = G__11628;
continue;
}
} else
{var temp__4126__auto___11629 = cljs.core.seq.call(null,seq__11595_11617);if(temp__4126__auto___11629)
{var seq__11595_11630__$1 = temp__4126__auto___11629;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11595_11630__$1))
{var c__4310__auto___11631 = cljs.core.chunk_first.call(null,seq__11595_11630__$1);{
var G__11632 = cljs.core.chunk_rest.call(null,seq__11595_11630__$1);
var G__11633 = c__4310__auto___11631;
var G__11634 = cljs.core.count.call(null,c__4310__auto___11631);
var G__11635 = 0;
seq__11595_11617 = G__11632;
chunk__11597_11618 = G__11633;
count__11598_11619 = G__11634;
i__11599_11620 = G__11635;
continue;
}
} else
{var vec__11603_11636 = cljs.core.first.call(null,seq__11595_11630__$1);var actual_type_11637 = cljs.core.nth.call(null,vec__11603_11636,0,null);var factory_11638 = cljs.core.nth.call(null,vec__11603_11636,1,null);var canonical_f_11639 = (cljs.core.truth_(selector_11609)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11608,selector_11609):cljs.core.identity).call(null,factory_11638.call(null,f_11616));dommy.core.update_event_listeners_BANG_.call(null,elem_11608,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11609,actual_type_11637,f_11616], null),canonical_f_11639);
if(cljs.core.truth_(elem_11608.addEventListener))
{elem_11608.addEventListener(cljs.core.name.call(null,actual_type_11637),canonical_f_11639);
} else
{elem_11608.attachEvent(cljs.core.name.call(null,actual_type_11637),canonical_f_11639);
}
{
var G__11640 = cljs.core.next.call(null,seq__11595_11630__$1);
var G__11641 = null;
var G__11642 = 0;
var G__11643 = 0;
seq__11595_11617 = G__11640;
chunk__11597_11618 = G__11641;
count__11598_11619 = G__11642;
i__11599_11620 = G__11643;
continue;
}
}
} else
{}
}
break;
}
{
var G__11644 = seq__11585_11610;
var G__11645 = chunk__11592_11611;
var G__11646 = count__11593_11612;
var G__11647 = (i__11594_11613 + 1);
seq__11585_11610 = G__11644;
chunk__11592_11611 = G__11645;
count__11593_11612 = G__11646;
i__11594_11613 = G__11647;
continue;
}
} else
{var temp__4126__auto___11648 = cljs.core.seq.call(null,seq__11585_11610);if(temp__4126__auto___11648)
{var seq__11585_11649__$1 = temp__4126__auto___11648;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11585_11649__$1))
{var c__4310__auto___11650 = cljs.core.chunk_first.call(null,seq__11585_11649__$1);{
var G__11651 = cljs.core.chunk_rest.call(null,seq__11585_11649__$1);
var G__11652 = c__4310__auto___11650;
var G__11653 = cljs.core.count.call(null,c__4310__auto___11650);
var G__11654 = 0;
seq__11585_11610 = G__11651;
chunk__11592_11611 = G__11652;
count__11593_11612 = G__11653;
i__11594_11613 = G__11654;
continue;
}
} else
{var vec__11604_11655 = cljs.core.first.call(null,seq__11585_11649__$1);var orig_type_11656 = cljs.core.nth.call(null,vec__11604_11655,0,null);var f_11657 = cljs.core.nth.call(null,vec__11604_11655,1,null);var seq__11586_11658 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11656,new cljs.core.PersistentArrayMap.fromArray([orig_type_11656,cljs.core.identity], true, false)));var chunk__11588_11659 = null;var count__11589_11660 = 0;var i__11590_11661 = 0;while(true){
if((i__11590_11661 < count__11589_11660))
{var vec__11605_11662 = cljs.core._nth.call(null,chunk__11588_11659,i__11590_11661);var actual_type_11663 = cljs.core.nth.call(null,vec__11605_11662,0,null);var factory_11664 = cljs.core.nth.call(null,vec__11605_11662,1,null);var canonical_f_11665 = (cljs.core.truth_(selector_11609)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11608,selector_11609):cljs.core.identity).call(null,factory_11664.call(null,f_11657));dommy.core.update_event_listeners_BANG_.call(null,elem_11608,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11609,actual_type_11663,f_11657], null),canonical_f_11665);
if(cljs.core.truth_(elem_11608.addEventListener))
{elem_11608.addEventListener(cljs.core.name.call(null,actual_type_11663),canonical_f_11665);
} else
{elem_11608.attachEvent(cljs.core.name.call(null,actual_type_11663),canonical_f_11665);
}
{
var G__11666 = seq__11586_11658;
var G__11667 = chunk__11588_11659;
var G__11668 = count__11589_11660;
var G__11669 = (i__11590_11661 + 1);
seq__11586_11658 = G__11666;
chunk__11588_11659 = G__11667;
count__11589_11660 = G__11668;
i__11590_11661 = G__11669;
continue;
}
} else
{var temp__4126__auto___11670__$1 = cljs.core.seq.call(null,seq__11586_11658);if(temp__4126__auto___11670__$1)
{var seq__11586_11671__$1 = temp__4126__auto___11670__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11586_11671__$1))
{var c__4310__auto___11672 = cljs.core.chunk_first.call(null,seq__11586_11671__$1);{
var G__11673 = cljs.core.chunk_rest.call(null,seq__11586_11671__$1);
var G__11674 = c__4310__auto___11672;
var G__11675 = cljs.core.count.call(null,c__4310__auto___11672);
var G__11676 = 0;
seq__11586_11658 = G__11673;
chunk__11588_11659 = G__11674;
count__11589_11660 = G__11675;
i__11590_11661 = G__11676;
continue;
}
} else
{var vec__11606_11677 = cljs.core.first.call(null,seq__11586_11671__$1);var actual_type_11678 = cljs.core.nth.call(null,vec__11606_11677,0,null);var factory_11679 = cljs.core.nth.call(null,vec__11606_11677,1,null);var canonical_f_11680 = (cljs.core.truth_(selector_11609)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11608,selector_11609):cljs.core.identity).call(null,factory_11679.call(null,f_11657));dommy.core.update_event_listeners_BANG_.call(null,elem_11608,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11609,actual_type_11678,f_11657], null),canonical_f_11680);
if(cljs.core.truth_(elem_11608.addEventListener))
{elem_11608.addEventListener(cljs.core.name.call(null,actual_type_11678),canonical_f_11680);
} else
{elem_11608.attachEvent(cljs.core.name.call(null,actual_type_11678),canonical_f_11680);
}
{
var G__11681 = cljs.core.next.call(null,seq__11586_11671__$1);
var G__11682 = null;
var G__11683 = 0;
var G__11684 = 0;
seq__11586_11658 = G__11681;
chunk__11588_11659 = G__11682;
count__11589_11660 = G__11683;
i__11590_11661 = G__11684;
continue;
}
}
} else
{}
}
break;
}
{
var G__11685 = cljs.core.next.call(null,seq__11585_11649__$1);
var G__11686 = null;
var G__11687 = 0;
var G__11688 = 0;
seq__11585_11610 = G__11685;
chunk__11592_11611 = G__11686;
count__11593_11612 = G__11687;
i__11594_11613 = G__11688;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_BANG___delegate.call(this,elem_sel,type_fs);};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__11689){
var elem_sel = cljs.core.first(arglist__11689);
var type_fs = cljs.core.rest(arglist__11689);
return listen_BANG___delegate(elem_sel,type_fs);
});
listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_BANG___delegate;
return listen_BANG_;
})()
;
/**
* Removes event listener for the element defined in `elem-sel`,
* which is the same format as listen!.
* 
* The following forms are allowed, and will remove all handlers
* that match the parameters passed in:
* 
* (unlisten! [elem :.selector] :click event-listener)
* 
* (unlisten! [elem :.selector]
* :click event-listener
* :mouseover other-event-listener)
* @param {...*} var_args
*/
dommy.core.unlisten_BANG_ = (function() { 
var unlisten_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null))))))));
}
var vec__11713_11736 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_11737 = cljs.core.nth.call(null,vec__11713_11736,0,null);var selector_11738 = cljs.core.nth.call(null,vec__11713_11736,1,null);var seq__11714_11739 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__11721_11740 = null;var count__11722_11741 = 0;var i__11723_11742 = 0;while(true){
if((i__11723_11742 < count__11722_11741))
{var vec__11730_11743 = cljs.core._nth.call(null,chunk__11721_11740,i__11723_11742);var orig_type_11744 = cljs.core.nth.call(null,vec__11730_11743,0,null);var f_11745 = cljs.core.nth.call(null,vec__11730_11743,1,null);var seq__11724_11746 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11744,new cljs.core.PersistentArrayMap.fromArray([orig_type_11744,cljs.core.identity], true, false)));var chunk__11726_11747 = null;var count__11727_11748 = 0;var i__11728_11749 = 0;while(true){
if((i__11728_11749 < count__11727_11748))
{var vec__11731_11750 = cljs.core._nth.call(null,chunk__11726_11747,i__11728_11749);var actual_type_11751 = cljs.core.nth.call(null,vec__11731_11750,0,null);var __11752 = cljs.core.nth.call(null,vec__11731_11750,1,null);var keys_11753 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11738,actual_type_11751,f_11745], null);var canonical_f_11754 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11737),keys_11753);dommy.core.update_event_listeners_BANG_.call(null,elem_11737,dommy.utils.dissoc_in,keys_11753);
if(cljs.core.truth_(elem_11737.removeEventListener))
{elem_11737.removeEventListener(cljs.core.name.call(null,actual_type_11751),canonical_f_11754);
} else
{elem_11737.detachEvent(cljs.core.name.call(null,actual_type_11751),canonical_f_11754);
}
{
var G__11755 = seq__11724_11746;
var G__11756 = chunk__11726_11747;
var G__11757 = count__11727_11748;
var G__11758 = (i__11728_11749 + 1);
seq__11724_11746 = G__11755;
chunk__11726_11747 = G__11756;
count__11727_11748 = G__11757;
i__11728_11749 = G__11758;
continue;
}
} else
{var temp__4126__auto___11759 = cljs.core.seq.call(null,seq__11724_11746);if(temp__4126__auto___11759)
{var seq__11724_11760__$1 = temp__4126__auto___11759;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11724_11760__$1))
{var c__4310__auto___11761 = cljs.core.chunk_first.call(null,seq__11724_11760__$1);{
var G__11762 = cljs.core.chunk_rest.call(null,seq__11724_11760__$1);
var G__11763 = c__4310__auto___11761;
var G__11764 = cljs.core.count.call(null,c__4310__auto___11761);
var G__11765 = 0;
seq__11724_11746 = G__11762;
chunk__11726_11747 = G__11763;
count__11727_11748 = G__11764;
i__11728_11749 = G__11765;
continue;
}
} else
{var vec__11732_11766 = cljs.core.first.call(null,seq__11724_11760__$1);var actual_type_11767 = cljs.core.nth.call(null,vec__11732_11766,0,null);var __11768 = cljs.core.nth.call(null,vec__11732_11766,1,null);var keys_11769 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11738,actual_type_11767,f_11745], null);var canonical_f_11770 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11737),keys_11769);dommy.core.update_event_listeners_BANG_.call(null,elem_11737,dommy.utils.dissoc_in,keys_11769);
if(cljs.core.truth_(elem_11737.removeEventListener))
{elem_11737.removeEventListener(cljs.core.name.call(null,actual_type_11767),canonical_f_11770);
} else
{elem_11737.detachEvent(cljs.core.name.call(null,actual_type_11767),canonical_f_11770);
}
{
var G__11771 = cljs.core.next.call(null,seq__11724_11760__$1);
var G__11772 = null;
var G__11773 = 0;
var G__11774 = 0;
seq__11724_11746 = G__11771;
chunk__11726_11747 = G__11772;
count__11727_11748 = G__11773;
i__11728_11749 = G__11774;
continue;
}
}
} else
{}
}
break;
}
{
var G__11775 = seq__11714_11739;
var G__11776 = chunk__11721_11740;
var G__11777 = count__11722_11741;
var G__11778 = (i__11723_11742 + 1);
seq__11714_11739 = G__11775;
chunk__11721_11740 = G__11776;
count__11722_11741 = G__11777;
i__11723_11742 = G__11778;
continue;
}
} else
{var temp__4126__auto___11779 = cljs.core.seq.call(null,seq__11714_11739);if(temp__4126__auto___11779)
{var seq__11714_11780__$1 = temp__4126__auto___11779;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11714_11780__$1))
{var c__4310__auto___11781 = cljs.core.chunk_first.call(null,seq__11714_11780__$1);{
var G__11782 = cljs.core.chunk_rest.call(null,seq__11714_11780__$1);
var G__11783 = c__4310__auto___11781;
var G__11784 = cljs.core.count.call(null,c__4310__auto___11781);
var G__11785 = 0;
seq__11714_11739 = G__11782;
chunk__11721_11740 = G__11783;
count__11722_11741 = G__11784;
i__11723_11742 = G__11785;
continue;
}
} else
{var vec__11733_11786 = cljs.core.first.call(null,seq__11714_11780__$1);var orig_type_11787 = cljs.core.nth.call(null,vec__11733_11786,0,null);var f_11788 = cljs.core.nth.call(null,vec__11733_11786,1,null);var seq__11715_11789 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11787,new cljs.core.PersistentArrayMap.fromArray([orig_type_11787,cljs.core.identity], true, false)));var chunk__11717_11790 = null;var count__11718_11791 = 0;var i__11719_11792 = 0;while(true){
if((i__11719_11792 < count__11718_11791))
{var vec__11734_11793 = cljs.core._nth.call(null,chunk__11717_11790,i__11719_11792);var actual_type_11794 = cljs.core.nth.call(null,vec__11734_11793,0,null);var __11795 = cljs.core.nth.call(null,vec__11734_11793,1,null);var keys_11796 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11738,actual_type_11794,f_11788], null);var canonical_f_11797 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11737),keys_11796);dommy.core.update_event_listeners_BANG_.call(null,elem_11737,dommy.utils.dissoc_in,keys_11796);
if(cljs.core.truth_(elem_11737.removeEventListener))
{elem_11737.removeEventListener(cljs.core.name.call(null,actual_type_11794),canonical_f_11797);
} else
{elem_11737.detachEvent(cljs.core.name.call(null,actual_type_11794),canonical_f_11797);
}
{
var G__11798 = seq__11715_11789;
var G__11799 = chunk__11717_11790;
var G__11800 = count__11718_11791;
var G__11801 = (i__11719_11792 + 1);
seq__11715_11789 = G__11798;
chunk__11717_11790 = G__11799;
count__11718_11791 = G__11800;
i__11719_11792 = G__11801;
continue;
}
} else
{var temp__4126__auto___11802__$1 = cljs.core.seq.call(null,seq__11715_11789);if(temp__4126__auto___11802__$1)
{var seq__11715_11803__$1 = temp__4126__auto___11802__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11715_11803__$1))
{var c__4310__auto___11804 = cljs.core.chunk_first.call(null,seq__11715_11803__$1);{
var G__11805 = cljs.core.chunk_rest.call(null,seq__11715_11803__$1);
var G__11806 = c__4310__auto___11804;
var G__11807 = cljs.core.count.call(null,c__4310__auto___11804);
var G__11808 = 0;
seq__11715_11789 = G__11805;
chunk__11717_11790 = G__11806;
count__11718_11791 = G__11807;
i__11719_11792 = G__11808;
continue;
}
} else
{var vec__11735_11809 = cljs.core.first.call(null,seq__11715_11803__$1);var actual_type_11810 = cljs.core.nth.call(null,vec__11735_11809,0,null);var __11811 = cljs.core.nth.call(null,vec__11735_11809,1,null);var keys_11812 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11738,actual_type_11810,f_11788], null);var canonical_f_11813 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11737),keys_11812);dommy.core.update_event_listeners_BANG_.call(null,elem_11737,dommy.utils.dissoc_in,keys_11812);
if(cljs.core.truth_(elem_11737.removeEventListener))
{elem_11737.removeEventListener(cljs.core.name.call(null,actual_type_11810),canonical_f_11813);
} else
{elem_11737.detachEvent(cljs.core.name.call(null,actual_type_11810),canonical_f_11813);
}
{
var G__11814 = cljs.core.next.call(null,seq__11715_11803__$1);
var G__11815 = null;
var G__11816 = 0;
var G__11817 = 0;
seq__11715_11789 = G__11814;
chunk__11717_11790 = G__11815;
count__11718_11791 = G__11816;
i__11719_11792 = G__11817;
continue;
}
}
} else
{}
}
break;
}
{
var G__11818 = cljs.core.next.call(null,seq__11714_11780__$1);
var G__11819 = null;
var G__11820 = 0;
var G__11821 = 0;
seq__11714_11739 = G__11818;
chunk__11721_11740 = G__11819;
count__11722_11741 = G__11820;
i__11723_11742 = G__11821;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__11822){
var elem_sel = cljs.core.first(arglist__11822);
var type_fs = cljs.core.rest(arglist__11822);
return unlisten_BANG___delegate(elem_sel,type_fs);
});
unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = unlisten_BANG___delegate;
return unlisten_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.core.listen_once_BANG_ = (function() { 
var listen_once_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null))))))));
}
var vec__11830_11837 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_11838 = cljs.core.nth.call(null,vec__11830_11837,0,null);var selector_11839 = cljs.core.nth.call(null,vec__11830_11837,1,null);var seq__11831_11840 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__11832_11841 = null;var count__11833_11842 = 0;var i__11834_11843 = 0;while(true){
if((i__11834_11843 < count__11833_11842))
{var vec__11835_11844 = cljs.core._nth.call(null,chunk__11832_11841,i__11834_11843);var type_11845 = cljs.core.nth.call(null,vec__11835_11844,0,null);var f_11846 = cljs.core.nth.call(null,vec__11835_11844,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_11845,((function (seq__11831_11840,chunk__11832_11841,count__11833_11842,i__11834_11843,vec__11835_11844,type_11845,f_11846,vec__11830_11837,elem_11838,selector_11839){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_11845,this_fn);
return f_11846.call(null,e);
});})(seq__11831_11840,chunk__11832_11841,count__11833_11842,i__11834_11843,vec__11835_11844,type_11845,f_11846,vec__11830_11837,elem_11838,selector_11839))
);
{
var G__11847 = seq__11831_11840;
var G__11848 = chunk__11832_11841;
var G__11849 = count__11833_11842;
var G__11850 = (i__11834_11843 + 1);
seq__11831_11840 = G__11847;
chunk__11832_11841 = G__11848;
count__11833_11842 = G__11849;
i__11834_11843 = G__11850;
continue;
}
} else
{var temp__4126__auto___11851 = cljs.core.seq.call(null,seq__11831_11840);if(temp__4126__auto___11851)
{var seq__11831_11852__$1 = temp__4126__auto___11851;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11831_11852__$1))
{var c__4310__auto___11853 = cljs.core.chunk_first.call(null,seq__11831_11852__$1);{
var G__11854 = cljs.core.chunk_rest.call(null,seq__11831_11852__$1);
var G__11855 = c__4310__auto___11853;
var G__11856 = cljs.core.count.call(null,c__4310__auto___11853);
var G__11857 = 0;
seq__11831_11840 = G__11854;
chunk__11832_11841 = G__11855;
count__11833_11842 = G__11856;
i__11834_11843 = G__11857;
continue;
}
} else
{var vec__11836_11858 = cljs.core.first.call(null,seq__11831_11852__$1);var type_11859 = cljs.core.nth.call(null,vec__11836_11858,0,null);var f_11860 = cljs.core.nth.call(null,vec__11836_11858,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_11859,((function (seq__11831_11840,chunk__11832_11841,count__11833_11842,i__11834_11843,vec__11836_11858,type_11859,f_11860,seq__11831_11852__$1,temp__4126__auto___11851,vec__11830_11837,elem_11838,selector_11839){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_11859,this_fn);
return f_11860.call(null,e);
});})(seq__11831_11840,chunk__11832_11841,count__11833_11842,i__11834_11843,vec__11836_11858,type_11859,f_11860,seq__11831_11852__$1,temp__4126__auto___11851,vec__11830_11837,elem_11838,selector_11839))
);
{
var G__11861 = cljs.core.next.call(null,seq__11831_11852__$1);
var G__11862 = null;
var G__11863 = 0;
var G__11864 = 0;
seq__11831_11840 = G__11861;
chunk__11832_11841 = G__11862;
count__11833_11842 = G__11863;
i__11834_11843 = G__11864;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__11865){
var elem_sel = cljs.core.first(arglist__11865);
var type_fs = cljs.core.rest(arglist__11865);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;
/**
* NOTE: ONLY TO BE USED FOR TESTS. May not work at mocking many
* event types or their bubbling behaviours
* 
* Creates an event of type `event-type`, optionally having
* `update-event!` mutate and return an updated event object,
* and fires it on `node`.
* Only works when `node` is in the DOM
* @param {...*} var_args
*/
dommy.core.fire_BANG_ = (function() { 
var fire_BANG___delegate = function (node,event_type,p__11866){var vec__11868 = p__11866;var update_event_BANG_ = cljs.core.nth.call(null,vec__11868,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null)))))));
}
var update_event_BANG___$1 = (function (){var or__3554__auto__ = update_event_BANG_;if(cljs.core.truth_(or__3554__auto__))
{return or__3554__auto__;
} else
{return cljs.core.identity;
}
})();if(cljs.core.truth_(document.createEvent))
{var event = document.createEvent("Event");event.initEvent(cljs.core.name.call(null,event_type),true,true);
return node.dispatchEvent(update_event_BANG___$1.call(null,event));
} else
{return node.fireEvent(("on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,event_type))),update_event_BANG___$1.call(null,document.createEventObject()));
}
};
var fire_BANG_ = function (node,event_type,var_args){
var p__11866 = null;if (arguments.length > 2) {
  p__11866 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__11866);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__11869){
var node = cljs.core.first(arglist__11869);
arglist__11869 = cljs.core.next(arglist__11869);
var event_type = cljs.core.first(arglist__11869);
var p__11866 = cljs.core.rest(arglist__11869);
return fire_BANG___delegate(node,event_type,p__11866);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map