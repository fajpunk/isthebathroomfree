// Compiled by ClojureScript 0.0-2234
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__3542__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__3542__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__3542__auto__;
}
});
/**
* Finds the index of class in a space-delimited class-name
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_index = (function class_index(class_name,class$){var start_from = 0;while(true){
var i = class_name.indexOf(class$,start_from);if((i >= 0))
{if(dommy.attrs.class_match_QMARK_.call(null,class_name,class$,i))
{return i;
} else
{{
var G__11870 = (i + class$.length);
start_from = G__11870;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Does an HTML element have a class. Uses Element::classList if
* available and otherwise does fast parse of className string
*/
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4124__auto__ = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto__))
{var class_list = temp__4124__auto__;return class_list.contains(class$__$1);
} else
{var temp__4126__auto__ = elem__$1.className;if(cljs.core.truth_(temp__4126__auto__))
{var class_name = temp__4126__auto__;var temp__4126__auto____$1 = dommy.attrs.class_index.call(null,class_name,class$__$1);if(cljs.core.truth_(temp__4126__auto____$1))
{var i = temp__4126__auto____$1;return (i >= 0);
} else
{return null;
}
} else
{return null;
}
}
});
/**
* add class to element
* @param {...*} var_args
*/
dommy.attrs.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var classes__$1 = clojure.string.trim.call(null,cljs.core.name.call(null,classes));if(cljs.core.seq.call(null,classes__$1))
{var temp__4124__auto___11895 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___11895))
{var class_list_11896 = temp__4124__auto___11895;var seq__11883_11897 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__11884_11898 = null;var count__11885_11899 = 0;var i__11886_11900 = 0;while(true){
if((i__11886_11900 < count__11885_11899))
{var class_11901 = cljs.core._nth.call(null,chunk__11884_11898,i__11886_11900);class_list_11896.add(class_11901);
{
var G__11902 = seq__11883_11897;
var G__11903 = chunk__11884_11898;
var G__11904 = count__11885_11899;
var G__11905 = (i__11886_11900 + 1);
seq__11883_11897 = G__11902;
chunk__11884_11898 = G__11903;
count__11885_11899 = G__11904;
i__11886_11900 = G__11905;
continue;
}
} else
{var temp__4126__auto___11906 = cljs.core.seq.call(null,seq__11883_11897);if(temp__4126__auto___11906)
{var seq__11883_11907__$1 = temp__4126__auto___11906;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11883_11907__$1))
{var c__4310__auto___11908 = cljs.core.chunk_first.call(null,seq__11883_11907__$1);{
var G__11909 = cljs.core.chunk_rest.call(null,seq__11883_11907__$1);
var G__11910 = c__4310__auto___11908;
var G__11911 = cljs.core.count.call(null,c__4310__auto___11908);
var G__11912 = 0;
seq__11883_11897 = G__11909;
chunk__11884_11898 = G__11910;
count__11885_11899 = G__11911;
i__11886_11900 = G__11912;
continue;
}
} else
{var class_11913 = cljs.core.first.call(null,seq__11883_11907__$1);class_list_11896.add(class_11913);
{
var G__11914 = cljs.core.next.call(null,seq__11883_11907__$1);
var G__11915 = null;
var G__11916 = 0;
var G__11917 = 0;
seq__11883_11897 = G__11914;
chunk__11884_11898 = G__11915;
count__11885_11899 = G__11916;
i__11886_11900 = G__11917;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_11918 = elem__$1.className;var seq__11887_11919 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__11888_11920 = null;var count__11889_11921 = 0;var i__11890_11922 = 0;while(true){
if((i__11890_11922 < count__11889_11921))
{var class_11923 = cljs.core._nth.call(null,chunk__11888_11920,i__11890_11922);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_11918,class_11923)))
{} else
{elem__$1.className = (((class_name_11918 === ""))?class_11923:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_11918)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_11923)));
}
{
var G__11924 = seq__11887_11919;
var G__11925 = chunk__11888_11920;
var G__11926 = count__11889_11921;
var G__11927 = (i__11890_11922 + 1);
seq__11887_11919 = G__11924;
chunk__11888_11920 = G__11925;
count__11889_11921 = G__11926;
i__11890_11922 = G__11927;
continue;
}
} else
{var temp__4126__auto___11928 = cljs.core.seq.call(null,seq__11887_11919);if(temp__4126__auto___11928)
{var seq__11887_11929__$1 = temp__4126__auto___11928;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11887_11929__$1))
{var c__4310__auto___11930 = cljs.core.chunk_first.call(null,seq__11887_11929__$1);{
var G__11931 = cljs.core.chunk_rest.call(null,seq__11887_11929__$1);
var G__11932 = c__4310__auto___11930;
var G__11933 = cljs.core.count.call(null,c__4310__auto___11930);
var G__11934 = 0;
seq__11887_11919 = G__11931;
chunk__11888_11920 = G__11932;
count__11889_11921 = G__11933;
i__11890_11922 = G__11934;
continue;
}
} else
{var class_11935 = cljs.core.first.call(null,seq__11887_11929__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_11918,class_11935)))
{} else
{elem__$1.className = (((class_name_11918 === ""))?class_11935:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_11918)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_11935)));
}
{
var G__11936 = cljs.core.next.call(null,seq__11887_11929__$1);
var G__11937 = null;
var G__11938 = 0;
var G__11939 = 0;
seq__11887_11919 = G__11936;
chunk__11888_11920 = G__11937;
count__11889_11921 = G__11938;
i__11890_11922 = G__11939;
continue;
}
}
} else
{}
}
break;
}
}
} else
{}
return elem__$1;
});
var add_class_BANG___3 = (function() { 
var G__11940__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__11891_11941 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__11892_11942 = null;var count__11893_11943 = 0;var i__11894_11944 = 0;while(true){
if((i__11894_11944 < count__11893_11943))
{var c_11945 = cljs.core._nth.call(null,chunk__11892_11942,i__11894_11944);add_class_BANG_.call(null,elem__$1,c_11945);
{
var G__11946 = seq__11891_11941;
var G__11947 = chunk__11892_11942;
var G__11948 = count__11893_11943;
var G__11949 = (i__11894_11944 + 1);
seq__11891_11941 = G__11946;
chunk__11892_11942 = G__11947;
count__11893_11943 = G__11948;
i__11894_11944 = G__11949;
continue;
}
} else
{var temp__4126__auto___11950 = cljs.core.seq.call(null,seq__11891_11941);if(temp__4126__auto___11950)
{var seq__11891_11951__$1 = temp__4126__auto___11950;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11891_11951__$1))
{var c__4310__auto___11952 = cljs.core.chunk_first.call(null,seq__11891_11951__$1);{
var G__11953 = cljs.core.chunk_rest.call(null,seq__11891_11951__$1);
var G__11954 = c__4310__auto___11952;
var G__11955 = cljs.core.count.call(null,c__4310__auto___11952);
var G__11956 = 0;
seq__11891_11941 = G__11953;
chunk__11892_11942 = G__11954;
count__11893_11943 = G__11955;
i__11894_11944 = G__11956;
continue;
}
} else
{var c_11957 = cljs.core.first.call(null,seq__11891_11951__$1);add_class_BANG_.call(null,elem__$1,c_11957);
{
var G__11958 = cljs.core.next.call(null,seq__11891_11951__$1);
var G__11959 = null;
var G__11960 = 0;
var G__11961 = 0;
seq__11891_11941 = G__11958;
chunk__11892_11942 = G__11959;
count__11893_11943 = G__11960;
i__11894_11944 = G__11961;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__11940 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11940__delegate.call(this,elem,classes,more_classes);};
G__11940.cljs$lang$maxFixedArity = 2;
G__11940.cljs$lang$applyTo = (function (arglist__11962){
var elem = cljs.core.first(arglist__11962);
arglist__11962 = cljs.core.next(arglist__11962);
var classes = cljs.core.first(arglist__11962);
var more_classes = cljs.core.rest(arglist__11962);
return G__11940__delegate(elem,classes,more_classes);
});
G__11940.cljs$core$IFn$_invoke$arity$variadic = G__11940__delegate;
return G__11940;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_class_BANG_.cljs$lang$maxFixedArity = 2;
add_class_BANG_.cljs$lang$applyTo = add_class_BANG___3.cljs$lang$applyTo;
add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = add_class_BANG___2;
add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return add_class_BANG_;
})()
;
dommy.attrs.remove_class_str = (function remove_class_str(init_class_name,class$){var class_name = init_class_name;while(true){
var class_len = class_name.length;var temp__4124__auto__ = dommy.attrs.class_index.call(null,class_name,class$);if(cljs.core.truth_(temp__4124__auto__))
{var i = temp__4124__auto__;{
var G__11963 = (function (){var end = (i + class$.length);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((end < class_len))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substring(0,i))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substr((end + 1)))):class_name.substring(0,(i - 1)))));
})();
class_name = G__11963;
continue;
}
} else
{return class_name;
}
break;
}
});
/**
* remove class from and returns `elem`
* @param {...*} var_args
*/
dommy.attrs.remove_class_BANG_ = (function() {
var remove_class_BANG_ = null;
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4124__auto___11972 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___11972))
{var class_list_11973 = temp__4124__auto___11972;class_list_11973.remove(class$__$1);
} else
{var class_name_11974 = elem__$1.className;var new_class_name_11975 = dommy.attrs.remove_class_str.call(null,class_name_11974,class$__$1);if((class_name_11974 === new_class_name_11975))
{} else
{elem__$1.className = new_class_name_11975;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__11976__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__11968 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__11969 = null;var count__11970 = 0;var i__11971 = 0;while(true){
if((i__11971 < count__11970))
{var c = cljs.core._nth.call(null,chunk__11969,i__11971);remove_class_BANG_.call(null,elem__$1,c);
{
var G__11977 = seq__11968;
var G__11978 = chunk__11969;
var G__11979 = count__11970;
var G__11980 = (i__11971 + 1);
seq__11968 = G__11977;
chunk__11969 = G__11978;
count__11970 = G__11979;
i__11971 = G__11980;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__11968);if(temp__4126__auto__)
{var seq__11968__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11968__$1))
{var c__4310__auto__ = cljs.core.chunk_first.call(null,seq__11968__$1);{
var G__11981 = cljs.core.chunk_rest.call(null,seq__11968__$1);
var G__11982 = c__4310__auto__;
var G__11983 = cljs.core.count.call(null,c__4310__auto__);
var G__11984 = 0;
seq__11968 = G__11981;
chunk__11969 = G__11982;
count__11970 = G__11983;
i__11971 = G__11984;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__11968__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__11985 = cljs.core.next.call(null,seq__11968__$1);
var G__11986 = null;
var G__11987 = 0;
var G__11988 = 0;
seq__11968 = G__11985;
chunk__11969 = G__11986;
count__11970 = G__11987;
i__11971 = G__11988;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var G__11976 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11976__delegate.call(this,elem,class$,classes);};
G__11976.cljs$lang$maxFixedArity = 2;
G__11976.cljs$lang$applyTo = (function (arglist__11989){
var elem = cljs.core.first(arglist__11989);
arglist__11989 = cljs.core.next(arglist__11989);
var class$ = cljs.core.first(arglist__11989);
var classes = cljs.core.rest(arglist__11989);
return G__11976__delegate(elem,class$,classes);
});
G__11976.cljs$core$IFn$_invoke$arity$variadic = G__11976__delegate;
return G__11976;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class_BANG_.cljs$lang$maxFixedArity = 2;
remove_class_BANG_.cljs$lang$applyTo = remove_class_BANG___3.cljs$lang$applyTo;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_class_BANG___2;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_class_BANG_;
})()
;
/**
* (toggle-class! elem class) will add-class! if elem does not have class
* and remove-class! otherwise.
* (toggle-class! elem class add?) will add-class! if add? is truthy,
* otherwise it will remove-class!
*/
dommy.attrs.toggle_class_BANG_ = (function() {
var toggle_class_BANG_ = null;
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4124__auto___11990 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___11990))
{var class_list_11991 = temp__4124__auto___11990;class_list_11991.toggle(class$__$1);
} else
{toggle_class_BANG_.call(null,elem__$1,class$__$1,!(dommy.attrs.has_class_QMARK_.call(null,elem__$1,class$__$1)));
}
return elem__$1;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{dommy.attrs.add_class_BANG_.call(null,elem__$1,class$);
} else
{dommy.attrs.remove_class_BANG_.call(null,elem__$1,class$);
}
return elem__$1;
});
toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_class_BANG___2.call(this,elem,class$);
case 3:
return toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
dommy.attrs.style_str = (function style_str(x){if(typeof x === 'string')
{return x;
} else
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__11994){var vec__11995 = p__11994;var k = cljs.core.nth.call(null,vec__11995,0,null);var v = cljs.core.nth.call(null,vec__11995,1,null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,v))+";");
}),x));
}
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__12002_12008 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__12003_12009 = null;var count__12004_12010 = 0;var i__12005_12011 = 0;while(true){
if((i__12005_12011 < count__12004_12010))
{var vec__12006_12012 = cljs.core._nth.call(null,chunk__12003_12009,i__12005_12011);var k_12013 = cljs.core.nth.call(null,vec__12006_12012,0,null);var v_12014 = cljs.core.nth.call(null,vec__12006_12012,1,null);(style[cljs.core.name.call(null,k_12013)] = v_12014);
{
var G__12015 = seq__12002_12008;
var G__12016 = chunk__12003_12009;
var G__12017 = count__12004_12010;
var G__12018 = (i__12005_12011 + 1);
seq__12002_12008 = G__12015;
chunk__12003_12009 = G__12016;
count__12004_12010 = G__12017;
i__12005_12011 = G__12018;
continue;
}
} else
{var temp__4126__auto___12019 = cljs.core.seq.call(null,seq__12002_12008);if(temp__4126__auto___12019)
{var seq__12002_12020__$1 = temp__4126__auto___12019;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12002_12020__$1))
{var c__4310__auto___12021 = cljs.core.chunk_first.call(null,seq__12002_12020__$1);{
var G__12022 = cljs.core.chunk_rest.call(null,seq__12002_12020__$1);
var G__12023 = c__4310__auto___12021;
var G__12024 = cljs.core.count.call(null,c__4310__auto___12021);
var G__12025 = 0;
seq__12002_12008 = G__12022;
chunk__12003_12009 = G__12023;
count__12004_12010 = G__12024;
i__12005_12011 = G__12025;
continue;
}
} else
{var vec__12007_12026 = cljs.core.first.call(null,seq__12002_12020__$1);var k_12027 = cljs.core.nth.call(null,vec__12007_12026,0,null);var v_12028 = cljs.core.nth.call(null,vec__12007_12026,1,null);(style[cljs.core.name.call(null,k_12027)] = v_12028);
{
var G__12029 = cljs.core.next.call(null,seq__12002_12020__$1);
var G__12030 = null;
var G__12031 = 0;
var G__12032 = 0;
seq__12002_12008 = G__12029;
chunk__12003_12009 = G__12030;
count__12004_12010 = G__12031;
i__12005_12011 = G__12032;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__12033){
var elem = cljs.core.first(arglist__12033);
var kvs = cljs.core.rest(arglist__12033);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
dommy.attrs.style = (function style(elem,k){if(cljs.core.truth_(k))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"k","k",-1640531420,null))))));
}
return (window.getComputedStyle(dommy.template.__GT_node_like.call(null,elem))[cljs.core.name.call(null,k)]);
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__12040_12046 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__12041_12047 = null;var count__12042_12048 = 0;var i__12043_12049 = 0;while(true){
if((i__12043_12049 < count__12042_12048))
{var vec__12044_12050 = cljs.core._nth.call(null,chunk__12041_12047,i__12043_12049);var k_12051 = cljs.core.nth.call(null,vec__12044_12050,0,null);var v_12052 = cljs.core.nth.call(null,vec__12044_12050,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_12051,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_12052)+"px"));
{
var G__12053 = seq__12040_12046;
var G__12054 = chunk__12041_12047;
var G__12055 = count__12042_12048;
var G__12056 = (i__12043_12049 + 1);
seq__12040_12046 = G__12053;
chunk__12041_12047 = G__12054;
count__12042_12048 = G__12055;
i__12043_12049 = G__12056;
continue;
}
} else
{var temp__4126__auto___12057 = cljs.core.seq.call(null,seq__12040_12046);if(temp__4126__auto___12057)
{var seq__12040_12058__$1 = temp__4126__auto___12057;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12040_12058__$1))
{var c__4310__auto___12059 = cljs.core.chunk_first.call(null,seq__12040_12058__$1);{
var G__12060 = cljs.core.chunk_rest.call(null,seq__12040_12058__$1);
var G__12061 = c__4310__auto___12059;
var G__12062 = cljs.core.count.call(null,c__4310__auto___12059);
var G__12063 = 0;
seq__12040_12046 = G__12060;
chunk__12041_12047 = G__12061;
count__12042_12048 = G__12062;
i__12043_12049 = G__12063;
continue;
}
} else
{var vec__12045_12064 = cljs.core.first.call(null,seq__12040_12058__$1);var k_12065 = cljs.core.nth.call(null,vec__12045_12064,0,null);var v_12066 = cljs.core.nth.call(null,vec__12045_12064,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_12065,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_12066)+"px"));
{
var G__12067 = cljs.core.next.call(null,seq__12040_12058__$1);
var G__12068 = null;
var G__12069 = 0;
var G__12070 = 0;
seq__12040_12046 = G__12067;
chunk__12041_12047 = G__12068;
count__12042_12048 = G__12069;
i__12043_12049 = G__12070;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__12071){
var elem = cljs.core.first(arglist__12071);
var kvs = cljs.core.rest(arglist__12071);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
dommy.attrs.px = (function px(elem,k){var pixels = dommy.attrs.style.call(null,dommy.template.__GT_node_like.call(null,elem),k);if(cljs.core.seq.call(null,pixels))
{return parseInt(pixels);
} else
{return null;
}
});
/**
* Sets dom attributes on and returns `elem`.
* Attributes without values will be set to "true":
* 
* (set-attr! elem :disabled)
* 
* With values, the function takes variadic kv pairs:
* 
* (set-attr! elem :id "some-id"
* :name "some-name")
* @param {...*} var_args
*/
dommy.attrs.set_attr_BANG_ = (function() {
var set_attr_BANG_ = null;
var set_attr_BANG___2 = (function (elem,k){return set_attr_BANG_.call(null,dommy.template.__GT_node_like.call(null,elem),k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){if(cljs.core.truth_(v))
{if(cljs.core.fn_QMARK_.call(null,v))
{var G__12080 = dommy.template.__GT_node_like.call(null,elem);(G__12080[cljs.core.name.call(null,k)] = v);
return G__12080;
} else
{var G__12081 = dommy.template.__GT_node_like.call(null,elem);G__12081.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__12081;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__12088__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__12082_12089 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__12083_12090 = null;var count__12084_12091 = 0;var i__12085_12092 = 0;while(true){
if((i__12085_12092 < count__12084_12091))
{var vec__12086_12093 = cljs.core._nth.call(null,chunk__12083_12090,i__12085_12092);var k_12094__$1 = cljs.core.nth.call(null,vec__12086_12093,0,null);var v_12095__$1 = cljs.core.nth.call(null,vec__12086_12093,1,null);set_attr_BANG_.call(null,elem__$1,k_12094__$1,v_12095__$1);
{
var G__12096 = seq__12082_12089;
var G__12097 = chunk__12083_12090;
var G__12098 = count__12084_12091;
var G__12099 = (i__12085_12092 + 1);
seq__12082_12089 = G__12096;
chunk__12083_12090 = G__12097;
count__12084_12091 = G__12098;
i__12085_12092 = G__12099;
continue;
}
} else
{var temp__4126__auto___12100 = cljs.core.seq.call(null,seq__12082_12089);if(temp__4126__auto___12100)
{var seq__12082_12101__$1 = temp__4126__auto___12100;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12082_12101__$1))
{var c__4310__auto___12102 = cljs.core.chunk_first.call(null,seq__12082_12101__$1);{
var G__12103 = cljs.core.chunk_rest.call(null,seq__12082_12101__$1);
var G__12104 = c__4310__auto___12102;
var G__12105 = cljs.core.count.call(null,c__4310__auto___12102);
var G__12106 = 0;
seq__12082_12089 = G__12103;
chunk__12083_12090 = G__12104;
count__12084_12091 = G__12105;
i__12085_12092 = G__12106;
continue;
}
} else
{var vec__12087_12107 = cljs.core.first.call(null,seq__12082_12101__$1);var k_12108__$1 = cljs.core.nth.call(null,vec__12087_12107,0,null);var v_12109__$1 = cljs.core.nth.call(null,vec__12087_12107,1,null);set_attr_BANG_.call(null,elem__$1,k_12108__$1,v_12109__$1);
{
var G__12110 = cljs.core.next.call(null,seq__12082_12101__$1);
var G__12111 = null;
var G__12112 = 0;
var G__12113 = 0;
seq__12082_12089 = G__12110;
chunk__12083_12090 = G__12111;
count__12084_12091 = G__12112;
i__12085_12092 = G__12113;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__12088 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__12088__delegate.call(this,elem,k,v,kvs);};
G__12088.cljs$lang$maxFixedArity = 3;
G__12088.cljs$lang$applyTo = (function (arglist__12114){
var elem = cljs.core.first(arglist__12114);
arglist__12114 = cljs.core.next(arglist__12114);
var k = cljs.core.first(arglist__12114);
arglist__12114 = cljs.core.next(arglist__12114);
var v = cljs.core.first(arglist__12114);
var kvs = cljs.core.rest(arglist__12114);
return G__12088__delegate(elem,k,v,kvs);
});
G__12088.cljs$core$IFn$_invoke$arity$variadic = G__12088__delegate;
return G__12088;
})()
;
set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return set_attr_BANG___2.call(this,elem,k);
case 3:
return set_attr_BANG___3.call(this,elem,k,v);
default:
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.attrs.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),null,new cljs.core.Keyword(null,"classes","classes",1867525016),null], null), null).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(cljs.core.name.call(null,k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__12123__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__12119_12124 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__12120_12125 = null;var count__12121_12126 = 0;var i__12122_12127 = 0;while(true){
if((i__12122_12127 < count__12121_12126))
{var k_12128__$1 = cljs.core._nth.call(null,chunk__12120_12125,i__12122_12127);remove_attr_BANG_.call(null,elem__$1,k_12128__$1);
{
var G__12129 = seq__12119_12124;
var G__12130 = chunk__12120_12125;
var G__12131 = count__12121_12126;
var G__12132 = (i__12122_12127 + 1);
seq__12119_12124 = G__12129;
chunk__12120_12125 = G__12130;
count__12121_12126 = G__12131;
i__12122_12127 = G__12132;
continue;
}
} else
{var temp__4126__auto___12133 = cljs.core.seq.call(null,seq__12119_12124);if(temp__4126__auto___12133)
{var seq__12119_12134__$1 = temp__4126__auto___12133;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12119_12134__$1))
{var c__4310__auto___12135 = cljs.core.chunk_first.call(null,seq__12119_12134__$1);{
var G__12136 = cljs.core.chunk_rest.call(null,seq__12119_12134__$1);
var G__12137 = c__4310__auto___12135;
var G__12138 = cljs.core.count.call(null,c__4310__auto___12135);
var G__12139 = 0;
seq__12119_12124 = G__12136;
chunk__12120_12125 = G__12137;
count__12121_12126 = G__12138;
i__12122_12127 = G__12139;
continue;
}
} else
{var k_12140__$1 = cljs.core.first.call(null,seq__12119_12134__$1);remove_attr_BANG_.call(null,elem__$1,k_12140__$1);
{
var G__12141 = cljs.core.next.call(null,seq__12119_12134__$1);
var G__12142 = null;
var G__12143 = 0;
var G__12144 = 0;
seq__12119_12124 = G__12141;
chunk__12120_12125 = G__12142;
count__12121_12126 = G__12143;
i__12122_12127 = G__12144;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__12123 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__12123__delegate.call(this,elem,k,ks);};
G__12123.cljs$lang$maxFixedArity = 2;
G__12123.cljs$lang$applyTo = (function (arglist__12145){
var elem = cljs.core.first(arglist__12145);
arglist__12145 = cljs.core.next(arglist__12145);
var k = cljs.core.first(arglist__12145);
var ks = cljs.core.rest(arglist__12145);
return G__12123__delegate(elem,k,ks);
});
G__12123.cljs$core$IFn$_invoke$arity$variadic = G__12123__delegate;
return G__12123;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_attr_BANG_;
})()
;
dommy.attrs.attr = (function attr(elem,k){if(cljs.core.truth_(k))
{return dommy.template.__GT_node_like.call(null,elem).getAttribute(cljs.core.name.call(null,k));
} else
{return null;
}
});
dommy.attrs.toggle_attr_BANG_ = (function() {
var toggle_attr_BANG_ = null;
var toggle_attr_BANG___2 = (function (elem,k){return toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.attrs.attr.call(null,elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{return dommy.attrs.set_attr_BANG_.call(null,elem__$1,k);
} else
{return dommy.attrs.remove_attr_BANG_.call(null,elem__$1,k);
}
});
toggle_attr_BANG_ = function(elem,k,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_attr_BANG___2.call(this,elem,k);
case 3:
return toggle_attr_BANG___3.call(this,elem,k,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_attr_BANG___2;
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_attr_BANG___3;
return toggle_attr_BANG_;
})()
;
dommy.attrs.hidden_QMARK_ = (function hidden_QMARK_(elem){return ("none" === dommy.template.__GT_node_like.call(null,elem).style.display);
});
/**
* Display or hide the given `elem`. Takes an optional boolean `show?`
* indicating whether to show or hide `elem`.
*/
dommy.attrs.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);toggle_BANG_.call(null,elem__$1,dommy.attrs.hidden_QMARK_.call(null,elem__$1));
return elem__$1;
});
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__12147 = dommy.template.__GT_node_like.call(null,elem);G__12147.style.display = ((show_QMARK_)?"":"none");
return G__12147;
});
toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return toggle_BANG___1.call(this,elem);
case 2:
return toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__12149 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__12149,false);
return G__12149;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__12151 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__12151,true);
return G__12151;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__12153 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__12153["constructor"] = Object);
return G__12153;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map