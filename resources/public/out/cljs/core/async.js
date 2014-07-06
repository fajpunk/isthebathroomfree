// Compiled by ClojureScript 0.0-2234
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10880 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10880 = (function (f,fn_handler,meta10881){
this.f = f;
this.fn_handler = fn_handler;
this.meta10881 = meta10881;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10880.cljs$lang$type = true;
cljs.core.async.t10880.cljs$lang$ctorStr = "cljs.core.async/t10880";
cljs.core.async.t10880.cljs$lang$ctorPrWriter = (function (this__4121__auto__,writer__4122__auto__,opt__4123__auto__){return cljs.core._write.call(null,writer__4122__auto__,"cljs.core.async/t10880");
});
cljs.core.async.t10880.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10880.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10880.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10880.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10882){var self__ = this;
var _10882__$1 = this;return self__.meta10881;
});
cljs.core.async.t10880.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10882,meta10881__$1){var self__ = this;
var _10882__$1 = this;return (new cljs.core.async.t10880(self__.f,self__.fn_handler,meta10881__$1));
});
cljs.core.async.__GT_t10880 = (function __GT_t10880(f__$1,fn_handler__$1,meta10881){return (new cljs.core.async.t10880(f__$1,fn_handler__$1,meta10881));
});
}
return (new cljs.core.async.t10880(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10884 = buff;if(G__10884)
{var bit__4204__auto__ = null;if(cljs.core.truth_((function (){var or__3554__auto__ = bit__4204__auto__;if(cljs.core.truth_(or__3554__auto__))
{return or__3554__auto__;
} else
{return G__10884.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10884.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10884);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10884);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_10885 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10885);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_10885,ret){
return (function (){return fn1.call(null,val_10885);
});})(val_10885,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4410__auto___10886 = n;var x_10887 = 0;while(true){
if((x_10887 < n__4410__auto___10886))
{(a[x_10887] = 0);
{
var G__10888 = (x_10887 + 1);
x_10887 = G__10888;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__10889 = (i + 1);
i = G__10889;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10893 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10893 = (function (flag,alt_flag,meta10894){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10894 = meta10894;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10893.cljs$lang$type = true;
cljs.core.async.t10893.cljs$lang$ctorStr = "cljs.core.async/t10893";
cljs.core.async.t10893.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4121__auto__,writer__4122__auto__,opt__4123__auto__){return cljs.core._write.call(null,writer__4122__auto__,"cljs.core.async/t10893");
});})(flag))
;
cljs.core.async.t10893.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10893.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t10893.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t10893.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10895){var self__ = this;
var _10895__$1 = this;return self__.meta10894;
});})(flag))
;
cljs.core.async.t10893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10895,meta10894__$1){var self__ = this;
var _10895__$1 = this;return (new cljs.core.async.t10893(self__.flag,self__.alt_flag,meta10894__$1));
});})(flag))
;
cljs.core.async.__GT_t10893 = ((function (flag){
return (function __GT_t10893(flag__$1,alt_flag__$1,meta10894){return (new cljs.core.async.t10893(flag__$1,alt_flag__$1,meta10894));
});})(flag))
;
}
return (new cljs.core.async.t10893(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10899 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10899 = (function (cb,flag,alt_handler,meta10900){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10900 = meta10900;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10899.cljs$lang$type = true;
cljs.core.async.t10899.cljs$lang$ctorStr = "cljs.core.async/t10899";
cljs.core.async.t10899.cljs$lang$ctorPrWriter = (function (this__4121__auto__,writer__4122__auto__,opt__4123__auto__){return cljs.core._write.call(null,writer__4122__auto__,"cljs.core.async/t10899");
});
cljs.core.async.t10899.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10899.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10899.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10899.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10901){var self__ = this;
var _10901__$1 = this;return self__.meta10900;
});
cljs.core.async.t10899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10901,meta10900__$1){var self__ = this;
var _10901__$1 = this;return (new cljs.core.async.t10899(self__.cb,self__.flag,self__.alt_handler,meta10900__$1));
});
cljs.core.async.__GT_t10899 = (function __GT_t10899(cb__$1,flag__$1,alt_handler__$1,meta10900){return (new cljs.core.async.t10899(cb__$1,flag__$1,alt_handler__$1,meta10900));
});
}
return (new cljs.core.async.t10899(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10902_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10902_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10903_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10903_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3554__auto__ = wport;if(cljs.core.truth_(or__3554__auto__))
{return or__3554__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__10904 = (i + 1);
i = G__10904;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3554__auto__ = ret;if(cljs.core.truth_(or__3554__auto__))
{return or__3554__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4126__auto__ = (function (){var and__3542__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3542__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3542__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__10905){var map__10907 = p__10905;var map__10907__$1 = ((cljs.core.seq_QMARK_.call(null,map__10907))?cljs.core.apply.call(null,cljs.core.hash_map,map__10907):map__10907);var opts = map__10907__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10905 = null;if (arguments.length > 1) {
  p__10905 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10905);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10908){
var ports = cljs.core.first(arglist__10908);
var p__10905 = cljs.core.rest(arglist__10908);
return alts_BANG___delegate(ports,p__10905);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10916 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10916 = (function (ch,f,map_LT_,meta10917){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10917 = meta10917;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10916.cljs$lang$type = true;
cljs.core.async.t10916.cljs$lang$ctorStr = "cljs.core.async/t10916";
cljs.core.async.t10916.cljs$lang$ctorPrWriter = (function (this__4121__auto__,writer__4122__auto__,opt__4123__auto__){return cljs.core._write.call(null,writer__4122__auto__,"cljs.core.async/t10916");
});
cljs.core.async.t10916.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10916.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t10916.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10916.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10919 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10919 = (function (fn1,_,meta10917,ch,f,map_LT_,meta10920){
this.fn1 = fn1;
this._ = _;
this.meta10917 = meta10917;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10920 = meta10920;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10919.cljs$lang$type = true;
cljs.core.async.t10919.cljs$lang$ctorStr = "cljs.core.async/t10919";
cljs.core.async.t10919.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4121__auto__,writer__4122__auto__,opt__4123__auto__){return cljs.core._write.call(null,writer__4122__auto__,"cljs.core.async/t10919");
});})(___$1))
;
cljs.core.async.t10919.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10919.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10919.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10919.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__10909_SHARP_){return f1.call(null,(((p1__10909_SHARP_ == null))?null:self__.f.call(null,p1__10909_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t10919.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10921){var self__ = this;
var _10921__$1 = this;return self__.meta10920;
});})(___$1))
;
cljs.core.async.t10919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10921,meta10920__$1){var self__ = this;
var _10921__$1 = this;return (new cljs.core.async.t10919(self__.fn1,self__._,self__.meta10917,self__.ch,self__.f,self__.map_LT_,meta10920__$1));
});})(___$1))
;
cljs.core.async.__GT_t10919 = ((function (___$1){
return (function __GT_t10919(fn1__$1,___$2,meta10917__$1,ch__$2,f__$2,map_LT___$2,meta10920){return (new cljs.core.async.t10919(fn1__$1,___$2,meta10917__$1,ch__$2,f__$2,map_LT___$2,meta10920));
});})(___$1))
;
}
return (new cljs.core.async.t10919(fn1,___$1,self__.meta10917,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3542__auto__ = ret;if(cljs.core.truth_(and__3542__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3542__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t10916.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10916.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10916.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t10916.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10918){var self__ = this;
var _10918__$1 = this;return self__.meta10917;
});
cljs.core.async.t10916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10918,meta10917__$1){var self__ = this;
var _10918__$1 = this;return (new cljs.core.async.t10916(self__.ch,self__.f,self__.map_LT_,meta10917__$1));
});
cljs.core.async.__GT_t10916 = (function __GT_t10916(ch__$1,f__$1,map_LT___$1,meta10917){return (new cljs.core.async.t10916(ch__$1,f__$1,map_LT___$1,meta10917));
});
}
return (new cljs.core.async.t10916(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10925 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10925 = (function (ch,f,map_GT_,meta10926){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10926 = meta10926;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10925.cljs$lang$type = true;
cljs.core.async.t10925.cljs$lang$ctorStr = "cljs.core.async/t10925";
cljs.core.async.t10925.cljs$lang$ctorPrWriter = (function (this__4121__auto__,writer__4122__auto__,opt__4123__auto__){return cljs.core._write.call(null,writer__4122__auto__,"cljs.core.async/t10925");
});
cljs.core.async.t10925.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10925.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t10925.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10925.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10925.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10925.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10925.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10927){var self__ = this;
var _10927__$1 = this;return self__.meta10926;
});
cljs.core.async.t10925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10927,meta10926__$1){var self__ = this;
var _10927__$1 = this;return (new cljs.core.async.t10925(self__.ch,self__.f,self__.map_GT_,meta10926__$1));
});
cljs.core.async.__GT_t10925 = (function __GT_t10925(ch__$1,f__$1,map_GT___$1,meta10926){return (new cljs.core.async.t10925(ch__$1,f__$1,map_GT___$1,meta10926));
});
}
return (new cljs.core.async.t10925(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10931 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10931 = (function (ch,p,filter_GT_,meta10932){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10932 = meta10932;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10931.cljs$lang$type = true;
cljs.core.async.t10931.cljs$lang$ctorStr = "cljs.core.async/t10931";
cljs.core.async.t10931.cljs$lang$ctorPrWriter = (function (this__4121__auto__,writer__4122__auto__,opt__4123__auto__){return cljs.core._write.call(null,writer__4122__auto__,"cljs.core.async/t10931");
});
cljs.core.async.t10931.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10931.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t10931.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10931.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10931.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10931.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10931.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t10931.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10933){var self__ = this;
var _10933__$1 = this;return self__.meta10932;
});
cljs.core.async.t10931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10933,meta10932__$1){var self__ = this;
var _10933__$1 = this;return (new cljs.core.async.t10931(self__.ch,self__.p,self__.filter_GT_,meta10932__$1));
});
cljs.core.async.__GT_t10931 = (function __GT_t10931(ch__$1,p__$1,filter_GT___$1,meta10932){return (new cljs.core.async.t10931(ch__$1,p__$1,filter_GT___$1,meta10932));
});
}
return (new cljs.core.async.t10931(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5719__auto___11016 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5719__auto___11016,out){
return (function (){var f__5720__auto__ = (function (){var switch__5704__auto__ = ((function (c__5719__auto___11016,out){
return (function (state_10995){var state_val_10996 = (state_10995[1]);if((state_val_10996 === 7))
{var inst_10991 = (state_10995[2]);var state_10995__$1 = state_10995;var statearr_10997_11017 = state_10995__$1;(statearr_10997_11017[2] = inst_10991);
(statearr_10997_11017[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10996 === 1))
{var state_10995__$1 = state_10995;var statearr_10998_11018 = state_10995__$1;(statearr_10998_11018[2] = null);
(statearr_10998_11018[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10996 === 4))
{var inst_10977 = (state_10995[7]);var inst_10977__$1 = (state_10995[2]);var inst_10978 = (inst_10977__$1 == null);var state_10995__$1 = (function (){var statearr_10999 = state_10995;(statearr_10999[7] = inst_10977__$1);
return statearr_10999;
})();if(cljs.core.truth_(inst_10978))
{var statearr_11000_11019 = state_10995__$1;(statearr_11000_11019[1] = 5);
} else
{var statearr_11001_11020 = state_10995__$1;(statearr_11001_11020[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10996 === 6))
{var inst_10977 = (state_10995[7]);var inst_10982 = p.call(null,inst_10977);var state_10995__$1 = state_10995;if(cljs.core.truth_(inst_10982))
{var statearr_11002_11021 = state_10995__$1;(statearr_11002_11021[1] = 8);
} else
{var statearr_11003_11022 = state_10995__$1;(statearr_11003_11022[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10996 === 3))
{var inst_10993 = (state_10995[2]);var state_10995__$1 = state_10995;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10995__$1,inst_10993);
} else
{if((state_val_10996 === 2))
{var state_10995__$1 = state_10995;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10995__$1,4,ch);
} else
{if((state_val_10996 === 11))
{var inst_10985 = (state_10995[2]);var state_10995__$1 = state_10995;var statearr_11004_11023 = state_10995__$1;(statearr_11004_11023[2] = inst_10985);
(statearr_11004_11023[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10996 === 9))
{var state_10995__$1 = state_10995;var statearr_11005_11024 = state_10995__$1;(statearr_11005_11024[2] = null);
(statearr_11005_11024[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10996 === 5))
{var inst_10980 = cljs.core.async.close_BANG_.call(null,out);var state_10995__$1 = state_10995;var statearr_11006_11025 = state_10995__$1;(statearr_11006_11025[2] = inst_10980);
(statearr_11006_11025[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10996 === 10))
{var inst_10988 = (state_10995[2]);var state_10995__$1 = (function (){var statearr_11007 = state_10995;(statearr_11007[8] = inst_10988);
return statearr_11007;
})();var statearr_11008_11026 = state_10995__$1;(statearr_11008_11026[2] = null);
(statearr_11008_11026[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10996 === 8))
{var inst_10977 = (state_10995[7]);var state_10995__$1 = state_10995;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10995__$1,11,out,inst_10977);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5719__auto___11016,out))
;return ((function (switch__5704__auto__,c__5719__auto___11016,out){
return (function() {
var state_machine__5705__auto__ = null;
var state_machine__5705__auto____0 = (function (){var statearr_11012 = [null,null,null,null,null,null,null,null,null];(statearr_11012[0] = state_machine__5705__auto__);
(statearr_11012[1] = 1);
return statearr_11012;
});
var state_machine__5705__auto____1 = (function (state_10995){while(true){
var ret_value__5706__auto__ = (function (){try{while(true){
var result__5707__auto__ = switch__5704__auto__.call(null,state_10995);if(cljs.core.keyword_identical_QMARK_.call(null,result__5707__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5707__auto__;
}
break;
}
}catch (e11013){if((e11013 instanceof Object))
{var ex__5708__auto__ = e11013;var statearr_11014_11027 = state_10995;(statearr_11014_11027[5] = ex__5708__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10995);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11013;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5706__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11028 = state_10995;
state_10995 = G__11028;
continue;
}
} else
{return ret_value__5706__auto__;
}
break;
}
});
state_machine__5705__auto__ = function(state_10995){
switch(arguments.length){
case 0:
return state_machine__5705__auto____0.call(this);
case 1:
return state_machine__5705__auto____1.call(this,state_10995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5705__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5705__auto____0;
state_machine__5705__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5705__auto____1;
return state_machine__5705__auto__;
})()
;})(switch__5704__auto__,c__5719__auto___11016,out))
})();var state__5721__auto__ = (function (){var statearr_11015 = f__5720__auto__.call(null);(statearr_11015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5719__auto___11016);
return statearr_11015;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5721__auto__);
});})(c__5719__auto___11016,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5719__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5719__auto__){
return (function (){var f__5720__auto__ = (function (){var switch__5704__auto__ = ((function (c__5719__auto__){
return (function (state_11194){var state_val_11195 = (state_11194[1]);if((state_val_11195 === 7))
{var inst_11190 = (state_11194[2]);var state_11194__$1 = state_11194;var statearr_11196_11237 = state_11194__$1;(statearr_11196_11237[2] = inst_11190);
(statearr_11196_11237[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11195 === 20))
{var inst_11160 = (state_11194[7]);var inst_11171 = (state_11194[2]);var inst_11172 = cljs.core.next.call(null,inst_11160);var inst_11146 = inst_11172;var inst_11147 = null;var inst_11148 = 0;var inst_11149 = 0;var state_11194__$1 = (function (){var statearr_11197 = state_11194;(statearr_11197[8] = inst_11146);
(statearr_11197[9] = inst_11147);
(statearr_11197[10] = inst_11149);
(statearr_11197[11] = inst_11148);
(statearr_11197[12] = inst_11171);
return statearr_11197;
})();var statearr_11198_11238 = state_11194__$1;(statearr_11198_11238[2] = null);
(statearr_11198_11238[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11195 === 1))
{var state_11194__$1 = state_11194;var statearr_11199_11239 = state_11194__$1;(statearr_11199_11239[2] = null);
(statearr_11199_11239[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11195 === 4))
{var inst_11135 = (state_11194[13]);var inst_11135__$1 = (state_11194[2]);var inst_11136 = (inst_11135__$1 == null);var state_11194__$1 = (function (){var statearr_11200 = state_11194;(statearr_11200[13] = inst_11135__$1);
return statearr_11200;
})();if(cljs.core.truth_(inst_11136))
{var statearr_11201_11240 = state_11194__$1;(statearr_11201_11240[1] = 5);
} else
{var statearr_11202_11241 = state_11194__$1;(statearr_11202_11241[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11195 === 15))
{var state_11194__$1 = state_11194;var statearr_11206_11242 = state_11194__$1;(statearr_11206_11242[2] = null);
(statearr_11206_11242[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11195 === 21))
{var state_11194__$1 = state_11194;var statearr_11207_11243 = state_11194__$1;(statearr_11207_11243[2] = null);
(statearr_11207_11243[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11195 === 13))
{var inst_11146 = (state_11194[8]);var inst_11147 = (state_11194[9]);var inst_11149 = (state_11194[10]);var inst_11148 = (state_11194[11]);var inst_11156 = (state_11194[2]);var inst_11157 = (inst_11149 + 1);var tmp11203 = inst_11146;var tmp11204 = inst_11147;var tmp11205 = inst_11148;var inst_11146__$1 = tmp11203;var inst_11147__$1 = tmp11204;var inst_11148__$1 = tmp11205;var inst_11149__$1 = inst_11157;var state_11194__$1 = (function (){var statearr_11208 = state_11194;(statearr_11208[8] = inst_11146__$1);
(statearr_11208[9] = inst_11147__$1);
(statearr_11208[10] = inst_11149__$1);
(statearr_11208[11] = inst_11148__$1);
(statearr_11208[14] = inst_11156);
return statearr_11208;
})();var statearr_11209_11244 = state_11194__$1;(statearr_11209_11244[2] = null);
(statearr_11209_11244[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11195 === 22))
{var state_11194__$1 = state_11194;var statearr_11210_11245 = state_11194__$1;(statearr_11210_11245[2] = null);
(statearr_11210_11245[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11195 === 6))
{var inst_11135 = (state_11194[13]);var inst_11144 = f.call(null,inst_11135);var inst_11145 = cljs.core.seq.call(null,inst_11144);var inst_11146 = inst_11145;var inst_11147 = null;var inst_11148 = 0;var inst_11149 = 0;var state_11194__$1 = (function (){var statearr_11211 = state_11194;(statearr_11211[8] = inst_11146);
(statearr_11211[9] = inst_11147);
(statearr_11211[10] = inst_11149);
(statearr_11211[11] = inst_11148);
return statearr_11211;
})();var statearr_11212_11246 = state_11194__$1;(statearr_11212_11246[2] = null);
(statearr_11212_11246[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11195 === 17))
{var inst_11160 = (state_11194[7]);var inst_11164 = cljs.core.chunk_first.call(null,inst_11160);var inst_11165 = cljs.core.chunk_rest.call(null,inst_11160);var inst_11166 = cljs.core.count.call(null,inst_11164);var inst_11146 = inst_11165;var inst_11147 = inst_11164;var inst_11148 = inst_11166;var inst_11149 = 0;var state_11194__$1 = (function (){var statearr_11213 = state_11194;(statearr_11213[8] = inst_11146);
(statearr_11213[9] = inst_11147);
(statearr_11213[10] = inst_11149);
(statearr_11213[11] = inst_11148);
return statearr_11213;
})();var statearr_11214_11247 = state_11194__$1;(statearr_11214_11247[2] = null);
(statearr_11214_11247[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11195 === 3))
{var inst_11192 = (state_11194[2]);var state_11194__$1 = state_11194;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11194__$1,inst_11192);
} else
{if((state_val_11195 === 12))
{var inst_11180 = (state_11194[2]);var state_11194__$1 = state_11194;var statearr_11215_11248 = state_11194__$1;(statearr_11215_11248[2] = inst_11180);
(statearr_11215_11248[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11195 === 2))
{var state_11194__$1 = state_11194;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11194__$1,4,in$);
} else
{if((state_val_11195 === 23))
{var inst_11188 = (state_11194[2]);var state_11194__$1 = state_11194;var statearr_11216_11249 = state_11194__$1;(statearr_11216_11249[2] = inst_11188);
(statearr_11216_11249[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11195 === 19))
{var inst_11175 = (state_11194[2]);var state_11194__$1 = state_11194;var statearr_11217_11250 = state_11194__$1;(statearr_11217_11250[2] = inst_11175);
(statearr_11217_11250[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11195 === 11))
{var inst_11160 = (state_11194[7]);var inst_11146 = (state_11194[8]);var inst_11160__$1 = cljs.core.seq.call(null,inst_11146);var state_11194__$1 = (function (){var statearr_11218 = state_11194;(statearr_11218[7] = inst_11160__$1);
return statearr_11218;
})();if(inst_11160__$1)
{var statearr_11219_11251 = state_11194__$1;(statearr_11219_11251[1] = 14);
} else
{var statearr_11220_11252 = state_11194__$1;(statearr_11220_11252[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11195 === 9))
{var inst_11182 = (state_11194[2]);var inst_11183 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_11194__$1 = (function (){var statearr_11221 = state_11194;(statearr_11221[15] = inst_11182);
return statearr_11221;
})();if(cljs.core.truth_(inst_11183))
{var statearr_11222_11253 = state_11194__$1;(statearr_11222_11253[1] = 21);
} else
{var statearr_11223_11254 = state_11194__$1;(statearr_11223_11254[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11195 === 5))
{var inst_11138 = cljs.core.async.close_BANG_.call(null,out);var state_11194__$1 = state_11194;var statearr_11224_11255 = state_11194__$1;(statearr_11224_11255[2] = inst_11138);
(statearr_11224_11255[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11195 === 14))
{var inst_11160 = (state_11194[7]);var inst_11162 = cljs.core.chunked_seq_QMARK_.call(null,inst_11160);var state_11194__$1 = state_11194;if(inst_11162)
{var statearr_11225_11256 = state_11194__$1;(statearr_11225_11256[1] = 17);
} else
{var statearr_11226_11257 = state_11194__$1;(statearr_11226_11257[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11195 === 16))
{var inst_11178 = (state_11194[2]);var state_11194__$1 = state_11194;var statearr_11227_11258 = state_11194__$1;(statearr_11227_11258[2] = inst_11178);
(statearr_11227_11258[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11195 === 10))
{var inst_11147 = (state_11194[9]);var inst_11149 = (state_11194[10]);var inst_11154 = cljs.core._nth.call(null,inst_11147,inst_11149);var state_11194__$1 = state_11194;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11194__$1,13,out,inst_11154);
} else
{if((state_val_11195 === 18))
{var inst_11160 = (state_11194[7]);var inst_11169 = cljs.core.first.call(null,inst_11160);var state_11194__$1 = state_11194;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11194__$1,20,out,inst_11169);
} else
{if((state_val_11195 === 8))
{var inst_11149 = (state_11194[10]);var inst_11148 = (state_11194[11]);var inst_11151 = (inst_11149 < inst_11148);var inst_11152 = inst_11151;var state_11194__$1 = state_11194;if(cljs.core.truth_(inst_11152))
{var statearr_11228_11259 = state_11194__$1;(statearr_11228_11259[1] = 10);
} else
{var statearr_11229_11260 = state_11194__$1;(statearr_11229_11260[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5719__auto__))
;return ((function (switch__5704__auto__,c__5719__auto__){
return (function() {
var state_machine__5705__auto__ = null;
var state_machine__5705__auto____0 = (function (){var statearr_11233 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11233[0] = state_machine__5705__auto__);
(statearr_11233[1] = 1);
return statearr_11233;
});
var state_machine__5705__auto____1 = (function (state_11194){while(true){
var ret_value__5706__auto__ = (function (){try{while(true){
var result__5707__auto__ = switch__5704__auto__.call(null,state_11194);if(cljs.core.keyword_identical_QMARK_.call(null,result__5707__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5707__auto__;
}
break;
}
}catch (e11234){if((e11234 instanceof Object))
{var ex__5708__auto__ = e11234;var statearr_11235_11261 = state_11194;(statearr_11235_11261[5] = ex__5708__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11194);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11234;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5706__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11262 = state_11194;
state_11194 = G__11262;
continue;
}
} else
{return ret_value__5706__auto__;
}
break;
}
});
state_machine__5705__auto__ = function(state_11194){
switch(arguments.length){
case 0:
return state_machine__5705__auto____0.call(this);
case 1:
return state_machine__5705__auto____1.call(this,state_11194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5705__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5705__auto____0;
state_machine__5705__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5705__auto____1;
return state_machine__5705__auto__;
})()
;})(switch__5704__auto__,c__5719__auto__))
})();var state__5721__auto__ = (function (){var statearr_11236 = f__5720__auto__.call(null);(statearr_11236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5719__auto__);
return statearr_11236;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5721__auto__);
});})(c__5719__auto__))
);
return c__5719__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5719__auto___11357 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5719__auto___11357){
return (function (){var f__5720__auto__ = (function (){var switch__5704__auto__ = ((function (c__5719__auto___11357){
return (function (state_11333){var state_val_11334 = (state_11333[1]);if((state_val_11334 === 7))
{var inst_11329 = (state_11333[2]);var state_11333__$1 = state_11333;var statearr_11335_11358 = state_11333__$1;(statearr_11335_11358[2] = inst_11329);
(statearr_11335_11358[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11334 === 1))
{var state_11333__$1 = state_11333;var statearr_11336_11359 = state_11333__$1;(statearr_11336_11359[2] = null);
(statearr_11336_11359[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11334 === 4))
{var inst_11312 = (state_11333[7]);var inst_11312__$1 = (state_11333[2]);var inst_11313 = (inst_11312__$1 == null);var state_11333__$1 = (function (){var statearr_11337 = state_11333;(statearr_11337[7] = inst_11312__$1);
return statearr_11337;
})();if(cljs.core.truth_(inst_11313))
{var statearr_11338_11360 = state_11333__$1;(statearr_11338_11360[1] = 5);
} else
{var statearr_11339_11361 = state_11333__$1;(statearr_11339_11361[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11334 === 13))
{var state_11333__$1 = state_11333;var statearr_11340_11362 = state_11333__$1;(statearr_11340_11362[2] = null);
(statearr_11340_11362[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11334 === 6))
{var inst_11312 = (state_11333[7]);var state_11333__$1 = state_11333;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11333__$1,11,to,inst_11312);
} else
{if((state_val_11334 === 3))
{var inst_11331 = (state_11333[2]);var state_11333__$1 = state_11333;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11333__$1,inst_11331);
} else
{if((state_val_11334 === 12))
{var state_11333__$1 = state_11333;var statearr_11341_11363 = state_11333__$1;(statearr_11341_11363[2] = null);
(statearr_11341_11363[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11334 === 2))
{var state_11333__$1 = state_11333;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11333__$1,4,from);
} else
{if((state_val_11334 === 11))
{var inst_11322 = (state_11333[2]);var state_11333__$1 = state_11333;if(cljs.core.truth_(inst_11322))
{var statearr_11342_11364 = state_11333__$1;(statearr_11342_11364[1] = 12);
} else
{var statearr_11343_11365 = state_11333__$1;(statearr_11343_11365[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11334 === 9))
{var state_11333__$1 = state_11333;var statearr_11344_11366 = state_11333__$1;(statearr_11344_11366[2] = null);
(statearr_11344_11366[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11334 === 5))
{var state_11333__$1 = state_11333;if(cljs.core.truth_(close_QMARK_))
{var statearr_11345_11367 = state_11333__$1;(statearr_11345_11367[1] = 8);
} else
{var statearr_11346_11368 = state_11333__$1;(statearr_11346_11368[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11334 === 14))
{var inst_11327 = (state_11333[2]);var state_11333__$1 = state_11333;var statearr_11347_11369 = state_11333__$1;(statearr_11347_11369[2] = inst_11327);
(statearr_11347_11369[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11334 === 10))
{var inst_11319 = (state_11333[2]);var state_11333__$1 = state_11333;var statearr_11348_11370 = state_11333__$1;(statearr_11348_11370[2] = inst_11319);
(statearr_11348_11370[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11334 === 8))
{var inst_11316 = cljs.core.async.close_BANG_.call(null,to);var state_11333__$1 = state_11333;var statearr_11349_11371 = state_11333__$1;(statearr_11349_11371[2] = inst_11316);
(statearr_11349_11371[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5719__auto___11357))
;return ((function (switch__5704__auto__,c__5719__auto___11357){
return (function() {
var state_machine__5705__auto__ = null;
var state_machine__5705__auto____0 = (function (){var statearr_11353 = [null,null,null,null,null,null,null,null];(statearr_11353[0] = state_machine__5705__auto__);
(statearr_11353[1] = 1);
return statearr_11353;
});
var state_machine__5705__auto____1 = (function (state_11333){while(true){
var ret_value__5706__auto__ = (function (){try{while(true){
var result__5707__auto__ = switch__5704__auto__.call(null,state_11333);if(cljs.core.keyword_identical_QMARK_.call(null,result__5707__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5707__auto__;
}
break;
}
}catch (e11354){if((e11354 instanceof Object))
{var ex__5708__auto__ = e11354;var statearr_11355_11372 = state_11333;(statearr_11355_11372[5] = ex__5708__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11333);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11354;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5706__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11373 = state_11333;
state_11333 = G__11373;
continue;
}
} else
{return ret_value__5706__auto__;
}
break;
}
});
state_machine__5705__auto__ = function(state_11333){
switch(arguments.length){
case 0:
return state_machine__5705__auto____0.call(this);
case 1:
return state_machine__5705__auto____1.call(this,state_11333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5705__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5705__auto____0;
state_machine__5705__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5705__auto____1;
return state_machine__5705__auto__;
})()
;})(switch__5704__auto__,c__5719__auto___11357))
})();var state__5721__auto__ = (function (){var statearr_11356 = f__5720__auto__.call(null);(statearr_11356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5719__auto___11357);
return statearr_11356;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5721__auto__);
});})(c__5719__auto___11357))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5719__auto___11474 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5719__auto___11474,tc,fc){
return (function (){var f__5720__auto__ = (function (){var switch__5704__auto__ = ((function (c__5719__auto___11474,tc,fc){
return (function (state_11449){var state_val_11450 = (state_11449[1]);if((state_val_11450 === 7))
{var inst_11445 = (state_11449[2]);var state_11449__$1 = state_11449;var statearr_11451_11475 = state_11449__$1;(statearr_11451_11475[2] = inst_11445);
(statearr_11451_11475[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11450 === 1))
{var state_11449__$1 = state_11449;var statearr_11452_11476 = state_11449__$1;(statearr_11452_11476[2] = null);
(statearr_11452_11476[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11450 === 4))
{var inst_11426 = (state_11449[7]);var inst_11426__$1 = (state_11449[2]);var inst_11427 = (inst_11426__$1 == null);var state_11449__$1 = (function (){var statearr_11453 = state_11449;(statearr_11453[7] = inst_11426__$1);
return statearr_11453;
})();if(cljs.core.truth_(inst_11427))
{var statearr_11454_11477 = state_11449__$1;(statearr_11454_11477[1] = 5);
} else
{var statearr_11455_11478 = state_11449__$1;(statearr_11455_11478[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11450 === 13))
{var state_11449__$1 = state_11449;var statearr_11456_11479 = state_11449__$1;(statearr_11456_11479[2] = null);
(statearr_11456_11479[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11450 === 6))
{var inst_11426 = (state_11449[7]);var inst_11432 = p.call(null,inst_11426);var state_11449__$1 = state_11449;if(cljs.core.truth_(inst_11432))
{var statearr_11457_11480 = state_11449__$1;(statearr_11457_11480[1] = 9);
} else
{var statearr_11458_11481 = state_11449__$1;(statearr_11458_11481[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11450 === 3))
{var inst_11447 = (state_11449[2]);var state_11449__$1 = state_11449;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11449__$1,inst_11447);
} else
{if((state_val_11450 === 12))
{var state_11449__$1 = state_11449;var statearr_11459_11482 = state_11449__$1;(statearr_11459_11482[2] = null);
(statearr_11459_11482[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11450 === 2))
{var state_11449__$1 = state_11449;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11449__$1,4,ch);
} else
{if((state_val_11450 === 11))
{var inst_11426 = (state_11449[7]);var inst_11436 = (state_11449[2]);var state_11449__$1 = state_11449;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11449__$1,8,inst_11436,inst_11426);
} else
{if((state_val_11450 === 9))
{var state_11449__$1 = state_11449;var statearr_11460_11483 = state_11449__$1;(statearr_11460_11483[2] = tc);
(statearr_11460_11483[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11450 === 5))
{var inst_11429 = cljs.core.async.close_BANG_.call(null,tc);var inst_11430 = cljs.core.async.close_BANG_.call(null,fc);var state_11449__$1 = (function (){var statearr_11461 = state_11449;(statearr_11461[8] = inst_11429);
return statearr_11461;
})();var statearr_11462_11484 = state_11449__$1;(statearr_11462_11484[2] = inst_11430);
(statearr_11462_11484[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11450 === 14))
{var inst_11443 = (state_11449[2]);var state_11449__$1 = state_11449;var statearr_11463_11485 = state_11449__$1;(statearr_11463_11485[2] = inst_11443);
(statearr_11463_11485[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11450 === 10))
{var state_11449__$1 = state_11449;var statearr_11464_11486 = state_11449__$1;(statearr_11464_11486[2] = fc);
(statearr_11464_11486[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11450 === 8))
{var inst_11438 = (state_11449[2]);var state_11449__$1 = state_11449;if(cljs.core.truth_(inst_11438))
{var statearr_11465_11487 = state_11449__$1;(statearr_11465_11487[1] = 12);
} else
{var statearr_11466_11488 = state_11449__$1;(statearr_11466_11488[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5719__auto___11474,tc,fc))
;return ((function (switch__5704__auto__,c__5719__auto___11474,tc,fc){
return (function() {
var state_machine__5705__auto__ = null;
var state_machine__5705__auto____0 = (function (){var statearr_11470 = [null,null,null,null,null,null,null,null,null];(statearr_11470[0] = state_machine__5705__auto__);
(statearr_11470[1] = 1);
return statearr_11470;
});
var state_machine__5705__auto____1 = (function (state_11449){while(true){
var ret_value__5706__auto__ = (function (){try{while(true){
var result__5707__auto__ = switch__5704__auto__.call(null,state_11449);if(cljs.core.keyword_identical_QMARK_.call(null,result__5707__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5707__auto__;
}
break;
}
}catch (e11471){if((e11471 instanceof Object))
{var ex__5708__auto__ = e11471;var statearr_11472_11489 = state_11449;(statearr_11472_11489[5] = ex__5708__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11449);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11471;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5706__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11490 = state_11449;
state_11449 = G__11490;
continue;
}
} else
{return ret_value__5706__auto__;
}
break;
}
});
state_machine__5705__auto__ = function(state_11449){
switch(arguments.length){
case 0:
return state_machine__5705__auto____0.call(this);
case 1:
return state_machine__5705__auto____1.call(this,state_11449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5705__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5705__auto____0;
state_machine__5705__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5705__auto____1;
return state_machine__5705__auto__;
})()
;})(switch__5704__auto__,c__5719__auto___11474,tc,fc))
})();var state__5721__auto__ = (function (){var statearr_11473 = f__5720__auto__.call(null);(statearr_11473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5719__auto___11474);
return statearr_11473;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5721__auto__);
});})(c__5719__auto___11474,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5719__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5719__auto__){
return (function (){var f__5720__auto__ = (function (){var switch__5704__auto__ = ((function (c__5719__auto__){
return (function (state_11537){var state_val_11538 = (state_11537[1]);if((state_val_11538 === 7))
{var inst_11533 = (state_11537[2]);var state_11537__$1 = state_11537;var statearr_11539_11555 = state_11537__$1;(statearr_11539_11555[2] = inst_11533);
(statearr_11539_11555[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11538 === 6))
{var inst_11523 = (state_11537[7]);var inst_11526 = (state_11537[8]);var inst_11530 = f.call(null,inst_11523,inst_11526);var inst_11523__$1 = inst_11530;var state_11537__$1 = (function (){var statearr_11540 = state_11537;(statearr_11540[7] = inst_11523__$1);
return statearr_11540;
})();var statearr_11541_11556 = state_11537__$1;(statearr_11541_11556[2] = null);
(statearr_11541_11556[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11538 === 5))
{var inst_11523 = (state_11537[7]);var state_11537__$1 = state_11537;var statearr_11542_11557 = state_11537__$1;(statearr_11542_11557[2] = inst_11523);
(statearr_11542_11557[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11538 === 4))
{var inst_11526 = (state_11537[8]);var inst_11526__$1 = (state_11537[2]);var inst_11527 = (inst_11526__$1 == null);var state_11537__$1 = (function (){var statearr_11543 = state_11537;(statearr_11543[8] = inst_11526__$1);
return statearr_11543;
})();if(cljs.core.truth_(inst_11527))
{var statearr_11544_11558 = state_11537__$1;(statearr_11544_11558[1] = 5);
} else
{var statearr_11545_11559 = state_11537__$1;(statearr_11545_11559[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11538 === 3))
{var inst_11535 = (state_11537[2]);var state_11537__$1 = state_11537;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11537__$1,inst_11535);
} else
{if((state_val_11538 === 2))
{var state_11537__$1 = state_11537;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11537__$1,4,ch);
} else
{if((state_val_11538 === 1))
{var inst_11523 = init;var state_11537__$1 = (function (){var statearr_11546 = state_11537;(statearr_11546[7] = inst_11523);
return statearr_11546;
})();var statearr_11547_11560 = state_11537__$1;(statearr_11547_11560[2] = null);
(statearr_11547_11560[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(c__5719__auto__))
;return ((function (switch__5704__auto__,c__5719__auto__){
return (function() {
var state_machine__5705__auto__ = null;
var state_machine__5705__auto____0 = (function (){var statearr_11551 = [null,null,null,null,null,null,null,null,null];(statearr_11551[0] = state_machine__5705__auto__);
(statearr_11551[1] = 1);
return statearr_11551;
});
var state_machine__5705__auto____1 = (function (state_11537){while(true){
var ret_value__5706__auto__ = (function (){try{while(true){
var result__5707__auto__ = switch__5704__auto__.call(null,state_11537);if(cljs.core.keyword_identical_QMARK_.call(null,result__5707__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5707__auto__;
}
break;
}
}catch (e11552){if((e11552 instanceof Object))
{var ex__5708__auto__ = e11552;var statearr_11553_11561 = state_11537;(statearr_11553_11561[5] = ex__5708__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11537);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11552;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5706__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11562 = state_11537;
state_11537 = G__11562;
continue;
}
} else
{return ret_value__5706__auto__;
}
break;
}
});
state_machine__5705__auto__ = function(state_11537){
switch(arguments.length){
case 0:
return state_machine__5705__auto____0.call(this);
case 1:
return state_machine__5705__auto____1.call(this,state_11537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5705__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5705__auto____0;
state_machine__5705__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5705__auto____1;
return state_machine__5705__auto__;
})()
;})(switch__5704__auto__,c__5719__auto__))
})();var state__5721__auto__ = (function (){var statearr_11554 = f__5720__auto__.call(null);(statearr_11554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5719__auto__);
return statearr_11554;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5721__auto__);
});})(c__5719__auto__))
);
return c__5719__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5719__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5719__auto__){
return (function (){var f__5720__auto__ = (function (){var switch__5704__auto__ = ((function (c__5719__auto__){
return (function (state_11636){var state_val_11637 = (state_11636[1]);if((state_val_11637 === 7))
{var inst_11618 = (state_11636[2]);var state_11636__$1 = state_11636;var statearr_11638_11661 = state_11636__$1;(statearr_11638_11661[2] = inst_11618);
(statearr_11638_11661[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 1))
{var inst_11612 = cljs.core.seq.call(null,coll);var inst_11613 = inst_11612;var state_11636__$1 = (function (){var statearr_11639 = state_11636;(statearr_11639[7] = inst_11613);
return statearr_11639;
})();var statearr_11640_11662 = state_11636__$1;(statearr_11640_11662[2] = null);
(statearr_11640_11662[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 4))
{var inst_11613 = (state_11636[7]);var inst_11616 = cljs.core.first.call(null,inst_11613);var state_11636__$1 = state_11636;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11636__$1,7,ch,inst_11616);
} else
{if((state_val_11637 === 13))
{var inst_11630 = (state_11636[2]);var state_11636__$1 = state_11636;var statearr_11641_11663 = state_11636__$1;(statearr_11641_11663[2] = inst_11630);
(statearr_11641_11663[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 6))
{var inst_11621 = (state_11636[2]);var state_11636__$1 = state_11636;if(cljs.core.truth_(inst_11621))
{var statearr_11642_11664 = state_11636__$1;(statearr_11642_11664[1] = 8);
} else
{var statearr_11643_11665 = state_11636__$1;(statearr_11643_11665[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 3))
{var inst_11634 = (state_11636[2]);var state_11636__$1 = state_11636;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11636__$1,inst_11634);
} else
{if((state_val_11637 === 12))
{var state_11636__$1 = state_11636;var statearr_11644_11666 = state_11636__$1;(statearr_11644_11666[2] = null);
(statearr_11644_11666[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 2))
{var inst_11613 = (state_11636[7]);var state_11636__$1 = state_11636;if(cljs.core.truth_(inst_11613))
{var statearr_11645_11667 = state_11636__$1;(statearr_11645_11667[1] = 4);
} else
{var statearr_11646_11668 = state_11636__$1;(statearr_11646_11668[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 11))
{var inst_11627 = cljs.core.async.close_BANG_.call(null,ch);var state_11636__$1 = state_11636;var statearr_11647_11669 = state_11636__$1;(statearr_11647_11669[2] = inst_11627);
(statearr_11647_11669[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 9))
{var state_11636__$1 = state_11636;if(cljs.core.truth_(close_QMARK_))
{var statearr_11648_11670 = state_11636__$1;(statearr_11648_11670[1] = 11);
} else
{var statearr_11649_11671 = state_11636__$1;(statearr_11649_11671[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 5))
{var inst_11613 = (state_11636[7]);var state_11636__$1 = state_11636;var statearr_11650_11672 = state_11636__$1;(statearr_11650_11672[2] = inst_11613);
(statearr_11650_11672[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 10))
{var inst_11632 = (state_11636[2]);var state_11636__$1 = state_11636;var statearr_11651_11673 = state_11636__$1;(statearr_11651_11673[2] = inst_11632);
(statearr_11651_11673[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 8))
{var inst_11613 = (state_11636[7]);var inst_11623 = cljs.core.next.call(null,inst_11613);var inst_11613__$1 = inst_11623;var state_11636__$1 = (function (){var statearr_11652 = state_11636;(statearr_11652[7] = inst_11613__$1);
return statearr_11652;
})();var statearr_11653_11674 = state_11636__$1;(statearr_11653_11674[2] = null);
(statearr_11653_11674[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5719__auto__))
;return ((function (switch__5704__auto__,c__5719__auto__){
return (function() {
var state_machine__5705__auto__ = null;
var state_machine__5705__auto____0 = (function (){var statearr_11657 = [null,null,null,null,null,null,null,null];(statearr_11657[0] = state_machine__5705__auto__);
(statearr_11657[1] = 1);
return statearr_11657;
});
var state_machine__5705__auto____1 = (function (state_11636){while(true){
var ret_value__5706__auto__ = (function (){try{while(true){
var result__5707__auto__ = switch__5704__auto__.call(null,state_11636);if(cljs.core.keyword_identical_QMARK_.call(null,result__5707__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5707__auto__;
}
break;
}
}catch (e11658){if((e11658 instanceof Object))
{var ex__5708__auto__ = e11658;var statearr_11659_11675 = state_11636;(statearr_11659_11675[5] = ex__5708__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11636);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11658;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5706__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11676 = state_11636;
state_11636 = G__11676;
continue;
}
} else
{return ret_value__5706__auto__;
}
break;
}
});
state_machine__5705__auto__ = function(state_11636){
switch(arguments.length){
case 0:
return state_machine__5705__auto____0.call(this);
case 1:
return state_machine__5705__auto____1.call(this,state_11636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5705__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5705__auto____0;
state_machine__5705__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5705__auto____1;
return state_machine__5705__auto__;
})()
;})(switch__5704__auto__,c__5719__auto__))
})();var state__5721__auto__ = (function (){var statearr_11660 = f__5720__auto__.call(null);(statearr_11660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5719__auto__);
return statearr_11660;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5721__auto__);
});})(c__5719__auto__))
);
return c__5719__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj11678 = {};return obj11678;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3542__auto__ = _;if(and__3542__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3542__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4181__auto__ = (((_ == null))?null:_);return (function (){var or__3554__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4181__auto__)]);if(or__3554__auto__)
{return or__3554__auto__;
} else
{var or__3554__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3554__auto____$1)
{return or__3554__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11680 = {};return obj11680;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3542__auto__ = m;if(and__3542__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3542__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4181__auto__ = (((m == null))?null:m);return (function (){var or__3554__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4181__auto__)]);if(or__3554__auto__)
{return or__3554__auto__;
} else
{var or__3554__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3554__auto____$1)
{return or__3554__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3542__auto__ = m;if(and__3542__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3542__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4181__auto__ = (((m == null))?null:m);return (function (){var or__3554__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4181__auto__)]);if(or__3554__auto__)
{return or__3554__auto__;
} else
{var or__3554__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3554__auto____$1)
{return or__3554__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3542__auto__ = m;if(and__3542__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3542__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4181__auto__ = (((m == null))?null:m);return (function (){var or__3554__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4181__auto__)]);if(or__3554__auto__)
{return or__3554__auto__;
} else
{var or__3554__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3554__auto____$1)
{return or__3554__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11902 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11902 = (function (cs,ch,mult,meta11903){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11903 = meta11903;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11902.cljs$lang$type = true;
cljs.core.async.t11902.cljs$lang$ctorStr = "cljs.core.async/t11902";
cljs.core.async.t11902.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4121__auto__,writer__4122__auto__,opt__4123__auto__){return cljs.core._write.call(null,writer__4122__auto__,"cljs.core.async/t11902");
});})(cs))
;
cljs.core.async.t11902.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11902.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11902.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11902.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11902.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11902.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11902.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11904){var self__ = this;
var _11904__$1 = this;return self__.meta11903;
});})(cs))
;
cljs.core.async.t11902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11904,meta11903__$1){var self__ = this;
var _11904__$1 = this;return (new cljs.core.async.t11902(self__.cs,self__.ch,self__.mult,meta11903__$1));
});})(cs))
;
cljs.core.async.__GT_t11902 = ((function (cs){
return (function __GT_t11902(cs__$1,ch__$1,mult__$1,meta11903){return (new cljs.core.async.t11902(cs__$1,ch__$1,mult__$1,meta11903));
});})(cs))
;
}
return (new cljs.core.async.t11902(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5719__auto___12123 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5719__auto___12123,cs,m,dchan,dctr,done){
return (function (){var f__5720__auto__ = (function (){var switch__5704__auto__ = ((function (c__5719__auto___12123,cs,m,dchan,dctr,done){
return (function (state_12035){var state_val_12036 = (state_12035[1]);if((state_val_12036 === 7))
{var inst_12031 = (state_12035[2]);var state_12035__$1 = state_12035;var statearr_12037_12124 = state_12035__$1;(statearr_12037_12124[2] = inst_12031);
(statearr_12037_12124[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12036 === 20))
{var inst_11936 = (state_12035[7]);var inst_11946 = cljs.core.first.call(null,inst_11936);var inst_11947 = cljs.core.nth.call(null,inst_11946,0,null);var inst_11948 = cljs.core.nth.call(null,inst_11946,1,null);var state_12035__$1 = (function (){var statearr_12038 = state_12035;(statearr_12038[8] = inst_11947);
return statearr_12038;
})();if(cljs.core.truth_(inst_11948))
{var statearr_12039_12125 = state_12035__$1;(statearr_12039_12125[1] = 22);
} else
{var statearr_12040_12126 = state_12035__$1;(statearr_12040_12126[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12036 === 27))
{var inst_11978 = (state_12035[9]);var inst_11907 = (state_12035[10]);var inst_11976 = (state_12035[11]);var inst_11983 = (state_12035[12]);var inst_11983__$1 = cljs.core._nth.call(null,inst_11976,inst_11978);var inst_11984 = cljs.core.async.put_BANG_.call(null,inst_11983__$1,inst_11907,done);var state_12035__$1 = (function (){var statearr_12041 = state_12035;(statearr_12041[12] = inst_11983__$1);
return statearr_12041;
})();if(cljs.core.truth_(inst_11984))
{var statearr_12042_12127 = state_12035__$1;(statearr_12042_12127[1] = 30);
} else
{var statearr_12043_12128 = state_12035__$1;(statearr_12043_12128[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12036 === 1))
{var state_12035__$1 = state_12035;var statearr_12044_12129 = state_12035__$1;(statearr_12044_12129[2] = null);
(statearr_12044_12129[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12036 === 24))
{var inst_11936 = (state_12035[7]);var inst_11953 = (state_12035[2]);var inst_11954 = cljs.core.next.call(null,inst_11936);var inst_11916 = inst_11954;var inst_11917 = null;var inst_11918 = 0;var inst_11919 = 0;var state_12035__$1 = (function (){var statearr_12045 = state_12035;(statearr_12045[13] = inst_11918);
(statearr_12045[14] = inst_11953);
(statearr_12045[15] = inst_11916);
(statearr_12045[16] = inst_11917);
(statearr_12045[17] = inst_11919);
return statearr_12045;
})();var statearr_12046_12130 = state_12035__$1;(statearr_12046_12130[2] = null);
(statearr_12046_12130[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12036 === 39))
{var state_12035__$1 = state_12035;var statearr_12050_12131 = state_12035__$1;(statearr_12050_12131[2] = null);
(statearr_12050_12131[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12036 === 4))
{var inst_11907 = (state_12035[10]);var inst_11907__$1 = (state_12035[2]);var inst_11908 = (inst_11907__$1 == null);var state_12035__$1 = (function (){var statearr_12051 = state_12035;(statearr_12051[10] = inst_11907__$1);
return statearr_12051;
})();if(cljs.core.truth_(inst_11908))
{var statearr_12052_12132 = state_12035__$1;(statearr_12052_12132[1] = 5);
} else
{var statearr_12053_12133 = state_12035__$1;(statearr_12053_12133[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12036 === 15))
{var inst_11918 = (state_12035[13]);var inst_11916 = (state_12035[15]);var inst_11917 = (state_12035[16]);var inst_11919 = (state_12035[17]);var inst_11932 = (state_12035[2]);var inst_11933 = (inst_11919 + 1);var tmp12047 = inst_11918;var tmp12048 = inst_11916;var tmp12049 = inst_11917;var inst_11916__$1 = tmp12048;var inst_11917__$1 = tmp12049;var inst_11918__$1 = tmp12047;var inst_11919__$1 = inst_11933;var state_12035__$1 = (function (){var statearr_12054 = state_12035;(statearr_12054[18] = inst_11932);
(statearr_12054[13] = inst_11918__$1);
(statearr_12054[15] = inst_11916__$1);
(statearr_12054[16] = inst_11917__$1);
(statearr_12054[17] = inst_11919__$1);
return statearr_12054;
})();var statearr_12055_12134 = state_12035__$1;(statearr_12055_12134[2] = null);
(statearr_12055_12134[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12036 === 21))
{var inst_11957 = (state_12035[2]);var state_12035__$1 = state_12035;var statearr_12059_12135 = state_12035__$1;(statearr_12059_12135[2] = inst_11957);
(statearr_12059_12135[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12036 === 31))
{var inst_11983 = (state_12035[12]);var inst_11987 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11988 = cljs.core.async.untap_STAR_.call(null,m,inst_11983);var state_12035__$1 = (function (){var statearr_12060 = state_12035;(statearr_12060[19] = inst_11987);
return statearr_12060;
})();var statearr_12061_12136 = state_12035__$1;(statearr_12061_12136[2] = inst_11988);
(statearr_12061_12136[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12036 === 32))
{var inst_11978 = (state_12035[9]);var inst_11975 = (state_12035[20]);var inst_11977 = (state_12035[21]);var inst_11976 = (state_12035[11]);var inst_11990 = (state_12035[2]);var inst_11991 = (inst_11978 + 1);var tmp12056 = inst_11975;var tmp12057 = inst_11977;var tmp12058 = inst_11976;var inst_11975__$1 = tmp12056;var inst_11976__$1 = tmp12058;var inst_11977__$1 = tmp12057;var inst_11978__$1 = inst_11991;var state_12035__$1 = (function (){var statearr_12062 = state_12035;(statearr_12062[9] = inst_11978__$1);
(statearr_12062[20] = inst_11975__$1);
(statearr_12062[22] = inst_11990);
(statearr_12062[21] = inst_11977__$1);
(statearr_12062[11] = inst_11976__$1);
return statearr_12062;
})();var statearr_12063_12137 = state_12035__$1;(statearr_12063_12137[2] = null);
(statearr_12063_12137[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12036 === 40))
{var inst_12003 = (state_12035[23]);var inst_12007 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12008 = cljs.core.async.untap_STAR_.call(null,m,inst_12003);var state_12035__$1 = (function (){var statearr_12064 = state_12035;(statearr_12064[24] = inst_12007);
return statearr_12064;
})();var statearr_12065_12138 = state_12035__$1;(statearr_12065_12138[2] = inst_12008);
(statearr_12065_12138[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12036 === 33))
{var inst_11994 = (state_12035[25]);var inst_11996 = cljs.core.chunked_seq_QMARK_.call(null,inst_11994);var state_12035__$1 = state_12035;if(inst_11996)
{var statearr_12066_12139 = state_12035__$1;(statearr_12066_12139[1] = 36);
} else
{var statearr_12067_12140 = state_12035__$1;(statearr_12067_12140[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12036 === 13))
{var inst_11926 = (state_12035[26]);var inst_11929 = cljs.core.async.close_BANG_.call(null,inst_11926);var state_12035__$1 = state_12035;var statearr_12068_12141 = state_12035__$1;(statearr_12068_12141[2] = inst_11929);
(statearr_12068_12141[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12036 === 22))
{var inst_11947 = (state_12035[8]);var inst_11950 = cljs.core.async.close_BANG_.call(null,inst_11947);var state_12035__$1 = state_12035;var statearr_12069_12142 = state_12035__$1;(statearr_12069_12142[2] = inst_11950);
(statearr_12069_12142[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12036 === 36))
{var inst_11994 = (state_12035[25]);var inst_11998 = cljs.core.chunk_first.call(null,inst_11994);var inst_11999 = cljs.core.chunk_rest.call(null,inst_11994);var inst_12000 = cljs.core.count.call(null,inst_11998);var inst_11975 = inst_11999;var inst_11976 = inst_11998;var inst_11977 = inst_12000;var inst_11978 = 0;var state_12035__$1 = (function (){var statearr_12070 = state_12035;(statearr_12070[9] = inst_11978);
(statearr_12070[20] = inst_11975);
(statearr_12070[21] = inst_11977);
(statearr_12070[11] = inst_11976);
return statearr_12070;
})();var statearr_12071_12143 = state_12035__$1;(statearr_12071_12143[2] = null);
(statearr_12071_12143[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12036 === 41))
{var inst_11994 = (state_12035[25]);var inst_12010 = (state_12035[2]);var inst_12011 = cljs.core.next.call(null,inst_11994);var inst_11975 = inst_12011;var inst_11976 = null;var inst_11977 = 0;var inst_11978 = 0;var state_12035__$1 = (function (){var statearr_12072 = state_12035;(statearr_12072[9] = inst_11978);
(statearr_12072[20] = inst_11975);
(statearr_12072[27] = inst_12010);
(statearr_12072[21] = inst_11977);
(statearr_12072[11] = inst_11976);
return statearr_12072;
})();var statearr_12073_12144 = state_12035__$1;(statearr_12073_12144[2] = null);
(statearr_12073_12144[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12036 === 43))
{var state_12035__$1 = state_12035;var statearr_12074_12145 = state_12035__$1;(statearr_12074_12145[2] = null);
(statearr_12074_12145[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12036 === 29))
{var inst_12019 = (state_12035[2]);var state_12035__$1 = state_12035;var statearr_12075_12146 = state_12035__$1;(statearr_12075_12146[2] = inst_12019);
(statearr_12075_12146[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12036 === 44))
{var inst_12028 = (state_12035[2]);var state_12035__$1 = (function (){var statearr_12076 = state_12035;(statearr_12076[28] = inst_12028);
return statearr_12076;
})();var statearr_12077_12147 = state_12035__$1;(statearr_12077_12147[2] = null);
(statearr_12077_12147[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12036 === 6))
{var inst_11967 = (state_12035[29]);var inst_11966 = cljs.core.deref.call(null,cs);var inst_11967__$1 = cljs.core.keys.call(null,inst_11966);var inst_11968 = cljs.core.count.call(null,inst_11967__$1);var inst_11969 = cljs.core.reset_BANG_.call(null,dctr,inst_11968);var inst_11974 = cljs.core.seq.call(null,inst_11967__$1);var inst_11975 = inst_11974;var inst_11976 = null;var inst_11977 = 0;var inst_11978 = 0;var state_12035__$1 = (function (){var statearr_12078 = state_12035;(statearr_12078[9] = inst_11978);
(statearr_12078[30] = inst_11969);
(statearr_12078[20] = inst_11975);
(statearr_12078[29] = inst_11967__$1);
(statearr_12078[21] = inst_11977);
(statearr_12078[11] = inst_11976);
return statearr_12078;
})();var statearr_12079_12148 = state_12035__$1;(statearr_12079_12148[2] = null);
(statearr_12079_12148[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12036 === 28))
{var inst_11975 = (state_12035[20]);var inst_11994 = (state_12035[25]);var inst_11994__$1 = cljs.core.seq.call(null,inst_11975);var state_12035__$1 = (function (){var statearr_12080 = state_12035;(statearr_12080[25] = inst_11994__$1);
return statearr_12080;
})();if(inst_11994__$1)
{var statearr_12081_12149 = state_12035__$1;(statearr_12081_12149[1] = 33);
} else
{var statearr_12082_12150 = state_12035__$1;(statearr_12082_12150[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12036 === 25))
{var inst_11978 = (state_12035[9]);var inst_11977 = (state_12035[21]);var inst_11980 = (inst_11978 < inst_11977);var inst_11981 = inst_11980;var state_12035__$1 = state_12035;if(cljs.core.truth_(inst_11981))
{var statearr_12083_12151 = state_12035__$1;(statearr_12083_12151[1] = 27);
} else
{var statearr_12084_12152 = state_12035__$1;(statearr_12084_12152[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12036 === 34))
{var state_12035__$1 = state_12035;var statearr_12085_12153 = state_12035__$1;(statearr_12085_12153[2] = null);
(statearr_12085_12153[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12036 === 17))
{var state_12035__$1 = state_12035;var statearr_12086_12154 = state_12035__$1;(statearr_12086_12154[2] = null);
(statearr_12086_12154[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12036 === 3))
{var inst_12033 = (state_12035[2]);var state_12035__$1 = state_12035;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12035__$1,inst_12033);
} else
{if((state_val_12036 === 12))
{var inst_11962 = (state_12035[2]);var state_12035__$1 = state_12035;var statearr_12087_12155 = state_12035__$1;(statearr_12087_12155[2] = inst_11962);
(statearr_12087_12155[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12036 === 2))
{var state_12035__$1 = state_12035;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12035__$1,4,ch);
} else
{if((state_val_12036 === 23))
{var state_12035__$1 = state_12035;var statearr_12088_12156 = state_12035__$1;(statearr_12088_12156[2] = null);
(statearr_12088_12156[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12036 === 35))
{var inst_12017 = (state_12035[2]);var state_12035__$1 = state_12035;var statearr_12089_12157 = state_12035__$1;(statearr_12089_12157[2] = inst_12017);
(statearr_12089_12157[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12036 === 19))
{var inst_11936 = (state_12035[7]);var inst_11940 = cljs.core.chunk_first.call(null,inst_11936);var inst_11941 = cljs.core.chunk_rest.call(null,inst_11936);var inst_11942 = cljs.core.count.call(null,inst_11940);var inst_11916 = inst_11941;var inst_11917 = inst_11940;var inst_11918 = inst_11942;var inst_11919 = 0;var state_12035__$1 = (function (){var statearr_12090 = state_12035;(statearr_12090[13] = inst_11918);
(statearr_12090[15] = inst_11916);
(statearr_12090[16] = inst_11917);
(statearr_12090[17] = inst_11919);
return statearr_12090;
})();var statearr_12091_12158 = state_12035__$1;(statearr_12091_12158[2] = null);
(statearr_12091_12158[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12036 === 11))
{var inst_11936 = (state_12035[7]);var inst_11916 = (state_12035[15]);var inst_11936__$1 = cljs.core.seq.call(null,inst_11916);var state_12035__$1 = (function (){var statearr_12092 = state_12035;(statearr_12092[7] = inst_11936__$1);
return statearr_12092;
})();if(inst_11936__$1)
{var statearr_12093_12159 = state_12035__$1;(statearr_12093_12159[1] = 16);
} else
{var statearr_12094_12160 = state_12035__$1;(statearr_12094_12160[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12036 === 9))
{var inst_11964 = (state_12035[2]);var state_12035__$1 = state_12035;var statearr_12095_12161 = state_12035__$1;(statearr_12095_12161[2] = inst_11964);
(statearr_12095_12161[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12036 === 5))
{var inst_11914 = cljs.core.deref.call(null,cs);var inst_11915 = cljs.core.seq.call(null,inst_11914);var inst_11916 = inst_11915;var inst_11917 = null;var inst_11918 = 0;var inst_11919 = 0;var state_12035__$1 = (function (){var statearr_12096 = state_12035;(statearr_12096[13] = inst_11918);
(statearr_12096[15] = inst_11916);
(statearr_12096[16] = inst_11917);
(statearr_12096[17] = inst_11919);
return statearr_12096;
})();var statearr_12097_12162 = state_12035__$1;(statearr_12097_12162[2] = null);
(statearr_12097_12162[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12036 === 14))
{var state_12035__$1 = state_12035;var statearr_12098_12163 = state_12035__$1;(statearr_12098_12163[2] = null);
(statearr_12098_12163[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12036 === 45))
{var inst_12025 = (state_12035[2]);var state_12035__$1 = state_12035;var statearr_12099_12164 = state_12035__$1;(statearr_12099_12164[2] = inst_12025);
(statearr_12099_12164[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12036 === 26))
{var inst_11967 = (state_12035[29]);var inst_12021 = (state_12035[2]);var inst_12022 = cljs.core.seq.call(null,inst_11967);var state_12035__$1 = (function (){var statearr_12100 = state_12035;(statearr_12100[31] = inst_12021);
return statearr_12100;
})();if(inst_12022)
{var statearr_12101_12165 = state_12035__$1;(statearr_12101_12165[1] = 42);
} else
{var statearr_12102_12166 = state_12035__$1;(statearr_12102_12166[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12036 === 16))
{var inst_11936 = (state_12035[7]);var inst_11938 = cljs.core.chunked_seq_QMARK_.call(null,inst_11936);var state_12035__$1 = state_12035;if(inst_11938)
{var statearr_12103_12167 = state_12035__$1;(statearr_12103_12167[1] = 19);
} else
{var statearr_12104_12168 = state_12035__$1;(statearr_12104_12168[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12036 === 38))
{var inst_12014 = (state_12035[2]);var state_12035__$1 = state_12035;var statearr_12105_12169 = state_12035__$1;(statearr_12105_12169[2] = inst_12014);
(statearr_12105_12169[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12036 === 30))
{var state_12035__$1 = state_12035;var statearr_12106_12170 = state_12035__$1;(statearr_12106_12170[2] = null);
(statearr_12106_12170[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12036 === 10))
{var inst_11917 = (state_12035[16]);var inst_11919 = (state_12035[17]);var inst_11925 = cljs.core._nth.call(null,inst_11917,inst_11919);var inst_11926 = cljs.core.nth.call(null,inst_11925,0,null);var inst_11927 = cljs.core.nth.call(null,inst_11925,1,null);var state_12035__$1 = (function (){var statearr_12107 = state_12035;(statearr_12107[26] = inst_11926);
return statearr_12107;
})();if(cljs.core.truth_(inst_11927))
{var statearr_12108_12171 = state_12035__$1;(statearr_12108_12171[1] = 13);
} else
{var statearr_12109_12172 = state_12035__$1;(statearr_12109_12172[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12036 === 18))
{var inst_11960 = (state_12035[2]);var state_12035__$1 = state_12035;var statearr_12110_12173 = state_12035__$1;(statearr_12110_12173[2] = inst_11960);
(statearr_12110_12173[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12036 === 42))
{var state_12035__$1 = state_12035;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12035__$1,45,dchan);
} else
{if((state_val_12036 === 37))
{var inst_11907 = (state_12035[10]);var inst_12003 = (state_12035[23]);var inst_11994 = (state_12035[25]);var inst_12003__$1 = cljs.core.first.call(null,inst_11994);var inst_12004 = cljs.core.async.put_BANG_.call(null,inst_12003__$1,inst_11907,done);var state_12035__$1 = (function (){var statearr_12111 = state_12035;(statearr_12111[23] = inst_12003__$1);
return statearr_12111;
})();if(cljs.core.truth_(inst_12004))
{var statearr_12112_12174 = state_12035__$1;(statearr_12112_12174[1] = 39);
} else
{var statearr_12113_12175 = state_12035__$1;(statearr_12113_12175[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12036 === 8))
{var inst_11918 = (state_12035[13]);var inst_11919 = (state_12035[17]);var inst_11921 = (inst_11919 < inst_11918);var inst_11922 = inst_11921;var state_12035__$1 = state_12035;if(cljs.core.truth_(inst_11922))
{var statearr_12114_12176 = state_12035__$1;(statearr_12114_12176[1] = 10);
} else
{var statearr_12115_12177 = state_12035__$1;(statearr_12115_12177[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5719__auto___12123,cs,m,dchan,dctr,done))
;return ((function (switch__5704__auto__,c__5719__auto___12123,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5705__auto__ = null;
var state_machine__5705__auto____0 = (function (){var statearr_12119 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12119[0] = state_machine__5705__auto__);
(statearr_12119[1] = 1);
return statearr_12119;
});
var state_machine__5705__auto____1 = (function (state_12035){while(true){
var ret_value__5706__auto__ = (function (){try{while(true){
var result__5707__auto__ = switch__5704__auto__.call(null,state_12035);if(cljs.core.keyword_identical_QMARK_.call(null,result__5707__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5707__auto__;
}
break;
}
}catch (e12120){if((e12120 instanceof Object))
{var ex__5708__auto__ = e12120;var statearr_12121_12178 = state_12035;(statearr_12121_12178[5] = ex__5708__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12035);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12120;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5706__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12179 = state_12035;
state_12035 = G__12179;
continue;
}
} else
{return ret_value__5706__auto__;
}
break;
}
});
state_machine__5705__auto__ = function(state_12035){
switch(arguments.length){
case 0:
return state_machine__5705__auto____0.call(this);
case 1:
return state_machine__5705__auto____1.call(this,state_12035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5705__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5705__auto____0;
state_machine__5705__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5705__auto____1;
return state_machine__5705__auto__;
})()
;})(switch__5704__auto__,c__5719__auto___12123,cs,m,dchan,dctr,done))
})();var state__5721__auto__ = (function (){var statearr_12122 = f__5720__auto__.call(null);(statearr_12122[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5719__auto___12123);
return statearr_12122;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5721__auto__);
});})(c__5719__auto___12123,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj12181 = {};return obj12181;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3542__auto__ = m;if(and__3542__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3542__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4181__auto__ = (((m == null))?null:m);return (function (){var or__3554__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4181__auto__)]);if(or__3554__auto__)
{return or__3554__auto__;
} else
{var or__3554__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3554__auto____$1)
{return or__3554__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3542__auto__ = m;if(and__3542__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3542__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4181__auto__ = (((m == null))?null:m);return (function (){var or__3554__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4181__auto__)]);if(or__3554__auto__)
{return or__3554__auto__;
} else
{var or__3554__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3554__auto____$1)
{return or__3554__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3542__auto__ = m;if(and__3542__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3542__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4181__auto__ = (((m == null))?null:m);return (function (){var or__3554__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4181__auto__)]);if(or__3554__auto__)
{return or__3554__auto__;
} else
{var or__3554__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3554__auto____$1)
{return or__3554__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3542__auto__ = m;if(and__3542__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3542__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4181__auto__ = (((m == null))?null:m);return (function (){var or__3554__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4181__auto__)]);if(or__3554__auto__)
{return or__3554__auto__;
} else
{var or__3554__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3554__auto____$1)
{return or__3554__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3542__auto__ = m;if(and__3542__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3542__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4181__auto__ = (((m == null))?null:m);return (function (){var or__3554__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4181__auto__)]);if(or__3554__auto__)
{return or__3554__auto__;
} else
{var or__3554__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3554__auto____$1)
{return or__3554__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12301 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12301 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12302){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12302 = meta12302;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12301.cljs$lang$type = true;
cljs.core.async.t12301.cljs$lang$ctorStr = "cljs.core.async/t12301";
cljs.core.async.t12301.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4121__auto__,writer__4122__auto__,opt__4123__auto__){return cljs.core._write.call(null,writer__4122__auto__,"cljs.core.async/t12301");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12301.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12301.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12301.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12301.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12301.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12301.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12301.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12301.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12301.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12303){var self__ = this;
var _12303__$1 = this;return self__.meta12302;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12303,meta12302__$1){var self__ = this;
var _12303__$1 = this;return (new cljs.core.async.t12301(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12302__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12301 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12301(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12302){return (new cljs.core.async.t12301(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12302));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12301(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5719__auto___12420 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5719__auto___12420,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5720__auto__ = (function (){var switch__5704__auto__ = ((function (c__5719__auto___12420,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12373){var state_val_12374 = (state_12373[1]);if((state_val_12374 === 7))
{var inst_12317 = (state_12373[7]);var inst_12322 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12317);var state_12373__$1 = state_12373;var statearr_12375_12421 = state_12373__$1;(statearr_12375_12421[2] = inst_12322);
(statearr_12375_12421[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12374 === 20))
{var inst_12332 = (state_12373[8]);var state_12373__$1 = state_12373;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12373__$1,23,out,inst_12332);
} else
{if((state_val_12374 === 1))
{var inst_12307 = (state_12373[9]);var inst_12307__$1 = calc_state.call(null);var inst_12308 = cljs.core.seq_QMARK_.call(null,inst_12307__$1);var state_12373__$1 = (function (){var statearr_12376 = state_12373;(statearr_12376[9] = inst_12307__$1);
return statearr_12376;
})();if(inst_12308)
{var statearr_12377_12422 = state_12373__$1;(statearr_12377_12422[1] = 2);
} else
{var statearr_12378_12423 = state_12373__$1;(statearr_12378_12423[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12374 === 24))
{var inst_12325 = (state_12373[10]);var inst_12317 = inst_12325;var state_12373__$1 = (function (){var statearr_12379 = state_12373;(statearr_12379[7] = inst_12317);
return statearr_12379;
})();var statearr_12380_12424 = state_12373__$1;(statearr_12380_12424[2] = null);
(statearr_12380_12424[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12374 === 4))
{var inst_12307 = (state_12373[9]);var inst_12313 = (state_12373[2]);var inst_12314 = cljs.core.get.call(null,inst_12313,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12315 = cljs.core.get.call(null,inst_12313,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12316 = cljs.core.get.call(null,inst_12313,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_12317 = inst_12307;var state_12373__$1 = (function (){var statearr_12381 = state_12373;(statearr_12381[7] = inst_12317);
(statearr_12381[11] = inst_12316);
(statearr_12381[12] = inst_12314);
(statearr_12381[13] = inst_12315);
return statearr_12381;
})();var statearr_12382_12425 = state_12373__$1;(statearr_12382_12425[2] = null);
(statearr_12382_12425[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12374 === 15))
{var state_12373__$1 = state_12373;var statearr_12383_12426 = state_12373__$1;(statearr_12383_12426[2] = null);
(statearr_12383_12426[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12374 === 21))
{var inst_12325 = (state_12373[10]);var inst_12317 = inst_12325;var state_12373__$1 = (function (){var statearr_12384 = state_12373;(statearr_12384[7] = inst_12317);
return statearr_12384;
})();var statearr_12385_12427 = state_12373__$1;(statearr_12385_12427[2] = null);
(statearr_12385_12427[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12374 === 13))
{var inst_12369 = (state_12373[2]);var state_12373__$1 = state_12373;var statearr_12386_12428 = state_12373__$1;(statearr_12386_12428[2] = inst_12369);
(statearr_12386_12428[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12374 === 22))
{var inst_12367 = (state_12373[2]);var state_12373__$1 = state_12373;var statearr_12387_12429 = state_12373__$1;(statearr_12387_12429[2] = inst_12367);
(statearr_12387_12429[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12374 === 6))
{var inst_12371 = (state_12373[2]);var state_12373__$1 = state_12373;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12373__$1,inst_12371);
} else
{if((state_val_12374 === 25))
{var state_12373__$1 = state_12373;var statearr_12388_12430 = state_12373__$1;(statearr_12388_12430[2] = null);
(statearr_12388_12430[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12374 === 17))
{var inst_12347 = (state_12373[14]);var state_12373__$1 = state_12373;var statearr_12389_12431 = state_12373__$1;(statearr_12389_12431[2] = inst_12347);
(statearr_12389_12431[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12374 === 3))
{var inst_12307 = (state_12373[9]);var state_12373__$1 = state_12373;var statearr_12390_12432 = state_12373__$1;(statearr_12390_12432[2] = inst_12307);
(statearr_12390_12432[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12374 === 12))
{var inst_12328 = (state_12373[15]);var inst_12333 = (state_12373[16]);var inst_12347 = (state_12373[14]);var inst_12347__$1 = inst_12328.call(null,inst_12333);var state_12373__$1 = (function (){var statearr_12391 = state_12373;(statearr_12391[14] = inst_12347__$1);
return statearr_12391;
})();if(cljs.core.truth_(inst_12347__$1))
{var statearr_12392_12433 = state_12373__$1;(statearr_12392_12433[1] = 17);
} else
{var statearr_12393_12434 = state_12373__$1;(statearr_12393_12434[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12374 === 2))
{var inst_12307 = (state_12373[9]);var inst_12310 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12307);var state_12373__$1 = state_12373;var statearr_12394_12435 = state_12373__$1;(statearr_12394_12435[2] = inst_12310);
(statearr_12394_12435[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12374 === 23))
{var inst_12358 = (state_12373[2]);var state_12373__$1 = state_12373;if(cljs.core.truth_(inst_12358))
{var statearr_12395_12436 = state_12373__$1;(statearr_12395_12436[1] = 24);
} else
{var statearr_12396_12437 = state_12373__$1;(statearr_12396_12437[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12374 === 19))
{var inst_12355 = (state_12373[2]);var state_12373__$1 = state_12373;if(cljs.core.truth_(inst_12355))
{var statearr_12397_12438 = state_12373__$1;(statearr_12397_12438[1] = 20);
} else
{var statearr_12398_12439 = state_12373__$1;(statearr_12398_12439[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12374 === 11))
{var inst_12332 = (state_12373[8]);var inst_12338 = (inst_12332 == null);var state_12373__$1 = state_12373;if(cljs.core.truth_(inst_12338))
{var statearr_12399_12440 = state_12373__$1;(statearr_12399_12440[1] = 14);
} else
{var statearr_12400_12441 = state_12373__$1;(statearr_12400_12441[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12374 === 9))
{var inst_12325 = (state_12373[10]);var inst_12325__$1 = (state_12373[2]);var inst_12326 = cljs.core.get.call(null,inst_12325__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12327 = cljs.core.get.call(null,inst_12325__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12328 = cljs.core.get.call(null,inst_12325__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_12373__$1 = (function (){var statearr_12401 = state_12373;(statearr_12401[15] = inst_12328);
(statearr_12401[10] = inst_12325__$1);
(statearr_12401[17] = inst_12327);
return statearr_12401;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12373__$1,10,inst_12326);
} else
{if((state_val_12374 === 5))
{var inst_12317 = (state_12373[7]);var inst_12320 = cljs.core.seq_QMARK_.call(null,inst_12317);var state_12373__$1 = state_12373;if(inst_12320)
{var statearr_12402_12442 = state_12373__$1;(statearr_12402_12442[1] = 7);
} else
{var statearr_12403_12443 = state_12373__$1;(statearr_12403_12443[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12374 === 14))
{var inst_12333 = (state_12373[16]);var inst_12340 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12333);var state_12373__$1 = state_12373;var statearr_12404_12444 = state_12373__$1;(statearr_12404_12444[2] = inst_12340);
(statearr_12404_12444[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12374 === 26))
{var inst_12363 = (state_12373[2]);var state_12373__$1 = state_12373;var statearr_12405_12445 = state_12373__$1;(statearr_12405_12445[2] = inst_12363);
(statearr_12405_12445[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12374 === 16))
{var inst_12343 = (state_12373[2]);var inst_12344 = calc_state.call(null);var inst_12317 = inst_12344;var state_12373__$1 = (function (){var statearr_12406 = state_12373;(statearr_12406[18] = inst_12343);
(statearr_12406[7] = inst_12317);
return statearr_12406;
})();var statearr_12407_12446 = state_12373__$1;(statearr_12407_12446[2] = null);
(statearr_12407_12446[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12374 === 10))
{var inst_12333 = (state_12373[16]);var inst_12332 = (state_12373[8]);var inst_12331 = (state_12373[2]);var inst_12332__$1 = cljs.core.nth.call(null,inst_12331,0,null);var inst_12333__$1 = cljs.core.nth.call(null,inst_12331,1,null);var inst_12334 = (inst_12332__$1 == null);var inst_12335 = cljs.core._EQ_.call(null,inst_12333__$1,change);var inst_12336 = (inst_12334) || (inst_12335);var state_12373__$1 = (function (){var statearr_12408 = state_12373;(statearr_12408[16] = inst_12333__$1);
(statearr_12408[8] = inst_12332__$1);
return statearr_12408;
})();if(cljs.core.truth_(inst_12336))
{var statearr_12409_12447 = state_12373__$1;(statearr_12409_12447[1] = 11);
} else
{var statearr_12410_12448 = state_12373__$1;(statearr_12410_12448[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12374 === 18))
{var inst_12328 = (state_12373[15]);var inst_12333 = (state_12373[16]);var inst_12327 = (state_12373[17]);var inst_12350 = cljs.core.empty_QMARK_.call(null,inst_12328);var inst_12351 = inst_12327.call(null,inst_12333);var inst_12352 = cljs.core.not.call(null,inst_12351);var inst_12353 = (inst_12350) && (inst_12352);var state_12373__$1 = state_12373;var statearr_12411_12449 = state_12373__$1;(statearr_12411_12449[2] = inst_12353);
(statearr_12411_12449[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12374 === 8))
{var inst_12317 = (state_12373[7]);var state_12373__$1 = state_12373;var statearr_12412_12450 = state_12373__$1;(statearr_12412_12450[2] = inst_12317);
(statearr_12412_12450[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5719__auto___12420,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5704__auto__,c__5719__auto___12420,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5705__auto__ = null;
var state_machine__5705__auto____0 = (function (){var statearr_12416 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12416[0] = state_machine__5705__auto__);
(statearr_12416[1] = 1);
return statearr_12416;
});
var state_machine__5705__auto____1 = (function (state_12373){while(true){
var ret_value__5706__auto__ = (function (){try{while(true){
var result__5707__auto__ = switch__5704__auto__.call(null,state_12373);if(cljs.core.keyword_identical_QMARK_.call(null,result__5707__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5707__auto__;
}
break;
}
}catch (e12417){if((e12417 instanceof Object))
{var ex__5708__auto__ = e12417;var statearr_12418_12451 = state_12373;(statearr_12418_12451[5] = ex__5708__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12373);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12417;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5706__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12452 = state_12373;
state_12373 = G__12452;
continue;
}
} else
{return ret_value__5706__auto__;
}
break;
}
});
state_machine__5705__auto__ = function(state_12373){
switch(arguments.length){
case 0:
return state_machine__5705__auto____0.call(this);
case 1:
return state_machine__5705__auto____1.call(this,state_12373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5705__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5705__auto____0;
state_machine__5705__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5705__auto____1;
return state_machine__5705__auto__;
})()
;})(switch__5704__auto__,c__5719__auto___12420,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5721__auto__ = (function (){var statearr_12419 = f__5720__auto__.call(null);(statearr_12419[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5719__auto___12420);
return statearr_12419;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5721__auto__);
});})(c__5719__auto___12420,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj12454 = {};return obj12454;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3542__auto__ = p;if(and__3542__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3542__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4181__auto__ = (((p == null))?null:p);return (function (){var or__3554__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4181__auto__)]);if(or__3554__auto__)
{return or__3554__auto__;
} else
{var or__3554__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3554__auto____$1)
{return or__3554__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3542__auto__ = p;if(and__3542__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3542__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4181__auto__ = (((p == null))?null:p);return (function (){var or__3554__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4181__auto__)]);if(or__3554__auto__)
{return or__3554__auto__;
} else
{var or__3554__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3554__auto____$1)
{return or__3554__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3542__auto__ = p;if(and__3542__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3542__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4181__auto__ = (((p == null))?null:p);return (function (){var or__3554__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4181__auto__)]);if(or__3554__auto__)
{return or__3554__auto__;
} else
{var or__3554__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3554__auto____$1)
{return or__3554__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3542__auto__ = p;if(and__3542__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3542__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4181__auto__ = (((p == null))?null:p);return (function (){var or__3554__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4181__auto__)]);if(or__3554__auto__)
{return or__3554__auto__;
} else
{var or__3554__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3554__auto____$1)
{return or__3554__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3554__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3554__auto__))
{return or__3554__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3554__auto__,mults){
return (function (p1__12455_SHARP_){if(cljs.core.truth_(p1__12455_SHARP_.call(null,topic)))
{return p1__12455_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12455_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3554__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12578 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12578 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12579){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12579 = meta12579;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12578.cljs$lang$type = true;
cljs.core.async.t12578.cljs$lang$ctorStr = "cljs.core.async/t12578";
cljs.core.async.t12578.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4121__auto__,writer__4122__auto__,opt__4123__auto__){return cljs.core._write.call(null,writer__4122__auto__,"cljs.core.async/t12578");
});})(mults,ensure_mult))
;
cljs.core.async.t12578.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12578.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12578.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12578.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12578.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12578.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12578.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12578.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12580){var self__ = this;
var _12580__$1 = this;return self__.meta12579;
});})(mults,ensure_mult))
;
cljs.core.async.t12578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12580,meta12579__$1){var self__ = this;
var _12580__$1 = this;return (new cljs.core.async.t12578(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12579__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12578 = ((function (mults,ensure_mult){
return (function __GT_t12578(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12579){return (new cljs.core.async.t12578(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12579));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12578(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5719__auto___12700 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5719__auto___12700,mults,ensure_mult,p){
return (function (){var f__5720__auto__ = (function (){var switch__5704__auto__ = ((function (c__5719__auto___12700,mults,ensure_mult,p){
return (function (state_12652){var state_val_12653 = (state_12652[1]);if((state_val_12653 === 7))
{var inst_12648 = (state_12652[2]);var state_12652__$1 = state_12652;var statearr_12654_12701 = state_12652__$1;(statearr_12654_12701[2] = inst_12648);
(statearr_12654_12701[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12653 === 20))
{var state_12652__$1 = state_12652;var statearr_12655_12702 = state_12652__$1;(statearr_12655_12702[2] = null);
(statearr_12655_12702[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12653 === 1))
{var state_12652__$1 = state_12652;var statearr_12656_12703 = state_12652__$1;(statearr_12656_12703[2] = null);
(statearr_12656_12703[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12653 === 24))
{var inst_12631 = (state_12652[7]);var inst_12640 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12631);var state_12652__$1 = state_12652;var statearr_12657_12704 = state_12652__$1;(statearr_12657_12704[2] = inst_12640);
(statearr_12657_12704[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12653 === 4))
{var inst_12583 = (state_12652[8]);var inst_12583__$1 = (state_12652[2]);var inst_12584 = (inst_12583__$1 == null);var state_12652__$1 = (function (){var statearr_12658 = state_12652;(statearr_12658[8] = inst_12583__$1);
return statearr_12658;
})();if(cljs.core.truth_(inst_12584))
{var statearr_12659_12705 = state_12652__$1;(statearr_12659_12705[1] = 5);
} else
{var statearr_12660_12706 = state_12652__$1;(statearr_12660_12706[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12653 === 15))
{var inst_12625 = (state_12652[2]);var state_12652__$1 = state_12652;var statearr_12661_12707 = state_12652__$1;(statearr_12661_12707[2] = inst_12625);
(statearr_12661_12707[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12653 === 21))
{var inst_12645 = (state_12652[2]);var state_12652__$1 = (function (){var statearr_12662 = state_12652;(statearr_12662[9] = inst_12645);
return statearr_12662;
})();var statearr_12663_12708 = state_12652__$1;(statearr_12663_12708[2] = null);
(statearr_12663_12708[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12653 === 13))
{var inst_12607 = (state_12652[10]);var inst_12609 = cljs.core.chunked_seq_QMARK_.call(null,inst_12607);var state_12652__$1 = state_12652;if(inst_12609)
{var statearr_12664_12709 = state_12652__$1;(statearr_12664_12709[1] = 16);
} else
{var statearr_12665_12710 = state_12652__$1;(statearr_12665_12710[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12653 === 22))
{var inst_12637 = (state_12652[2]);var state_12652__$1 = state_12652;if(cljs.core.truth_(inst_12637))
{var statearr_12666_12711 = state_12652__$1;(statearr_12666_12711[1] = 23);
} else
{var statearr_12667_12712 = state_12652__$1;(statearr_12667_12712[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12653 === 6))
{var inst_12633 = (state_12652[11]);var inst_12583 = (state_12652[8]);var inst_12631 = (state_12652[7]);var inst_12631__$1 = topic_fn.call(null,inst_12583);var inst_12632 = cljs.core.deref.call(null,mults);var inst_12633__$1 = cljs.core.get.call(null,inst_12632,inst_12631__$1);var state_12652__$1 = (function (){var statearr_12668 = state_12652;(statearr_12668[11] = inst_12633__$1);
(statearr_12668[7] = inst_12631__$1);
return statearr_12668;
})();if(cljs.core.truth_(inst_12633__$1))
{var statearr_12669_12713 = state_12652__$1;(statearr_12669_12713[1] = 19);
} else
{var statearr_12670_12714 = state_12652__$1;(statearr_12670_12714[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12653 === 25))
{var inst_12642 = (state_12652[2]);var state_12652__$1 = state_12652;var statearr_12671_12715 = state_12652__$1;(statearr_12671_12715[2] = inst_12642);
(statearr_12671_12715[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12653 === 17))
{var inst_12607 = (state_12652[10]);var inst_12616 = cljs.core.first.call(null,inst_12607);var inst_12617 = cljs.core.async.muxch_STAR_.call(null,inst_12616);var inst_12618 = cljs.core.async.close_BANG_.call(null,inst_12617);var inst_12619 = cljs.core.next.call(null,inst_12607);var inst_12593 = inst_12619;var inst_12594 = null;var inst_12595 = 0;var inst_12596 = 0;var state_12652__$1 = (function (){var statearr_12672 = state_12652;(statearr_12672[12] = inst_12594);
(statearr_12672[13] = inst_12593);
(statearr_12672[14] = inst_12595);
(statearr_12672[15] = inst_12596);
(statearr_12672[16] = inst_12618);
return statearr_12672;
})();var statearr_12673_12716 = state_12652__$1;(statearr_12673_12716[2] = null);
(statearr_12673_12716[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12653 === 3))
{var inst_12650 = (state_12652[2]);var state_12652__$1 = state_12652;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12652__$1,inst_12650);
} else
{if((state_val_12653 === 12))
{var inst_12627 = (state_12652[2]);var state_12652__$1 = state_12652;var statearr_12674_12717 = state_12652__$1;(statearr_12674_12717[2] = inst_12627);
(statearr_12674_12717[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12653 === 2))
{var state_12652__$1 = state_12652;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12652__$1,4,ch);
} else
{if((state_val_12653 === 23))
{var state_12652__$1 = state_12652;var statearr_12675_12718 = state_12652__$1;(statearr_12675_12718[2] = null);
(statearr_12675_12718[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12653 === 19))
{var inst_12633 = (state_12652[11]);var inst_12583 = (state_12652[8]);var inst_12635 = cljs.core.async.muxch_STAR_.call(null,inst_12633);var state_12652__$1 = state_12652;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12652__$1,22,inst_12635,inst_12583);
} else
{if((state_val_12653 === 11))
{var inst_12593 = (state_12652[13]);var inst_12607 = (state_12652[10]);var inst_12607__$1 = cljs.core.seq.call(null,inst_12593);var state_12652__$1 = (function (){var statearr_12676 = state_12652;(statearr_12676[10] = inst_12607__$1);
return statearr_12676;
})();if(inst_12607__$1)
{var statearr_12677_12719 = state_12652__$1;(statearr_12677_12719[1] = 13);
} else
{var statearr_12678_12720 = state_12652__$1;(statearr_12678_12720[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12653 === 9))
{var inst_12629 = (state_12652[2]);var state_12652__$1 = state_12652;var statearr_12679_12721 = state_12652__$1;(statearr_12679_12721[2] = inst_12629);
(statearr_12679_12721[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12653 === 5))
{var inst_12590 = cljs.core.deref.call(null,mults);var inst_12591 = cljs.core.vals.call(null,inst_12590);var inst_12592 = cljs.core.seq.call(null,inst_12591);var inst_12593 = inst_12592;var inst_12594 = null;var inst_12595 = 0;var inst_12596 = 0;var state_12652__$1 = (function (){var statearr_12680 = state_12652;(statearr_12680[12] = inst_12594);
(statearr_12680[13] = inst_12593);
(statearr_12680[14] = inst_12595);
(statearr_12680[15] = inst_12596);
return statearr_12680;
})();var statearr_12681_12722 = state_12652__$1;(statearr_12681_12722[2] = null);
(statearr_12681_12722[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12653 === 14))
{var state_12652__$1 = state_12652;var statearr_12685_12723 = state_12652__$1;(statearr_12685_12723[2] = null);
(statearr_12685_12723[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12653 === 16))
{var inst_12607 = (state_12652[10]);var inst_12611 = cljs.core.chunk_first.call(null,inst_12607);var inst_12612 = cljs.core.chunk_rest.call(null,inst_12607);var inst_12613 = cljs.core.count.call(null,inst_12611);var inst_12593 = inst_12612;var inst_12594 = inst_12611;var inst_12595 = inst_12613;var inst_12596 = 0;var state_12652__$1 = (function (){var statearr_12686 = state_12652;(statearr_12686[12] = inst_12594);
(statearr_12686[13] = inst_12593);
(statearr_12686[14] = inst_12595);
(statearr_12686[15] = inst_12596);
return statearr_12686;
})();var statearr_12687_12724 = state_12652__$1;(statearr_12687_12724[2] = null);
(statearr_12687_12724[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12653 === 10))
{var inst_12594 = (state_12652[12]);var inst_12593 = (state_12652[13]);var inst_12595 = (state_12652[14]);var inst_12596 = (state_12652[15]);var inst_12601 = cljs.core._nth.call(null,inst_12594,inst_12596);var inst_12602 = cljs.core.async.muxch_STAR_.call(null,inst_12601);var inst_12603 = cljs.core.async.close_BANG_.call(null,inst_12602);var inst_12604 = (inst_12596 + 1);var tmp12682 = inst_12594;var tmp12683 = inst_12593;var tmp12684 = inst_12595;var inst_12593__$1 = tmp12683;var inst_12594__$1 = tmp12682;var inst_12595__$1 = tmp12684;var inst_12596__$1 = inst_12604;var state_12652__$1 = (function (){var statearr_12688 = state_12652;(statearr_12688[12] = inst_12594__$1);
(statearr_12688[13] = inst_12593__$1);
(statearr_12688[14] = inst_12595__$1);
(statearr_12688[15] = inst_12596__$1);
(statearr_12688[17] = inst_12603);
return statearr_12688;
})();var statearr_12689_12725 = state_12652__$1;(statearr_12689_12725[2] = null);
(statearr_12689_12725[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12653 === 18))
{var inst_12622 = (state_12652[2]);var state_12652__$1 = state_12652;var statearr_12690_12726 = state_12652__$1;(statearr_12690_12726[2] = inst_12622);
(statearr_12690_12726[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12653 === 8))
{var inst_12595 = (state_12652[14]);var inst_12596 = (state_12652[15]);var inst_12598 = (inst_12596 < inst_12595);var inst_12599 = inst_12598;var state_12652__$1 = state_12652;if(cljs.core.truth_(inst_12599))
{var statearr_12691_12727 = state_12652__$1;(statearr_12691_12727[1] = 10);
} else
{var statearr_12692_12728 = state_12652__$1;(statearr_12692_12728[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5719__auto___12700,mults,ensure_mult,p))
;return ((function (switch__5704__auto__,c__5719__auto___12700,mults,ensure_mult,p){
return (function() {
var state_machine__5705__auto__ = null;
var state_machine__5705__auto____0 = (function (){var statearr_12696 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12696[0] = state_machine__5705__auto__);
(statearr_12696[1] = 1);
return statearr_12696;
});
var state_machine__5705__auto____1 = (function (state_12652){while(true){
var ret_value__5706__auto__ = (function (){try{while(true){
var result__5707__auto__ = switch__5704__auto__.call(null,state_12652);if(cljs.core.keyword_identical_QMARK_.call(null,result__5707__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5707__auto__;
}
break;
}
}catch (e12697){if((e12697 instanceof Object))
{var ex__5708__auto__ = e12697;var statearr_12698_12729 = state_12652;(statearr_12698_12729[5] = ex__5708__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12652);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12697;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5706__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12730 = state_12652;
state_12652 = G__12730;
continue;
}
} else
{return ret_value__5706__auto__;
}
break;
}
});
state_machine__5705__auto__ = function(state_12652){
switch(arguments.length){
case 0:
return state_machine__5705__auto____0.call(this);
case 1:
return state_machine__5705__auto____1.call(this,state_12652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5705__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5705__auto____0;
state_machine__5705__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5705__auto____1;
return state_machine__5705__auto__;
})()
;})(switch__5704__auto__,c__5719__auto___12700,mults,ensure_mult,p))
})();var state__5721__auto__ = (function (){var statearr_12699 = f__5720__auto__.call(null);(statearr_12699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5719__auto___12700);
return statearr_12699;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5721__auto__);
});})(c__5719__auto___12700,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5719__auto___12867 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5719__auto___12867,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5720__auto__ = (function (){var switch__5704__auto__ = ((function (c__5719__auto___12867,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12837){var state_val_12838 = (state_12837[1]);if((state_val_12838 === 7))
{var state_12837__$1 = state_12837;var statearr_12839_12868 = state_12837__$1;(statearr_12839_12868[2] = null);
(statearr_12839_12868[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12838 === 1))
{var state_12837__$1 = state_12837;var statearr_12840_12869 = state_12837__$1;(statearr_12840_12869[2] = null);
(statearr_12840_12869[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12838 === 4))
{var inst_12801 = (state_12837[7]);var inst_12803 = (inst_12801 < cnt);var state_12837__$1 = state_12837;if(cljs.core.truth_(inst_12803))
{var statearr_12841_12870 = state_12837__$1;(statearr_12841_12870[1] = 6);
} else
{var statearr_12842_12871 = state_12837__$1;(statearr_12842_12871[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12838 === 15))
{var inst_12833 = (state_12837[2]);var state_12837__$1 = state_12837;var statearr_12843_12872 = state_12837__$1;(statearr_12843_12872[2] = inst_12833);
(statearr_12843_12872[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12838 === 13))
{var inst_12826 = cljs.core.async.close_BANG_.call(null,out);var state_12837__$1 = state_12837;var statearr_12844_12873 = state_12837__$1;(statearr_12844_12873[2] = inst_12826);
(statearr_12844_12873[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12838 === 6))
{var state_12837__$1 = state_12837;var statearr_12845_12874 = state_12837__$1;(statearr_12845_12874[2] = null);
(statearr_12845_12874[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12838 === 3))
{var inst_12835 = (state_12837[2]);var state_12837__$1 = state_12837;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12837__$1,inst_12835);
} else
{if((state_val_12838 === 12))
{var inst_12823 = (state_12837[8]);var inst_12823__$1 = (state_12837[2]);var inst_12824 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12823__$1);var state_12837__$1 = (function (){var statearr_12846 = state_12837;(statearr_12846[8] = inst_12823__$1);
return statearr_12846;
})();if(cljs.core.truth_(inst_12824))
{var statearr_12847_12875 = state_12837__$1;(statearr_12847_12875[1] = 13);
} else
{var statearr_12848_12876 = state_12837__$1;(statearr_12848_12876[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12838 === 2))
{var inst_12800 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12801 = 0;var state_12837__$1 = (function (){var statearr_12849 = state_12837;(statearr_12849[7] = inst_12801);
(statearr_12849[9] = inst_12800);
return statearr_12849;
})();var statearr_12850_12877 = state_12837__$1;(statearr_12850_12877[2] = null);
(statearr_12850_12877[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12838 === 11))
{var inst_12801 = (state_12837[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12837,10,Object,null,9);var inst_12810 = chs__$1.call(null,inst_12801);var inst_12811 = done.call(null,inst_12801);var inst_12812 = cljs.core.async.take_BANG_.call(null,inst_12810,inst_12811);var state_12837__$1 = state_12837;var statearr_12851_12878 = state_12837__$1;(statearr_12851_12878[2] = inst_12812);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12837__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12838 === 9))
{var inst_12801 = (state_12837[7]);var inst_12814 = (state_12837[2]);var inst_12815 = (inst_12801 + 1);var inst_12801__$1 = inst_12815;var state_12837__$1 = (function (){var statearr_12852 = state_12837;(statearr_12852[10] = inst_12814);
(statearr_12852[7] = inst_12801__$1);
return statearr_12852;
})();var statearr_12853_12879 = state_12837__$1;(statearr_12853_12879[2] = null);
(statearr_12853_12879[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12838 === 5))
{var inst_12821 = (state_12837[2]);var state_12837__$1 = (function (){var statearr_12854 = state_12837;(statearr_12854[11] = inst_12821);
return statearr_12854;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12837__$1,12,dchan);
} else
{if((state_val_12838 === 14))
{var inst_12823 = (state_12837[8]);var inst_12828 = cljs.core.apply.call(null,f,inst_12823);var state_12837__$1 = state_12837;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12837__$1,16,out,inst_12828);
} else
{if((state_val_12838 === 16))
{var inst_12830 = (state_12837[2]);var state_12837__$1 = (function (){var statearr_12855 = state_12837;(statearr_12855[12] = inst_12830);
return statearr_12855;
})();var statearr_12856_12880 = state_12837__$1;(statearr_12856_12880[2] = null);
(statearr_12856_12880[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12838 === 10))
{var inst_12805 = (state_12837[2]);var inst_12806 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12837__$1 = (function (){var statearr_12857 = state_12837;(statearr_12857[13] = inst_12805);
return statearr_12857;
})();var statearr_12858_12881 = state_12837__$1;(statearr_12858_12881[2] = inst_12806);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12837__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12838 === 8))
{var inst_12819 = (state_12837[2]);var state_12837__$1 = state_12837;var statearr_12859_12882 = state_12837__$1;(statearr_12859_12882[2] = inst_12819);
(statearr_12859_12882[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5719__auto___12867,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5704__auto__,c__5719__auto___12867,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5705__auto__ = null;
var state_machine__5705__auto____0 = (function (){var statearr_12863 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12863[0] = state_machine__5705__auto__);
(statearr_12863[1] = 1);
return statearr_12863;
});
var state_machine__5705__auto____1 = (function (state_12837){while(true){
var ret_value__5706__auto__ = (function (){try{while(true){
var result__5707__auto__ = switch__5704__auto__.call(null,state_12837);if(cljs.core.keyword_identical_QMARK_.call(null,result__5707__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5707__auto__;
}
break;
}
}catch (e12864){if((e12864 instanceof Object))
{var ex__5708__auto__ = e12864;var statearr_12865_12883 = state_12837;(statearr_12865_12883[5] = ex__5708__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12837);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12864;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5706__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12884 = state_12837;
state_12837 = G__12884;
continue;
}
} else
{return ret_value__5706__auto__;
}
break;
}
});
state_machine__5705__auto__ = function(state_12837){
switch(arguments.length){
case 0:
return state_machine__5705__auto____0.call(this);
case 1:
return state_machine__5705__auto____1.call(this,state_12837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5705__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5705__auto____0;
state_machine__5705__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5705__auto____1;
return state_machine__5705__auto__;
})()
;})(switch__5704__auto__,c__5719__auto___12867,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5721__auto__ = (function (){var statearr_12866 = f__5720__auto__.call(null);(statearr_12866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5719__auto___12867);
return statearr_12866;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5721__auto__);
});})(c__5719__auto___12867,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5719__auto___12992 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5719__auto___12992,out){
return (function (){var f__5720__auto__ = (function (){var switch__5704__auto__ = ((function (c__5719__auto___12992,out){
return (function (state_12968){var state_val_12969 = (state_12968[1]);if((state_val_12969 === 7))
{var inst_12947 = (state_12968[7]);var inst_12948 = (state_12968[8]);var inst_12947__$1 = (state_12968[2]);var inst_12948__$1 = cljs.core.nth.call(null,inst_12947__$1,0,null);var inst_12949 = cljs.core.nth.call(null,inst_12947__$1,1,null);var inst_12950 = (inst_12948__$1 == null);var state_12968__$1 = (function (){var statearr_12970 = state_12968;(statearr_12970[7] = inst_12947__$1);
(statearr_12970[8] = inst_12948__$1);
(statearr_12970[9] = inst_12949);
return statearr_12970;
})();if(cljs.core.truth_(inst_12950))
{var statearr_12971_12993 = state_12968__$1;(statearr_12971_12993[1] = 8);
} else
{var statearr_12972_12994 = state_12968__$1;(statearr_12972_12994[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12969 === 1))
{var inst_12939 = cljs.core.vec.call(null,chs);var inst_12940 = inst_12939;var state_12968__$1 = (function (){var statearr_12973 = state_12968;(statearr_12973[10] = inst_12940);
return statearr_12973;
})();var statearr_12974_12995 = state_12968__$1;(statearr_12974_12995[2] = null);
(statearr_12974_12995[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12969 === 4))
{var inst_12940 = (state_12968[10]);var state_12968__$1 = state_12968;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12968__$1,7,inst_12940);
} else
{if((state_val_12969 === 6))
{var inst_12964 = (state_12968[2]);var state_12968__$1 = state_12968;var statearr_12975_12996 = state_12968__$1;(statearr_12975_12996[2] = inst_12964);
(statearr_12975_12996[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12969 === 3))
{var inst_12966 = (state_12968[2]);var state_12968__$1 = state_12968;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12968__$1,inst_12966);
} else
{if((state_val_12969 === 2))
{var inst_12940 = (state_12968[10]);var inst_12942 = cljs.core.count.call(null,inst_12940);var inst_12943 = (inst_12942 > 0);var state_12968__$1 = state_12968;if(cljs.core.truth_(inst_12943))
{var statearr_12977_12997 = state_12968__$1;(statearr_12977_12997[1] = 4);
} else
{var statearr_12978_12998 = state_12968__$1;(statearr_12978_12998[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12969 === 11))
{var inst_12940 = (state_12968[10]);var inst_12957 = (state_12968[2]);var tmp12976 = inst_12940;var inst_12940__$1 = tmp12976;var state_12968__$1 = (function (){var statearr_12979 = state_12968;(statearr_12979[11] = inst_12957);
(statearr_12979[10] = inst_12940__$1);
return statearr_12979;
})();var statearr_12980_12999 = state_12968__$1;(statearr_12980_12999[2] = null);
(statearr_12980_12999[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12969 === 9))
{var inst_12948 = (state_12968[8]);var state_12968__$1 = state_12968;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12968__$1,11,out,inst_12948);
} else
{if((state_val_12969 === 5))
{var inst_12962 = cljs.core.async.close_BANG_.call(null,out);var state_12968__$1 = state_12968;var statearr_12981_13000 = state_12968__$1;(statearr_12981_13000[2] = inst_12962);
(statearr_12981_13000[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12969 === 10))
{var inst_12960 = (state_12968[2]);var state_12968__$1 = state_12968;var statearr_12982_13001 = state_12968__$1;(statearr_12982_13001[2] = inst_12960);
(statearr_12982_13001[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12969 === 8))
{var inst_12947 = (state_12968[7]);var inst_12948 = (state_12968[8]);var inst_12940 = (state_12968[10]);var inst_12949 = (state_12968[9]);var inst_12952 = (function (){var c = inst_12949;var v = inst_12948;var vec__12945 = inst_12947;var cs = inst_12940;return ((function (c,v,vec__12945,cs,inst_12947,inst_12948,inst_12940,inst_12949,state_val_12969,c__5719__auto___12992,out){
return (function (p1__12885_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12885_SHARP_);
});
;})(c,v,vec__12945,cs,inst_12947,inst_12948,inst_12940,inst_12949,state_val_12969,c__5719__auto___12992,out))
})();var inst_12953 = cljs.core.filterv.call(null,inst_12952,inst_12940);var inst_12940__$1 = inst_12953;var state_12968__$1 = (function (){var statearr_12983 = state_12968;(statearr_12983[10] = inst_12940__$1);
return statearr_12983;
})();var statearr_12984_13002 = state_12968__$1;(statearr_12984_13002[2] = null);
(statearr_12984_13002[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5719__auto___12992,out))
;return ((function (switch__5704__auto__,c__5719__auto___12992,out){
return (function() {
var state_machine__5705__auto__ = null;
var state_machine__5705__auto____0 = (function (){var statearr_12988 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12988[0] = state_machine__5705__auto__);
(statearr_12988[1] = 1);
return statearr_12988;
});
var state_machine__5705__auto____1 = (function (state_12968){while(true){
var ret_value__5706__auto__ = (function (){try{while(true){
var result__5707__auto__ = switch__5704__auto__.call(null,state_12968);if(cljs.core.keyword_identical_QMARK_.call(null,result__5707__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5707__auto__;
}
break;
}
}catch (e12989){if((e12989 instanceof Object))
{var ex__5708__auto__ = e12989;var statearr_12990_13003 = state_12968;(statearr_12990_13003[5] = ex__5708__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12968);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12989;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5706__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13004 = state_12968;
state_12968 = G__13004;
continue;
}
} else
{return ret_value__5706__auto__;
}
break;
}
});
state_machine__5705__auto__ = function(state_12968){
switch(arguments.length){
case 0:
return state_machine__5705__auto____0.call(this);
case 1:
return state_machine__5705__auto____1.call(this,state_12968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5705__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5705__auto____0;
state_machine__5705__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5705__auto____1;
return state_machine__5705__auto__;
})()
;})(switch__5704__auto__,c__5719__auto___12992,out))
})();var state__5721__auto__ = (function (){var statearr_12991 = f__5720__auto__.call(null);(statearr_12991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5719__auto___12992);
return statearr_12991;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5721__auto__);
});})(c__5719__auto___12992,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5719__auto___13097 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5719__auto___13097,out){
return (function (){var f__5720__auto__ = (function (){var switch__5704__auto__ = ((function (c__5719__auto___13097,out){
return (function (state_13074){var state_val_13075 = (state_13074[1]);if((state_val_13075 === 7))
{var inst_13056 = (state_13074[7]);var inst_13056__$1 = (state_13074[2]);var inst_13057 = (inst_13056__$1 == null);var inst_13058 = cljs.core.not.call(null,inst_13057);var state_13074__$1 = (function (){var statearr_13076 = state_13074;(statearr_13076[7] = inst_13056__$1);
return statearr_13076;
})();if(inst_13058)
{var statearr_13077_13098 = state_13074__$1;(statearr_13077_13098[1] = 8);
} else
{var statearr_13078_13099 = state_13074__$1;(statearr_13078_13099[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13075 === 1))
{var inst_13051 = 0;var state_13074__$1 = (function (){var statearr_13079 = state_13074;(statearr_13079[8] = inst_13051);
return statearr_13079;
})();var statearr_13080_13100 = state_13074__$1;(statearr_13080_13100[2] = null);
(statearr_13080_13100[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13075 === 4))
{var state_13074__$1 = state_13074;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13074__$1,7,ch);
} else
{if((state_val_13075 === 6))
{var inst_13069 = (state_13074[2]);var state_13074__$1 = state_13074;var statearr_13081_13101 = state_13074__$1;(statearr_13081_13101[2] = inst_13069);
(statearr_13081_13101[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13075 === 3))
{var inst_13071 = (state_13074[2]);var inst_13072 = cljs.core.async.close_BANG_.call(null,out);var state_13074__$1 = (function (){var statearr_13082 = state_13074;(statearr_13082[9] = inst_13071);
return statearr_13082;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13074__$1,inst_13072);
} else
{if((state_val_13075 === 2))
{var inst_13051 = (state_13074[8]);var inst_13053 = (inst_13051 < n);var state_13074__$1 = state_13074;if(cljs.core.truth_(inst_13053))
{var statearr_13083_13102 = state_13074__$1;(statearr_13083_13102[1] = 4);
} else
{var statearr_13084_13103 = state_13074__$1;(statearr_13084_13103[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13075 === 11))
{var inst_13051 = (state_13074[8]);var inst_13061 = (state_13074[2]);var inst_13062 = (inst_13051 + 1);var inst_13051__$1 = inst_13062;var state_13074__$1 = (function (){var statearr_13085 = state_13074;(statearr_13085[8] = inst_13051__$1);
(statearr_13085[10] = inst_13061);
return statearr_13085;
})();var statearr_13086_13104 = state_13074__$1;(statearr_13086_13104[2] = null);
(statearr_13086_13104[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13075 === 9))
{var state_13074__$1 = state_13074;var statearr_13087_13105 = state_13074__$1;(statearr_13087_13105[2] = null);
(statearr_13087_13105[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13075 === 5))
{var state_13074__$1 = state_13074;var statearr_13088_13106 = state_13074__$1;(statearr_13088_13106[2] = null);
(statearr_13088_13106[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13075 === 10))
{var inst_13066 = (state_13074[2]);var state_13074__$1 = state_13074;var statearr_13089_13107 = state_13074__$1;(statearr_13089_13107[2] = inst_13066);
(statearr_13089_13107[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13075 === 8))
{var inst_13056 = (state_13074[7]);var state_13074__$1 = state_13074;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13074__$1,11,out,inst_13056);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5719__auto___13097,out))
;return ((function (switch__5704__auto__,c__5719__auto___13097,out){
return (function() {
var state_machine__5705__auto__ = null;
var state_machine__5705__auto____0 = (function (){var statearr_13093 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13093[0] = state_machine__5705__auto__);
(statearr_13093[1] = 1);
return statearr_13093;
});
var state_machine__5705__auto____1 = (function (state_13074){while(true){
var ret_value__5706__auto__ = (function (){try{while(true){
var result__5707__auto__ = switch__5704__auto__.call(null,state_13074);if(cljs.core.keyword_identical_QMARK_.call(null,result__5707__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5707__auto__;
}
break;
}
}catch (e13094){if((e13094 instanceof Object))
{var ex__5708__auto__ = e13094;var statearr_13095_13108 = state_13074;(statearr_13095_13108[5] = ex__5708__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13074);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13094;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5706__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13109 = state_13074;
state_13074 = G__13109;
continue;
}
} else
{return ret_value__5706__auto__;
}
break;
}
});
state_machine__5705__auto__ = function(state_13074){
switch(arguments.length){
case 0:
return state_machine__5705__auto____0.call(this);
case 1:
return state_machine__5705__auto____1.call(this,state_13074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5705__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5705__auto____0;
state_machine__5705__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5705__auto____1;
return state_machine__5705__auto__;
})()
;})(switch__5704__auto__,c__5719__auto___13097,out))
})();var state__5721__auto__ = (function (){var statearr_13096 = f__5720__auto__.call(null);(statearr_13096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5719__auto___13097);
return statearr_13096;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5721__auto__);
});})(c__5719__auto___13097,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5719__auto___13206 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5719__auto___13206,out){
return (function (){var f__5720__auto__ = (function (){var switch__5704__auto__ = ((function (c__5719__auto___13206,out){
return (function (state_13181){var state_val_13182 = (state_13181[1]);if((state_val_13182 === 7))
{var inst_13176 = (state_13181[2]);var state_13181__$1 = state_13181;var statearr_13183_13207 = state_13181__$1;(statearr_13183_13207[2] = inst_13176);
(statearr_13183_13207[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13182 === 1))
{var inst_13158 = null;var state_13181__$1 = (function (){var statearr_13184 = state_13181;(statearr_13184[7] = inst_13158);
return statearr_13184;
})();var statearr_13185_13208 = state_13181__$1;(statearr_13185_13208[2] = null);
(statearr_13185_13208[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13182 === 4))
{var inst_13161 = (state_13181[8]);var inst_13161__$1 = (state_13181[2]);var inst_13162 = (inst_13161__$1 == null);var inst_13163 = cljs.core.not.call(null,inst_13162);var state_13181__$1 = (function (){var statearr_13186 = state_13181;(statearr_13186[8] = inst_13161__$1);
return statearr_13186;
})();if(inst_13163)
{var statearr_13187_13209 = state_13181__$1;(statearr_13187_13209[1] = 5);
} else
{var statearr_13188_13210 = state_13181__$1;(statearr_13188_13210[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13182 === 6))
{var state_13181__$1 = state_13181;var statearr_13189_13211 = state_13181__$1;(statearr_13189_13211[2] = null);
(statearr_13189_13211[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13182 === 3))
{var inst_13178 = (state_13181[2]);var inst_13179 = cljs.core.async.close_BANG_.call(null,out);var state_13181__$1 = (function (){var statearr_13190 = state_13181;(statearr_13190[9] = inst_13178);
return statearr_13190;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13181__$1,inst_13179);
} else
{if((state_val_13182 === 2))
{var state_13181__$1 = state_13181;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13181__$1,4,ch);
} else
{if((state_val_13182 === 11))
{var inst_13161 = (state_13181[8]);var inst_13170 = (state_13181[2]);var inst_13158 = inst_13161;var state_13181__$1 = (function (){var statearr_13191 = state_13181;(statearr_13191[7] = inst_13158);
(statearr_13191[10] = inst_13170);
return statearr_13191;
})();var statearr_13192_13212 = state_13181__$1;(statearr_13192_13212[2] = null);
(statearr_13192_13212[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13182 === 9))
{var inst_13161 = (state_13181[8]);var state_13181__$1 = state_13181;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13181__$1,11,out,inst_13161);
} else
{if((state_val_13182 === 5))
{var inst_13161 = (state_13181[8]);var inst_13158 = (state_13181[7]);var inst_13165 = cljs.core._EQ_.call(null,inst_13161,inst_13158);var state_13181__$1 = state_13181;if(inst_13165)
{var statearr_13194_13213 = state_13181__$1;(statearr_13194_13213[1] = 8);
} else
{var statearr_13195_13214 = state_13181__$1;(statearr_13195_13214[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13182 === 10))
{var inst_13173 = (state_13181[2]);var state_13181__$1 = state_13181;var statearr_13196_13215 = state_13181__$1;(statearr_13196_13215[2] = inst_13173);
(statearr_13196_13215[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13182 === 8))
{var inst_13158 = (state_13181[7]);var tmp13193 = inst_13158;var inst_13158__$1 = tmp13193;var state_13181__$1 = (function (){var statearr_13197 = state_13181;(statearr_13197[7] = inst_13158__$1);
return statearr_13197;
})();var statearr_13198_13216 = state_13181__$1;(statearr_13198_13216[2] = null);
(statearr_13198_13216[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5719__auto___13206,out))
;return ((function (switch__5704__auto__,c__5719__auto___13206,out){
return (function() {
var state_machine__5705__auto__ = null;
var state_machine__5705__auto____0 = (function (){var statearr_13202 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13202[0] = state_machine__5705__auto__);
(statearr_13202[1] = 1);
return statearr_13202;
});
var state_machine__5705__auto____1 = (function (state_13181){while(true){
var ret_value__5706__auto__ = (function (){try{while(true){
var result__5707__auto__ = switch__5704__auto__.call(null,state_13181);if(cljs.core.keyword_identical_QMARK_.call(null,result__5707__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5707__auto__;
}
break;
}
}catch (e13203){if((e13203 instanceof Object))
{var ex__5708__auto__ = e13203;var statearr_13204_13217 = state_13181;(statearr_13204_13217[5] = ex__5708__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13181);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13203;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5706__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13218 = state_13181;
state_13181 = G__13218;
continue;
}
} else
{return ret_value__5706__auto__;
}
break;
}
});
state_machine__5705__auto__ = function(state_13181){
switch(arguments.length){
case 0:
return state_machine__5705__auto____0.call(this);
case 1:
return state_machine__5705__auto____1.call(this,state_13181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5705__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5705__auto____0;
state_machine__5705__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5705__auto____1;
return state_machine__5705__auto__;
})()
;})(switch__5704__auto__,c__5719__auto___13206,out))
})();var state__5721__auto__ = (function (){var statearr_13205 = f__5720__auto__.call(null);(statearr_13205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5719__auto___13206);
return statearr_13205;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5721__auto__);
});})(c__5719__auto___13206,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5719__auto___13353 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5719__auto___13353,out){
return (function (){var f__5720__auto__ = (function (){var switch__5704__auto__ = ((function (c__5719__auto___13353,out){
return (function (state_13323){var state_val_13324 = (state_13323[1]);if((state_val_13324 === 7))
{var inst_13319 = (state_13323[2]);var state_13323__$1 = state_13323;var statearr_13325_13354 = state_13323__$1;(statearr_13325_13354[2] = inst_13319);
(statearr_13325_13354[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13324 === 1))
{var inst_13286 = (new Array(n));var inst_13287 = inst_13286;var inst_13288 = 0;var state_13323__$1 = (function (){var statearr_13326 = state_13323;(statearr_13326[7] = inst_13287);
(statearr_13326[8] = inst_13288);
return statearr_13326;
})();var statearr_13327_13355 = state_13323__$1;(statearr_13327_13355[2] = null);
(statearr_13327_13355[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13324 === 4))
{var inst_13291 = (state_13323[9]);var inst_13291__$1 = (state_13323[2]);var inst_13292 = (inst_13291__$1 == null);var inst_13293 = cljs.core.not.call(null,inst_13292);var state_13323__$1 = (function (){var statearr_13328 = state_13323;(statearr_13328[9] = inst_13291__$1);
return statearr_13328;
})();if(inst_13293)
{var statearr_13329_13356 = state_13323__$1;(statearr_13329_13356[1] = 5);
} else
{var statearr_13330_13357 = state_13323__$1;(statearr_13330_13357[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13324 === 15))
{var inst_13313 = (state_13323[2]);var state_13323__$1 = state_13323;var statearr_13331_13358 = state_13323__$1;(statearr_13331_13358[2] = inst_13313);
(statearr_13331_13358[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13324 === 13))
{var state_13323__$1 = state_13323;var statearr_13332_13359 = state_13323__$1;(statearr_13332_13359[2] = null);
(statearr_13332_13359[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13324 === 6))
{var inst_13288 = (state_13323[8]);var inst_13309 = (inst_13288 > 0);var state_13323__$1 = state_13323;if(cljs.core.truth_(inst_13309))
{var statearr_13333_13360 = state_13323__$1;(statearr_13333_13360[1] = 12);
} else
{var statearr_13334_13361 = state_13323__$1;(statearr_13334_13361[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13324 === 3))
{var inst_13321 = (state_13323[2]);var state_13323__$1 = state_13323;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13323__$1,inst_13321);
} else
{if((state_val_13324 === 12))
{var inst_13287 = (state_13323[7]);var inst_13311 = cljs.core.vec.call(null,inst_13287);var state_13323__$1 = state_13323;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13323__$1,15,out,inst_13311);
} else
{if((state_val_13324 === 2))
{var state_13323__$1 = state_13323;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13323__$1,4,ch);
} else
{if((state_val_13324 === 11))
{var inst_13303 = (state_13323[2]);var inst_13304 = (new Array(n));var inst_13287 = inst_13304;var inst_13288 = 0;var state_13323__$1 = (function (){var statearr_13335 = state_13323;(statearr_13335[7] = inst_13287);
(statearr_13335[8] = inst_13288);
(statearr_13335[10] = inst_13303);
return statearr_13335;
})();var statearr_13336_13362 = state_13323__$1;(statearr_13336_13362[2] = null);
(statearr_13336_13362[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13324 === 9))
{var inst_13287 = (state_13323[7]);var inst_13301 = cljs.core.vec.call(null,inst_13287);var state_13323__$1 = state_13323;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13323__$1,11,out,inst_13301);
} else
{if((state_val_13324 === 5))
{var inst_13291 = (state_13323[9]);var inst_13296 = (state_13323[11]);var inst_13287 = (state_13323[7]);var inst_13288 = (state_13323[8]);var inst_13295 = (inst_13287[inst_13288] = inst_13291);var inst_13296__$1 = (inst_13288 + 1);var inst_13297 = (inst_13296__$1 < n);var state_13323__$1 = (function (){var statearr_13337 = state_13323;(statearr_13337[11] = inst_13296__$1);
(statearr_13337[12] = inst_13295);
return statearr_13337;
})();if(cljs.core.truth_(inst_13297))
{var statearr_13338_13363 = state_13323__$1;(statearr_13338_13363[1] = 8);
} else
{var statearr_13339_13364 = state_13323__$1;(statearr_13339_13364[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13324 === 14))
{var inst_13316 = (state_13323[2]);var inst_13317 = cljs.core.async.close_BANG_.call(null,out);var state_13323__$1 = (function (){var statearr_13341 = state_13323;(statearr_13341[13] = inst_13316);
return statearr_13341;
})();var statearr_13342_13365 = state_13323__$1;(statearr_13342_13365[2] = inst_13317);
(statearr_13342_13365[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13324 === 10))
{var inst_13307 = (state_13323[2]);var state_13323__$1 = state_13323;var statearr_13343_13366 = state_13323__$1;(statearr_13343_13366[2] = inst_13307);
(statearr_13343_13366[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13324 === 8))
{var inst_13296 = (state_13323[11]);var inst_13287 = (state_13323[7]);var tmp13340 = inst_13287;var inst_13287__$1 = tmp13340;var inst_13288 = inst_13296;var state_13323__$1 = (function (){var statearr_13344 = state_13323;(statearr_13344[7] = inst_13287__$1);
(statearr_13344[8] = inst_13288);
return statearr_13344;
})();var statearr_13345_13367 = state_13323__$1;(statearr_13345_13367[2] = null);
(statearr_13345_13367[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5719__auto___13353,out))
;return ((function (switch__5704__auto__,c__5719__auto___13353,out){
return (function() {
var state_machine__5705__auto__ = null;
var state_machine__5705__auto____0 = (function (){var statearr_13349 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13349[0] = state_machine__5705__auto__);
(statearr_13349[1] = 1);
return statearr_13349;
});
var state_machine__5705__auto____1 = (function (state_13323){while(true){
var ret_value__5706__auto__ = (function (){try{while(true){
var result__5707__auto__ = switch__5704__auto__.call(null,state_13323);if(cljs.core.keyword_identical_QMARK_.call(null,result__5707__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5707__auto__;
}
break;
}
}catch (e13350){if((e13350 instanceof Object))
{var ex__5708__auto__ = e13350;var statearr_13351_13368 = state_13323;(statearr_13351_13368[5] = ex__5708__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13323);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13350;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5706__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13369 = state_13323;
state_13323 = G__13369;
continue;
}
} else
{return ret_value__5706__auto__;
}
break;
}
});
state_machine__5705__auto__ = function(state_13323){
switch(arguments.length){
case 0:
return state_machine__5705__auto____0.call(this);
case 1:
return state_machine__5705__auto____1.call(this,state_13323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5705__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5705__auto____0;
state_machine__5705__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5705__auto____1;
return state_machine__5705__auto__;
})()
;})(switch__5704__auto__,c__5719__auto___13353,out))
})();var state__5721__auto__ = (function (){var statearr_13352 = f__5720__auto__.call(null);(statearr_13352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5719__auto___13353);
return statearr_13352;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5721__auto__);
});})(c__5719__auto___13353,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5719__auto___13512 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5719__auto___13512,out){
return (function (){var f__5720__auto__ = (function (){var switch__5704__auto__ = ((function (c__5719__auto___13512,out){
return (function (state_13482){var state_val_13483 = (state_13482[1]);if((state_val_13483 === 7))
{var inst_13478 = (state_13482[2]);var state_13482__$1 = state_13482;var statearr_13484_13513 = state_13482__$1;(statearr_13484_13513[2] = inst_13478);
(statearr_13484_13513[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13483 === 1))
{var inst_13441 = [];var inst_13442 = inst_13441;var inst_13443 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_13482__$1 = (function (){var statearr_13485 = state_13482;(statearr_13485[7] = inst_13443);
(statearr_13485[8] = inst_13442);
return statearr_13485;
})();var statearr_13486_13514 = state_13482__$1;(statearr_13486_13514[2] = null);
(statearr_13486_13514[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13483 === 4))
{var inst_13446 = (state_13482[9]);var inst_13446__$1 = (state_13482[2]);var inst_13447 = (inst_13446__$1 == null);var inst_13448 = cljs.core.not.call(null,inst_13447);var state_13482__$1 = (function (){var statearr_13487 = state_13482;(statearr_13487[9] = inst_13446__$1);
return statearr_13487;
})();if(inst_13448)
{var statearr_13488_13515 = state_13482__$1;(statearr_13488_13515[1] = 5);
} else
{var statearr_13489_13516 = state_13482__$1;(statearr_13489_13516[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13483 === 15))
{var inst_13472 = (state_13482[2]);var state_13482__$1 = state_13482;var statearr_13490_13517 = state_13482__$1;(statearr_13490_13517[2] = inst_13472);
(statearr_13490_13517[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13483 === 13))
{var state_13482__$1 = state_13482;var statearr_13491_13518 = state_13482__$1;(statearr_13491_13518[2] = null);
(statearr_13491_13518[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13483 === 6))
{var inst_13442 = (state_13482[8]);var inst_13467 = inst_13442.length;var inst_13468 = (inst_13467 > 0);var state_13482__$1 = state_13482;if(cljs.core.truth_(inst_13468))
{var statearr_13492_13519 = state_13482__$1;(statearr_13492_13519[1] = 12);
} else
{var statearr_13493_13520 = state_13482__$1;(statearr_13493_13520[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13483 === 3))
{var inst_13480 = (state_13482[2]);var state_13482__$1 = state_13482;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13482__$1,inst_13480);
} else
{if((state_val_13483 === 12))
{var inst_13442 = (state_13482[8]);var inst_13470 = cljs.core.vec.call(null,inst_13442);var state_13482__$1 = state_13482;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13482__$1,15,out,inst_13470);
} else
{if((state_val_13483 === 2))
{var state_13482__$1 = state_13482;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13482__$1,4,ch);
} else
{if((state_val_13483 === 11))
{var inst_13450 = (state_13482[10]);var inst_13446 = (state_13482[9]);var inst_13460 = (state_13482[2]);var inst_13461 = [];var inst_13462 = inst_13461.push(inst_13446);var inst_13442 = inst_13461;var inst_13443 = inst_13450;var state_13482__$1 = (function (){var statearr_13494 = state_13482;(statearr_13494[11] = inst_13462);
(statearr_13494[7] = inst_13443);
(statearr_13494[12] = inst_13460);
(statearr_13494[8] = inst_13442);
return statearr_13494;
})();var statearr_13495_13521 = state_13482__$1;(statearr_13495_13521[2] = null);
(statearr_13495_13521[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13483 === 9))
{var inst_13442 = (state_13482[8]);var inst_13458 = cljs.core.vec.call(null,inst_13442);var state_13482__$1 = state_13482;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13482__$1,11,out,inst_13458);
} else
{if((state_val_13483 === 5))
{var inst_13450 = (state_13482[10]);var inst_13443 = (state_13482[7]);var inst_13446 = (state_13482[9]);var inst_13450__$1 = f.call(null,inst_13446);var inst_13451 = cljs.core._EQ_.call(null,inst_13450__$1,inst_13443);var inst_13452 = cljs.core.keyword_identical_QMARK_.call(null,inst_13443,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_13453 = (inst_13451) || (inst_13452);var state_13482__$1 = (function (){var statearr_13496 = state_13482;(statearr_13496[10] = inst_13450__$1);
return statearr_13496;
})();if(cljs.core.truth_(inst_13453))
{var statearr_13497_13522 = state_13482__$1;(statearr_13497_13522[1] = 8);
} else
{var statearr_13498_13523 = state_13482__$1;(statearr_13498_13523[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13483 === 14))
{var inst_13475 = (state_13482[2]);var inst_13476 = cljs.core.async.close_BANG_.call(null,out);var state_13482__$1 = (function (){var statearr_13500 = state_13482;(statearr_13500[13] = inst_13475);
return statearr_13500;
})();var statearr_13501_13524 = state_13482__$1;(statearr_13501_13524[2] = inst_13476);
(statearr_13501_13524[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13483 === 10))
{var inst_13465 = (state_13482[2]);var state_13482__$1 = state_13482;var statearr_13502_13525 = state_13482__$1;(statearr_13502_13525[2] = inst_13465);
(statearr_13502_13525[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13483 === 8))
{var inst_13450 = (state_13482[10]);var inst_13446 = (state_13482[9]);var inst_13442 = (state_13482[8]);var inst_13455 = inst_13442.push(inst_13446);var tmp13499 = inst_13442;var inst_13442__$1 = tmp13499;var inst_13443 = inst_13450;var state_13482__$1 = (function (){var statearr_13503 = state_13482;(statearr_13503[14] = inst_13455);
(statearr_13503[7] = inst_13443);
(statearr_13503[8] = inst_13442__$1);
return statearr_13503;
})();var statearr_13504_13526 = state_13482__$1;(statearr_13504_13526[2] = null);
(statearr_13504_13526[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5719__auto___13512,out))
;return ((function (switch__5704__auto__,c__5719__auto___13512,out){
return (function() {
var state_machine__5705__auto__ = null;
var state_machine__5705__auto____0 = (function (){var statearr_13508 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13508[0] = state_machine__5705__auto__);
(statearr_13508[1] = 1);
return statearr_13508;
});
var state_machine__5705__auto____1 = (function (state_13482){while(true){
var ret_value__5706__auto__ = (function (){try{while(true){
var result__5707__auto__ = switch__5704__auto__.call(null,state_13482);if(cljs.core.keyword_identical_QMARK_.call(null,result__5707__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5707__auto__;
}
break;
}
}catch (e13509){if((e13509 instanceof Object))
{var ex__5708__auto__ = e13509;var statearr_13510_13527 = state_13482;(statearr_13510_13527[5] = ex__5708__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13482);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13509;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5706__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13528 = state_13482;
state_13482 = G__13528;
continue;
}
} else
{return ret_value__5706__auto__;
}
break;
}
});
state_machine__5705__auto__ = function(state_13482){
switch(arguments.length){
case 0:
return state_machine__5705__auto____0.call(this);
case 1:
return state_machine__5705__auto____1.call(this,state_13482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5705__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5705__auto____0;
state_machine__5705__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5705__auto____1;
return state_machine__5705__auto__;
})()
;})(switch__5704__auto__,c__5719__auto___13512,out))
})();var state__5721__auto__ = (function (){var statearr_13511 = f__5720__auto__.call(null);(statearr_13511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5719__auto___13512);
return statearr_13511;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5721__auto__);
});})(c__5719__auto___13512,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map