import{B as k,_ as B,a as F}from"./counter_controller.63d14a4d.js";import{r as C,_ as T}from"./index.d19ec188.js";import{_ as N}from"./content_loader_controller.6af9a4b1.js";import{_ as x}from"./slideshow_controller.d8ce1d29.js";import{_ as L}from"./hello_controller.c03935a0.js";import{c as b}from"./consumer.1f985106.js";import"./stimulus.babce4aa.js";import"./actioncable.974013a5.js";class S{constructor(e,t,s){this.eventTarget=e,this.eventName=t,this.eventOptions=s,this.unorderedBindings=new Set}connect(){this.eventTarget.addEventListener(this.eventName,this,this.eventOptions)}disconnect(){this.eventTarget.removeEventListener(this.eventName,this,this.eventOptions)}bindingConnected(e){this.unorderedBindings.add(e)}bindingDisconnected(e){this.unorderedBindings.delete(e)}handleEvent(e){const t=D(e);for(const s of this.bindings){if(t.immediatePropagationStopped)break;s.handleEvent(t)}}hasBindings(){return this.unorderedBindings.size>0}get bindings(){return Array.from(this.unorderedBindings).sort((e,t)=>{const s=e.index,i=t.index;return s<i?-1:s>i?1:0})}}function D(r){if("immediatePropagationStopped"in r)return r;{const{stopImmediatePropagation:e}=r;return Object.assign(r,{immediatePropagationStopped:!1,stopImmediatePropagation(){this.immediatePropagationStopped=!0,e.call(this)}})}}class K{constructor(e){this.application=e,this.eventListenerMaps=new Map,this.started=!1}start(){this.started||(this.started=!0,this.eventListeners.forEach(e=>e.connect()))}stop(){this.started&&(this.started=!1,this.eventListeners.forEach(e=>e.disconnect()))}get eventListeners(){return Array.from(this.eventListenerMaps.values()).reduce((e,t)=>e.concat(Array.from(t.values())),[])}bindingConnected(e){this.fetchEventListenerForBinding(e).bindingConnected(e)}bindingDisconnected(e,t=!1){this.fetchEventListenerForBinding(e).bindingDisconnected(e),t&&this.clearEventListenersForBinding(e)}handleError(e,t,s={}){this.application.handleError(e,`Error ${t}`,s)}clearEventListenersForBinding(e){const t=this.fetchEventListenerForBinding(e);t.hasBindings()||(t.disconnect(),this.removeMappedEventListenerFor(e))}removeMappedEventListenerFor(e){const{eventTarget:t,eventName:s,eventOptions:i}=e,n=this.fetchEventListenerMapForEventTarget(t),o=this.cacheKey(s,i);n.delete(o),n.size==0&&this.eventListenerMaps.delete(t)}fetchEventListenerForBinding(e){const{eventTarget:t,eventName:s,eventOptions:i}=e;return this.fetchEventListener(t,s,i)}fetchEventListener(e,t,s){const i=this.fetchEventListenerMapForEventTarget(e),n=this.cacheKey(t,s);let o=i.get(n);return o||(o=this.createEventListener(e,t,s),i.set(n,o)),o}createEventListener(e,t,s){const i=new S(e,t,s);return this.started&&i.connect(),i}fetchEventListenerMapForEventTarget(e){let t=this.eventListenerMaps.get(e);return t||(t=new Map,this.eventListenerMaps.set(e,t)),t}cacheKey(e,t){const s=[e];return Object.keys(t).sort().forEach(i=>{s.push(`${t[i]?"":"!"}${i}`)}),s.join(":")}}const _={stop({event:r,value:e}){return e&&r.stopPropagation(),!0},prevent({event:r,value:e}){return e&&r.preventDefault(),!0},self({event:r,value:e,element:t}){return e?t===r.target:!0}},I=/^(?:(.+?)(?:\.(.+?))?(?:@(window|document))?->)?(.+?)(?:#([^:]+?))(?::(.+))?$/;function $(r){const t=r.trim().match(I)||[];let s=t[1],i=t[2];return i&&!["keydown","keyup","keypress"].includes(s)&&(s+=`.${i}`,i=""),{eventTarget:V(t[3]),eventName:s,eventOptions:t[6]?j(t[6]):{},identifier:t[4],methodName:t[5],keyFilter:i}}function V(r){if(r=="window")return window;if(r=="document")return document}function j(r){return r.split(":").reduce((e,t)=>Object.assign(e,{[t.replace(/^!/,"")]:!/^!/.test(t)}),{})}function R(r){if(r==window)return"window";if(r==document)return"document"}function y(r){return r.replace(/(?:[_-])([a-z0-9])/g,(e,t)=>t.toUpperCase())}function f(r){return y(r.replace(/--/g,"-").replace(/__/g,"_"))}function U(r){return r.charAt(0).toUpperCase()+r.slice(1)}function P(r){return r.replace(/([A-Z])/g,(e,t)=>`-${t.toLowerCase()}`)}function z(r){return r.match(/[^\s]+/g)||[]}class q{constructor(e,t,s,i){this.element=e,this.index=t,this.eventTarget=s.eventTarget||e,this.eventName=s.eventName||W(e)||d("missing event name"),this.eventOptions=s.eventOptions||{},this.identifier=s.identifier||d("missing identifier"),this.methodName=s.methodName||d("missing method name"),this.keyFilter=s.keyFilter||"",this.schema=i}static forToken(e,t){return new this(e.element,e.index,$(e.content),t)}toString(){const e=this.keyFilter?`.${this.keyFilter}`:"",t=this.eventTargetName?`@${this.eventTargetName}`:"";return`${this.eventName}${e}${t}->${this.identifier}#${this.methodName}`}isFilterTarget(e){if(!this.keyFilter)return!1;const t=this.keyFilter.split("+"),s=["meta","ctrl","alt","shift"],[i,n,o,a]=s.map(l=>t.includes(l));if(e.metaKey!==i||e.ctrlKey!==n||e.altKey!==o||e.shiftKey!==a)return!0;const c=t.filter(l=>!s.includes(l))[0];return c?(Object.prototype.hasOwnProperty.call(this.keyMappings,c)||d(`contains unknown key filter: ${this.keyFilter}`),this.keyMappings[c].toLowerCase()!==e.key.toLowerCase()):!1}get params(){const e={},t=new RegExp(`^data-${this.identifier}-(.+)-param$`,"i");for(const{name:s,value:i}of Array.from(this.element.attributes)){const n=s.match(t),o=n&&n[1];o&&(e[y(o)]=G(i))}return e}get eventTargetName(){return R(this.eventTarget)}get keyMappings(){return this.schema.keyMappings}}const p={a:()=>"click",button:()=>"click",form:()=>"submit",details:()=>"toggle",input:r=>r.getAttribute("type")=="submit"?"click":"input",select:()=>"change",textarea:()=>"input"};function W(r){const e=r.tagName.toLowerCase();if(e in p)return p[e](r)}function d(r){throw new Error(r)}function G(r){try{return JSON.parse(r)}catch{return r}}class H{constructor(e,t){this.context=e,this.action=t}get index(){return this.action.index}get eventTarget(){return this.action.eventTarget}get eventOptions(){return this.action.eventOptions}get identifier(){return this.context.identifier}handleEvent(e){this.willBeInvokedByEvent(e)&&this.applyEventModifiers(e)&&this.invokeWithEvent(e)}get eventName(){return this.action.eventName}get method(){const e=this.controller[this.methodName];if(typeof e=="function")return e;throw new Error(`Action "${this.action}" references undefined method "${this.methodName}"`)}applyEventModifiers(e){const{element:t}=this.action,{actionDescriptorFilters:s}=this.context.application;let i=!0;for(const[n,o]of Object.entries(this.eventOptions))if(n in s){const a=s[n];i=i&&a({name:n,value:o,event:e,element:t})}else continue;return i}invokeWithEvent(e){const{target:t,currentTarget:s}=e;try{const{params:i}=this.action,n=Object.assign(e,{params:i});this.method.call(this.controller,n),this.context.logDebugActivity(this.methodName,{event:e,target:t,currentTarget:s,action:this.methodName})}catch(i){const{identifier:n,controller:o,element:a,index:c}=this,l={identifier:n,controller:o,element:a,index:c,event:e};this.context.handleError(i,`invoking action "${this.action}"`,l)}}willBeInvokedByEvent(e){const t=e.target;return e instanceof KeyboardEvent&&this.action.isFilterTarget(e)?!1:this.element===t?!0:t instanceof Element&&this.element.contains(t)?this.scope.containsElement(t):this.scope.containsElement(this.action.element)}get controller(){return this.context.controller}get methodName(){return this.action.methodName}get element(){return this.scope.element}get scope(){return this.context.scope}}class E{constructor(e,t){this.mutationObserverInit={attributes:!0,childList:!0,subtree:!0},this.element=e,this.started=!1,this.delegate=t,this.elements=new Set,this.mutationObserver=new MutationObserver(s=>this.processMutations(s))}start(){this.started||(this.started=!0,this.mutationObserver.observe(this.element,this.mutationObserverInit),this.refresh())}pause(e){this.started&&(this.mutationObserver.disconnect(),this.started=!1),e(),this.started||(this.mutationObserver.observe(this.element,this.mutationObserverInit),this.started=!0)}stop(){this.started&&(this.mutationObserver.takeRecords(),this.mutationObserver.disconnect(),this.started=!1)}refresh(){if(this.started){const e=new Set(this.matchElementsInTree());for(const t of Array.from(this.elements))e.has(t)||this.removeElement(t);for(const t of Array.from(e))this.addElement(t)}}processMutations(e){if(this.started)for(const t of e)this.processMutation(t)}processMutation(e){e.type=="attributes"?this.processAttributeChange(e.target,e.attributeName):e.type=="childList"&&(this.processRemovedNodes(e.removedNodes),this.processAddedNodes(e.addedNodes))}processAttributeChange(e,t){const s=e;this.elements.has(s)?this.delegate.elementAttributeChanged&&this.matchElement(s)?this.delegate.elementAttributeChanged(s,t):this.removeElement(s):this.matchElement(s)&&this.addElement(s)}processRemovedNodes(e){for(const t of Array.from(e)){const s=this.elementFromNode(t);s&&this.processTree(s,this.removeElement)}}processAddedNodes(e){for(const t of Array.from(e)){const s=this.elementFromNode(t);s&&this.elementIsActive(s)&&this.processTree(s,this.addElement)}}matchElement(e){return this.delegate.matchElement(e)}matchElementsInTree(e=this.element){return this.delegate.matchElementsInTree(e)}processTree(e,t){for(const s of this.matchElementsInTree(e))t.call(this,s)}elementFromNode(e){if(e.nodeType==Node.ELEMENT_NODE)return e}elementIsActive(e){return e.isConnected!=this.element.isConnected?!1:this.element.contains(e)}addElement(e){this.elements.has(e)||this.elementIsActive(e)&&(this.elements.add(e),this.delegate.elementMatched&&this.delegate.elementMatched(e))}removeElement(e){this.elements.has(e)&&(this.elements.delete(e),this.delegate.elementUnmatched&&this.delegate.elementUnmatched(e))}}class J{constructor(e,t,s){this.attributeName=t,this.delegate=s,this.elementObserver=new E(e,this)}get element(){return this.elementObserver.element}get selector(){return`[${this.attributeName}]`}start(){this.elementObserver.start()}pause(e){this.elementObserver.pause(e)}stop(){this.elementObserver.stop()}refresh(){this.elementObserver.refresh()}get started(){return this.elementObserver.started}matchElement(e){return e.hasAttribute(this.attributeName)}matchElementsInTree(e){const t=this.matchElement(e)?[e]:[],s=Array.from(e.querySelectorAll(this.selector));return t.concat(s)}elementMatched(e){this.delegate.elementMatchedAttribute&&this.delegate.elementMatchedAttribute(e,this.attributeName)}elementUnmatched(e){this.delegate.elementUnmatchedAttribute&&this.delegate.elementUnmatchedAttribute(e,this.attributeName)}elementAttributeChanged(e,t){this.delegate.elementAttributeValueChanged&&this.attributeName==t&&this.delegate.elementAttributeValueChanged(e,t)}}function Z(r,e,t){O(r,e).add(t)}function Q(r,e,t){O(r,e).delete(t),X(r,e)}function O(r,e){let t=r.get(e);return t||(t=new Set,r.set(e,t)),t}function X(r,e){const t=r.get(e);t!=null&&t.size==0&&r.delete(e)}class h{constructor(){this.valuesByKey=new Map}get keys(){return Array.from(this.valuesByKey.keys())}get values(){return Array.from(this.valuesByKey.values()).reduce((t,s)=>t.concat(Array.from(s)),[])}get size(){return Array.from(this.valuesByKey.values()).reduce((t,s)=>t+s.size,0)}add(e,t){Z(this.valuesByKey,e,t)}delete(e,t){Q(this.valuesByKey,e,t)}has(e,t){const s=this.valuesByKey.get(e);return s!=null&&s.has(t)}hasKey(e){return this.valuesByKey.has(e)}hasValue(e){return Array.from(this.valuesByKey.values()).some(s=>s.has(e))}getValuesForKey(e){const t=this.valuesByKey.get(e);return t?Array.from(t):[]}getKeysForValue(e){return Array.from(this.valuesByKey).filter(([t,s])=>s.has(e)).map(([t,s])=>t)}}class Y{constructor(e,t,s,i={}){this.selector=t,this.details=i,this.elementObserver=new E(e,this),this.delegate=s,this.matchesByElement=new h}get started(){return this.elementObserver.started}start(){this.elementObserver.start()}pause(e){this.elementObserver.pause(e)}stop(){this.elementObserver.stop()}refresh(){this.elementObserver.refresh()}get element(){return this.elementObserver.element}matchElement(e){const t=e.matches(this.selector);return this.delegate.selectorMatchElement?t&&this.delegate.selectorMatchElement(e,this.details):t}matchElementsInTree(e){const t=this.matchElement(e)?[e]:[],s=Array.from(e.querySelectorAll(this.selector)).filter(i=>this.matchElement(i));return t.concat(s)}elementMatched(e){this.selectorMatched(e)}elementUnmatched(e){this.selectorUnmatched(e)}elementAttributeChanged(e,t){const s=this.matchElement(e),i=this.matchesByElement.has(this.selector,e);!s&&i&&this.selectorUnmatched(e)}selectorMatched(e){this.delegate.selectorMatched&&(this.delegate.selectorMatched(e,this.selector,this.details),this.matchesByElement.add(this.selector,e))}selectorUnmatched(e){this.delegate.selectorUnmatched(e,this.selector,this.details),this.matchesByElement.delete(this.selector,e)}}class ee{constructor(e,t){this.element=e,this.delegate=t,this.started=!1,this.stringMap=new Map,this.mutationObserver=new MutationObserver(s=>this.processMutations(s))}start(){this.started||(this.started=!0,this.mutationObserver.observe(this.element,{attributes:!0,attributeOldValue:!0}),this.refresh())}stop(){this.started&&(this.mutationObserver.takeRecords(),this.mutationObserver.disconnect(),this.started=!1)}refresh(){if(this.started)for(const e of this.knownAttributeNames)this.refreshAttribute(e,null)}processMutations(e){if(this.started)for(const t of e)this.processMutation(t)}processMutation(e){const t=e.attributeName;t&&this.refreshAttribute(t,e.oldValue)}refreshAttribute(e,t){const s=this.delegate.getStringMapKeyForAttribute(e);if(s!=null){this.stringMap.has(e)||this.stringMapKeyAdded(s,e);const i=this.element.getAttribute(e);if(this.stringMap.get(e)!=i&&this.stringMapValueChanged(i,s,t),i==null){const n=this.stringMap.get(e);this.stringMap.delete(e),n&&this.stringMapKeyRemoved(s,e,n)}else this.stringMap.set(e,i)}}stringMapKeyAdded(e,t){this.delegate.stringMapKeyAdded&&this.delegate.stringMapKeyAdded(e,t)}stringMapValueChanged(e,t,s){this.delegate.stringMapValueChanged&&this.delegate.stringMapValueChanged(e,t,s)}stringMapKeyRemoved(e,t,s){this.delegate.stringMapKeyRemoved&&this.delegate.stringMapKeyRemoved(e,t,s)}get knownAttributeNames(){return Array.from(new Set(this.currentAttributeNames.concat(this.recordedAttributeNames)))}get currentAttributeNames(){return Array.from(this.element.attributes).map(e=>e.name)}get recordedAttributeNames(){return Array.from(this.stringMap.keys())}}class A{constructor(e,t,s){this.attributeObserver=new J(e,t,this),this.delegate=s,this.tokensByElement=new h}get started(){return this.attributeObserver.started}start(){this.attributeObserver.start()}pause(e){this.attributeObserver.pause(e)}stop(){this.attributeObserver.stop()}refresh(){this.attributeObserver.refresh()}get element(){return this.attributeObserver.element}get attributeName(){return this.attributeObserver.attributeName}elementMatchedAttribute(e){this.tokensMatched(this.readTokensForElement(e))}elementAttributeValueChanged(e){const[t,s]=this.refreshTokensForElement(e);this.tokensUnmatched(t),this.tokensMatched(s)}elementUnmatchedAttribute(e){this.tokensUnmatched(this.tokensByElement.getValuesForKey(e))}tokensMatched(e){e.forEach(t=>this.tokenMatched(t))}tokensUnmatched(e){e.forEach(t=>this.tokenUnmatched(t))}tokenMatched(e){this.delegate.tokenMatched(e),this.tokensByElement.add(e.element,e)}tokenUnmatched(e){this.delegate.tokenUnmatched(e),this.tokensByElement.delete(e.element,e)}refreshTokensForElement(e){const t=this.tokensByElement.getValuesForKey(e),s=this.readTokensForElement(e),i=se(t,s).findIndex(([n,o])=>!re(n,o));return i==-1?[[],[]]:[t.slice(i),s.slice(i)]}readTokensForElement(e){const t=this.attributeName,s=e.getAttribute(t)||"";return te(s,e,t)}}function te(r,e,t){return r.trim().split(/\s+/).filter(s=>s.length).map((s,i)=>({element:e,attributeName:t,content:s,index:i}))}function se(r,e){const t=Math.max(r.length,e.length);return Array.from({length:t},(s,i)=>[r[i],e[i]])}function re(r,e){return r&&e&&r.index==e.index&&r.content==e.content}class M{constructor(e,t,s){this.tokenListObserver=new A(e,t,this),this.delegate=s,this.parseResultsByToken=new WeakMap,this.valuesByTokenByElement=new WeakMap}get started(){return this.tokenListObserver.started}start(){this.tokenListObserver.start()}stop(){this.tokenListObserver.stop()}refresh(){this.tokenListObserver.refresh()}get element(){return this.tokenListObserver.element}get attributeName(){return this.tokenListObserver.attributeName}tokenMatched(e){const{element:t}=e,{value:s}=this.fetchParseResultForToken(e);s&&(this.fetchValuesByTokenForElement(t).set(e,s),this.delegate.elementMatchedValue(t,s))}tokenUnmatched(e){const{element:t}=e,{value:s}=this.fetchParseResultForToken(e);s&&(this.fetchValuesByTokenForElement(t).delete(e),this.delegate.elementUnmatchedValue(t,s))}fetchParseResultForToken(e){let t=this.parseResultsByToken.get(e);return t||(t=this.parseToken(e),this.parseResultsByToken.set(e,t)),t}fetchValuesByTokenForElement(e){let t=this.valuesByTokenByElement.get(e);return t||(t=new Map,this.valuesByTokenByElement.set(e,t)),t}parseToken(e){try{return{value:this.delegate.parseValueForToken(e)}}catch(t){return{error:t}}}}class ie{constructor(e,t){this.context=e,this.delegate=t,this.bindingsByAction=new Map}start(){this.valueListObserver||(this.valueListObserver=new M(this.element,this.actionAttribute,this),this.valueListObserver.start())}stop(){this.valueListObserver&&(this.valueListObserver.stop(),delete this.valueListObserver,this.disconnectAllActions())}get element(){return this.context.element}get identifier(){return this.context.identifier}get actionAttribute(){return this.schema.actionAttribute}get schema(){return this.context.schema}get bindings(){return Array.from(this.bindingsByAction.values())}connectAction(e){const t=new H(this.context,e);this.bindingsByAction.set(e,t),this.delegate.bindingConnected(t)}disconnectAction(e){const t=this.bindingsByAction.get(e);t&&(this.bindingsByAction.delete(e),this.delegate.bindingDisconnected(t))}disconnectAllActions(){this.bindings.forEach(e=>this.delegate.bindingDisconnected(e,!0)),this.bindingsByAction.clear()}parseValueForToken(e){const t=q.forToken(e,this.schema);if(t.identifier==this.identifier)return t}elementMatchedValue(e,t){this.connectAction(t)}elementUnmatchedValue(e,t){this.disconnectAction(t)}}class ne{constructor(e,t){this.context=e,this.receiver=t,this.stringMapObserver=new ee(this.element,this),this.valueDescriptorMap=this.controller.valueDescriptorMap}start(){this.stringMapObserver.start(),this.invokeChangedCallbacksForDefaultValues()}stop(){this.stringMapObserver.stop()}get element(){return this.context.element}get controller(){return this.context.controller}getStringMapKeyForAttribute(e){if(e in this.valueDescriptorMap)return this.valueDescriptorMap[e].name}stringMapKeyAdded(e,t){const s=this.valueDescriptorMap[t];this.hasValue(e)||this.invokeChangedCallback(e,s.writer(this.receiver[e]),s.writer(s.defaultValue))}stringMapValueChanged(e,t,s){const i=this.valueDescriptorNameMap[t];e!==null&&(s===null&&(s=i.writer(i.defaultValue)),this.invokeChangedCallback(t,e,s))}stringMapKeyRemoved(e,t,s){const i=this.valueDescriptorNameMap[e];this.hasValue(e)?this.invokeChangedCallback(e,i.writer(this.receiver[e]),s):this.invokeChangedCallback(e,i.writer(i.defaultValue),s)}invokeChangedCallbacksForDefaultValues(){for(const{key:e,name:t,defaultValue:s,writer:i}of this.valueDescriptors)s!=null&&!this.controller.data.has(e)&&this.invokeChangedCallback(t,i(s),void 0)}invokeChangedCallback(e,t,s){const i=`${e}Changed`,n=this.receiver[i];if(typeof n=="function"){const o=this.valueDescriptorNameMap[e];try{const a=o.reader(t);let c=s;s&&(c=o.reader(s)),n.call(this.receiver,a,c)}catch(a){throw a instanceof TypeError&&(a.message=`Stimulus Value "${this.context.identifier}.${o.name}" - ${a.message}`),a}}}get valueDescriptors(){const{valueDescriptorMap:e}=this;return Object.keys(e).map(t=>e[t])}get valueDescriptorNameMap(){const e={};return Object.keys(this.valueDescriptorMap).forEach(t=>{const s=this.valueDescriptorMap[t];e[s.name]=s}),e}hasValue(e){const t=this.valueDescriptorNameMap[e],s=`has${U(t.name)}`;return this.receiver[s]}}class oe{constructor(e,t){this.context=e,this.delegate=t,this.targetsByName=new h}start(){this.tokenListObserver||(this.tokenListObserver=new A(this.element,this.attributeName,this),this.tokenListObserver.start())}stop(){this.tokenListObserver&&(this.disconnectAllTargets(),this.tokenListObserver.stop(),delete this.tokenListObserver)}tokenMatched({element:e,content:t}){this.scope.containsElement(e)&&this.connectTarget(e,t)}tokenUnmatched({element:e,content:t}){this.disconnectTarget(e,t)}connectTarget(e,t){var s;this.targetsByName.has(t,e)||(this.targetsByName.add(t,e),(s=this.tokenListObserver)===null||s===void 0||s.pause(()=>this.delegate.targetConnected(e,t)))}disconnectTarget(e,t){var s;this.targetsByName.has(t,e)&&(this.targetsByName.delete(t,e),(s=this.tokenListObserver)===null||s===void 0||s.pause(()=>this.delegate.targetDisconnected(e,t)))}disconnectAllTargets(){for(const e of this.targetsByName.keys)for(const t of this.targetsByName.getValuesForKey(e))this.disconnectTarget(t,e)}get attributeName(){return`data-${this.context.identifier}-target`}get element(){return this.context.element}get scope(){return this.context.scope}}function w(r,e){const t=ae(r);return Array.from(t.reduce((s,i)=>(ce(i,e).forEach(n=>s.add(n)),s),new Set))}function ae(r){const e=[];for(;r;)e.push(r),r=Object.getPrototypeOf(r);return e.reverse()}function ce(r,e){const t=r[e];return Array.isArray(t)?t:[]}class he{constructor(e,t){this.context=e,this.delegate=t,this.outletsByName=new h,this.outletElementsByName=new h,this.selectorObserverMap=new Map}start(){this.selectorObserverMap.size===0&&(this.outletDefinitions.forEach(e=>{const t=this.selector(e),s={outletName:e};t&&this.selectorObserverMap.set(e,new Y(document.body,t,this,s))}),this.selectorObserverMap.forEach(e=>e.start())),this.dependentContexts.forEach(e=>e.refresh())}stop(){this.selectorObserverMap.size>0&&(this.disconnectAllOutlets(),this.selectorObserverMap.forEach(e=>e.stop()),this.selectorObserverMap.clear())}refresh(){this.selectorObserverMap.forEach(e=>e.refresh())}selectorMatched(e,t,{outletName:s}){const i=this.getOutlet(e,s);i&&this.connectOutlet(i,e,s)}selectorUnmatched(e,t,{outletName:s}){const i=this.getOutletFromMap(e,s);i&&this.disconnectOutlet(i,e,s)}selectorMatchElement(e,{outletName:t}){return this.hasOutlet(e,t)&&e.matches(`[${this.context.application.schema.controllerAttribute}~=${t}]`)}connectOutlet(e,t,s){var i;this.outletElementsByName.has(s,t)||(this.outletsByName.add(s,e),this.outletElementsByName.add(s,t),(i=this.selectorObserverMap.get(s))===null||i===void 0||i.pause(()=>this.delegate.outletConnected(e,t,s)))}disconnectOutlet(e,t,s){var i;this.outletElementsByName.has(s,t)&&(this.outletsByName.delete(s,e),this.outletElementsByName.delete(s,t),(i=this.selectorObserverMap.get(s))===null||i===void 0||i.pause(()=>this.delegate.outletDisconnected(e,t,s)))}disconnectAllOutlets(){for(const e of this.outletElementsByName.keys)for(const t of this.outletElementsByName.getValuesForKey(e))for(const s of this.outletsByName.getValuesForKey(e))this.disconnectOutlet(s,t,e)}selector(e){return this.scope.outlets.getSelectorForOutletName(e)}get outletDependencies(){const e=new h;return this.router.modules.forEach(t=>{const s=t.definition.controllerConstructor;w(s,"outlets").forEach(n=>e.add(n,t.identifier))}),e}get outletDefinitions(){return this.outletDependencies.getKeysForValue(this.identifier)}get dependentControllerIdentifiers(){return this.outletDependencies.getValuesForKey(this.identifier)}get dependentContexts(){const e=this.dependentControllerIdentifiers;return this.router.contexts.filter(t=>e.includes(t.identifier))}hasOutlet(e,t){return!!this.getOutlet(e,t)||!!this.getOutletFromMap(e,t)}getOutlet(e,t){return this.application.getControllerForElementAndIdentifier(e,t)}getOutletFromMap(e,t){return this.outletsByName.getValuesForKey(t).find(s=>s.element===e)}get scope(){return this.context.scope}get identifier(){return this.context.identifier}get application(){return this.context.application}get router(){return this.application.router}}class le{constructor(e,t){this.logDebugActivity=(s,i={})=>{const{identifier:n,controller:o,element:a}=this;i=Object.assign({identifier:n,controller:o,element:a},i),this.application.logDebugActivity(this.identifier,s,i)},this.module=e,this.scope=t,this.controller=new e.controllerConstructor(this),this.bindingObserver=new ie(this,this.dispatcher),this.valueObserver=new ne(this,this.controller),this.targetObserver=new oe(this,this),this.outletObserver=new he(this,this);try{this.controller.initialize(),this.logDebugActivity("initialize")}catch(s){this.handleError(s,"initializing controller")}}connect(){this.bindingObserver.start(),this.valueObserver.start(),this.targetObserver.start(),this.outletObserver.start();try{this.controller.connect(),this.logDebugActivity("connect")}catch(e){this.handleError(e,"connecting controller")}}refresh(){this.outletObserver.refresh()}disconnect(){try{this.controller.disconnect(),this.logDebugActivity("disconnect")}catch(e){this.handleError(e,"disconnecting controller")}this.outletObserver.stop(),this.targetObserver.stop(),this.valueObserver.stop(),this.bindingObserver.stop()}get application(){return this.module.application}get identifier(){return this.module.identifier}get schema(){return this.application.schema}get dispatcher(){return this.application.dispatcher}get element(){return this.scope.element}get parentElement(){return this.element.parentElement}handleError(e,t,s={}){const{identifier:i,controller:n,element:o}=this;s=Object.assign({identifier:i,controller:n,element:o},s),this.application.handleError(e,`Error ${t}`,s)}targetConnected(e,t){this.invokeControllerMethod(`${t}TargetConnected`,e)}targetDisconnected(e,t){this.invokeControllerMethod(`${t}TargetDisconnected`,e)}outletConnected(e,t,s){this.invokeControllerMethod(`${f(s)}OutletConnected`,e,t)}outletDisconnected(e,t,s){this.invokeControllerMethod(`${f(s)}OutletDisconnected`,e,t)}invokeControllerMethod(e,...t){const s=this.controller;typeof s[e]=="function"&&s[e](...t)}}function de(r){return ue(r,me(r))}function ue(r,e){const t=ve(r),s=ge(r.prototype,e);return Object.defineProperties(t.prototype,s),t}function me(r){return w(r,"blessings").reduce((t,s)=>{const i=s(r);for(const n in i){const o=t[n]||{};t[n]=Object.assign(o,i[n])}return t},{})}function ge(r,e){return pe(e).reduce((t,s)=>{const i=fe(r,e,s);return i&&Object.assign(t,{[s]:i}),t},{})}function fe(r,e,t){const s=Object.getOwnPropertyDescriptor(r,t);if(!(s&&"value"in s)){const n=Object.getOwnPropertyDescriptor(e,t).value;return s&&(n.get=s.get||n.get,n.set=s.set||n.set),n}}const pe=(()=>typeof Object.getOwnPropertySymbols=="function"?r=>[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)]:Object.getOwnPropertyNames)(),ve=(()=>{function r(t){function s(){return Reflect.construct(t,arguments,new.target)}return s.prototype=Object.create(t.prototype,{constructor:{value:s}}),Reflect.setPrototypeOf(s,t),s}function e(){const s=r(function(){this.a.call(this)});return s.prototype.a=function(){},new s}try{return e(),r}catch{return s=>class extends s{}}})();function be(r){return{identifier:r.identifier,controllerConstructor:de(r.controllerConstructor)}}class ye{constructor(e,t){this.application=e,this.definition=be(t),this.contextsByScope=new WeakMap,this.connectedContexts=new Set}get identifier(){return this.definition.identifier}get controllerConstructor(){return this.definition.controllerConstructor}get contexts(){return Array.from(this.connectedContexts)}connectContextForScope(e){const t=this.fetchContextForScope(e);this.connectedContexts.add(t),t.connect()}disconnectContextForScope(e){const t=this.contextsByScope.get(e);t&&(this.connectedContexts.delete(t),t.disconnect())}fetchContextForScope(e){let t=this.contextsByScope.get(e);return t||(t=new le(this,e),this.contextsByScope.set(e,t)),t}}class Ee{constructor(e){this.scope=e}has(e){return this.data.has(this.getDataKey(e))}get(e){return this.getAll(e)[0]}getAll(e){const t=this.data.get(this.getDataKey(e))||"";return z(t)}getAttributeName(e){return this.data.getAttributeNameForKey(this.getDataKey(e))}getDataKey(e){return`${e}-class`}get data(){return this.scope.data}}class Oe{constructor(e){this.scope=e}get element(){return this.scope.element}get identifier(){return this.scope.identifier}get(e){const t=this.getAttributeNameForKey(e);return this.element.getAttribute(t)}set(e,t){const s=this.getAttributeNameForKey(e);return this.element.setAttribute(s,t),this.get(e)}has(e){const t=this.getAttributeNameForKey(e);return this.element.hasAttribute(t)}delete(e){if(this.has(e)){const t=this.getAttributeNameForKey(e);return this.element.removeAttribute(t),!0}else return!1}getAttributeNameForKey(e){return`data-${this.identifier}-${P(e)}`}}class Ae{constructor(e){this.warnedKeysByObject=new WeakMap,this.logger=e}warn(e,t,s){let i=this.warnedKeysByObject.get(e);i||(i=new Set,this.warnedKeysByObject.set(e,i)),i.has(t)||(i.add(t),this.logger.warn(s,e))}}function u(r,e){return`[${r}~="${e}"]`}class Me{constructor(e){this.scope=e}get element(){return this.scope.element}get identifier(){return this.scope.identifier}get schema(){return this.scope.schema}has(e){return this.find(e)!=null}find(...e){return e.reduce((t,s)=>t||this.findTarget(s)||this.findLegacyTarget(s),void 0)}findAll(...e){return e.reduce((t,s)=>[...t,...this.findAllTargets(s),...this.findAllLegacyTargets(s)],[])}findTarget(e){const t=this.getSelectorForTargetName(e);return this.scope.findElement(t)}findAllTargets(e){const t=this.getSelectorForTargetName(e);return this.scope.findAllElements(t)}getSelectorForTargetName(e){const t=this.schema.targetAttributeForScope(this.identifier);return u(t,e)}findLegacyTarget(e){const t=this.getLegacySelectorForTargetName(e);return this.deprecate(this.scope.findElement(t),e)}findAllLegacyTargets(e){const t=this.getLegacySelectorForTargetName(e);return this.scope.findAllElements(t).map(s=>this.deprecate(s,e))}getLegacySelectorForTargetName(e){const t=`${this.identifier}.${e}`;return u(this.schema.targetAttribute,t)}deprecate(e,t){if(e){const{identifier:s}=this,i=this.schema.targetAttribute,n=this.schema.targetAttributeForScope(s);this.guide.warn(e,`target:${t}`,`Please replace ${i}="${s}.${t}" with ${n}="${t}". The ${i} attribute is deprecated and will be removed in a future version of Stimulus.`)}return e}get guide(){return this.scope.guide}}class we{constructor(e,t){this.scope=e,this.controllerElement=t}get element(){return this.scope.element}get identifier(){return this.scope.identifier}get schema(){return this.scope.schema}has(e){return this.find(e)!=null}find(...e){return e.reduce((t,s)=>t||this.findOutlet(s),void 0)}findAll(...e){return e.reduce((t,s)=>[...t,...this.findAllOutlets(s)],[])}getSelectorForOutletName(e){const t=this.schema.outletAttributeForScope(this.identifier,e);return this.controllerElement.getAttribute(t)}findOutlet(e){const t=this.getSelectorForOutletName(e);if(t)return this.findElement(t,e)}findAllOutlets(e){const t=this.getSelectorForOutletName(e);return t?this.findAllElements(t,e):[]}findElement(e,t){return this.scope.queryElements(e).filter(i=>this.matchesElement(i,e,t))[0]}findAllElements(e,t){return this.scope.queryElements(e).filter(i=>this.matchesElement(i,e,t))}matchesElement(e,t,s){const i=e.getAttribute(this.scope.schema.controllerAttribute)||"";return e.matches(t)&&i.split(" ").includes(s)}}class m{constructor(e,t,s,i){this.targets=new Me(this),this.classes=new Ee(this),this.data=new Oe(this),this.containsElement=n=>n.closest(this.controllerSelector)===this.element,this.schema=e,this.element=t,this.identifier=s,this.guide=new Ae(i),this.outlets=new we(this.documentScope,t)}findElement(e){return this.element.matches(e)?this.element:this.queryElements(e).find(this.containsElement)}findAllElements(e){return[...this.element.matches(e)?[this.element]:[],...this.queryElements(e).filter(this.containsElement)]}queryElements(e){return Array.from(this.element.querySelectorAll(e))}get controllerSelector(){return u(this.schema.controllerAttribute,this.identifier)}get isDocumentScope(){return this.element===document.documentElement}get documentScope(){return this.isDocumentScope?this:new m(this.schema,document.documentElement,this.identifier,this.guide.logger)}}class ke{constructor(e,t,s){this.element=e,this.schema=t,this.delegate=s,this.valueListObserver=new M(this.element,this.controllerAttribute,this),this.scopesByIdentifierByElement=new WeakMap,this.scopeReferenceCounts=new WeakMap}start(){this.valueListObserver.start()}stop(){this.valueListObserver.stop()}get controllerAttribute(){return this.schema.controllerAttribute}parseValueForToken(e){const{element:t,content:s}=e,i=this.fetchScopesByIdentifierForElement(t);let n=i.get(s);return n||(n=this.delegate.createScopeForElementAndIdentifier(t,s),i.set(s,n)),n}elementMatchedValue(e,t){const s=(this.scopeReferenceCounts.get(t)||0)+1;this.scopeReferenceCounts.set(t,s),s==1&&this.delegate.scopeConnected(t)}elementUnmatchedValue(e,t){const s=this.scopeReferenceCounts.get(t);s&&(this.scopeReferenceCounts.set(t,s-1),s==1&&this.delegate.scopeDisconnected(t))}fetchScopesByIdentifierForElement(e){let t=this.scopesByIdentifierByElement.get(e);return t||(t=new Map,this.scopesByIdentifierByElement.set(e,t)),t}}class Be{constructor(e){this.application=e,this.scopeObserver=new ke(this.element,this.schema,this),this.scopesByIdentifier=new h,this.modulesByIdentifier=new Map}get element(){return this.application.element}get schema(){return this.application.schema}get logger(){return this.application.logger}get controllerAttribute(){return this.schema.controllerAttribute}get modules(){return Array.from(this.modulesByIdentifier.values())}get contexts(){return this.modules.reduce((e,t)=>e.concat(t.contexts),[])}start(){this.scopeObserver.start()}stop(){this.scopeObserver.stop()}loadDefinition(e){this.unloadIdentifier(e.identifier);const t=new ye(this.application,e);this.connectModule(t);const s=e.controllerConstructor.afterLoad;s&&s(e.identifier,this.application)}unloadIdentifier(e){const t=this.modulesByIdentifier.get(e);t&&this.disconnectModule(t)}getContextForElementAndIdentifier(e,t){const s=this.modulesByIdentifier.get(t);if(s)return s.contexts.find(i=>i.element==e)}handleError(e,t,s){this.application.handleError(e,t,s)}createScopeForElementAndIdentifier(e,t){return new m(this.schema,e,t,this.logger)}scopeConnected(e){this.scopesByIdentifier.add(e.identifier,e);const t=this.modulesByIdentifier.get(e.identifier);t&&t.connectContextForScope(e)}scopeDisconnected(e){this.scopesByIdentifier.delete(e.identifier,e);const t=this.modulesByIdentifier.get(e.identifier);t&&t.disconnectContextForScope(e)}connectModule(e){this.modulesByIdentifier.set(e.identifier,e),this.scopesByIdentifier.getValuesForKey(e.identifier).forEach(s=>e.connectContextForScope(s))}disconnectModule(e){this.modulesByIdentifier.delete(e.identifier),this.scopesByIdentifier.getValuesForKey(e.identifier).forEach(s=>e.disconnectContextForScope(s))}}const Fe={controllerAttribute:"data-controller",actionAttribute:"data-action",targetAttribute:"data-target",targetAttributeForScope:r=>`data-${r}-target`,outletAttributeForScope:(r,e)=>`data-${r}-${e}-outlet`,keyMappings:Object.assign(Object.assign({enter:"Enter",tab:"Tab",esc:"Escape",space:" ",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",home:"Home",end:"End"},v("abcdefghijklmnopqrstuvwxyz".split("").map(r=>[r,r]))),v("0123456789".split("").map(r=>[r,r])))};function v(r){return r.reduce((e,[t,s])=>Object.assign(Object.assign({},e),{[t]:s}),{})}class Ce{constructor(e=document.documentElement,t=Fe){this.logger=console,this.debug=!1,this.logDebugActivity=(s,i,n={})=>{this.debug&&this.logFormattedMessage(s,i,n)},this.element=e,this.schema=t,this.dispatcher=new K(this),this.router=new Be(this),this.actionDescriptorFilters=Object.assign({},_)}static start(e,t){const s=new this(e,t);return s.start(),s}async start(){await Te(),this.logDebugActivity("application","starting"),this.dispatcher.start(),this.router.start(),this.logDebugActivity("application","start")}stop(){this.logDebugActivity("application","stopping"),this.dispatcher.stop(),this.router.stop(),this.logDebugActivity("application","stop")}register(e,t){this.load({identifier:e,controllerConstructor:t})}registerActionOption(e,t){this.actionDescriptorFilters[e]=t}load(e,...t){(Array.isArray(e)?e:[e,...t]).forEach(i=>{i.controllerConstructor.shouldLoad&&this.router.loadDefinition(i)})}unload(e,...t){(Array.isArray(e)?e:[e,...t]).forEach(i=>this.router.unloadIdentifier(i))}get controllers(){return this.router.contexts.map(e=>e.controller)}getControllerForElementAndIdentifier(e,t){const s=this.router.getContextForElementAndIdentifier(e,t);return s?s.controller:null}handleError(e,t,s){var i;this.logger.error(`%s

%o

%o`,t,e,s),(i=window.onerror)===null||i===void 0||i.call(window,t,"",0,0,e)}logFormattedMessage(e,t,s={}){s=Object.assign({application:this},s),this.logger.groupCollapsed(`${e} #${t}`),this.logger.log("details:",Object.assign({},s)),this.logger.groupEnd()}}function Te(){return new Promise(r=>{document.readyState=="loading"?document.addEventListener("DOMContentLoaded",()=>r()):r()})}const Ne=Object.assign({"../../controllers/application_controller.js":B,"../../controllers/reflex_controller.js":T,"../dashboard/content_loader_controller.js":N,"../dashboard/counter_controller.js":F,"../dashboard/slideshow_controller.js":x,"./hello_controller.js":L}),g=Ce.start();C(g,Ne);k.initialize(g,{isolate:!0,consumer:b});g.consumer=b;
//# sourceMappingURL=controllers.3c75c1f5.js.map