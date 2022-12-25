import{c as C,i as w}from"./react.435e6ff6.js";import{A as k}from"./App.c4493840.js";import{c as P,h as R}from"./scheduler.cb961abc.js";var I=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},g={},M={get exports(){return g},set exports(f){g=f}};(function(f){(function(){var b=this;(function(){(function(){var a=[].slice;this.ActionCable={INTERNAL:{message_types:{welcome:"welcome",ping:"ping",confirmation:"confirm_subscription",rejection:"reject_subscription"},default_mount_path:"/cable",protocols:["actioncable-v1-json","actioncable-unsupported"]},WebSocket:window.WebSocket,logger:window.console,createConsumer:function(i){var t;return i==null&&(i=(t=this.getConfig("url"))!=null?t:this.INTERNAL.default_mount_path),new u.Consumer(this.createWebSocketURL(i))},getConfig:function(i){var t;return t=document.head.querySelector("meta[name='action-cable-"+i+"']"),t!=null?t.getAttribute("content"):void 0},createWebSocketURL:function(i){var t;return i&&!/^wss?:/i.test(i)?(t=document.createElement("a"),t.href=i,t.href=t.href,t.protocol=t.protocol.replace("http","ws"),t.href):i},startDebugging:function(){return this.debugging=!0},stopDebugging:function(){return this.debugging=null},log:function(){var i,t;if(i=1<=arguments.length?a.call(arguments,0):[],this.debugging)return i.push(Date.now()),(t=this.logger).log.apply(t,["[ActionCable]"].concat(a.call(i)))}}}).call(this)}).call(b);var u=b.ActionCable;(function(){(function(){var a=function(i,t){return function(){return i.apply(t,arguments)}};u.ConnectionMonitor=function(){var i,t,n;e.pollInterval={min:3,max:30},e.staleThreshold=6;function e(o){this.connection=o,this.visibilityDidChange=a(this.visibilityDidChange,this),this.reconnectAttempts=0}return e.prototype.start=function(){if(!this.isRunning())return this.startedAt=t(),delete this.stoppedAt,this.startPolling(),document.addEventListener("visibilitychange",this.visibilityDidChange),u.log("ConnectionMonitor started. pollInterval = "+this.getPollInterval()+" ms")},e.prototype.stop=function(){if(this.isRunning())return this.stoppedAt=t(),this.stopPolling(),document.removeEventListener("visibilitychange",this.visibilityDidChange),u.log("ConnectionMonitor stopped")},e.prototype.isRunning=function(){return this.startedAt!=null&&this.stoppedAt==null},e.prototype.recordPing=function(){return this.pingedAt=t()},e.prototype.recordConnect=function(){return this.reconnectAttempts=0,this.recordPing(),delete this.disconnectedAt,u.log("ConnectionMonitor recorded connect")},e.prototype.recordDisconnect=function(){return this.disconnectedAt=t(),u.log("ConnectionMonitor recorded disconnect")},e.prototype.startPolling=function(){return this.stopPolling(),this.poll()},e.prototype.stopPolling=function(){return clearTimeout(this.pollTimeout)},e.prototype.poll=function(){return this.pollTimeout=setTimeout(function(o){return function(){return o.reconnectIfStale(),o.poll()}}(this),this.getPollInterval())},e.prototype.getPollInterval=function(){var o,c,s,l;return l=this.constructor.pollInterval,s=l.min,c=l.max,o=5*Math.log(this.reconnectAttempts+1),Math.round(i(o,s,c)*1e3)},e.prototype.reconnectIfStale=function(){if(this.connectionIsStale())return u.log("ConnectionMonitor detected stale connection. reconnectAttempts = "+this.reconnectAttempts+", pollInterval = "+this.getPollInterval()+" ms, time disconnected = "+n(this.disconnectedAt)+" s, stale threshold = "+this.constructor.staleThreshold+" s"),this.reconnectAttempts++,this.disconnectedRecently()?u.log("ConnectionMonitor skipping reopening recent disconnect"):(u.log("ConnectionMonitor reopening"),this.connection.reopen())},e.prototype.connectionIsStale=function(){var o;return n((o=this.pingedAt)!=null?o:this.startedAt)>this.constructor.staleThreshold},e.prototype.disconnectedRecently=function(){return this.disconnectedAt&&n(this.disconnectedAt)<this.constructor.staleThreshold},e.prototype.visibilityDidChange=function(){if(document.visibilityState==="visible")return setTimeout(function(o){return function(){if(o.connectionIsStale()||!o.connection.isOpen())return u.log("ConnectionMonitor reopening stale connection on visibilitychange. visbilityState = "+document.visibilityState),o.connection.reopen()}}(this),200)},t=function(){return new Date().getTime()},n=function(o){return(t()-o)/1e3},i=function(o,c,s){return Math.max(c,Math.min(s,o))},e}()}).call(this),function(){var a,i,t,n,e,o=[].slice,c=function(l,r){return function(){return l.apply(r,arguments)}},s=[].indexOf||function(l){for(var r=0,p=this.length;r<p;r++)if(r in this&&this[r]===l)return r;return-1};n=u.INTERNAL,i=n.message_types,t=n.protocols,e=2<=t.length?o.call(t,0,a=t.length-1):(a=0,[]),t[a++],u.Connection=function(){l.reopenDelay=500;function l(r){this.consumer=r,this.open=c(this.open,this),this.subscriptions=this.consumer.subscriptions,this.monitor=new u.ConnectionMonitor(this),this.disconnected=!0}return l.prototype.send=function(r){return this.isOpen()?(this.webSocket.send(JSON.stringify(r)),!0):!1},l.prototype.open=function(){return this.isActive()?(u.log("Attempted to open WebSocket, but existing socket is "+this.getState()),!1):(u.log("Opening WebSocket, current state is "+this.getState()+", subprotocols: "+t),this.webSocket!=null&&this.uninstallEventHandlers(),this.webSocket=new u.WebSocket(this.consumer.url,t),this.installEventHandlers(),this.monitor.start(),!0)},l.prototype.close=function(r){var p,h;if(p=(r??{allowReconnect:!0}).allowReconnect,p||this.monitor.stop(),this.isActive())return(h=this.webSocket)!=null?h.close():void 0},l.prototype.reopen=function(){var r;if(u.log("Reopening WebSocket, current state is "+this.getState()),this.isActive())try{return this.close()}catch(p){return r=p,u.log("Failed to reopen WebSocket",r)}finally{u.log("Reopening WebSocket in "+this.constructor.reopenDelay+"ms"),setTimeout(this.open,this.constructor.reopenDelay)}else return this.open()},l.prototype.getProtocol=function(){var r;return(r=this.webSocket)!=null?r.protocol:void 0},l.prototype.isOpen=function(){return this.isState("open")},l.prototype.isActive=function(){return this.isState("open","connecting")},l.prototype.isProtocolSupported=function(){var r;return r=this.getProtocol(),s.call(e,r)>=0},l.prototype.isState=function(){var r,p;return p=1<=arguments.length?o.call(arguments,0):[],r=this.getState(),s.call(p,r)>=0},l.prototype.getState=function(){var r,p,h;for(p in WebSocket)if(h=WebSocket[p],h===((r=this.webSocket)!=null?r.readyState:void 0))return p.toLowerCase();return null},l.prototype.installEventHandlers=function(){var r,p;for(r in this.events)p=this.events[r].bind(this),this.webSocket["on"+r]=p},l.prototype.uninstallEventHandlers=function(){var r;for(r in this.events)this.webSocket["on"+r]=function(){}},l.prototype.events={message:function(r){var p,h,d,v;if(this.isProtocolSupported())switch(d=JSON.parse(r.data),p=d.identifier,h=d.message,v=d.type,v){case i.welcome:return this.monitor.recordConnect(),this.subscriptions.reload();case i.ping:return this.monitor.recordPing();case i.confirmation:return this.subscriptions.notify(p,"connected");case i.rejection:return this.subscriptions.reject(p);default:return this.subscriptions.notify(p,"received",h)}},open:function(){if(u.log("WebSocket onopen event, using '"+this.getProtocol()+"' subprotocol"),this.disconnected=!1,!this.isProtocolSupported())return u.log("Protocol is unsupported. Stopping monitor and disconnecting."),this.close({allowReconnect:!1})},close:function(r){if(u.log("WebSocket onclose event"),!this.disconnected)return this.disconnected=!0,this.monitor.recordDisconnect(),this.subscriptions.notifyAll("disconnected",{willAttemptReconnect:this.monitor.isRunning()})},error:function(){return u.log("WebSocket onerror event")}},l}()}.call(this),function(){var a=[].slice;u.Subscriptions=function(){function i(t){this.consumer=t,this.subscriptions=[]}return i.prototype.create=function(t,n){var e,o,c;return e=t,o=typeof e=="object"?e:{channel:e},c=new u.Subscription(this.consumer,o,n),this.add(c)},i.prototype.add=function(t){return this.subscriptions.push(t),this.consumer.ensureActiveConnection(),this.notify(t,"initialized"),this.sendCommand(t,"subscribe"),t},i.prototype.remove=function(t){return this.forget(t),this.findAll(t.identifier).length||this.sendCommand(t,"unsubscribe"),t},i.prototype.reject=function(t){var n,e,o,c,s;for(o=this.findAll(t),c=[],n=0,e=o.length;n<e;n++)s=o[n],this.forget(s),this.notify(s,"rejected"),c.push(s);return c},i.prototype.forget=function(t){var n;return this.subscriptions=function(){var e,o,c,s;for(c=this.subscriptions,s=[],e=0,o=c.length;e<o;e++)n=c[e],n!==t&&s.push(n);return s}.call(this),t},i.prototype.findAll=function(t){var n,e,o,c,s;for(o=this.subscriptions,c=[],n=0,e=o.length;n<e;n++)s=o[n],s.identifier===t&&c.push(s);return c},i.prototype.reload=function(){var t,n,e,o,c;for(e=this.subscriptions,o=[],t=0,n=e.length;t<n;t++)c=e[t],o.push(this.sendCommand(c,"subscribe"));return o},i.prototype.notifyAll=function(){var t,n,e,o,c,s,l;for(n=arguments[0],t=2<=arguments.length?a.call(arguments,1):[],c=this.subscriptions,s=[],e=0,o=c.length;e<o;e++)l=c[e],s.push(this.notify.apply(this,[l,n].concat(a.call(t))));return s},i.prototype.notify=function(){var t,n,e,o,c,s,l;for(s=arguments[0],n=arguments[1],t=3<=arguments.length?a.call(arguments,2):[],typeof s=="string"?l=this.findAll(s):l=[s],c=[],e=0,o=l.length;e<o;e++)s=l[e],c.push(typeof s[n]=="function"?s[n].apply(s,t):void 0);return c},i.prototype.sendCommand=function(t,n){var e;return e=t.identifier,this.consumer.send({command:n,identifier:e})},i}()}.call(this),function(){u.Subscription=function(){var a;function i(t,n,e){this.consumer=t,n==null&&(n={}),this.identifier=JSON.stringify(n),a(this,e)}return i.prototype.perform=function(t,n){return n==null&&(n={}),n.action=t,this.send(n)},i.prototype.send=function(t){return this.consumer.send({command:"message",identifier:this.identifier,data:JSON.stringify(t)})},i.prototype.unsubscribe=function(){return this.consumer.subscriptions.remove(this)},a=function(t,n){var e,o;if(n!=null)for(e in n)o=n[e],t[e]=o;return t},i}()}.call(this),function(){u.Consumer=function(){function a(i){this.url=i,this.subscriptions=new u.Subscriptions(this),this.connection=new u.Connection(this)}return a.prototype.send=function(i){return this.connection.send(i)},a.prototype.connect=function(){return this.connection.open()},a.prototype.disconnect=function(){return this.connection.close({allowReconnect:!1})},a.prototype.ensureActiveConnection=function(){if(!this.connection.isActive())return this.connection.open()},a}()}.call(this)}).call(this),f.exports&&(f.exports=u)}).call(I)})(M);const y=g,m={},A=gon.environment;A==="production"?m.cable=y.createConsumer("wss://samuraicable-production.up.railway.app"):m.cable=y.createConsumer("/cable");window.CableApp=m;const T={environment:A};let S=P(R);C(document.getElementById("root")).render(S(w.StrictMode,null,S(k,{global:T})));
//# sourceMappingURL=mount.268b2932.js.map