// Compiled by ClojureScript 0.0-2234
goog.provide('taoensso.encore');
goog.require('cljs.core');
goog.require('goog.net.XhrIoPool');
goog.require('goog.events');
goog.require('goog.net.XhrIo');
goog.require('goog.Uri.QueryData');
goog.require('goog.string');
goog.require('goog.Uri.QueryData');
goog.require('goog.net.XhrIoPool');
goog.require('goog.string.StringBuffer');
goog.require('goog.net.EventType');
goog.require('goog.structs');
goog.require('goog.string.format');
goog.require('goog.structs');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.string');
goog.require('cljs.reader');
goog.require('goog.events');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
/**
* Stolen from `clojure.tools.macro`.
* Handles optional docstrings & attr maps for a macro def's name.
*/
taoensso.encore.name_with_attrs = (function name_with_attrs(name,macro_args){var vec__13889 = ((typeof cljs.core.first.call(null,macro_args) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,macro_args),cljs.core.next.call(null,macro_args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,macro_args], null));var docstring = cljs.core.nth.call(null,vec__13889,0,null);var macro_args__$1 = cljs.core.nth.call(null,vec__13889,1,null);var vec__13890 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,macro_args__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,macro_args__$1),cljs.core.next.call(null,macro_args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,macro_args__$1], null));var attr = cljs.core.nth.call(null,vec__13890,0,null);var macro_args__$2 = cljs.core.nth.call(null,vec__13890,1,null);var attr__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"doc","doc",1014003882),docstring):attr);var attr__$2 = (cljs.core.truth_(cljs.core.meta.call(null,name))?cljs.core.conj.call(null,cljs.core.meta.call(null,name),attr__$1):attr__$1);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta.call(null,name,attr__$2),macro_args__$2], null);
});
taoensso.encore.nnil_QMARK_ = cljs.core.complement.call(null,cljs.core.nil_QMARK_);
taoensso.encore.nblank_QMARK_ = cljs.core.complement.call(null,clojure.string.blank_QMARK_);
taoensso.encore.nblank_str_QMARK_ = (function nblank_str_QMARK_(x){var and__3542__auto__ = typeof x === 'string';if(and__3542__auto__)
{return taoensso.encore.nblank_QMARK_.call(null,x);
} else
{return and__3542__auto__;
}
});
/**
* Is `x` a vector of size `n`?
*/
taoensso.encore.nvec_QMARK_ = (function nvec_QMARK_(n,x){return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),n));
});
taoensso.encore.first_nth = (function() {
var first_nth = null;
var first_nth__1 = (function (coll){return cljs.core.nth.call(null,coll,0);
});
var first_nth__2 = (function (coll,not_found){return cljs.core.nth.call(null,coll,0,not_found);
});
first_nth = function(coll,not_found){
switch(arguments.length){
case 1:
return first_nth__1.call(this,coll);
case 2:
return first_nth__2.call(this,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
first_nth.cljs$core$IFn$_invoke$arity$1 = first_nth__1;
first_nth.cljs$core$IFn$_invoke$arity$2 = first_nth__2;
return first_nth;
})()
;
/**
* Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
* @param {...*} var_args
*/
taoensso.encore.format = (function() { 
var format__delegate = function (fmt,args){return cljs.core.apply.call(null,goog.string.format,fmt,args);
};
var format = function (fmt,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return format__delegate.call(this,fmt,args);};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__13891){
var fmt = cljs.core.first(arglist__13891);
var args = cljs.core.rest(arglist__13891);
return format__delegate(fmt,args);
});
format.cljs$core$IFn$_invoke$arity$variadic = format__delegate;
return format;
})()
;
/**
* Returns x as a unambiguous Boolean, or nil on failure. Requires more
* explicit truthiness than (boolean x).
*/
taoensso.encore.parse_bool = (function parse_bool(x){if(cljs.core.truth_(x))
{if((x === true) || (x === false))
{return x;
} else
{if((cljs.core._EQ_.call(null,x,"false")) || (cljs.core._EQ_.call(null,x,"FALSE")) || (cljs.core._EQ_.call(null,x,"0")) || (cljs.core._EQ_.call(null,x,0)))
{return false;
} else
{if((cljs.core._EQ_.call(null,x,"true")) || (cljs.core._EQ_.call(null,x,"TRUE")) || (cljs.core._EQ_.call(null,x,"1")) || (cljs.core._EQ_.call(null,x,1)))
{return true;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
}
} else
{return null;
}
});
taoensso.encore.as_bool = (function as_bool(x){if(cljs.core.truth_(x))
{var p = taoensso.encore.parse_bool.call(null,x);if(!((p == null)))
{return p;
} else
{throw cljs.core.ex_info.call(null,taoensso.encore.format.call(null,"as-bool failed: %s",x),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),cljs.core.type.call(null,x)], null));
}
} else
{return null;
}
});
/**
* Returns x as Long (or JavaScript integer), or nil on failure.
*/
taoensso.encore.parse_int = (function parse_int(x){if(cljs.core.truth_(x))
{if(typeof x === 'number')
{return cljs.core.long$.call(null,x);
} else
{if(typeof x === 'string')
{var x__$1 = parseInt(x);if(cljs.core.truth_(isNaN(x__$1)))
{return null;
} else
{return x__$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
} else
{return null;
}
});
taoensso.encore.as_int = (function as_int(x){if(cljs.core.truth_(x))
{var or__3554__auto__ = taoensso.encore.parse_int.call(null,x);if(cljs.core.truth_(or__3554__auto__))
{return or__3554__auto__;
} else
{throw cljs.core.ex_info.call(null,taoensso.encore.format.call(null,"as-int failed: %s",x),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),cljs.core.type.call(null,x)], null));
}
} else
{return null;
}
});
/**
* Returns x as Double (or JavaScript float), or nil on failure.
*/
taoensso.encore.parse_float = (function parse_float(x){if(cljs.core.truth_(x))
{if(typeof x === 'number')
{return x;
} else
{if(typeof x === 'string')
{var x__$1 = parseFloat(x);if(cljs.core.truth_(isNan(x__$1)))
{return null;
} else
{return x__$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
} else
{return null;
}
});
taoensso.encore.as_float = (function as_float(x){var or__3554__auto__ = taoensso.encore.parse_float.call(null,x);if(cljs.core.truth_(or__3554__auto__))
{return or__3554__auto__;
} else
{throw cljs.core.ex_info.call(null,taoensso.encore.format.call(null,"as-float failed: %s",x),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),cljs.core.type.call(null,x)], null));
}
});
taoensso.encore.stringy_QMARK_ = (function stringy_QMARK_(x){return ((x instanceof cljs.core.Keyword)) || (typeof x === 'string');
});
/**
* Like `name` but includes namespace in string when present.
*/
taoensso.encore.fq_name = (function fq_name(x){if(typeof x === 'string')
{return x;
} else
{var n = cljs.core.name.call(null,x);var temp__4124__auto__ = cljs.core.namespace.call(null,x);if(cljs.core.truth_(temp__4124__auto__))
{var ns = temp__4124__auto__;return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
} else
{return n;
}
}
});
taoensso.encore.explode_keyword = (function explode_keyword(k){return clojure.string.split.call(null,taoensso.encore.fq_name.call(null,k),/[\.\/]/);
});
/**
* @param {...*} var_args
*/
taoensso.encore.merge_keywords = (function() { 
var merge_keywords__delegate = function (ks,p__13892){var vec__13894 = p__13892;var as_ns_QMARK_ = cljs.core.nth.call(null,vec__13894,0,null);var parts = cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.mapv.call(null,taoensso.encore.explode_keyword,cljs.core.filterv.call(null,cljs.core.identity,ks)));if(cljs.core.empty_QMARK_.call(null,parts))
{return null;
} else
{if(cljs.core.truth_(as_ns_QMARK_))
{return cljs.core.keyword.call(null,clojure.string.join.call(null,".",parts));
} else
{var ppop = cljs.core.pop.call(null,parts);return cljs.core.keyword.call(null,((cljs.core.empty_QMARK_.call(null,ppop))?null:clojure.string.join.call(null,".",ppop)),cljs.core.peek.call(null,parts));
}
}
};
var merge_keywords = function (ks,var_args){
var p__13892 = null;if (arguments.length > 1) {
  p__13892 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return merge_keywords__delegate.call(this,ks,p__13892);};
merge_keywords.cljs$lang$maxFixedArity = 1;
merge_keywords.cljs$lang$applyTo = (function (arglist__13895){
var ks = cljs.core.first(arglist__13895);
var p__13892 = cljs.core.rest(arglist__13895);
return merge_keywords__delegate(ks,p__13892);
});
merge_keywords.cljs$core$IFn$_invoke$arity$variadic = merge_keywords__delegate;
return merge_keywords;
})()
;
taoensso.encore.error_QMARK_ = (function error_QMARK_(x){var or__3554__auto__ = cljs.core.ex_data.call(null,x);if(cljs.core.truth_(or__3554__auto__))
{return or__3554__auto__;
} else
{return (x instanceof Error);
}
});
taoensso.encore.pos_int_QMARK_ = (function pos_int_QMARK_(x){return (cljs.core.integer_QMARK_.call(null,x)) && ((x > 0));
});
taoensso.encore.nneg_int_QMARK_ = (function nneg_int_QMARK_(x){return (cljs.core.integer_QMARK_.call(null,x)) && (!((x < 0)));
});
taoensso.encore.pow = (function pow(n,exp){return Math.pow.call(null,n,exp);
});
/**
* @param {...*} var_args
*/
taoensso.encore.round = (function() { 
var round__delegate = function (n,p__13896){var vec__13899 = p__13896;var type = cljs.core.nth.call(null,vec__13899,0,null);var nplaces = cljs.core.nth.call(null,vec__13899,1,null);var modifier = (cljs.core.truth_(nplaces)?Math.pow.call(null,10.0,nplaces):null);var n_STAR_ = ((cljs.core.not.call(null,modifier))?n:(n * modifier));var rounded = (function (){var G__13900 = ((((function (){var or__3554__auto__ = type;if(cljs.core.truth_(or__3554__auto__))
{return or__3554__auto__;
} else
{return new cljs.core.Keyword(null,"round","round",1122608384);
}
})() instanceof cljs.core.Keyword))?(function (){var or__3554__auto__ = type;if(cljs.core.truth_(or__3554__auto__))
{return or__3554__auto__;
} else
{return new cljs.core.Keyword(null,"round","round",1122608384);
}
})().fqn:null);switch (G__13900) {
case "trunc":
return cljs.core.long$.call(null,n_STAR_);

break;
case "ceil":
return cljs.core.long$.call(null,Math.ceil.call(null,n_STAR_));

break;
case "floor":
return cljs.core.long$.call(null,Math.floor.call(null,n_STAR_));

break;
case "round":
return Math.round.call(null,n_STAR_);

break;
default:
throw cljs.core.ex_info.call(null,"Unknown round type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),type], null));

}
})();if(cljs.core.not.call(null,modifier))
{return rounded;
} else
{return (rounded / modifier);
}
};
var round = function (n,var_args){
var p__13896 = null;if (arguments.length > 1) {
  p__13896 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return round__delegate.call(this,n,p__13896);};
round.cljs$lang$maxFixedArity = 1;
round.cljs$lang$applyTo = (function (arglist__13902){
var n = cljs.core.first(arglist__13902);
var p__13896 = cljs.core.rest(arglist__13902);
return round__delegate(n,p__13896);
});
round.cljs$core$IFn$_invoke$arity$variadic = round__delegate;
return round;
})()
;
taoensso.encore.round_STAR_ = taoensso.encore.round;
/**
* Optimized common case.
*/
taoensso.encore.round2 = (function round2(n){return (Math.round.call(null,(n * 1000.0)) / 1000.0);
});
/**
* Returns a UUIDv4 string of form "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",
* Ref. http://www.ietf.org/rfc/rfc4122.txt,
* https://gist.github.com/franks42/4159427
*/
taoensso.encore.uuid_str = (function uuid_str(){var fs = (function (n){return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeatedly.call(null,n,(function (){return cljs.core.rand_int.call(null,16).toString(16);
})));
});var g = ((function (fs){
return (function (){return (8 | (3 & cljs.core.rand_int.call(null,15))).toString(16);
});})(fs))
;var sb = (new goog.string.StringBuffer()).append(fs.call(null,8),"-",fs.call(null,4),"-4",fs.call(null,3),"-",g.call(null),fs.call(null,3),"-",fs.call(null,12));return sb.toString();
});
/**
* Returns binary exponential backoff value.
* @param {...*} var_args
*/
taoensso.encore.exp_backoff = (function() { 
var exp_backoff__delegate = function (nattempt,p__13903){var vec__13906 = p__13903;var map__13907 = cljs.core.nth.call(null,vec__13906,0,null);var map__13907__$1 = ((cljs.core.seq_QMARK_.call(null,map__13907))?cljs.core.apply.call(null,cljs.core.hash_map,map__13907):map__13907);var factor = cljs.core.get.call(null,map__13907__$1,new cljs.core.Keyword(null,"factor","factor",4026723521),1000);var min_SINGLEQUOTE_ = cljs.core.get.call(null,map__13907__$1,new cljs.core.Keyword(null,"min","min",1014012356));var max_SINGLEQUOTE_ = cljs.core.get.call(null,map__13907__$1,new cljs.core.Keyword(null,"max","max",1014012118));var binary_exp = Math.pow.call(null,2,(nattempt - 1));var time = (((binary_exp + cljs.core.rand.call(null,binary_exp)) * 0.5) * factor);return cljs.core.long$.call(null,(function (){var time__$1 = (cljs.core.truth_(min_SINGLEQUOTE_)?(function (){var x__3861__auto__ = min_SINGLEQUOTE_;var y__3862__auto__ = time;return ((x__3861__auto__ > y__3862__auto__) ? x__3861__auto__ : y__3862__auto__);
})():time);var time__$2 = (cljs.core.truth_(max_SINGLEQUOTE_)?(function (){var x__3868__auto__ = max_SINGLEQUOTE_;var y__3869__auto__ = time__$1;return ((x__3868__auto__ < y__3869__auto__) ? x__3868__auto__ : y__3869__auto__);
})():time__$1);return time__$2;
})());
};
var exp_backoff = function (nattempt,var_args){
var p__13903 = null;if (arguments.length > 1) {
  p__13903 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return exp_backoff__delegate.call(this,nattempt,p__13903);};
exp_backoff.cljs$lang$maxFixedArity = 1;
exp_backoff.cljs$lang$applyTo = (function (arglist__13908){
var nattempt = cljs.core.first(arglist__13908);
var p__13903 = cljs.core.rest(arglist__13908);
return exp_backoff__delegate(nattempt,p__13903);
});
exp_backoff.cljs$core$IFn$_invoke$arity$variadic = exp_backoff__delegate;
return exp_backoff;
})()
;
taoensso.encore.now_udt = (function now_udt(){return (new Date()).valueOf();
});
/**
* Useful for testing.
* @param {...*} var_args
*/
taoensso.encore.now_udt_mock_fn = (function() { 
var now_udt_mock_fn__delegate = function (p__13909){var vec__13911 = p__13909;var mock_udts = cljs.core.nth.call(null,vec__13911,0,null);var mock_udts__$1 = (function (){var or__3554__auto__ = mock_udts;if(cljs.core.truth_(or__3554__auto__))
{return or__3554__auto__;
} else
{return cljs.core.range.call(null);
}
})();var idx = cljs.core.atom.call(null,-1);return ((function (mock_udts__$1,idx,vec__13911,mock_udts){
return (function (){return cljs.core.nth.call(null,mock_udts__$1,cljs.core.swap_BANG_.call(null,idx,cljs.core.inc));
});
;})(mock_udts__$1,idx,vec__13911,mock_udts))
};
var now_udt_mock_fn = function (var_args){
var p__13909 = null;if (arguments.length > 0) {
  p__13909 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return now_udt_mock_fn__delegate.call(this,p__13909);};
now_udt_mock_fn.cljs$lang$maxFixedArity = 0;
now_udt_mock_fn.cljs$lang$applyTo = (function (arglist__13912){
var p__13909 = cljs.core.seq(arglist__13912);
return now_udt_mock_fn__delegate(p__13909);
});
now_udt_mock_fn.cljs$core$IFn$_invoke$arity$variadic = now_udt_mock_fn__delegate;
return now_udt_mock_fn;
})()
;
taoensso.encore.secs__GT_ms = (function secs__GT_ms(secs){return (secs * 1000);
});
taoensso.encore.ms__GT_secs = (function ms__GT_secs(ms){return cljs.core.quot.call(null,ms,1000);
});
/**
* Returns number of milliseconds in period defined by given args.
* @param {...*} var_args
*/
taoensso.encore.ms = (function() { 
var ms__delegate = function (p__13913){var map__13915 = p__13913;var map__13915__$1 = ((cljs.core.seq_QMARK_.call(null,map__13915))?cljs.core.apply.call(null,cljs.core.hash_map,map__13915):map__13915);var opts = map__13915__$1;var ms__$1 = cljs.core.get.call(null,map__13915__$1,new cljs.core.Keyword(null,"ms","ms",1013907736));var msecs = cljs.core.get.call(null,map__13915__$1,new cljs.core.Keyword(null,"msecs","msecs",1118094241));var secs = cljs.core.get.call(null,map__13915__$1,new cljs.core.Keyword(null,"secs","secs",1017430452));var mins = cljs.core.get.call(null,map__13915__$1,new cljs.core.Keyword(null,"mins","mins",1017255891));var hours = cljs.core.get.call(null,map__13915__$1,new cljs.core.Keyword(null,"hours","hours",1113373313));var days = cljs.core.get.call(null,map__13915__$1,new cljs.core.Keyword(null,"days","days",1016980425));var weeks = cljs.core.get.call(null,map__13915__$1,new cljs.core.Keyword(null,"weeks","weeks",1126912625));var months = cljs.core.get.call(null,map__13915__$1,new cljs.core.Keyword(null,"months","months",4240384357));var years = cljs.core.get.call(null,map__13915__$1,new cljs.core.Keyword(null,"years","years",1128756040));if(cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1118094241),null,new cljs.core.Keyword(null,"secs","secs",1017430452),null,new cljs.core.Keyword(null,"months","months",4240384357),null,new cljs.core.Keyword(null,"days","days",1016980425),null,new cljs.core.Keyword(null,"mins","mins",1017255891),null,new cljs.core.Keyword(null,"hours","hours",1113373313),null,new cljs.core.Keyword(null,"years","years",1128756040),null,new cljs.core.Keyword(null,"ms","ms",1013907736),null,new cljs.core.Keyword(null,"weeks","weeks",1126912625),null], null), null),cljs.core.keys.call(null,opts)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",1363110461,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1118094241),null,new cljs.core.Keyword(null,"secs","secs",1017430452),null,new cljs.core.Keyword(null,"months","months",4240384357),null,new cljs.core.Keyword(null,"days","days",1016980425),null,new cljs.core.Keyword(null,"mins","mins",1017255891),null,new cljs.core.Keyword(null,"hours","hours",1113373313),null,new cljs.core.Keyword(null,"years","years",1128756040),null,new cljs.core.Keyword(null,"ms","ms",1013907736),null,new cljs.core.Keyword(null,"weeks","weeks",1126912625),null], null), null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1637242963,null),new cljs.core.Symbol(null,"opts","opts",-1637113383,null))))))));
}
return taoensso.encore.round.call(null,(((((((((cljs.core.truth_(years)?(((((years * 1000) * 60) * 60) * 24) * 365):0) + (cljs.core.truth_(months)?(((((months * 1000) * 60) * 60) * 24) * 29.53):0)) + (cljs.core.truth_(weeks)?(((((weeks * 1000) * 60) * 60) * 24) * 7):0)) + (cljs.core.truth_(days)?((((days * 1000) * 60) * 60) * 24):0)) + (cljs.core.truth_(hours)?(((hours * 1000) * 60) * 60):0)) + (cljs.core.truth_(mins)?((mins * 1000) * 60):0)) + (cljs.core.truth_(secs)?(secs * 1000):0)) + (cljs.core.truth_(msecs)?msecs:0)) + (cljs.core.truth_(ms__$1)?ms__$1:0)));
};
var ms = function (var_args){
var p__13913 = null;if (arguments.length > 0) {
  p__13913 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ms__delegate.call(this,p__13913);};
ms.cljs$lang$maxFixedArity = 0;
ms.cljs$lang$applyTo = (function (arglist__13916){
var p__13913 = cljs.core.seq(arglist__13916);
return ms__delegate(p__13913);
});
ms.cljs$core$IFn$_invoke$arity$variadic = ms__delegate;
return ms;
})()
;
taoensso.encore.secs = cljs.core.comp.call(null,taoensso.encore.ms__GT_secs,taoensso.encore.ms);

/**
* @constructor
* @param {*} new_val
* @param {*} return_val
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
taoensso.encore.Swapped = (function (new_val,return_val,__meta,__extmap){
this.new_val = new_val;
this.return_val = return_val;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4140__auto__,k__4141__auto__){var self__ = this;
var this__4140__auto____$1 = this;return cljs.core._lookup.call(null,this__4140__auto____$1,k__4141__auto__,null);
});
taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4142__auto__,k13918,else__4143__auto__){var self__ = this;
var this__4142__auto____$1 = this;var G__13920 = (((k13918 instanceof cljs.core.Keyword))?k13918.fqn:null);switch (G__13920) {
case "return-val":
return self__.return_val;

break;
case "new-val":
return self__.new_val;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k13918,else__4143__auto__);

}
});
taoensso.encore.Swapped.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4154__auto__,writer__4155__auto__,opts__4156__auto__){var self__ = this;
var this__4154__auto____$1 = this;var pr_pair__4157__auto__ = ((function (this__4154__auto____$1){
return (function (keyval__4158__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4155__auto__,cljs.core.pr_writer,""," ","",opts__4156__auto__,keyval__4158__auto__);
});})(this__4154__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4155__auto__,pr_pair__4157__auto__,"#taoensso.encore.Swapped{",", ","}",opts__4156__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-val","new-val",2857961702),self__.new_val],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-val","return-val",2349945974),self__.return_val],null))], null),self__.__extmap));
});
taoensso.encore.Swapped.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4138__auto__){var self__ = this;
var this__4138__auto____$1 = this;return self__.__meta;
});
taoensso.encore.Swapped.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4134__auto__){var self__ = this;
var this__4134__auto____$1 = this;return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,self__.__extmap,self__.__hash));
});
taoensso.encore.Swapped.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4144__auto__){var self__ = this;
var this__4144__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
taoensso.encore.Swapped.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4135__auto__){var self__ = this;
var this__4135__auto____$1 = this;var h__3965__auto__ = self__.__hash;if(!((h__3965__auto__ == null)))
{return h__3965__auto__;
} else
{var h__3965__auto____$1 = cljs.core.hash_imap.call(null,this__4135__auto____$1);self__.__hash = h__3965__auto____$1;
return h__3965__auto____$1;
}
});
taoensso.encore.Swapped.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4136__auto__,other__4137__auto__){var self__ = this;
var this__4136__auto____$1 = this;if(cljs.core.truth_((function (){var and__3542__auto__ = other__4137__auto__;if(cljs.core.truth_(and__3542__auto__))
{return ((this__4136__auto____$1.constructor === other__4137__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4136__auto____$1,other__4137__auto__));
} else
{return and__3542__auto__;
}
})()))
{return true;
} else
{return false;
}
});
taoensso.encore.Swapped.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4149__auto__,k__4150__auto__){var self__ = this;
var this__4149__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"return-val","return-val",2349945974),null,new cljs.core.Keyword(null,"new-val","new-val",2857961702),null], null), null),k__4150__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4149__auto____$1),self__.__meta),k__4150__auto__);
} else
{return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4150__auto__)),null));
}
});
taoensso.encore.Swapped.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4147__auto__,k__4148__auto__,G__13917){var self__ = this;
var this__4147__auto____$1 = this;var pred__13921 = cljs.core.keyword_identical_QMARK_;var expr__13922 = k__4148__auto__;if(cljs.core.truth_(pred__13921.call(null,new cljs.core.Keyword(null,"new-val","new-val",2857961702),expr__13922)))
{return (new taoensso.encore.Swapped(G__13917,self__.return_val,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__13921.call(null,new cljs.core.Keyword(null,"return-val","return-val",2349945974),expr__13922)))
{return (new taoensso.encore.Swapped(self__.new_val,G__13917,self__.__meta,self__.__extmap,null));
} else
{return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4148__auto__,G__13917),null));
}
}
});
taoensso.encore.Swapped.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4152__auto__){var self__ = this;
var this__4152__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-val","new-val",2857961702),self__.new_val],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-val","return-val",2349945974),self__.return_val],null))], null),self__.__extmap));
});
taoensso.encore.Swapped.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4139__auto__,G__13917){var self__ = this;
var this__4139__auto____$1 = this;return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,G__13917,self__.__extmap,self__.__hash));
});
taoensso.encore.Swapped.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4145__auto__,entry__4146__auto__){var self__ = this;
var this__4145__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4146__auto__))
{return cljs.core._assoc.call(null,this__4145__auto____$1,cljs.core._nth.call(null,entry__4146__auto__,0),cljs.core._nth.call(null,entry__4146__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4145__auto____$1,entry__4146__auto__);
}
});
taoensso.encore.Swapped.cljs$lang$type = true;
taoensso.encore.Swapped.cljs$lang$ctorPrSeq = (function (this__4174__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.encore/Swapped");
});
taoensso.encore.Swapped.cljs$lang$ctorPrWriter = (function (this__4174__auto__,writer__4175__auto__){return cljs.core._write.call(null,writer__4175__auto__,"taoensso.encore/Swapped");
});
taoensso.encore.__GT_Swapped = (function __GT_Swapped(new_val,return_val){return (new taoensso.encore.Swapped(new_val,return_val));
});
taoensso.encore.map__GT_Swapped = (function map__GT_Swapped(G__13919){return (new taoensso.encore.Swapped(new cljs.core.Keyword(null,"new-val","new-val",2857961702).cljs$core$IFn$_invoke$arity$1(G__13919),new cljs.core.Keyword(null,"return-val","return-val",2349945974).cljs$core$IFn$_invoke$arity$1(G__13919),null,cljs.core.dissoc.call(null,G__13919,new cljs.core.Keyword(null,"new-val","new-val",2857961702),new cljs.core.Keyword(null,"return-val","return-val",2349945974))));
});
taoensso.encore.swapped = (function swapped(new_val,return_val){return taoensso.encore.__GT_Swapped.call(null,new_val,return_val);
});
taoensso.encore.as_swapped = (function as_swapped(x){if((x instanceof taoensso.encore.Swapped))
{return x;
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"new-val","new-val",2857961702),x,new cljs.core.Keyword(null,"return-val","return-val",2349945974),x], null);
}
});
/**
* More powerful version of `swap!`:
* * Supports optional `update-in` semantics.
* * Swap fn can return `(swapped <new-val> <return-val>)` rather than just
* <new-val>. This is useful when writing atomic pull fns, etc.
* @param {...*} var_args
*/
taoensso.encore.swap_in_BANG_ = (function() { 
var swap_in_BANG___delegate = function (atom_,ks,f,args){var ks__$1 = ((((ks == null)) || (cljs.core.empty_QMARK_.call(null,ks)))?null:ks);while(true){
var old_val = cljs.core.deref.call(null,atom_);var map__13927 = ((cljs.core.not.call(null,ks__$1))?taoensso.encore.as_swapped.call(null,cljs.core.apply.call(null,f,old_val,args)):(function (){var old_val_in = cljs.core.get_in.call(null,old_val,ks__$1);var map__13928 = taoensso.encore.as_swapped.call(null,cljs.core.apply.call(null,f,old_val_in,args));var map__13928__$1 = ((cljs.core.seq_QMARK_.call(null,map__13928))?cljs.core.apply.call(null,cljs.core.hash_map,map__13928):map__13928);var new_val_in = cljs.core.get.call(null,map__13928__$1,new cljs.core.Keyword(null,"new-val","new-val",2857961702));var return_val = cljs.core.get.call(null,map__13928__$1,new cljs.core.Keyword(null,"return-val","return-val",2349945974));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"new-val","new-val",2857961702),cljs.core.assoc_in.call(null,old_val,ks__$1,new_val_in),new cljs.core.Keyword(null,"return-val","return-val",2349945974),return_val], null);
})());var map__13927__$1 = ((cljs.core.seq_QMARK_.call(null,map__13927))?cljs.core.apply.call(null,cljs.core.hash_map,map__13927):map__13927);var return_val = cljs.core.get.call(null,map__13927__$1,new cljs.core.Keyword(null,"return-val","return-val",2349945974));var new_val = cljs.core.get.call(null,map__13927__$1,new cljs.core.Keyword(null,"new-val","new-val",2857961702));if(!(cljs.core.compare_and_set_BANG_.call(null,atom_,old_val,new_val)))
{{
continue;
}
} else
{return return_val;
}
break;
}
};
var swap_in_BANG_ = function (atom_,ks,f,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return swap_in_BANG___delegate.call(this,atom_,ks,f,args);};
swap_in_BANG_.cljs$lang$maxFixedArity = 3;
swap_in_BANG_.cljs$lang$applyTo = (function (arglist__13929){
var atom_ = cljs.core.first(arglist__13929);
arglist__13929 = cljs.core.next(arglist__13929);
var ks = cljs.core.first(arglist__13929);
arglist__13929 = cljs.core.next(arglist__13929);
var f = cljs.core.first(arglist__13929);
var args = cljs.core.rest(arglist__13929);
return swap_in_BANG___delegate(atom_,ks,f,args);
});
swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_in_BANG___delegate;
return swap_in_BANG_;
})()
;
taoensso.encore.reset_in_BANG_ = (function reset_in_BANG_(atom_,korks,newval){return taoensso.encore.swap_in_BANG_.call(null,atom_,korks,cljs.core.constantly.call(null,newval));
});
/**
* @param {...*} var_args
*/
taoensso.encore.dissoc_in = (function() { 
var dissoc_in__delegate = function (m,ks,dissoc_ks){return cljs.core.apply.call(null,cljs.core.update_in,m,ks,cljs.core.dissoc,dissoc_ks);
};
var dissoc_in = function (m,ks,var_args){
var dissoc_ks = null;if (arguments.length > 2) {
  dissoc_ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return dissoc_in__delegate.call(this,m,ks,dissoc_ks);};
dissoc_in.cljs$lang$maxFixedArity = 2;
dissoc_in.cljs$lang$applyTo = (function (arglist__13930){
var m = cljs.core.first(arglist__13930);
arglist__13930 = cljs.core.next(arglist__13930);
var ks = cljs.core.first(arglist__13930);
var dissoc_ks = cljs.core.rest(arglist__13930);
return dissoc_in__delegate(m,ks,dissoc_ks);
});
dissoc_in.cljs$core$IFn$_invoke$arity$variadic = dissoc_in__delegate;
return dissoc_in;
})()
;
taoensso.encore.contains_in_QMARK_ = (function contains_in_QMARK_(coll,ks){return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,coll,cljs.core.butlast.call(null,ks)),cljs.core.last.call(null,ks));
});
/**
* Assocs each kv iff its value is not nil.
* @param {...*} var_args
*/
taoensso.encore.assoc_some = (function() { 
var assoc_some__delegate = function (m,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null))))))));
}
return cljs.core.into.call(null,(function (){var or__3554__auto__ = m;if(cljs.core.truth_(or__3554__auto__))
{return or__3554__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4279__auto__ = (function iter__13939(s__13940){return (new cljs.core.LazySeq(null,(function (){var s__13940__$1 = s__13940;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13940__$1);if(temp__4126__auto__)
{var s__13940__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13940__$2))
{var c__4277__auto__ = cljs.core.chunk_first.call(null,s__13940__$2);var size__4278__auto__ = cljs.core.count.call(null,c__4277__auto__);var b__13942 = cljs.core.chunk_buffer.call(null,size__4278__auto__);if((function (){var i__13941 = 0;while(true){
if((i__13941 < size__4278__auto__))
{var vec__13945 = cljs.core._nth.call(null,c__4277__auto__,i__13941);var k = cljs.core.nth.call(null,vec__13945,0,null);var v = cljs.core.nth.call(null,vec__13945,1,null);if(!((v == null)))
{cljs.core.chunk_append.call(null,b__13942,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__13947 = (i__13941 + 1);
i__13941 = G__13947;
continue;
}
} else
{{
var G__13948 = (i__13941 + 1);
i__13941 = G__13948;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13942),iter__13939.call(null,cljs.core.chunk_rest.call(null,s__13940__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13942),null);
}
} else
{var vec__13946 = cljs.core.first.call(null,s__13940__$2);var k = cljs.core.nth.call(null,vec__13946,0,null);var v = cljs.core.nth.call(null,vec__13946,1,null);if(!((v == null)))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__13939.call(null,cljs.core.rest.call(null,s__13940__$2)));
} else
{{
var G__13949 = cljs.core.rest.call(null,s__13940__$2);
s__13940__$1 = G__13949;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4279__auto__.call(null,cljs.core.partition.call(null,2,kvs));
})());
};
var assoc_some = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_some__delegate.call(this,m,kvs);};
assoc_some.cljs$lang$maxFixedArity = 1;
assoc_some.cljs$lang$applyTo = (function (arglist__13950){
var m = cljs.core.first(arglist__13950);
var kvs = cljs.core.rest(arglist__13950);
return assoc_some__delegate(m,kvs);
});
assoc_some.cljs$core$IFn$_invoke$arity$variadic = assoc_some__delegate;
return assoc_some;
})()
;
/**
* Assocs each kv iff its val is truthy.
* @param {...*} var_args
*/
taoensso.encore.assoc_when = (function() { 
var assoc_when__delegate = function (m,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null))))))));
}
return cljs.core.into.call(null,(function (){var or__3554__auto__ = m;if(cljs.core.truth_(or__3554__auto__))
{return or__3554__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4279__auto__ = (function iter__13959(s__13960){return (new cljs.core.LazySeq(null,(function (){var s__13960__$1 = s__13960;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13960__$1);if(temp__4126__auto__)
{var s__13960__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13960__$2))
{var c__4277__auto__ = cljs.core.chunk_first.call(null,s__13960__$2);var size__4278__auto__ = cljs.core.count.call(null,c__4277__auto__);var b__13962 = cljs.core.chunk_buffer.call(null,size__4278__auto__);if((function (){var i__13961 = 0;while(true){
if((i__13961 < size__4278__auto__))
{var vec__13965 = cljs.core._nth.call(null,c__4277__auto__,i__13961);var k = cljs.core.nth.call(null,vec__13965,0,null);var v = cljs.core.nth.call(null,vec__13965,1,null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__13962,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__13967 = (i__13961 + 1);
i__13961 = G__13967;
continue;
}
} else
{{
var G__13968 = (i__13961 + 1);
i__13961 = G__13968;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13962),iter__13959.call(null,cljs.core.chunk_rest.call(null,s__13960__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13962),null);
}
} else
{var vec__13966 = cljs.core.first.call(null,s__13960__$2);var k = cljs.core.nth.call(null,vec__13966,0,null);var v = cljs.core.nth.call(null,vec__13966,1,null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__13959.call(null,cljs.core.rest.call(null,s__13960__$2)));
} else
{{
var G__13969 = cljs.core.rest.call(null,s__13960__$2);
s__13960__$1 = G__13969;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4279__auto__.call(null,cljs.core.partition.call(null,2,kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__13970){
var m = cljs.core.first(arglist__13970);
var kvs = cljs.core.rest(arglist__13970);
return assoc_when__delegate(m,kvs);
});
assoc_when.cljs$core$IFn$_invoke$arity$variadic = assoc_when__delegate;
return assoc_when;
})()
;
/**
* (seq     {:a :A}) => ([:a :A])
* (seq-kvs {:a :A}) => (:a :A)
*/
taoensso.encore.seq_kvs = cljs.core.partial.call(null,cljs.core.reduce,cljs.core.concat);
/**
* Like `apply` but assumes last arg is a map whose elements should be applied
* to `f` as an unpaired seq:
* (mapply (fn [x & {:keys [y z]}] (str x y z)) 1 {:y 2 :z 3})
* where fn will receive args as: `(1 :y 2 :z 3)`.
* @param {...*} var_args
*/
taoensso.encore.mapply = (function() { 
var mapply__delegate = function (f,args){return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,cljs.core.butlast.call(null,args),cljs.core.last.call(null,args)));
};
var mapply = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mapply__delegate.call(this,f,args);};
mapply.cljs$lang$maxFixedArity = 1;
mapply.cljs$lang$applyTo = (function (arglist__13971){
var f = cljs.core.first(arglist__13971);
var args = cljs.core.rest(arglist__13971);
return mapply__delegate(f,args);
});
mapply.cljs$core$IFn$_invoke$arity$variadic = mapply__delegate;
return mapply;
})()
;
taoensso.encore.map_kvs = (function map_kvs(kf,vf,m){if(cljs.core.truth_(m))
{var kf__$1 = ((!((kf === new cljs.core.Keyword(null,"keywordize","keywordize",1249131069))))?kf:(function (k,_){return cljs.core.keyword.call(null,k);
}));var vf__$1 = ((!((vf === new cljs.core.Keyword(null,"keywordize","keywordize",1249131069))))?vf:((function (kf__$1){
return (function (_,v){return cljs.core.keyword.call(null,v);
});})(kf__$1))
);return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (kf__$1,vf__$1){
return (function (m__$1,k,v){return cljs.core.assoc_BANG_.call(null,m__$1,(cljs.core.truth_(kf__$1)?kf__$1.call(null,k,v):k),(cljs.core.truth_(vf__$1)?vf__$1.call(null,v,v):v));
});})(kf__$1,vf__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),(function (){var or__3554__auto__ = m;if(cljs.core.truth_(or__3554__auto__))
{return or__3554__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})()));
} else
{return null;
}
});
taoensso.encore.map_keys = (function map_keys(f,m){return taoensso.encore.map_kvs.call(null,(function (k,_){return f.call(null,k);
}),null,m);
});
taoensso.encore.map_vals = (function map_vals(f,m){return taoensso.encore.map_kvs.call(null,null,(function (_,v){return f.call(null,v);
}),m);
});
taoensso.encore.filter_kvs = (function filter_kvs(predk,predv,m){if(cljs.core.truth_(m))
{return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){if(cljs.core.truth_((function (){var and__3542__auto__ = predk.call(null,k);if(cljs.core.truth_(and__3542__auto__))
{return predv.call(null,v);
} else
{return and__3542__auto__;
}
})()))
{return m__$1;
} else
{return cljs.core.dissoc.call(null,m__$1,k);
}
}),(function (){var or__3554__auto__ = m;if(cljs.core.truth_(or__3554__auto__))
{return or__3554__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var or__3554__auto__ = m;if(cljs.core.truth_(or__3554__auto__))
{return or__3554__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})());
} else
{return null;
}
});
taoensso.encore.filter_keys = (function filter_keys(pred,m){return taoensso.encore.filter_kvs.call(null,pred,cljs.core.constantly.call(null,true),m);
});
taoensso.encore.filter_vals = (function filter_vals(pred,m){return taoensso.encore.filter_kvs.call(null,cljs.core.constantly.call(null,true),pred,m);
});
/**
* Smaller, common-case version of `filter-vals`. Esp useful with `nil?`/`blank?`
* pred when constructing maps: {:foo (when _ <...>) :bar (when _ <...>)} in a
* way that preservers :or semantics.
*/
taoensso.encore.remove_vals = (function remove_vals(pred,m){return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){if(cljs.core.truth_(pred.call(null,v)))
{return cljs.core.dissoc.call(null,m__$1,k);
} else
{return m__$1;
}
}),m,m);
});
taoensso.encore.keywordize_map = (function keywordize_map(m){if(cljs.core.truth_(m))
{return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){return cljs.core.assoc.call(null,m__$1,cljs.core.keyword.call(null,k),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
} else
{return null;
}
});
/**
* Cross between `hash-map` & `map-kvs`.
* @param {...*} var_args
*/
taoensso.encore.as_map = (function() { 
var as_map__delegate = function (coll,p__13972){var vec__13978 = p__13972;var kf = cljs.core.nth.call(null,vec__13978,0,null);var vf = cljs.core.nth.call(null,vec__13978,1,null);if(cljs.core.coll_QMARK_.call(null,coll))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"coll?","coll?",-1545688948,null),new cljs.core.Symbol(null,"coll","coll",-1637472091,null)))))));
}
if(((kf == null)) || (cljs.core.fn_QMARK_.call(null,kf)) || ((kf === new cljs.core.Keyword(null,"keywordize","keywordize",1249131069))))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",-1640527972,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"kf","kf",-1640528108,null)),cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",-1640430032,null),new cljs.core.Symbol(null,"kf","kf",-1640528108,null)),cljs.core.list(new cljs.core.Symbol(null,"identical?","identical?",1035906019,null),new cljs.core.Symbol(null,"kf","kf",-1640528108,null),new cljs.core.Keyword(null,"keywordize","keywordize",1249131069))))))));
}
if(((vf == null)) || (cljs.core.fn_QMARK_.call(null,vf)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",-1640527972,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"vf","vf",-1640527767,null)),cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",-1640430032,null),new cljs.core.Symbol(null,"vf","vf",-1640527767,null))))))));
}
var _PERCENT_ = (function (){var temp__4126__auto__ = cljs.core.seq.call(null,coll);if(temp__4126__auto__)
{var s_SINGLEQUOTE_ = temp__4126__auto__;var kf__$1 = ((!((kf === new cljs.core.Keyword(null,"keywordize","keywordize",1249131069))))?kf:((function (s_SINGLEQUOTE_,temp__4126__auto__,vec__13978,kf,vf){
return (function (k,_){return cljs.core.keyword.call(null,k);
});})(s_SINGLEQUOTE_,temp__4126__auto__,vec__13978,kf,vf))
);var m = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);var G__13980 = s_SINGLEQUOTE_;var vec__13981 = G__13980;var k = cljs.core.nth.call(null,vec__13981,0,null);var v = cljs.core.nth.call(null,vec__13981,1,null);var s = vec__13981;var m__$1 = m;var G__13980__$1 = G__13980;while(true){
var m__$2 = m__$1;var vec__13982 = G__13980__$1;var k__$1 = cljs.core.nth.call(null,vec__13982,0,null);var v__$1 = cljs.core.nth.call(null,vec__13982,1,null);var s__$1 = vec__13982;var k__$2 = ((cljs.core.not.call(null,kf__$1))?k__$1:kf__$1.call(null,k__$1,v__$1));var v__$2 = ((cljs.core.not.call(null,vf))?v__$1:vf.call(null,k__$2,v__$1));var new_m = cljs.core.assoc_BANG_.call(null,m__$2,k__$2,v__$2);var temp__4124__auto__ = cljs.core.nnext.call(null,s__$1);if(temp__4124__auto__)
{var n = temp__4124__auto__;{
var G__13983 = new_m;
var G__13984 = n;
m__$1 = G__13983;
G__13980__$1 = G__13984;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,new_m);
}
break;
}
} else
{return null;
}
})();if(((_PERCENT_ == null)) || (cljs.core.map_QMARK_.call(null,_PERCENT_)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",-1640527972,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"%","%",-1640531490,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1637187556,null),new cljs.core.Symbol(null,"%","%",-1640531490,null))))))));
}
return _PERCENT_;
};
var as_map = function (coll,var_args){
var p__13972 = null;if (arguments.length > 1) {
  p__13972 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return as_map__delegate.call(this,coll,p__13972);};
as_map.cljs$lang$maxFixedArity = 1;
as_map.cljs$lang$applyTo = (function (arglist__13985){
var coll = cljs.core.first(arglist__13985);
var p__13972 = cljs.core.rest(arglist__13985);
return as_map__delegate(coll,p__13972);
});
as_map.cljs$core$IFn$_invoke$arity$variadic = as_map__delegate;
return as_map;
})()
;
/**
* Like `into` but supports multiple "from"s.
* @param {...*} var_args
*/
taoensso.encore.into_all = (function() {
var into_all = null;
var into_all__2 = (function (to,from){return cljs.core.into.call(null,to,from);
});
var into_all__3 = (function() { 
var G__13986__delegate = function (to,from,more){return cljs.core.reduce.call(null,cljs.core.into,cljs.core.into.call(null,to,from),more);
};
var G__13986 = function (to,from,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__13986__delegate.call(this,to,from,more);};
G__13986.cljs$lang$maxFixedArity = 2;
G__13986.cljs$lang$applyTo = (function (arglist__13987){
var to = cljs.core.first(arglist__13987);
arglist__13987 = cljs.core.next(arglist__13987);
var from = cljs.core.first(arglist__13987);
var more = cljs.core.rest(arglist__13987);
return G__13986__delegate(to,from,more);
});
G__13986.cljs$core$IFn$_invoke$arity$variadic = G__13986__delegate;
return G__13986;
})()
;
into_all = function(to,from,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return into_all__2.call(this,to,from);
default:
return into_all__3.cljs$core$IFn$_invoke$arity$variadic(to,from, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
into_all.cljs$lang$maxFixedArity = 2;
into_all.cljs$lang$applyTo = into_all__3.cljs$lang$applyTo;
into_all.cljs$core$IFn$_invoke$arity$2 = into_all__2;
into_all.cljs$core$IFn$_invoke$arity$variadic = into_all__3.cljs$core$IFn$_invoke$arity$variadic;
return into_all;
})()
;
/**
* Greedy version of `interleave`.
* Ref. https://groups.google.com/d/msg/clojure/o4Hg0s_1Avs/rPn3P4Ig6MsJ
* @param {...*} var_args
*/
taoensso.encore.interleave_all = (function() {
var interleave_all = null;
var interleave_all__0 = (function (){return cljs.core.List.EMPTY;
});
var interleave_all__1 = (function (c1){return (new cljs.core.LazySeq(null,(function (){return c1;
}),null,null));
});
var interleave_all__2 = (function (c1,c2){return (new cljs.core.LazySeq(null,(function (){var s1 = cljs.core.seq.call(null,c1);var s2 = cljs.core.seq.call(null,c2);if((s1) && (s2))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1),cljs.core.cons.call(null,cljs.core.first.call(null,s2),interleave_all.call(null,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2))));
} else
{if(s1)
{return s1;
} else
{if(s2)
{return s2;
} else
{return null;
}
}
}
}),null,null));
});
var interleave_all__3 = (function() { 
var G__13988__delegate = function (c1,c2,colls){return (new cljs.core.LazySeq(null,(function (){var ss = cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1)));return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss),cljs.core.apply.call(null,interleave_all,cljs.core.map.call(null,cljs.core.rest,ss)));
}),null,null));
};
var G__13988 = function (c1,c2,var_args){
var colls = null;if (arguments.length > 2) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__13988__delegate.call(this,c1,c2,colls);};
G__13988.cljs$lang$maxFixedArity = 2;
G__13988.cljs$lang$applyTo = (function (arglist__13989){
var c1 = cljs.core.first(arglist__13989);
arglist__13989 = cljs.core.next(arglist__13989);
var c2 = cljs.core.first(arglist__13989);
var colls = cljs.core.rest(arglist__13989);
return G__13988__delegate(c1,c2,colls);
});
G__13988.cljs$core$IFn$_invoke$arity$variadic = G__13988__delegate;
return G__13988;
})()
;
interleave_all = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 0:
return interleave_all__0.call(this);
case 1:
return interleave_all__1.call(this,c1);
case 2:
return interleave_all__2.call(this,c1,c2);
default:
return interleave_all__3.cljs$core$IFn$_invoke$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
interleave_all.cljs$lang$maxFixedArity = 2;
interleave_all.cljs$lang$applyTo = interleave_all__3.cljs$lang$applyTo;
interleave_all.cljs$core$IFn$_invoke$arity$0 = interleave_all__0;
interleave_all.cljs$core$IFn$_invoke$arity$1 = interleave_all__1;
interleave_all.cljs$core$IFn$_invoke$arity$2 = interleave_all__2;
interleave_all.cljs$core$IFn$_invoke$arity$variadic = interleave_all__3.cljs$core$IFn$_invoke$arity$variadic;
return interleave_all;
})()
;
/**
* Prefer `set` when order doesn't matter (much faster).
*/
taoensso.encore.distinctv = (function() {
var distinctv = null;
var distinctv__1 = (function (coll){return cljs.core.persistent_BANG_.call(null,cljs.core.nth.call(null,cljs.core.reduce.call(null,(function (p__13994,in$){var vec__13995 = p__13994;var v = cljs.core.nth.call(null,vec__13995,0,null);var seen = cljs.core.nth.call(null,vec__13995,1,null);if(!(cljs.core.contains_QMARK_.call(null,seen,in$)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,v,in$),cljs.core.conj.call(null,seen,in$)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll),0));
});
var distinctv__2 = (function (keyfn,coll){return cljs.core.persistent_BANG_.call(null,cljs.core.nth.call(null,cljs.core.reduce.call(null,(function (p__13996,in$){var vec__13997 = p__13996;var v = cljs.core.nth.call(null,vec__13997,0,null);var seen = cljs.core.nth.call(null,vec__13997,1,null);var in_STAR_ = keyfn.call(null,in$);if(!(cljs.core.contains_QMARK_.call(null,seen,in_STAR_)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,v,in$),cljs.core.conj.call(null,seen,in_STAR_)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll),0));
});
distinctv = function(keyfn,coll){
switch(arguments.length){
case 1:
return distinctv__1.call(this,keyfn);
case 2:
return distinctv__2.call(this,keyfn,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
distinctv.cljs$core$IFn$_invoke$arity$1 = distinctv__1;
distinctv.cljs$core$IFn$_invoke$arity$2 = distinctv__2;
return distinctv;
})()
;
/**
* Like `sort-by` for distinct. Based on clojure.core/distinct.
*/
taoensso.encore.distinct_by = (function distinct_by(keyfn,coll){var step = (function step(xs,seen){return (new cljs.core.LazySeq(null,(function (){return (function (p__14004,seen__$1){while(true){
var vec__14005 = p__14004;var v = cljs.core.nth.call(null,vec__14005,0,null);var xs__$1 = vec__14005;var temp__4126__auto__ = cljs.core.seq.call(null,xs__$1);if(temp__4126__auto__)
{var s = temp__4126__auto__;var v_STAR_ = keyfn.call(null,v);if(cljs.core.contains_QMARK_.call(null,seen__$1,v_STAR_))
{{
var G__14006 = cljs.core.rest.call(null,s);
var G__14007 = seen__$1;
p__14004 = G__14006;
seen__$1 = G__14007;
continue;
}
} else
{return cljs.core.cons.call(null,v,step.call(null,cljs.core.rest.call(null,s),cljs.core.conj.call(null,seen__$1,v_STAR_)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});return step.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
/**
* Reverse comparator.
*/
taoensso.encore.rcompare = (function rcompare(x,y){return cljs.core.compare.call(null,y,x);
});
/**
* Like `merge-with` but merges maps recursively, applying the given fn
* only when there's a non-map at a particular level.
* 
* (merge-deep-with + {:a {:b {:c 1 :d {:x 1 :y 2}} :e 3} :f 4}
* {:a {:b {:c 2 :d {:z 9} :z 3} :e 100}})
* => {:a {:b {:z 3, :c 3, :d {:z 9, :x 1, :y 2}}, :e 103}, :f 4}
* @param {...*} var_args
*/
taoensso.encore.merge_deep_with = (function() { 
var merge_deep_with__delegate = function (f,maps){return cljs.core.apply.call(null,(function() { 
var m__delegate = function (maps__$1){if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,maps__$1))
{return cljs.core.apply.call(null,cljs.core.merge_with,m,maps__$1);
} else
{return cljs.core.apply.call(null,f,maps__$1);
}
};
var m = function (var_args){
var maps__$1 = null;if (arguments.length > 0) {
  maps__$1 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return m__delegate.call(this,maps__$1);};
m.cljs$lang$maxFixedArity = 0;
m.cljs$lang$applyTo = (function (arglist__14008){
var maps__$1 = cljs.core.seq(arglist__14008);
return m__delegate(maps__$1);
});
m.cljs$core$IFn$_invoke$arity$variadic = m__delegate;
return m;
})()
,maps);
};
var merge_deep_with = function (f,var_args){
var maps = null;if (arguments.length > 1) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return merge_deep_with__delegate.call(this,f,maps);};
merge_deep_with.cljs$lang$maxFixedArity = 1;
merge_deep_with.cljs$lang$applyTo = (function (arglist__14009){
var f = cljs.core.first(arglist__14009);
var maps = cljs.core.rest(arglist__14009);
return merge_deep_with__delegate(f,maps);
});
merge_deep_with.cljs$core$IFn$_invoke$arity$variadic = merge_deep_with__delegate;
return merge_deep_with;
})()
;
taoensso.encore.merge_deep = cljs.core.partial.call(null,taoensso.encore.merge_deep_with,(function (x,y){return y;
}));
/**
* Returns the 'greatest' element in coll in O(n) time.
* @param {...*} var_args
*/
taoensso.encore.greatest = (function() { 
var greatest__delegate = function (coll,p__14012){var vec__14014 = p__14012;var _QMARK_comparator = cljs.core.nth.call(null,vec__14014,0,null);var comparator = (function (){var or__3554__auto__ = _QMARK_comparator;if(cljs.core.truth_(or__3554__auto__))
{return or__3554__auto__;
} else
{return taoensso.encore.rcompare;
}
})();return cljs.core.reduce.call(null,((function (comparator,vec__14014,_QMARK_comparator){
return (function (p1__14010_SHARP_,p2__14011_SHARP_){if((comparator.call(null,p1__14010_SHARP_,p2__14011_SHARP_) > 0))
{return p2__14011_SHARP_;
} else
{return p1__14010_SHARP_;
}
});})(comparator,vec__14014,_QMARK_comparator))
,coll);
};
var greatest = function (coll,var_args){
var p__14012 = null;if (arguments.length > 1) {
  p__14012 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return greatest__delegate.call(this,coll,p__14012);};
greatest.cljs$lang$maxFixedArity = 1;
greatest.cljs$lang$applyTo = (function (arglist__14015){
var coll = cljs.core.first(arglist__14015);
var p__14012 = cljs.core.rest(arglist__14015);
return greatest__delegate(coll,p__14012);
});
greatest.cljs$core$IFn$_invoke$arity$variadic = greatest__delegate;
return greatest;
})()
;
/**
* Returns the 'least' element in coll in O(n) time.
* @param {...*} var_args
*/
taoensso.encore.least = (function() { 
var least__delegate = function (coll,p__14018){var vec__14020 = p__14018;var _QMARK_comparator = cljs.core.nth.call(null,vec__14020,0,null);var comparator = (function (){var or__3554__auto__ = _QMARK_comparator;if(cljs.core.truth_(or__3554__auto__))
{return or__3554__auto__;
} else
{return taoensso.encore.rcompare;
}
})();return cljs.core.reduce.call(null,((function (comparator,vec__14020,_QMARK_comparator){
return (function (p1__14016_SHARP_,p2__14017_SHARP_){if((comparator.call(null,p1__14016_SHARP_,p2__14017_SHARP_) < 0))
{return p2__14017_SHARP_;
} else
{return p1__14016_SHARP_;
}
});})(comparator,vec__14020,_QMARK_comparator))
,coll);
};
var least = function (coll,var_args){
var p__14018 = null;if (arguments.length > 1) {
  p__14018 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return least__delegate.call(this,coll,p__14018);};
least.cljs$lang$maxFixedArity = 1;
least.cljs$lang$applyTo = (function (arglist__14021){
var coll = cljs.core.first(arglist__14021);
var p__14018 = cljs.core.rest(arglist__14021);
return least__delegate(coll,p__14018);
});
least.cljs$core$IFn$_invoke$arity$variadic = least__delegate;
return least;
})()
;
/**
* Like `repeatedly` but faster and `conj`s items into given collection.
*/
taoensso.encore.repeatedly_into = (function repeatedly_into(coll,n,f){if((coll instanceof clojure.lang.IEditableCollection))
{var v = cljs.core.transient$.call(null,coll);var idx = 0;while(true){
if((idx >= n))
{return cljs.core.persistent_BANG_.call(null,v);
} else
{{
var G__14022 = cljs.core.conj_BANG_.call(null,v,f.call(null));
var G__14023 = (idx + 1);
v = G__14022;
idx = G__14023;
continue;
}
}
break;
}
} else
{var v = coll;var idx = 0;while(true){
if((idx >= n))
{return v;
} else
{{
var G__14024 = cljs.core.conj.call(null,v,f.call(null));
var G__14025 = (idx + 1);
v = G__14024;
idx = G__14025;
continue;
}
}
break;
}
}
});
/**
* Gives a consistent, flexible, cross-platform substring API with support for:
* * Clamping of indexes beyond string limits.
* * Negative indexes: [   0   |   1   |  ...  |  n-1  |   n   ) or
* [  -n   | -n+1  |  ...  |  -1   |   0   ).
* (start index inclusive, end index exclusive).
* 
* Note that `max-len` was chosen over `end-idx` since it's less ambiguous and
* easier to reason about - esp. when accepting negative indexes.
* @param {...*} var_args
*/
taoensso.encore.substr = (function() { 
var substr__delegate = function (s,start_idx,p__14026){var vec__14028 = p__14026;var max_len = cljs.core.nth.call(null,vec__14028,0,null);if(((max_len == null)) || (taoensso.encore.nneg_int_QMARK_.call(null,max_len)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",-1640527972,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"max-len","max-len",-797580315,null)),cljs.core.list(new cljs.core.Symbol(null,"nneg-int?","nneg-int?",-2019261324,null),new cljs.core.Symbol(null,"max-len","max-len",-797580315,null))))))));
}
var slen = cljs.core.count.call(null,s);var start_idx_STAR_ = (((start_idx >= 0))?(function (){var x__3868__auto__ = start_idx;var y__3869__auto__ = slen;return ((x__3868__auto__ < y__3869__auto__) ? x__3868__auto__ : y__3869__auto__);
})():(function (){var x__3861__auto__ = 0;var y__3862__auto__ = ((slen + start_idx) - 1);return ((x__3861__auto__ > y__3862__auto__) ? x__3861__auto__ : y__3862__auto__);
})());var end_idx_STAR_ = ((cljs.core.not.call(null,max_len))?slen:(function (){var x__3868__auto__ = (start_idx_STAR_ + max_len);var y__3869__auto__ = slen;return ((x__3868__auto__ < y__3869__auto__) ? x__3868__auto__ : y__3869__auto__);
})());return s.substring(start_idx_STAR_,end_idx_STAR_);
};
var substr = function (s,start_idx,var_args){
var p__14026 = null;if (arguments.length > 2) {
  p__14026 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return substr__delegate.call(this,s,start_idx,p__14026);};
substr.cljs$lang$maxFixedArity = 2;
substr.cljs$lang$applyTo = (function (arglist__14029){
var s = cljs.core.first(arglist__14029);
arglist__14029 = cljs.core.next(arglist__14029);
var start_idx = cljs.core.first(arglist__14029);
var p__14026 = cljs.core.rest(arglist__14029);
return substr__delegate(s,start_idx,p__14026);
});
substr.cljs$core$IFn$_invoke$arity$variadic = substr__delegate;
return substr;
})()
;
taoensso.encore.str_contains_QMARK_ = (function str_contains_QMARK_(s,substr){return cljs.core.not_EQ_.call(null,-1,s.indexOf(substr));
});
taoensso.encore.str_starts_with_QMARK_ = (function str_starts_with_QMARK_(s,substr){return (s.indexOf(substr) === 0);
});
taoensso.encore.str_ends_with_QMARK_ = (function str_ends_with_QMARK_(s,substr){var s_len = s.length;var substr_len = substr.length;if((s_len >= substr_len))
{return cljs.core.not_EQ_.call(null,-1,s.indexOf(substr,(s_len - substr_len)));
} else
{return null;
}
});
/**
* Like `clojure.string/join` but ensures no double separators.
* @param {...*} var_args
*/
taoensso.encore.join_once = (function() { 
var join_once__delegate = function (separator,coll){return cljs.core.reduce.call(null,(function (s1,s2){var s1__$1 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s1));var s2__$1 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s2));if(cljs.core.truth_(taoensso.encore.str_ends_with_QMARK_.call(null,s1__$1,separator)))
{if(taoensso.encore.str_starts_with_QMARK_.call(null,s2__$1,separator))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s1__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s2__$1.substring(1)));
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s1__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s2__$1));
}
} else
{if(taoensso.encore.str_starts_with_QMARK_.call(null,s2__$1,separator))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s1__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s2__$1));
} else
{if((cljs.core._EQ_.call(null,s1__$1,"")) || (cljs.core._EQ_.call(null,s2__$1,"")))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s1__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s2__$1));
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s1__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(separator)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s2__$1));
}
}
}
}),null,coll);
};
var join_once = function (separator,var_args){
var coll = null;if (arguments.length > 1) {
  coll = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return join_once__delegate.call(this,separator,coll);};
join_once.cljs$lang$maxFixedArity = 1;
join_once.cljs$lang$applyTo = (function (arglist__14030){
var separator = cljs.core.first(arglist__14030);
var coll = cljs.core.rest(arglist__14030);
return join_once__delegate(separator,coll);
});
join_once.cljs$core$IFn$_invoke$arity$variadic = join_once__delegate;
return join_once;
})()
;
/**
* Joins string paths (URLs, file paths, etc.) ensuring correct "/"
* interposition.
* @param {...*} var_args
*/
taoensso.encore.path = (function() { 
var path__delegate = function (parts){return cljs.core.apply.call(null,taoensso.encore.join_once,"/",parts);
};
var path = function (var_args){
var parts = null;if (arguments.length > 0) {
  parts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return path__delegate.call(this,parts);};
path.cljs$lang$maxFixedArity = 0;
path.cljs$lang$applyTo = (function (arglist__14031){
var parts = cljs.core.seq(arglist__14031);
return path__delegate(parts);
});
path.cljs$core$IFn$_invoke$arity$variadic = path__delegate;
return path;
})()
;
/**
* Converts all word breaks of any form and length (including line breaks of any
* form, tabs, spaces, etc.) to a single regular space.
*/
taoensso.encore.norm_word_breaks = (function norm_word_breaks(s){return clojure.string.replace.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),/\s+/," ");
});
taoensso.encore.count_words = (function count_words(s){if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return 0;
} else
{return cljs.core.count.call(null,clojure.string.split.call(null,s,/\s+/));
}
});
taoensso.encore.count_words.call(null,"Hello this is a    test");
taoensso.encore.gc_rate = (1.0 / 16000);
/**
* Swaps associative value at key and returns the new value.
* Specialized, fast `swap-in!` for use mostly by memoization utils.
*/
taoensso.encore.swap_val_BANG_ = (function swap_val_BANG_(atom_,k,f){while(true){
var old_m = cljs.core.deref.call(null,atom_);var new_v = f.call(null,cljs.core.get.call(null,old_m,k));var new_m = cljs.core.assoc.call(null,old_m,k,new_v);if(cljs.core.compare_and_set_BANG_.call(null,atom_,old_m,new_m))
{return new_v;
} else
{{
continue;
}
}
break;
}
});
/**
* Like `(memoize* f)` but takes an explicit cache atom (possibly nil)
* and immediately applies memoized f to given arguments.
* @param {...*} var_args
*/
taoensso.encore.memoized = (function() { 
var memoized__delegate = function (cache,f,args){if(cljs.core.not.call(null,cache))
{return cljs.core.apply.call(null,f,args);
} else
{return cljs.core.deref.call(null,taoensso.encore.swap_val_BANG_.call(null,cache,args,(function (p1__14032_SHARP_){if(cljs.core.truth_(p1__14032_SHARP_))
{return p1__14032_SHARP_;
} else
{return (new cljs.core.Delay(cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done","done",1016993524),false,new cljs.core.Keyword(null,"value","value",1125876963),null], null)),(function (){return cljs.core.apply.call(null,f,args);
})));
}
})));
}
};
var memoized = function (cache,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return memoized__delegate.call(this,cache,f,args);};
memoized.cljs$lang$maxFixedArity = 2;
memoized.cljs$lang$applyTo = (function (arglist__14033){
var cache = cljs.core.first(arglist__14033);
arglist__14033 = cljs.core.next(arglist__14033);
var f = cljs.core.first(arglist__14033);
var args = cljs.core.rest(arglist__14033);
return memoized__delegate(cache,f,args);
});
memoized.cljs$core$IFn$_invoke$arity$variadic = memoized__delegate;
return memoized;
})()
;
/**
* Like `clojure.core/memoize` but:
* * Uses delays to prevent race conditions on writes.
* * Supports auto invalidation & gc with `ttl-ms` option.
* * Supports manual invalidation by prepending args with `:mem/del` or `:mem/fresh`.
* * Supports cache size limit & gc with `cache-size` option.
*/
taoensso.encore.memoize_STAR_ = (function() {
var memoize_STAR_ = null;
var memoize_STAR___1 = (function (f){var cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);return ((function (cache){
return (function() { 
var G__14072__delegate = function (p__14054){var vec__14055 = p__14054;var arg1 = cljs.core.nth.call(null,vec__14055,0,null);var argn = cljs.core.nthnext.call(null,vec__14055,1);var args = vec__14055;if((arg1 === new cljs.core.Keyword("mem","del","mem/del",1020982117)))
{if((cljs.core.first.call(null,argn) === new cljs.core.Keyword("mem","all","mem/all",1020981651)))
{cljs.core.reset_BANG_.call(null,cache,cljs.core.PersistentArrayMap.EMPTY);
} else
{cljs.core.swap_BANG_.call(null,cache,cljs.core.dissoc,argn);
}
return null;
} else
{var fresh_QMARK_ = (arg1 === new cljs.core.Keyword("mem","fresh","mem/fresh",1118645762));var args__$1 = ((fresh_QMARK_)?argn:args);return cljs.core.deref.call(null,taoensso.encore.swap_val_BANG_.call(null,cache,args__$1,((function (fresh_QMARK_,args__$1,vec__14055,arg1,argn,args,cache){
return (function (_QMARK_dv){if(cljs.core.truth_((function (){var and__3542__auto__ = _QMARK_dv;if(cljs.core.truth_(and__3542__auto__))
{return !(fresh_QMARK_);
} else
{return and__3542__auto__;
}
})()))
{return _QMARK_dv;
} else
{return (new cljs.core.Delay(cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done","done",1016993524),false,new cljs.core.Keyword(null,"value","value",1125876963),null], null)),((function (fresh_QMARK_,args__$1,vec__14055,arg1,argn,args,cache){
return (function (){return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,vec__14055,arg1,argn,args,cache))
));
}
});})(fresh_QMARK_,args__$1,vec__14055,arg1,argn,args,cache))
));
}
};
var G__14072 = function (var_args){
var p__14054 = null;if (arguments.length > 0) {
  p__14054 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14072__delegate.call(this,p__14054);};
G__14072.cljs$lang$maxFixedArity = 0;
G__14072.cljs$lang$applyTo = (function (arglist__14073){
var p__14054 = cljs.core.seq(arglist__14073);
return G__14072__delegate(p__14054);
});
G__14072.cljs$core$IFn$_invoke$arity$variadic = G__14072__delegate;
return G__14072;
})()
;
;})(cache))
});
var memoize_STAR___2 = (function (ttl_ms,f){var cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);return ((function (cache){
return (function() { 
var G__14074__delegate = function (p__14056){var vec__14057 = p__14056;var arg1 = cljs.core.nth.call(null,vec__14057,0,null);var argn = cljs.core.nthnext.call(null,vec__14057,1);var args = vec__14057;if((arg1 === new cljs.core.Keyword("mem","del","mem/del",1020982117)))
{if((cljs.core.first.call(null,argn) === new cljs.core.Keyword("mem","all","mem/all",1020981651)))
{cljs.core.reset_BANG_.call(null,cache,cljs.core.PersistentArrayMap.EMPTY);
} else
{cljs.core.swap_BANG_.call(null,cache,cljs.core.dissoc,argn);
}
return null;
} else
{if((cljs.core.rand.call(null) <= taoensso.encore.gc_rate))
{var instant_14075 = taoensso.encore.now_udt.call(null);cljs.core.swap_BANG_.call(null,cache,((function (instant_14075,vec__14057,arg1,argn,args,cache){
return (function (m){return cljs.core.reduce_kv.call(null,((function (instant_14075,vec__14057,arg1,argn,args,cache){
return (function (m_STAR_,k,p__14058){var vec__14059 = p__14058;var dv = cljs.core.nth.call(null,vec__14059,0,null);var udt = cljs.core.nth.call(null,vec__14059,1,null);var cv = vec__14059;if(((instant_14075 - udt) > ttl_ms))
{return m_STAR_;
} else
{return cljs.core.assoc.call(null,m_STAR_,k,cv);
}
});})(instant_14075,vec__14057,arg1,argn,args,cache))
,cljs.core.PersistentArrayMap.EMPTY,m);
});})(instant_14075,vec__14057,arg1,argn,args,cache))
);
} else
{}
var fresh_QMARK_ = (arg1 === new cljs.core.Keyword("mem","fresh","mem/fresh",1118645762));var args__$1 = ((fresh_QMARK_)?argn:args);var instant = taoensso.encore.now_udt.call(null);return cljs.core.deref.call(null,taoensso.encore.first_nth.call(null,taoensso.encore.swap_val_BANG_.call(null,cache,args__$1,((function (fresh_QMARK_,args__$1,instant,vec__14057,arg1,argn,args,cache){
return (function (_QMARK_cv){if(cljs.core.truth_((function (){var and__3542__auto__ = _QMARK_cv;if(cljs.core.truth_(and__3542__auto__))
{var and__3542__auto____$1 = !(fresh_QMARK_);if(and__3542__auto____$1)
{var vec__14061 = _QMARK_cv;var _dv = cljs.core.nth.call(null,vec__14061,0,null);var udt = cljs.core.nth.call(null,vec__14061,1,null);return ((instant - udt) < ttl_ms);
} else
{return and__3542__auto____$1;
}
} else
{return and__3542__auto__;
}
})()))
{return _QMARK_cv;
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done","done",1016993524),false,new cljs.core.Keyword(null,"value","value",1125876963),null], null)),((function (fresh_QMARK_,args__$1,instant,vec__14057,arg1,argn,args,cache){
return (function (){return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,instant,vec__14057,arg1,argn,args,cache))
)),instant], null);
}
});})(fresh_QMARK_,args__$1,instant,vec__14057,arg1,argn,args,cache))
)));
}
};
var G__14074 = function (var_args){
var p__14056 = null;if (arguments.length > 0) {
  p__14056 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14074__delegate.call(this,p__14056);};
G__14074.cljs$lang$maxFixedArity = 0;
G__14074.cljs$lang$applyTo = (function (arglist__14076){
var p__14056 = cljs.core.seq(arglist__14076);
return G__14074__delegate(p__14056);
});
G__14074.cljs$core$IFn$_invoke$arity$variadic = G__14074__delegate;
return G__14074;
})()
;
;})(cache))
});
var memoize_STAR___3 = (function (cache_size,ttl_ms,f){var state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",1017464079),0], null));return ((function (state){
return (function() { 
var G__14077__delegate = function (p__14062){var vec__14063 = p__14062;var arg1 = cljs.core.nth.call(null,vec__14063,0,null);var argn = cljs.core.nthnext.call(null,vec__14063,1);var args = vec__14063;if((arg1 === new cljs.core.Keyword("mem","del","mem/del",1020982117)))
{if((cljs.core.first.call(null,argn) === new cljs.core.Keyword("mem","all","mem/all",1020981651)))
{cljs.core.reset_BANG_.call(null,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",1017464079),0], null));
} else
{cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,argn);
}
return null;
} else
{if((cljs.core.rand.call(null) <= taoensso.encore.gc_rate))
{var instant_14078 = taoensso.encore.now_udt.call(null);cljs.core.swap_BANG_.call(null,state,((function (instant_14078,vec__14063,arg1,argn,args,state){
return (function (m){var m_STAR_ = cljs.core.dissoc.call(null,m,new cljs.core.Keyword(null,"tick","tick",1017464079));var m_STAR___$1 = ((cljs.core.not.call(null,ttl_ms))?m_STAR_:cljs.core.reduce_kv.call(null,((function (m_STAR_,instant_14078,vec__14063,arg1,argn,args,state){
return (function (m_STAR___$1,k,p__14064){var vec__14065 = p__14064;var dv = cljs.core.nth.call(null,vec__14065,0,null);var udt = cljs.core.nth.call(null,vec__14065,1,null);var _ = cljs.core.nth.call(null,vec__14065,2,null);var ___$1 = cljs.core.nth.call(null,vec__14065,3,null);var cv = vec__14065;if(((instant_14078 - udt) > ttl_ms))
{return m_STAR___$1;
} else
{return cljs.core.assoc.call(null,m_STAR___$1,k,cv);
}
});})(m_STAR_,instant_14078,vec__14063,arg1,argn,args,state))
,cljs.core.PersistentArrayMap.EMPTY,m_STAR_));var n_to_prune = (cljs.core.count.call(null,m_STAR___$1) - cache_size);var m_STAR___$2 = ((!((n_to_prune > 0)))?m_STAR___$1:cljs.core.apply.call(null,cljs.core.dissoc,m_STAR___$1,cljs.core.mapv.call(null,((function (m_STAR_,m_STAR___$1,n_to_prune,instant_14078,vec__14063,arg1,argn,args,state){
return (function (p1__14035_SHARP_){return cljs.core.nth.call(null,p1__14035_SHARP_,1);
});})(m_STAR_,m_STAR___$1,n_to_prune,instant_14078,vec__14063,arg1,argn,args,state))
,cljs.core.take.call(null,n_to_prune,cljs.core.sort_by.call(null,((function (m_STAR_,m_STAR___$1,n_to_prune,instant_14078,vec__14063,arg1,argn,args,state){
return (function (p1__14034_SHARP_){return cljs.core.nth.call(null,p1__14034_SHARP_,0);
});})(m_STAR_,m_STAR___$1,n_to_prune,instant_14078,vec__14063,arg1,argn,args,state))
,cljs.core.mapv.call(null,((function (m_STAR_,m_STAR___$1,n_to_prune,instant_14078,vec__14063,arg1,argn,args,state){
return (function (k){var vec__14066 = m_STAR___$1.call(null,k);var _ = cljs.core.nth.call(null,vec__14066,0,null);var ___$1 = cljs.core.nth.call(null,vec__14066,1,null);var tick_lru = cljs.core.nth.call(null,vec__14066,2,null);var tick_lfu = cljs.core.nth.call(null,vec__14066,3,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tick_lru + tick_lfu),k], null);
});})(m_STAR_,m_STAR___$1,n_to_prune,instant_14078,vec__14063,arg1,argn,args,state))
,cljs.core.keys.call(null,m_STAR___$1)))))));return cljs.core.assoc.call(null,m_STAR___$2,new cljs.core.Keyword(null,"tick","tick",1017464079),new cljs.core.Keyword(null,"tick","tick",1017464079).cljs$core$IFn$_invoke$arity$1(m));
});})(instant_14078,vec__14063,arg1,argn,args,state))
);
} else
{}
var fresh_QMARK_ = (arg1 === new cljs.core.Keyword("mem","fresh","mem/fresh",1118645762));var args__$1 = ((fresh_QMARK_)?argn:args);var _QMARK_instant = (cljs.core.truth_(ttl_ms)?taoensso.encore.now_udt.call(null):null);var tick_SINGLEQUOTE_ = new cljs.core.Keyword(null,"tick","tick",1017464079).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));var dv = taoensso.encore.first_nth.call(null,taoensso.encore.swap_val_BANG_.call(null,state,args__$1,((function (fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__14063,arg1,argn,args,state){
return (function (_QMARK_cv){if(cljs.core.truth_((function (){var and__3542__auto__ = _QMARK_cv;if(cljs.core.truth_(and__3542__auto__))
{var and__3542__auto____$1 = !(fresh_QMARK_);if(and__3542__auto____$1)
{var or__3554__auto__ = (_QMARK_instant == null);if(or__3554__auto__)
{return or__3554__auto__;
} else
{var vec__14070 = _QMARK_cv;var _dv = cljs.core.nth.call(null,vec__14070,0,null);var udt = cljs.core.nth.call(null,vec__14070,1,null);return ((_QMARK_instant - udt) < ttl_ms);
}
} else
{return and__3542__auto____$1;
}
} else
{return and__3542__auto__;
}
})()))
{return _QMARK_cv;
} else
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done","done",1016993524),false,new cljs.core.Keyword(null,"value","value",1125876963),null], null)),((function (fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__14063,arg1,argn,args,state){
return (function (){return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__14063,arg1,argn,args,state))
)),_QMARK_instant,tick_SINGLEQUOTE_,1], null);
}
});})(fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__14063,arg1,argn,args,state))
));cljs.core.swap_BANG_.call(null,state,((function (fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,dv,vec__14063,arg1,argn,args,state){
return (function (m){var temp__4126__auto__ = cljs.core.get.call(null,m,args__$1);if(cljs.core.truth_(temp__4126__auto__))
{var vec__14071 = temp__4126__auto__;var dv__$1 = cljs.core.nth.call(null,vec__14071,0,null);var _QMARK_udt = cljs.core.nth.call(null,vec__14071,1,null);var tick_lru = cljs.core.nth.call(null,vec__14071,2,null);var tick_lfu = cljs.core.nth.call(null,vec__14071,3,null);var cv = vec__14071;return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"tick","tick",1017464079),(tick_SINGLEQUOTE_ + 1),args__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dv__$1,_QMARK_udt,tick_SINGLEQUOTE_,(tick_lfu + 1)], null));
} else
{return null;
}
});})(fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,dv,vec__14063,arg1,argn,args,state))
);
return cljs.core.deref.call(null,dv);
}
};
var G__14077 = function (var_args){
var p__14062 = null;if (arguments.length > 0) {
  p__14062 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14077__delegate.call(this,p__14062);};
G__14077.cljs$lang$maxFixedArity = 0;
G__14077.cljs$lang$applyTo = (function (arglist__14079){
var p__14062 = cljs.core.seq(arglist__14079);
return G__14077__delegate(p__14062);
});
G__14077.cljs$core$IFn$_invoke$arity$variadic = G__14077__delegate;
return G__14077;
})()
;
;})(state))
});
memoize_STAR_ = function(cache_size,ttl_ms,f){
switch(arguments.length){
case 1:
return memoize_STAR___1.call(this,cache_size);
case 2:
return memoize_STAR___2.call(this,cache_size,ttl_ms);
case 3:
return memoize_STAR___3.call(this,cache_size,ttl_ms,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
memoize_STAR_.cljs$core$IFn$_invoke$arity$1 = memoize_STAR___1;
memoize_STAR_.cljs$core$IFn$_invoke$arity$2 = memoize_STAR___2;
memoize_STAR_.cljs$core$IFn$_invoke$arity$3 = memoize_STAR___3;
return memoize_STAR_;
})()
;
/**
* Returns a `(fn [& [id]])` that returns either `nil` (limit okay) or number of
* msecs until next rate limit window (rate limited).
*/
taoensso.encore.rate_limiter = (function rate_limiter(ncalls_limit,window_ms){var state = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.PersistentArrayMap.EMPTY], null));return ((function (state){
return (function() { 
var G__14098__delegate = function (p__14089){var vec__14090 = p__14089;var id = cljs.core.nth.call(null,vec__14090,0,null);if((cljs.core.rand.call(null) <= taoensso.encore.gc_rate))
{var instant_14099 = taoensso.encore.now_udt.call(null);cljs.core.swap_BANG_.call(null,state,((function (instant_14099,vec__14090,id,state){
return (function (p__14091){var vec__14092 = p__14091;var _ = cljs.core.nth.call(null,vec__14092,0,null);var m = cljs.core.nth.call(null,vec__14092,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.reduce_kv.call(null,((function (vec__14092,_,m,instant_14099,vec__14090,id,state){
return (function (m_STAR_,id__$1,p__14093){var vec__14094 = p__14093;var udt_window_start = cljs.core.nth.call(null,vec__14094,0,null);var ncalls = cljs.core.nth.call(null,vec__14094,1,null);if(((instant_14099 - udt_window_start) > window_ms))
{return m_STAR_;
} else
{return cljs.core.assoc.call(null,m_STAR_,id__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [udt_window_start,ncalls], null));
}
});})(vec__14092,_,m,instant_14099,vec__14090,id,state))
,cljs.core.PersistentArrayMap.EMPTY,m)], null);
});})(instant_14099,vec__14090,id,state))
);
} else
{}
return cljs.core.nth.call(null,(function (){var instant = taoensso.encore.now_udt.call(null);return cljs.core.swap_BANG_.call(null,state,((function (instant,vec__14090,id,state){
return (function (p__14095){var vec__14096 = p__14095;var _ = cljs.core.nth.call(null,vec__14096,0,null);var m = cljs.core.nth.call(null,vec__14096,1,null);var temp__4124__auto__ = m.call(null,id);if(cljs.core.truth_(temp__4124__auto__))
{var vec__14097 = temp__4124__auto__;var udt_window_start = cljs.core.nth.call(null,vec__14097,0,null);var ncalls = cljs.core.nth.call(null,vec__14097,1,null);if(((instant - udt_window_start) > window_ms))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.assoc.call(null,m,id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instant,1], null))], null);
} else
{if((ncalls < ncalls_limit))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.assoc.call(null,m,id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [udt_window_start,(ncalls + 1)], null))], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((udt_window_start + window_ms) - instant),m], null);
}
}
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.assoc.call(null,m,id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instant,1], null))], null);
}
});})(instant,vec__14090,id,state))
);
})(),0);
};
var G__14098 = function (var_args){
var p__14089 = null;if (arguments.length > 0) {
  p__14089 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14098__delegate.call(this,p__14089);};
G__14098.cljs$lang$maxFixedArity = 0;
G__14098.cljs$lang$applyTo = (function (arglist__14100){
var p__14089 = cljs.core.seq(arglist__14100);
return G__14098__delegate(p__14089);
});
G__14098.cljs$core$IFn$_invoke$arity$variadic = G__14098__delegate;
return G__14098;
})()
;
;})(state))
});
/**
* Wraps fn so that it returns {:result _ :backoff-ms _}.
*/
taoensso.encore.rate_limited = (function rate_limited(ncalls_limit,window_ms,f){var rl = taoensso.encore.rate_limiter.call(null,ncalls_limit,window_ms);return ((function (rl){
return (function() { 
var G__14101__delegate = function (args){var temp__4124__auto__ = rl.call(null);if(cljs.core.truth_(temp__4124__auto__))
{var backoff_ms = temp__4124__auto__;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backoff-ms","backoff-ms",4194291165),backoff_ms], null);
} else
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",4374444943),f.call(null)], null);
}
};
var G__14101 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14101__delegate.call(this,args);};
G__14101.cljs$lang$maxFixedArity = 0;
G__14101.cljs$lang$applyTo = (function (arglist__14102){
var args = cljs.core.seq(arglist__14102);
return G__14101__delegate(args);
});
G__14101.cljs$core$IFn$_invoke$arity$variadic = G__14101__delegate;
return G__14101;
})()
;
;})(rl))
});
taoensso.encore.log = (function log(x){if(cljs.core.truth_(typeof console != 'undefined'))
{console.log(x);
} else
{print(x);
}
return null;
});
/**
* @param {...*} var_args
*/
taoensso.encore.sayp = (function() { 
var sayp__delegate = function (xs){return alert(clojure.string.join.call(null," ",xs));
};
var sayp = function (var_args){
var xs = null;if (arguments.length > 0) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sayp__delegate.call(this,xs);};
sayp.cljs$lang$maxFixedArity = 0;
sayp.cljs$lang$applyTo = (function (arglist__14107){
var xs = cljs.core.seq(arglist__14107);
return sayp__delegate(xs);
});
sayp.cljs$core$IFn$_invoke$arity$variadic = sayp__delegate;
return sayp;
})()
;
/**
* @param {...*} var_args
*/
taoensso.encore.sayf = (function() { 
var sayf__delegate = function (fmt,xs){return alert(cljs.core.apply.call(null,taoensso.encore.format,fmt,xs));
};
var sayf = function (fmt,var_args){
var xs = null;if (arguments.length > 1) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return sayf__delegate.call(this,fmt,xs);};
sayf.cljs$lang$maxFixedArity = 1;
sayf.cljs$lang$applyTo = (function (arglist__14108){
var fmt = cljs.core.first(arglist__14108);
var xs = cljs.core.rest(arglist__14108);
return sayf__delegate(fmt,xs);
});
sayf.cljs$core$IFn$_invoke$arity$variadic = sayf__delegate;
return sayf;
})()
;
/**
* @param {...*} var_args
*/
taoensso.encore.logp = (function() { 
var logp__delegate = function (xs){return taoensso.encore.log.call(null,clojure.string.join.call(null," ",xs));
};
var logp = function (var_args){
var xs = null;if (arguments.length > 0) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return logp__delegate.call(this,xs);};
logp.cljs$lang$maxFixedArity = 0;
logp.cljs$lang$applyTo = (function (arglist__14109){
var xs = cljs.core.seq(arglist__14109);
return logp__delegate(xs);
});
logp.cljs$core$IFn$_invoke$arity$variadic = logp__delegate;
return logp;
})()
;
/**
* @param {...*} var_args
*/
taoensso.encore.logf = (function() { 
var logf__delegate = function (fmt,xs){return taoensso.encore.log.call(null,cljs.core.apply.call(null,taoensso.encore.format,fmt,xs));
};
var logf = function (fmt,var_args){
var xs = null;if (arguments.length > 1) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return logf__delegate.call(this,fmt,xs);};
logf.cljs$lang$maxFixedArity = 1;
logf.cljs$lang$applyTo = (function (arglist__14110){
var fmt = cljs.core.first(arglist__14110);
var xs = cljs.core.rest(arglist__14110);
return logf__delegate(fmt,xs);
});
logf.cljs$core$IFn$_invoke$arity$variadic = logf__delegate;
return logf;
})()
;
taoensso.encore.debugf = cljs.core.comp.call(null,(function (p1__14103_SHARP_){return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__14103_SHARP_));
}),taoensso.encore.logf);
taoensso.encore.infof = cljs.core.comp.call(null,(function (p1__14104_SHARP_){return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__14104_SHARP_));
}),taoensso.encore.logf);
taoensso.encore.warnf = cljs.core.comp.call(null,(function (p1__14105_SHARP_){return ("WARN: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__14105_SHARP_));
}),taoensso.encore.logf);
taoensso.encore.errorf = cljs.core.comp.call(null,(function (p1__14106_SHARP_){return ("ERROR: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__14106_SHARP_));
}),taoensso.encore.logf);
/**
* Returns browser window's current location. Forgeable.
*/
taoensso.encore.get_window_location = (function get_window_location(){var loc_STAR_ = window.location;var loc = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"href","href",1017115293),loc_STAR_.href,new cljs.core.Keyword(null,"protocol","protocol",4319707658),loc_STAR_.protocol,new cljs.core.Keyword(null,"hostname","hostname",714100645),loc_STAR_.hostname,new cljs.core.Keyword(null,"host","host",1017112858),loc_STAR_.host,new cljs.core.Keyword(null,"pathname","pathname",2249078690),loc_STAR_.pathname,new cljs.core.Keyword(null,"search","search",4402534682),loc_STAR_.search,new cljs.core.Keyword(null,"hash","hash",1017099392),loc_STAR_.hash], null);return loc;
});
/**
* @param {...*} var_args
*/
taoensso.encore.set_exp_backoff_timeout_BANG_ = (function() { 
var set_exp_backoff_timeout_BANG___delegate = function (nullary_f,p__14111){var vec__14113 = p__14111;var nattempt = cljs.core.nth.call(null,vec__14113,0,null);return window.setTimeout(nullary_f,taoensso.encore.exp_backoff.call(null,(function (){var or__3554__auto__ = nattempt;if(cljs.core.truth_(or__3554__auto__))
{return or__3554__auto__;
} else
{return 0;
}
})()));
};
var set_exp_backoff_timeout_BANG_ = function (nullary_f,var_args){
var p__14111 = null;if (arguments.length > 1) {
  p__14111 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_exp_backoff_timeout_BANG___delegate.call(this,nullary_f,p__14111);};
set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = 1;
set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (arglist__14114){
var nullary_f = cljs.core.first(arglist__14114);
var p__14111 = cljs.core.rest(arglist__14114);
return set_exp_backoff_timeout_BANG___delegate(nullary_f,p__14111);
});
set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_exp_backoff_timeout_BANG___delegate;
return set_exp_backoff_timeout_BANG_;
})()
;
taoensso.encore.xhr_pool_ = (new cljs.core.Delay(cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done","done",1016993524),false,new cljs.core.Keyword(null,"value","value",1125876963),null], null)),(function (){return (new goog.net.XhrIoPool());
})));
/**
* Returns an immediately available XhrIo instance, or nil. The instance must be
* released back to pool manually. Use core.async to wait for an available
* instance, etc.
*/
taoensso.encore.get_pooled_xhr_BANG_ = (function get_pooled_xhr_BANG_(){var result = cljs.core.deref.call(null,taoensso.encore.xhr_pool_).getObject();if((void 0 === result))
{return null;
} else
{return result;
}
});
/**
* [uri method get-or-post-params] -> [uri post-content]
*/
taoensso.encore.coerce_xhr_params = (function coerce_xhr_params(uri,method,params){if(((params == null)) || (cljs.core.map_QMARK_.call(null,params)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",-1640527972,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"params","params",1659007807,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1637187556,null),new cljs.core.Symbol(null,"params","params",1659007807,null))))))));
}
var _QMARK_pstr = ((cljs.core.empty_QMARK_.call(null,params))?null:(function (){var s = goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
})());var G__14116 = (((method instanceof cljs.core.Keyword))?method.fqn:null);switch (G__14116) {
case "post":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,_QMARK_pstr], null);

break;
case "get":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(_QMARK_pstr)?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_pstr)):uri),null], null);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method))));

}
});
/**
* Alpha - subject to change.
* Simple+lightweight Ajax via Google Closure.
* Ref. https://developers.google.com/closure/library/docs/xhrio
*/
taoensso.encore.ajax_lite = (function ajax_lite(uri,p__14120,callback){var map__14134 = p__14120;var map__14134__$1 = ((cljs.core.seq_QMARK_.call(null,map__14134))?cljs.core.apply.call(null,cljs.core.hash_map,map__14134):map__14134);var resp_type = cljs.core.get.call(null,map__14134__$1,new cljs.core.Keyword(null,"resp-type","resp-type",3288017545),new cljs.core.Keyword(null,"auto","auto",1016910113));var timeout = cljs.core.get.call(null,map__14134__$1,new cljs.core.Keyword(null,"timeout","timeout",3994960083),10000);var headers = cljs.core.get.call(null,map__14134__$1,new cljs.core.Keyword(null,"headers","headers",1809212152));var params = cljs.core.get.call(null,map__14134__$1,new cljs.core.Keyword(null,"params","params",4313443576));var method = cljs.core.get.call(null,map__14134__$1,new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"get","get",1014006472));if(((timeout == null)) || (taoensso.encore.nneg_int_QMARK_.call(null,timeout)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",-1640527972,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"timeout","timeout",1340524314,null)),cljs.core.list(new cljs.core.Symbol(null,"nneg-int?","nneg-int?",-2019261324,null),new cljs.core.Symbol(null,"timeout","timeout",1340524314,null))))))));
}
var temp__4124__auto__ = taoensso.encore.get_pooled_xhr_BANG_.call(null);if(cljs.core.truth_(temp__4124__auto__))
{var xhr = temp__4124__auto__;try{var method_STAR_ = (function (){var G__14137 = (((method instanceof cljs.core.Keyword))?method.fqn:null);switch (G__14137) {
case "post":
return "POST";

break;
case "get":
return "GET";

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method))));

}
})();var params__$1 = taoensso.encore.map_keys.call(null,cljs.core.name,params);var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["X-Requested-With","XMLHTTPRequest"], null),taoensso.encore.map_keys.call(null,cljs.core.name,headers));var vec__14136 = taoensso.encore.coerce_xhr_params.call(null,uri,method,params__$1);var uri_STAR_ = cljs.core.nth.call(null,vec__14136,0,null);var post_content_STAR_ = cljs.core.nth.call(null,vec__14136,1,null);var headers_STAR_ = cljs.core.clj__GT_js.call(null,((cljs.core.not.call(null,post_content_STAR_))?headers__$1:cljs.core.assoc.call(null,headers__$1,"Content-Type","application/x-www-form-urlencoded; charset=UTF-8")));var G__14138 = xhr;goog.events.listenOnce(G__14138,goog.net.EventType.READY,((function (G__14138,method_STAR_,params__$1,headers__$1,vec__14136,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4124__auto__,map__14134,map__14134__$1,resp_type,timeout,headers,params,method){
return (function (_){return cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);
});})(G__14138,method_STAR_,params__$1,headers__$1,vec__14136,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4124__auto__,map__14134,map__14134__$1,resp_type,timeout,headers,params,method))
);
goog.events.listenOnce(G__14138,goog.net.EventType.COMPLETE,((function (G__14138,method_STAR_,params__$1,headers__$1,vec__14136,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4124__auto__,map__14134,map__14134__$1,resp_type,timeout,headers,params,method){
return (function wrapped_callback(resp){var status = xhr.getStatus();var got_resp_QMARK_ = cljs.core.not_EQ_.call(null,status,-1);var content_type = ((got_resp_QMARK_)?xhr.getResponseHeader("Content-Type"):null);var cb_arg = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"raw-resp","raw-resp",1471254983),resp,new cljs.core.Keyword(null,"xhr","xhr",1014022900),xhr,new cljs.core.Keyword(null,"content-type","content-type",1799574400),((got_resp_QMARK_)?content_type:null),new cljs.core.Keyword(null,"content","content",1965434859),((got_resp_QMARK_)?(function (){var resp_type__$1 = ((!(cljs.core._EQ_.call(null,resp_type,new cljs.core.Keyword(null,"auto","auto",1016910113))))?resp_type:(function (){var pred__14143 = ((function (status,got_resp_QMARK_,content_type,G__14138,method_STAR_,params__$1,headers__$1,vec__14136,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4124__auto__,map__14134,map__14134__$1,resp_type,timeout,headers,params,method){
return (function (p1__14119_SHARP_,p2__14118_SHARP_){return taoensso.encore.str_contains_QMARK_.call(null,p2__14118_SHARP_,p1__14119_SHARP_);
});})(status,got_resp_QMARK_,content_type,G__14138,method_STAR_,params__$1,headers__$1,vec__14136,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4124__auto__,map__14134,map__14134__$1,resp_type,timeout,headers,params,method))
;var expr__14144 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(content_type));if(pred__14143.call(null,"/edn",expr__14144))
{return new cljs.core.Keyword(null,"edn","edn",1014004513);
} else
{if(pred__14143.call(null,"/json",expr__14144))
{return new cljs.core.Keyword(null,"json","json",1017176154);
} else
{if(pred__14143.call(null,"/xml",expr__14144))
{return new cljs.core.Keyword(null,"xml","xml",1014023049);
} else
{if(pred__14143.call(null,"/html",expr__14144))
{return new cljs.core.Keyword(null,"text","text",1017460895);
} else
{return new cljs.core.Keyword(null,"text","text",1017460895);
}
}
}
}
})());var G__14146 = (((resp_type__$1 instanceof cljs.core.Keyword))?resp_type__$1.fqn:null);switch (G__14146) {
case "edn":
return cljs.reader.read_string.call(null,xhr.getResponseText());

break;
case "xml":
return xhr.getResponseXml();

break;
case "json":
return xhr.getResponseJson();

break;
case "text":
return xhr.getResponseText();

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resp_type__$1))));

}
})():null),new cljs.core.Keyword(null,"status","status",4416389988),((got_resp_QMARK_)?status:null),new cljs.core.Keyword(null,"error","error",1110689146),((got_resp_QMARK_)?((((200 <= status)) && ((status <= 299)))?null:status):cljs.core.get.call(null,new cljs.core.PersistentArrayMap.fromArray([goog.net.ErrorCode.EXCEPTION,new cljs.core.Keyword(null,"exception","exception",2495529921),goog.net.ErrorCode.HTTP_ERROR,new cljs.core.Keyword(null,"http-error","http-error",848845813),goog.net.ErrorCode.ABORT,new cljs.core.Keyword(null,"abort","abort",1106515618),goog.net.ErrorCode.TIMEOUT,new cljs.core.Keyword(null,"timeout","timeout",3994960083)], true, false),xhr.getLastErrorCode(),new cljs.core.Keyword(null,"unknown","unknown",729063356)))], null);return callback.call(null,cb_arg);
});})(G__14138,method_STAR_,params__$1,headers__$1,vec__14136,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4124__auto__,map__14134,map__14134__$1,resp_type,timeout,headers,params,method))
);
G__14138.setTimeoutInterval((function (){var or__3554__auto__ = timeout;if(cljs.core.truth_(or__3554__auto__))
{return or__3554__auto__;
} else
{return 0;
}
})());
G__14138.send(uri_STAR_,method_STAR_,post_content_STAR_,headers_STAR_);
return G__14138;
}catch (e14135){if((e14135 instanceof Error))
{var e = e14135;taoensso.encore.logf.call(null,"Ajax error: %s",e);
cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);
return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14135;
} else
{return null;
}
}
}} else
{return callback.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"xhr-pool-depleted","xhr-pool-depleted",4237587523)], null));
}
});

//# sourceMappingURL=encore.js.map