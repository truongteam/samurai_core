import{c as v,i as y}from"./react.435e6ff6.js";import{A}from"./App.2a0ad1b3.js";import{c as w,h as k}from"./scheduler.cb961abc.js";const C=gon.environment,$={environment:C};var h={logger:self.console,WebSocket:self.WebSocket},i={log(...n){this.enabled&&(n.push(Date.now()),h.logger.log("[ActionCable]",...n))}};const l=()=>new Date().getTime(),a=n=>(l()-n)/1e3;class p{constructor(t){this.visibilityDidChange=this.visibilityDidChange.bind(this),this.connection=t,this.reconnectAttempts=0}start(){this.isRunning()||(this.startedAt=l(),delete this.stoppedAt,this.startPolling(),addEventListener("visibilitychange",this.visibilityDidChange),i.log(`ConnectionMonitor started. stale threshold = ${this.constructor.staleThreshold} s`))}stop(){this.isRunning()&&(this.stoppedAt=l(),this.stopPolling(),removeEventListener("visibilitychange",this.visibilityDidChange),i.log("ConnectionMonitor stopped"))}isRunning(){return this.startedAt&&!this.stoppedAt}recordPing(){this.pingedAt=l()}recordConnect(){this.reconnectAttempts=0,this.recordPing(),delete this.disconnectedAt,i.log("ConnectionMonitor recorded connect")}recordDisconnect(){this.disconnectedAt=l(),i.log("ConnectionMonitor recorded disconnect")}startPolling(){this.stopPolling(),this.poll()}stopPolling(){clearTimeout(this.pollTimeout)}poll(){this.pollTimeout=setTimeout(()=>{this.reconnectIfStale(),this.poll()},this.getPollInterval())}getPollInterval(){const{staleThreshold:t,reconnectionBackoffRate:e}=this.constructor,s=Math.pow(1+e,Math.min(this.reconnectAttempts,10)),r=(this.reconnectAttempts===0?1:e)*Math.random();return t*1e3*s*(1+r)}reconnectIfStale(){this.connectionIsStale()&&(i.log(`ConnectionMonitor detected stale connection. reconnectAttempts = ${this.reconnectAttempts}, time stale = ${a(this.refreshedAt)} s, stale threshold = ${this.constructor.staleThreshold} s`),this.reconnectAttempts++,this.disconnectedRecently()?i.log(`ConnectionMonitor skipping reopening recent disconnect. time disconnected = ${a(this.disconnectedAt)} s`):(i.log("ConnectionMonitor reopening"),this.connection.reopen()))}get refreshedAt(){return this.pingedAt?this.pingedAt:this.startedAt}connectionIsStale(){return a(this.refreshedAt)>this.constructor.staleThreshold}disconnectedRecently(){return this.disconnectedAt&&a(this.disconnectedAt)<this.constructor.staleThreshold}visibilityDidChange(){document.visibilityState==="visible"&&setTimeout(()=>{(this.connectionIsStale()||!this.connection.isOpen())&&(i.log(`ConnectionMonitor reopening stale connection on visibilitychange. visibilityState = ${document.visibilityState}`),this.connection.reopen())},200)}}p.staleThreshold=6;p.reconnectionBackoffRate=.15;var S={message_types:{welcome:"welcome",disconnect:"disconnect",ping:"ping",confirmation:"confirm_subscription",rejection:"reject_subscription"},disconnect_reasons:{unauthorized:"unauthorized",invalid_request:"invalid_request",server_restart:"server_restart"},default_mount_path:"/cable",protocols:["actioncable-v1-json","actioncable-unsupported"]};const{message_types:c,protocols:u}=S,R=u.slice(0,u.length-1),f=[].indexOf;class g{constructor(t){this.open=this.open.bind(this),this.consumer=t,this.subscriptions=this.consumer.subscriptions,this.monitor=new p(this),this.disconnected=!0}send(t){return this.isOpen()?(this.webSocket.send(JSON.stringify(t)),!0):!1}open(){return this.isActive()?(i.log(`Attempted to open WebSocket, but existing socket is ${this.getState()}`),!1):(i.log(`Opening WebSocket, current state is ${this.getState()}, subprotocols: ${u}`),this.webSocket&&this.uninstallEventHandlers(),this.webSocket=new h.WebSocket(this.consumer.url,u),this.installEventHandlers(),this.monitor.start(),!0)}close({allowReconnect:t}={allowReconnect:!0}){if(t||this.monitor.stop(),this.isOpen())return this.webSocket.close()}reopen(){if(i.log(`Reopening WebSocket, current state is ${this.getState()}`),this.isActive())try{return this.close()}catch(t){i.log("Failed to reopen WebSocket",t)}finally{i.log(`Reopening WebSocket in ${this.constructor.reopenDelay}ms`),setTimeout(this.open,this.constructor.reopenDelay)}else return this.open()}getProtocol(){if(this.webSocket)return this.webSocket.protocol}isOpen(){return this.isState("open")}isActive(){return this.isState("open","connecting")}isProtocolSupported(){return f.call(R,this.getProtocol())>=0}isState(...t){return f.call(t,this.getState())>=0}getState(){if(this.webSocket){for(let t in h.WebSocket)if(h.WebSocket[t]===this.webSocket.readyState)return t.toLowerCase()}return null}installEventHandlers(){for(let t in this.events){const e=this.events[t].bind(this);this.webSocket[`on${t}`]=e}}uninstallEventHandlers(){for(let t in this.events)this.webSocket[`on${t}`]=function(){}}}g.reopenDelay=500;g.prototype.events={message(n){if(!this.isProtocolSupported())return;const{identifier:t,message:e,reason:s,reconnect:o,type:r}=JSON.parse(n.data);switch(r){case c.welcome:return this.monitor.recordConnect(),this.subscriptions.reload();case c.disconnect:return i.log(`Disconnecting. Reason: ${s}`),this.close({allowReconnect:o});case c.ping:return this.monitor.recordPing();case c.confirmation:return this.subscriptions.confirmSubscription(t),this.subscriptions.notify(t,"connected");case c.rejection:return this.subscriptions.reject(t);default:return this.subscriptions.notify(t,"received",e)}},open(){if(i.log(`WebSocket onopen event, using '${this.getProtocol()}' subprotocol`),this.disconnected=!1,!this.isProtocolSupported())return i.log("Protocol is unsupported. Stopping monitor and disconnecting."),this.close({allowReconnect:!1})},close(n){if(i.log("WebSocket onclose event"),!this.disconnected)return this.disconnected=!0,this.monitor.recordDisconnect(),this.subscriptions.notifyAll("disconnected",{willAttemptReconnect:this.monitor.isRunning()})},error(){i.log("WebSocket onerror event")}};const T=function(n,t){if(t!=null)for(let e in t){const s=t[e];n[e]=s}return n};class P{constructor(t,e={},s){this.consumer=t,this.identifier=JSON.stringify(e),T(this,s)}perform(t,e={}){return e.action=t,this.send(e)}send(t){return this.consumer.send({command:"message",identifier:this.identifier,data:JSON.stringify(t)})}unsubscribe(){return this.consumer.subscriptions.remove(this)}}class _{constructor(t){this.subscriptions=t,this.pendingSubscriptions=[]}guarantee(t){this.pendingSubscriptions.indexOf(t)==-1?(i.log(`SubscriptionGuarantor guaranteeing ${t.identifier}`),this.pendingSubscriptions.push(t)):i.log(`SubscriptionGuarantor already guaranteeing ${t.identifier}`),this.startGuaranteeing()}forget(t){i.log(`SubscriptionGuarantor forgetting ${t.identifier}`),this.pendingSubscriptions=this.pendingSubscriptions.filter(e=>e!==t)}startGuaranteeing(){this.stopGuaranteeing(),this.retrySubscribing()}stopGuaranteeing(){clearTimeout(this.retryTimeout)}retrySubscribing(){this.retryTimeout=setTimeout(()=>{this.subscriptions&&typeof this.subscriptions.subscribe=="function"&&this.pendingSubscriptions.map(t=>{i.log(`SubscriptionGuarantor resubscribing ${t.identifier}`),this.subscriptions.subscribe(t)})},500)}}class M{constructor(t){this.consumer=t,this.guarantor=new _(this),this.subscriptions=[]}create(t,e){const s=t,o=typeof s=="object"?s:{channel:s},r=new P(this.consumer,o,e);return this.add(r)}add(t){return this.subscriptions.push(t),this.consumer.ensureActiveConnection(),this.notify(t,"initialized"),this.subscribe(t),t}remove(t){return this.forget(t),this.findAll(t.identifier).length||this.sendCommand(t,"unsubscribe"),t}reject(t){return this.findAll(t).map(e=>(this.forget(e),this.notify(e,"rejected"),e))}forget(t){return this.guarantor.forget(t),this.subscriptions=this.subscriptions.filter(e=>e!==t),t}findAll(t){return this.subscriptions.filter(e=>e.identifier===t)}reload(){return this.subscriptions.map(t=>this.subscribe(t))}notifyAll(t,...e){return this.subscriptions.map(s=>this.notify(s,t,...e))}notify(t,e,...s){let o;return typeof t=="string"?o=this.findAll(t):o=[t],o.map(r=>typeof r[e]=="function"?r[e](...s):void 0)}subscribe(t){this.sendCommand(t,"subscribe")&&this.guarantor.guarantee(t)}confirmSubscription(t){i.log(`Subscription confirmed ${t}`),this.findAll(t).map(e=>this.guarantor.forget(e))}sendCommand(t,e){const{identifier:s}=t;return this.consumer.send({command:e,identifier:s})}}class W{constructor(t){this._url=t,this.subscriptions=new M(this),this.connection=new g(this)}get url(){return D(this._url)}send(t){return this.connection.send(t)}connect(){return this.connection.open()}disconnect(){return this.connection.close({allowReconnect:!1})}ensureActiveConnection(){if(!this.connection.isActive())return this.connection.open()}}function D(n){if(typeof n=="function"&&(n=n()),n&&!/^wss?:/i.test(n)){const t=document.createElement("a");return t.href=n,t.href=t.href,t.protocol=t.protocol.replace("http","ws"),t.href}else return n}function m(n=O("url")||S.default_mount_path){return new W(n)}function O(n){const t=document.head.querySelector(`meta[name='action-cable-${n}']`);if(t)return t.getAttribute("content")}const d={},j=gon.environment;j==="production"?d.cable=m("wss://samuraicable-production.up.railway.app"):d.cable=m("/cable");const E=d.cable;let b=w(k);v(document.getElementById("root")).render(b(y.StrictMode,null,b(A,{global:$,consumer:E})));
//# sourceMappingURL=mount.cf376f96.js.map
