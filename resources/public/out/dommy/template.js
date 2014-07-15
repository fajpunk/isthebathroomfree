// Compiled by ClojureScript 0.0-2234
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj12155 = {};return obj12155;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__3542__auto__ = this$;if(and__3542__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__3542__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__4181__auto__ = (((this$ == null))?null:this$);return (function (){var or__3554__auto__ = (dommy.template._elem[goog.typeOf(x__4181__auto__)]);if(or__3554__auto__)
{return or__3554__auto__;
} else
{var or__3554__auto____$1 = (dommy.template._elem["_"]);if(or__3554__auto____$1)
{return or__3554__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PElement.-elem",this$);
}
}
})().call(null,this$);
}
});
/**
* index of css character (#,.) in base-element. bottleneck
*/
dommy.template.next_css_index = (function next_css_index(s,start_idx){var id_idx = s.indexOf("#",start_idx);var class_idx = s.indexOf(".",start_idx);var idx = Math.min(id_idx,class_idx);if((idx < 0))
{return Math.max(id_idx,class_idx);
} else
{return idx;
}
});
/**
* dom element from css-style keyword like :a.class1 or :span#my-span.class
*/
dommy.template.base_element = (function base_element(node_key){var node_str = cljs.core.name.call(null,node_key);var base_idx = dommy.template.next_css_index.call(null,node_str,0);var tag = (((base_idx > 0))?node_str.substring(0,base_idx):(((base_idx === 0))?"div":((new cljs.core.Keyword(null,"else","else",1017020587))?node_str:null)));var node = (cljs.core.truth_(dommy.template._PLUS_svg_tags_PLUS_.call(null,tag))?document.createElementNS(dommy.template._PLUS_svg_ns_PLUS_,tag):document.createElement(tag));if((base_idx >= 0))
{var str_12158 = node_str.substring(base_idx);while(true){
var next_idx_12159 = dommy.template.next_css_index.call(null,str_12158,1);var frag_12160 = (((next_idx_12159 >= 0))?str_12158.substring(0,next_idx_12159):str_12158);var G__12157_12161 = frag_12160.charAt(0);if(cljs.core._EQ_.call(null,"#",G__12157_12161))
{node.setAttribute("id",frag_12160.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__12157_12161))
{dommy.attrs.add_class_BANG_.call(null,node,frag_12160.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frag_12160.charAt(0)))));
} else
{}
}
}
if((next_idx_12159 >= 0))
{{
var G__12162 = str_12158.substring(next_idx_12159);
str_12158 = G__12162;
continue;
}
} else
{}
break;
}
} else
{}
return node;
});
dommy.template.throw_unable_to_make_node = (function throw_unable_to_make_node(node_data){throw ("Don't know how to make node from: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,node_data)));
});
/**
* take data and return a document fragment
*/
dommy.template.__GT_document_fragment = (function() {
var __GT_document_fragment = null;
var __GT_document_fragment__1 = (function (data){return __GT_document_fragment.call(null,document.createDocumentFragment(),data);
});
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__12168 = data;if(G__12168)
{var bit__4204__auto__ = null;if(cljs.core.truth_((function (){var or__3554__auto__ = bit__4204__auto__;if(cljs.core.truth_(or__3554__auto__))
{return or__3554__auto__;
} else
{return G__12168.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__12168.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12168);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12168);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__12169_12173 = cljs.core.seq.call(null,data);var chunk__12170_12174 = null;var count__12171_12175 = 0;var i__12172_12176 = 0;while(true){
if((i__12172_12176 < count__12171_12175))
{var child_12177 = cljs.core._nth.call(null,chunk__12170_12174,i__12172_12176);__GT_document_fragment.call(null,result_frag,child_12177);
{
var G__12178 = seq__12169_12173;
var G__12179 = chunk__12170_12174;
var G__12180 = count__12171_12175;
var G__12181 = (i__12172_12176 + 1);
seq__12169_12173 = G__12178;
chunk__12170_12174 = G__12179;
count__12171_12175 = G__12180;
i__12172_12176 = G__12181;
continue;
}
} else
{var temp__4126__auto___12182 = cljs.core.seq.call(null,seq__12169_12173);if(temp__4126__auto___12182)
{var seq__12169_12183__$1 = temp__4126__auto___12182;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12169_12183__$1))
{var c__4310__auto___12184 = cljs.core.chunk_first.call(null,seq__12169_12183__$1);{
var G__12185 = cljs.core.chunk_rest.call(null,seq__12169_12183__$1);
var G__12186 = c__4310__auto___12184;
var G__12187 = cljs.core.count.call(null,c__4310__auto___12184);
var G__12188 = 0;
seq__12169_12173 = G__12185;
chunk__12170_12174 = G__12186;
count__12171_12175 = G__12187;
i__12172_12176 = G__12188;
continue;
}
} else
{var child_12189 = cljs.core.first.call(null,seq__12169_12183__$1);__GT_document_fragment.call(null,result_frag,child_12189);
{
var G__12190 = cljs.core.next.call(null,seq__12169_12183__$1);
var G__12191 = null;
var G__12192 = 0;
var G__12193 = 0;
seq__12169_12173 = G__12190;
chunk__12170_12174 = G__12191;
count__12171_12175 = G__12192;
i__12172_12176 = G__12193;
continue;
}
}
} else
{}
}
break;
}
return result_frag;
} else
{if((data == null))
{return result_frag;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return dommy.template.throw_unable_to_make_node.call(null,data);
} else
{return null;
}
}
}
}
});
__GT_document_fragment = function(result_frag,data){
switch(arguments.length){
case 1:
return __GT_document_fragment__1.call(this,result_frag);
case 2:
return __GT_document_fragment__2.call(this,result_frag,data);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_document_fragment.cljs$core$IFn$_invoke$arity$1 = __GT_document_fragment__1;
__GT_document_fragment.cljs$core$IFn$_invoke$arity$2 = __GT_document_fragment__2;
return __GT_document_fragment;
})()
;
/**
* take data and return DOM node if it satisfies PElement and tries to
* make a document fragment otherwise
*/
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__12195 = data;if(G__12195)
{var bit__4204__auto__ = null;if(cljs.core.truth_((function (){var or__3554__auto__ = bit__4204__auto__;if(cljs.core.truth_(or__3554__auto__))
{return or__3554__auto__;
} else
{return G__12195.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__12195.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12195);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12195);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.__GT_document_fragment.call(null,data);
}
});
/**
* element with either attrs or nested children [:div [:span "Hello"]]
*/
dommy.template.compound_element = (function compound_element(p__12196){var vec__12216 = p__12196;var tag_name = cljs.core.nth.call(null,vec__12216,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__12216,1,null);var children = cljs.core.nthnext.call(null,vec__12216,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__12218 = maybe_attrs;if(G__12218)
{var bit__4204__auto__ = null;if(cljs.core.truth_((function (){var or__3554__auto__ = bit__4204__auto__;if(cljs.core.truth_(or__3554__auto__))
{return or__3554__auto__;
} else
{return G__12218.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__12218.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12218);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12218);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__12219_12235 = cljs.core.seq.call(null,attrs);var chunk__12220_12236 = null;var count__12221_12237 = 0;var i__12222_12238 = 0;while(true){
if((i__12222_12238 < count__12221_12237))
{var vec__12223_12239 = cljs.core._nth.call(null,chunk__12220_12236,i__12222_12238);var k_12240 = cljs.core.nth.call(null,vec__12223_12239,0,null);var v_12241 = cljs.core.nth.call(null,vec__12223_12239,1,null);var G__12224_12242 = (((k_12240 instanceof cljs.core.Keyword))?k_12240.fqn:null);switch (G__12224_12242) {
case "classes":
var seq__12225_12244 = cljs.core.seq.call(null,v_12241);var chunk__12226_12245 = null;var count__12227_12246 = 0;var i__12228_12247 = 0;while(true){
if((i__12228_12247 < count__12227_12246))
{var c_12248 = cljs.core._nth.call(null,chunk__12226_12245,i__12228_12247);dommy.attrs.add_class_BANG_.call(null,n,c_12248);
{
var G__12249 = seq__12225_12244;
var G__12250 = chunk__12226_12245;
var G__12251 = count__12227_12246;
var G__12252 = (i__12228_12247 + 1);
seq__12225_12244 = G__12249;
chunk__12226_12245 = G__12250;
count__12227_12246 = G__12251;
i__12228_12247 = G__12252;
continue;
}
} else
{var temp__4126__auto___12253 = cljs.core.seq.call(null,seq__12225_12244);if(temp__4126__auto___12253)
{var seq__12225_12254__$1 = temp__4126__auto___12253;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12225_12254__$1))
{var c__4310__auto___12255 = cljs.core.chunk_first.call(null,seq__12225_12254__$1);{
var G__12256 = cljs.core.chunk_rest.call(null,seq__12225_12254__$1);
var G__12257 = c__4310__auto___12255;
var G__12258 = cljs.core.count.call(null,c__4310__auto___12255);
var G__12259 = 0;
seq__12225_12244 = G__12256;
chunk__12226_12245 = G__12257;
count__12227_12246 = G__12258;
i__12228_12247 = G__12259;
continue;
}
} else
{var c_12260 = cljs.core.first.call(null,seq__12225_12254__$1);dommy.attrs.add_class_BANG_.call(null,n,c_12260);
{
var G__12261 = cljs.core.next.call(null,seq__12225_12254__$1);
var G__12262 = null;
var G__12263 = 0;
var G__12264 = 0;
seq__12225_12244 = G__12261;
chunk__12226_12245 = G__12262;
count__12227_12246 = G__12263;
i__12228_12247 = G__12264;
continue;
}
}
} else
{}
}
break;
}

break;
case "class":
dommy.attrs.add_class_BANG_.call(null,n,v_12241);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_12240,v_12241);

}
{
var G__12265 = seq__12219_12235;
var G__12266 = chunk__12220_12236;
var G__12267 = count__12221_12237;
var G__12268 = (i__12222_12238 + 1);
seq__12219_12235 = G__12265;
chunk__12220_12236 = G__12266;
count__12221_12237 = G__12267;
i__12222_12238 = G__12268;
continue;
}
} else
{var temp__4126__auto___12269 = cljs.core.seq.call(null,seq__12219_12235);if(temp__4126__auto___12269)
{var seq__12219_12270__$1 = temp__4126__auto___12269;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12219_12270__$1))
{var c__4310__auto___12271 = cljs.core.chunk_first.call(null,seq__12219_12270__$1);{
var G__12272 = cljs.core.chunk_rest.call(null,seq__12219_12270__$1);
var G__12273 = c__4310__auto___12271;
var G__12274 = cljs.core.count.call(null,c__4310__auto___12271);
var G__12275 = 0;
seq__12219_12235 = G__12272;
chunk__12220_12236 = G__12273;
count__12221_12237 = G__12274;
i__12222_12238 = G__12275;
continue;
}
} else
{var vec__12229_12276 = cljs.core.first.call(null,seq__12219_12270__$1);var k_12277 = cljs.core.nth.call(null,vec__12229_12276,0,null);var v_12278 = cljs.core.nth.call(null,vec__12229_12276,1,null);var G__12230_12279 = (((k_12277 instanceof cljs.core.Keyword))?k_12277.fqn:null);switch (G__12230_12279) {
case "classes":
var seq__12231_12281 = cljs.core.seq.call(null,v_12278);var chunk__12232_12282 = null;var count__12233_12283 = 0;var i__12234_12284 = 0;while(true){
if((i__12234_12284 < count__12233_12283))
{var c_12285 = cljs.core._nth.call(null,chunk__12232_12282,i__12234_12284);dommy.attrs.add_class_BANG_.call(null,n,c_12285);
{
var G__12286 = seq__12231_12281;
var G__12287 = chunk__12232_12282;
var G__12288 = count__12233_12283;
var G__12289 = (i__12234_12284 + 1);
seq__12231_12281 = G__12286;
chunk__12232_12282 = G__12287;
count__12233_12283 = G__12288;
i__12234_12284 = G__12289;
continue;
}
} else
{var temp__4126__auto___12290__$1 = cljs.core.seq.call(null,seq__12231_12281);if(temp__4126__auto___12290__$1)
{var seq__12231_12291__$1 = temp__4126__auto___12290__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12231_12291__$1))
{var c__4310__auto___12292 = cljs.core.chunk_first.call(null,seq__12231_12291__$1);{
var G__12293 = cljs.core.chunk_rest.call(null,seq__12231_12291__$1);
var G__12294 = c__4310__auto___12292;
var G__12295 = cljs.core.count.call(null,c__4310__auto___12292);
var G__12296 = 0;
seq__12231_12281 = G__12293;
chunk__12232_12282 = G__12294;
count__12233_12283 = G__12295;
i__12234_12284 = G__12296;
continue;
}
} else
{var c_12297 = cljs.core.first.call(null,seq__12231_12291__$1);dommy.attrs.add_class_BANG_.call(null,n,c_12297);
{
var G__12298 = cljs.core.next.call(null,seq__12231_12291__$1);
var G__12299 = null;
var G__12300 = 0;
var G__12301 = 0;
seq__12231_12281 = G__12298;
chunk__12232_12282 = G__12299;
count__12233_12283 = G__12300;
i__12234_12284 = G__12301;
continue;
}
}
} else
{}
}
break;
}

break;
case "class":
dommy.attrs.add_class_BANG_.call(null,n,v_12278);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_12277,v_12278);

}
{
var G__12302 = cljs.core.next.call(null,seq__12219_12270__$1);
var G__12303 = null;
var G__12304 = 0;
var G__12305 = 0;
seq__12219_12235 = G__12302;
chunk__12220_12236 = G__12303;
count__12221_12237 = G__12304;
i__12222_12238 = G__12305;
continue;
}
}
} else
{}
}
break;
}
n.appendChild(dommy.template.__GT_node_like.call(null,children__$1));
return n;
});
(dommy.template.PElement["string"] = true);
(dommy.template._elem["string"] = (function (this$){if((this$ instanceof cljs.core.Keyword))
{return dommy.template.base_element.call(null,this$);
} else
{return document.createTextNode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)));
}
}));
(dommy.template.PElement["number"] = true);
(dommy.template._elem["number"] = (function (this$){return document.createTextNode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)));
}));
cljs.core.PersistentVector.prototype.dommy$template$PElement$ = true;
cljs.core.PersistentVector.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return dommy.template.compound_element.call(null,this$__$1);
});
SVGElement.prototype.dommy$template$PElement$ = true;
SVGElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Document.prototype.dommy$template$PElement$ = true;
Document.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Text.prototype.dommy$template$PElement$ = true;
Text.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
DocumentFragment.prototype.dommy$template$PElement$ = true;
DocumentFragment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
HTMLElement.prototype.dommy$template$PElement$ = true;
HTMLElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
try{Window.prototype.dommy$template$PElement$ = true;
Window.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
}catch (e12306){if((e12306 instanceof ReferenceError))
{var __12307 = e12306;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12306;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__12309 = data;if(G__12309)
{var bit__4204__auto__ = null;if(cljs.core.truth_((function (){var or__3554__auto__ = bit__4204__auto__;if(cljs.core.truth_(or__3554__auto__))
{return or__3554__auto__;
} else
{return G__12309.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__12309.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12309);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__12309);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.throw_unable_to_make_node.call(null,data);
}
});
dommy.template.html__GT_nodes = (function html__GT_nodes(html){var parent = document.createElement("div");parent.insertAdjacentHTML("beforeend",html);
return cljs.core.seq.call(null,Array.prototype.slice.call(parent.childNodes));
});

//# sourceMappingURL=template.js.map