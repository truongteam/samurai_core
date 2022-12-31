import{s as je}from"./store.0d5fec67.js";import{g as qe}from"./_commonjsHelpers.042e6b4d.js";import{r as A,R as E}from"./index.57fae3ab.js";import{r as Te,c as We}from"./client.8cac2843.js";import{c as Oe,P as Ve}from"./react-pluggable.772a98d2.js";import{S as ze}from"./plugin.693b6734.js";import"./books.4da96270.js";import"./redux.3c9f6592.js";import"./toPropertyKey.cf64b126.js";import"./redux-rails.8c6b1694.js";const Je="modulepreload",Ge=function(e){return"https://samuraicore.netlify.app/samurai_core-vite/"+e},be={},Ye=function(t,n,a){if(!n||n.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=Ge(o),o in be)return;be[o]=!0;const c=o.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(!!a)for(let i=r.length-1;i>=0;i--){const m=r[i];if(m.href===o&&(!c||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":Je,c||(f.as="script",f.crossOrigin=""),f.href=o,document.head.appendChild(f),c)return new Promise((i,m)=>{f.addEventListener("load",i),f.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};var I={},Ke={get exports(){return I},set exports(e){I=e}},O={},Qe={get exports(){return O},set exports(e){O=e}},w={},$={},Xe={get exports(){return $},set exports(e){$=e}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function _(f,i){for(var m=0;m<i.length;m++){var s=i[m];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(f,s.key,s)}}return function(f,i,m){return i&&_(f.prototype,i),m&&_(f,m),f}}();function a(_,f){if(!(_ instanceof f))throw new TypeError("Cannot call a class as a function")}var r=function(){},o=r,c="http://tinyurl.com/jxryd3s",l=function(){function _(){a(this,_)}return n(_,null,[{key:"warn",value:function(i,m){for(var s=arguments.length,y=Array(s>2?s-2:0),u=2;u<s;u++)y[u-2]=arguments[u];o("WARNING: "+i+" "+m+" "+c+"#"+i.toLowerCase())}},{key:"error",value:function(i,m){for(var s=arguments.length,y=Array(s>2?s-2:0),u=2;u<s;u++)y[u-2]=arguments[u];o("ERROR: "+i+" "+m+" "+c+"#"+i.toLowerCase())}}]),_}();t.default=l,e.exports=t.default})(Xe,$);Object.defineProperty(w,"__esModule",{value:!0});w.HABITAT_PROP_REF=w.HABITAT_PROP_NUMBER=w.HABITAT_PROP_JSON=w.HABITAT_PROP=w.ACTIVE_HABITAT_FLAG=w.HABITAT_NAMESPACE=w.HABITAT_HOST_KEY=void 0;var Ze=function(){function e(t,n){for(var a=0;a<n.length;a++){var r=n[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),et=$,tt=nt(et);function nt(e){return e&&e.__esModule?e:{default:e}}function rt(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var se=w.HABITAT_HOST_KEY="habitatHostElement",we=w.HABITAT_NAMESPACE="data-habitat",Se=w.ACTIVE_HABITAT_FLAG="data-has-habitat",xe=w.HABITAT_PROP="data-prop-",ot=w.HABITAT_PROP_JSON="data-props",at=w.HABITAT_PROP_NUMBER="data-n-prop-",Pe=w.HABITAT_PROP_REF="data-r-prop-";function it(e){var t=e.currentStyle||window.getComputedStyle(e,"");return t.display}function ut(e){return e[1].toUpperCase()}function le(e,t){return t.replace(e,"").replace(/-([a-z])/g,ut)}var ft=function(){function e(){rt(this,e)}return Ze(e,null,[{key:"parseProps",value:function(n){for(var a={proxy:n},r=0;r<n.attributes.length;r++){var o=n.attributes[r];if(o.name.indexOf(xe)===0){var c=le(xe,o.name),l=o.value||"";typeof l=="string"&&l.toLowerCase()==="false"&&(l=!1),typeof l=="string"&&l.toLowerCase()==="true"&&(l=!0),typeof l=="string"&&l.length>=2&&(l[0]==="{"&&l[l.length-1]==="}"||l[0]==="["&&l[l.length-1]==="]")&&(l=JSON.parse(l)),typeof l=="string"&&l.toLowerCase()==="null"&&(l=null),a[c]=l}else if(o.name===ot)Object.assign(a,JSON.parse(o.value));else if(o.name.indexOf("data-n-prop-")===0){var _=le(at,o.name);a[_]=parseFloat(o.value)}else if(window&&o.name.indexOf(Pe)===0){var f=le(Pe,o.name);a[f]=window[o.value]}}return a}},{key:"create",value:function(n,a){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(window.document.body===n||n===null||n===void 0)return tt.default.warn("RHW04","Cannot open a habitat for element.",n),null;var o=n.getAttribute("data-habitat-tag")||r.tag||null;o||(o="span",it(n)==="block"&&(o="div"));var c=window.document.createElement(o),l=n.getAttribute("data-habitat-class")||r.className||null,_=typeof r.replaceDisabled=="boolean"?r.replaceDisabled:!1;if(n.getAttribute("data-habitat-no-replace")!==null&&(_=n.getAttribute("data-habitat-no-replace").toLocaleLowerCase()==="true"),c.setAttribute(we,a),l&&(c.className=""+l),n.parentNode.insertBefore(c,n.nextSibling),n.tagName!=="INPUT"){if(!_){var f=n.parentNode.removeChild(n);try{c[se]=f}catch{}}}else n.setAttribute(Se,"true"),n.getAttribute("type")!=="hidden"&&n.setAttribute("style","display: none;");return c}},{key:"hasHabitat",value:function(n){return n.getAttribute(Se)!==null}},{key:"destroy",value:function(n){try{typeof n[se]<"u"&&n.parentNode.insertBefore(n[se],n)}finally{n.parentNode.removeChild(n)}}},{key:"listHabitats",value:function(n){return window.document.body.querySelectorAll("["+we+'="'+n+'"]')}}]),e}();w.default=ft;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function s(y,u){for(var d=0;d<u.length;d++){var p=u[d];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(y,p.key,p)}}return function(y,u,d){return u&&s(y.prototype,u),d&&s(y,d),y}}(),a=w,r=l(a),o=$,c=l(o);function l(s){return s&&s.__esModule?s:{default:s}}function _(s,y){if(!(s instanceof y))throw new TypeError("Cannot call a class as a function")}var f="data-component";function i(s,y){if(typeof s=="function"){for(var u=arguments.length,d=Array(u>2?u-2:0),p=2;p<u;p++)d[p-2]=arguments[p];s.call.apply(s,[y].concat(d))}}var m=function(){function s(){if(_(this,s),!window||!window&&!window.document)throw new Error("React Habitat requires a window but cannot see one :(");this.componentSelector=f,this.__container__=null}return n(s,[{key:"_apply",value:function(u){for(var d=this,p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,g=[],S=function(ue){var T=u[ue];if(r.default.hasHabitat(T))return"continue";var ge=T.getAttribute(d.componentSelector);g.push(d.__container__.resolve(ge,d).then(function(C){var fe=r.default.parseProps(T);C.meta.defaultProps&&(fe=Object.assign({},C.meta.defaultProps,fe));var Fe=C.meta.options||{};d.__container__.factory.inject(C.component,fe,r.default.create(T,d.__container__.id,Fe))}).catch(function(C){c.default.error("RHW01",'Cannot resolve component "'+ge+'" for element.',C,T)}))},ie=0;ie<u.length;++ie)var Ne=S(ie);Promise.all(g.map(function(M){return M.catch(function(ue){return ue})})).then(function(){i(p)}).catch(function(M){throw M})}},{key:"setContainer",value:function(u){var d=this,p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(this.__container__!==null){c.default.error("RHW02","A container is already set. Please call dispose() before assigning a new one.");return}if(!u.factory||typeof u.factory.inject!="function"||typeof u.factory.dispose!="function"){c.default.error("RHE10","Incompatible factory");return}this.__container__=u,this.update(null,function(){i(p,d)})}},{key:"update",value:function(u){var d=this,p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!this.__container__){i(p);return}var g=u||window.document.body,S=g.querySelectorAll("["+this.componentSelector+"]");if(S.length){if(typeof this.shouldUpdate=="function"&&this.shouldUpdate(g,S)===!1){i(p,this);return}typeof this.willUpdate=="function"&&this.willUpdate(g,S),this._apply(S,function(){typeof d.didUpdate=="function"&&d.didUpdate(g),i(p,d)})}}},{key:"unmountHabitats",value:function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;typeof this.willUnmountHabitats=="function"&&this.willUnmountHabitats();for(var d=r.default.listHabitats(this.__container__.id),p=0;p<d.length;++p)this.__container__.factory.dispose(d[p]),r.default.destroy(d[p]);typeof this.didUnmountHabitats=="function"&&this.didUnmountHabitats(),i(u,this)}},{key:"dispose",value:function(){var u=this,d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;this.unmountHabitats(function(){u.__container__=null,typeof u.didDispose=="function"&&u.didDispose(),i(d,u)})}},{key:"container",get:function(){return this.__container__}}]),s}();t.default=m,e.exports=t.default})(Qe,O);var k={},st={get exports(){return k},set exports(e){k=e}},B={},lt={get exports(){return B},set exports(e){B=e}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function s(y,u){for(var d=0;d<u.length;d++){var p=u[d];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(y,p.key,p)}}return function(y,u,d){return u&&s(y.prototype,u),d&&s(y,d),y}}(),a=A,r=f(a),o=Te,c=f(o),l=$,_=f(l);function f(s){return s&&s.__esModule?s:{default:s}}function i(s,y){if(!(s instanceof y))throw new TypeError("Cannot call a class as a function")}var m=function(){function s(){i(this,s)}return n(s,null,[{key:"inject",value:function(u){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},p=arguments[2];p?c.default.render(r.default.createElement(u,d||{}),p):_.default.warn("RHW07","Target element is null or undefined.")}},{key:"dispose",value:function(u){u&&c.default.unmountComponentAtNode(u)}}]),s}();t.default=m,e.exports=t.default})(lt,B);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function f(i,m){for(var s=0;s<m.length;s++){var y=m[s];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(i,y.key,y)}}return function(i,m,s){return m&&f(i.prototype,m),s&&f(i,s),i}}(),a=B,r=o(a);function o(f){return f&&f.__esModule?f:{default:f}}function c(f,i){if(!(f instanceof i))throw new TypeError("Cannot call a class as a function")}var l=function(){var i=0;return function(){return i=i+1,"C"+i}}(),_=function(){function f(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:r.default,m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};c(this,f),this._id=l(),this._registrations=m||{},this._factory=i}return n(f,[{key:"resolve",value:function(m){var s=this;return new Promise(function(y,u){var d=s._registrations[m];if(!d||!d.operator)return u(new Error("Cannot resolve registration.")),null;d.operator().then(function(p){var g=p;return p.__esModule&&p.default&&(g=p.default),y({component:g,meta:d.meta}),g}).catch(u)})}},{key:"id",get:function(){return this._id}},{key:"factory",get:function(){return this._factory}},{key:"length",get:function(){return Object.keys(this._registrations).length}}]),f}();t.default=_,e.exports=t.default})(st,k);var H={},ct={get exports(){return H},set exports(e){H=e}},D={},dt={get exports(){return D},set exports(e){D=e}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function _(f,i){for(var m=0;m<i.length;m++){var s=i[m];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(f,s.key,s)}}return function(f,i,m){return i&&_(f.prototype,i),m&&_(f,m),f}}(),a=$,r=o(a);function o(_){return _&&_.__esModule?_:{default:_}}function c(_,f){if(!(_ instanceof f))throw new TypeError("Cannot call a class as a function")}var l=function(){function _(f){c(this,_),this._operator=f,this._key=null,this._meta={}}return n(_,[{key:"as",value:function(i){if(typeof i!="string"){r.default.error("RHE13","Unexpected key type. Expected a string.",i);return}return this._key=i,this}},{key:"withDefaultProps",value:function(i){return this._meta.defaultProps=i,this}},{key:"withOptions",value:function(i){return this._meta.options=i,this}},{key:"operator",get:function(){return this._operator}},{key:"key",get:function(){return this._key}},{key:"meta",get:function(){return this._meta}}]),_}();t.default=l,e.exports=t.default})(dt,D);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function u(d,p){for(var g=0;g<p.length;g++){var S=p[g];S.enumerable=S.enumerable||!1,S.configurable=!0,"value"in S&&(S.writable=!0),Object.defineProperty(d,S.key,S)}}return function(d,p,g){return p&&u(d.prototype,p),g&&u(d,g),d}}(),a=$,r=m(a),o=D,c=m(o),l=k,_=m(l),f=B,i=m(f);function m(u){return u&&u.__esModule?u:{default:u}}function s(u,d){if(!(u instanceof d))throw new TypeError("Cannot call a class as a function")}var y=function(){function u(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;s(this,u),this._registrations=[],this._defaultOptions=d,this._factory=i.default}return n(u,[{key:"registerAsync",value:function(p){var g=new c.default(p);return this._defaultOptions&&g.withOptions(this._defaultOptions),this._registrations.push(g),g}},{key:"register",value:function(p){return this.registerAsync(function(){return Promise.resolve(p)})}},{key:"build",value:function(){return new _.default(this._factory,this._registrations.reduce(function(p,g){return g.key?(p[g.key]&&r.default.warn("RHW12","Duplicate key",g.key),p[g.key]=g,p):(r.default.error("RHE11","Missing key for registration."),p)},{}))}},{key:"factory",set:function(p){this._factory=p}}]),u}();t.default=y,e.exports=t.default})(ct,H);var U={};Object.defineProperty(U,"__esModule",{value:!0});U._Mixin=void 0;var pt=function(){function e(t,n){for(var a=0;a<n.length;a++){var r=n[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();U.createBootstrapper=wt;var yt=O,mt=ke(yt),_t=H,vt=ke(_t);function ke(e){return e&&e.__esModule?e:{default:e}}function ht(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ae(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function gt(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var bt=U._Mixin=function(e){gt(t,e);function t(n,a){ht(this,t);var r=Ae(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));if(!n.container)return console.warn('"Container" property was not supplied'),Ae(r);n.componentSelector&&(r.componentSelector=n.componentSelector),typeof n.enableWatcher=="boolean"&&(r.enableWatcher=n.enableWatcher);for(var o=new vt.default(n.defaultOptions||null),c=0;c<n.container.length;c++){var l=void 0;n.container[c].forAsync?l=o.registerAsync(n.container[c].forAsync).as(n.container[c].register):l=o.register(n.container[c].for).as(n.container[c].register),n.container[c].withDefaultProps&&l.withDefaultProps(n.container[c].withDefaultProps),n.container[c].withOptions&&l.withOptions(n.container[c].withOptions)}return r._shouldUpdateProxy=n.shouldUpdate||null,r._willUpdateProxy=n.willUpdate||null,r._didUpdateProxy=n.didUpdate||null,r._willUnmountProxy=n.willUnmountHabitats||null,r._didUnmountProxy=n.didUnmountHabitats||null,r._didDisposeProxy=n.didDispose||null,r.setContainer(o.build(),function(){typeof a=="function"&&a()}),r}return pt(t,[{key:"shouldUpdate",value:function(a){this._shouldUpdateProxy&&this._shouldUpdateProxy(a)}},{key:"willUpdate",value:function(){this._willUpdateProxy&&this._willUpdateProxy()}},{key:"didUpdate",value:function(){this._didUpdateProxy&&this._didUpdateProxy()}},{key:"willUnmountHabitats",value:function(){this._willUnmountProxy&&this._willUnmountProxy()}},{key:"didUnmountHabitats",value:function(){this._didUnmountProxy&&this._didUnmountProxy()}},{key:"didDispose",value:function(){this._didDisposeProxy&&this._didDisposeProxy()}}]),t}(mt.default);function wt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return new bt(e,t)}(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=O,a=f(n),r=k,o=f(r),c=H,l=f(c),_=U;function f(i){return i&&i.__esModule?i:{default:i}}t.default={Bootstrapper:a.default,Container:o.default,ContainerBuilder:l.default,createBootstrapper:_.createBootstrapper},e.exports=t.default})(Ke,I);const $e=qe(I);var de={},St={get exports(){return de},set exports(e){de=e}},Be={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R=A;function xt(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Pt=typeof Object.is=="function"?Object.is:xt,At=R.useState,$t=R.useEffect,Et=R.useLayoutEffect,Ct=R.useDebugValue;function Rt(e,t){var n=t(),a=At({inst:{value:n,getSnapshot:t}}),r=a[0].inst,o=a[1];return Et(function(){r.value=n,r.getSnapshot=t,ce(r)&&o({inst:r})},[e,n,t]),$t(function(){return ce(r)&&o({inst:r}),e(function(){ce(r)&&o({inst:r})})},[e]),Ct(n),n}function ce(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Pt(e,n)}catch{return!0}}function Tt(e,t){return t()}var Ot=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Tt:Rt;Be.useSyncExternalStore=R.useSyncExternalStore!==void 0?R.useSyncExternalStore:Ot;(function(e){e.exports=Be})(St);var Ee={},kt={get exports(){return Ee},set exports(e){Ee=e}},He={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L=A,Bt=de;function Ht(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ut=typeof Object.is=="function"?Object.is:Ht,Mt=Bt.useSyncExternalStore,It=L.useRef,Dt=L.useEffect,Lt=L.useMemo,Nt=L.useDebugValue;He.useSyncExternalStoreWithSelector=function(e,t,n,a,r){var o=It(null);if(o.current===null){var c={hasValue:!1,value:null};o.current=c}else c=o.current;o=Lt(function(){function _(y){if(!f){if(f=!0,i=y,y=a(y),r!==void 0&&c.hasValue){var u=c.value;if(r(u,y))return m=u}return m=y}if(u=m,Ut(i,y))return u;var d=a(y);return r!==void 0&&r(u,d)?u:(i=y,m=d)}var f=!1,i,m,s=n===void 0?null:n;return[function(){return _(t())},s===null?void 0:function(){return _(s())}]},[t,n,a,r]);var l=Mt(e,o[0],o[1]);return Dt(function(){c.hasValue=!0,c.value=l},[l]),Nt(l),l};(function(e){e.exports=He})(kt);function Ft(e){e()}let Ue=Ft;const jt=e=>Ue=e,qt=()=>Ue,Wt=A.createContext(null);var pe={},Vt={get exports(){return pe},set exports(e){pe=e}},v={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b=typeof Symbol=="function"&&Symbol.for,ye=b?Symbol.for("react.element"):60103,me=b?Symbol.for("react.portal"):60106,N=b?Symbol.for("react.fragment"):60107,F=b?Symbol.for("react.strict_mode"):60108,j=b?Symbol.for("react.profiler"):60114,q=b?Symbol.for("react.provider"):60109,W=b?Symbol.for("react.context"):60110,_e=b?Symbol.for("react.async_mode"):60111,V=b?Symbol.for("react.concurrent_mode"):60111,z=b?Symbol.for("react.forward_ref"):60112,J=b?Symbol.for("react.suspense"):60113,zt=b?Symbol.for("react.suspense_list"):60120,G=b?Symbol.for("react.memo"):60115,Y=b?Symbol.for("react.lazy"):60116,Jt=b?Symbol.for("react.block"):60121,Gt=b?Symbol.for("react.fundamental"):60117,Yt=b?Symbol.for("react.responder"):60118,Kt=b?Symbol.for("react.scope"):60119;function x(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ye:switch(e=e.type,e){case _e:case V:case N:case j:case F:case J:return e;default:switch(e=e&&e.$$typeof,e){case W:case z:case Y:case G:case q:return e;default:return t}}case me:return t}}}function Me(e){return x(e)===V}v.AsyncMode=_e;v.ConcurrentMode=V;v.ContextConsumer=W;v.ContextProvider=q;v.Element=ye;v.ForwardRef=z;v.Fragment=N;v.Lazy=Y;v.Memo=G;v.Portal=me;v.Profiler=j;v.StrictMode=F;v.Suspense=J;v.isAsyncMode=function(e){return Me(e)||x(e)===_e};v.isConcurrentMode=Me;v.isContextConsumer=function(e){return x(e)===W};v.isContextProvider=function(e){return x(e)===q};v.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ye};v.isForwardRef=function(e){return x(e)===z};v.isFragment=function(e){return x(e)===N};v.isLazy=function(e){return x(e)===Y};v.isMemo=function(e){return x(e)===G};v.isPortal=function(e){return x(e)===me};v.isProfiler=function(e){return x(e)===j};v.isStrictMode=function(e){return x(e)===F};v.isSuspense=function(e){return x(e)===J};v.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===N||e===V||e===j||e===F||e===J||e===zt||typeof e=="object"&&e!==null&&(e.$$typeof===Y||e.$$typeof===G||e.$$typeof===q||e.$$typeof===W||e.$$typeof===z||e.$$typeof===Gt||e.$$typeof===Yt||e.$$typeof===Kt||e.$$typeof===Jt)};v.typeOf=x;(function(e){e.exports=v})(Vt);var Ie=pe,Qt={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Xt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},De={};De[Ie.ForwardRef]=Qt;De[Ie.Memo]=Xt;var Ce={},Zt={get exports(){return Ce},set exports(e){Ce=e}},h={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ve=Symbol.for("react.element"),he=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),Z=Symbol.for("react.provider"),ee=Symbol.for("react.context"),en=Symbol.for("react.server_context"),te=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),re=Symbol.for("react.suspense_list"),oe=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),tn=Symbol.for("react.offscreen"),Le;Le=Symbol.for("react.module.reference");function P(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ve:switch(e=e.type,e){case K:case X:case Q:case ne:case re:return e;default:switch(e=e&&e.$$typeof,e){case en:case ee:case te:case ae:case oe:case Z:return e;default:return t}}case he:return t}}}h.ContextConsumer=ee;h.ContextProvider=Z;h.Element=ve;h.ForwardRef=te;h.Fragment=K;h.Lazy=ae;h.Memo=oe;h.Portal=he;h.Profiler=X;h.StrictMode=Q;h.Suspense=ne;h.SuspenseList=re;h.isAsyncMode=function(){return!1};h.isConcurrentMode=function(){return!1};h.isContextConsumer=function(e){return P(e)===ee};h.isContextProvider=function(e){return P(e)===Z};h.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ve};h.isForwardRef=function(e){return P(e)===te};h.isFragment=function(e){return P(e)===K};h.isLazy=function(e){return P(e)===ae};h.isMemo=function(e){return P(e)===oe};h.isPortal=function(e){return P(e)===he};h.isProfiler=function(e){return P(e)===X};h.isStrictMode=function(e){return P(e)===Q};h.isSuspense=function(e){return P(e)===ne};h.isSuspenseList=function(e){return P(e)===re};h.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===K||e===X||e===Q||e===ne||e===re||e===tn||typeof e=="object"&&e!==null&&(e.$$typeof===ae||e.$$typeof===oe||e.$$typeof===Z||e.$$typeof===ee||e.$$typeof===te||e.$$typeof===Le||e.getModuleId!==void 0)};h.typeOf=P;(function(e){e.exports=h})(Zt);function nn(){const e=qt();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let a=t;for(;a;)a.callback(),a=a.next})},get(){let a=[],r=t;for(;r;)a.push(r),r=r.next;return a},subscribe(a){let r=!0,o=n={callback:a,next:null,prev:n};return o.prev?o.prev.next=o:t=o,function(){!r||t===null||(r=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}const Re={notify(){},get:()=>[]};function rn(e,t){let n,a=Re;function r(m){return _(),a.subscribe(m)}function o(){a.notify()}function c(){i.onStateChange&&i.onStateChange()}function l(){return Boolean(n)}function _(){n||(n=t?t.addNestedSub(c):e.subscribe(c),a=nn())}function f(){n&&(n(),n=void 0,a.clear(),a=Re)}const i={addNestedSub:r,notifyNestedSubs:o,handleChangeWrapper:c,isSubscribed:l,trySubscribe:_,tryUnsubscribe:f,getListeners:()=>a};return i}const on=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",an=on?A.useLayoutEffect:A.useEffect;function un({store:e,context:t,children:n,serverState:a}){const r=A.useMemo(()=>{const l=rn(e);return{store:e,subscription:l,getServerState:a?()=>a:void 0}},[e,a]),o=A.useMemo(()=>e.getState(),[e]);an(()=>{const{subscription:l}=r;return l.onStateChange=l.notifyNestedSubs,l.trySubscribe(),o!==e.getState()&&l.notifyNestedSubs(),()=>{l.tryUnsubscribe(),l.onStateChange=void 0}},[r,o]);const c=t||Wt;return E.createElement(c.Provider,{value:r},n)}jt(Te.unstable_batchedUpdates);class fn{constructor(t=null,n=null){this.store=t,this.pluginStore=n||Oe()}inject(t,n={},a){a&&(this.root=We(a),this.root.render(E.createElement(E.StrictMode,null,E.createElement(Ve,{pluginStore:this.pluginStore},E.createElement(un,{store:this.store},E.createElement(t,n))))))}dispose(t){t&&this.root.unmount()}}class sn extends $e.Bootstrapper{constructor(t,n,a=[]){super();const r=new $e.ContainerBuilder,o=Oe();r.factory=new fn(t,o);const c=Object.keys(n);for(let l of c)r.register(n[l]).as(l);for(let l of a)o.install(l);this.setContainer(r.build())}}const ln=(e,t,n)=>new sn(e,t,n),cn=[new ze],dn={Login:E.lazy(()=>Ye(()=>import("./login.375cc45b.js"),["assets/login.375cc45b.js","assets/jsx-runtime.f2130633.js","assets/index.57fae3ab.js","assets/_commonjsHelpers.042e6b4d.js","assets/react-pluggable.772a98d2.js"]))};ln(je,dn,cn);
//# sourceMappingURL=app.3eeb2421.js.map