import{c as V,h as u,D as p,R as A,a as w,F as S,b as F,s as i,u as M,d as L,e as T,f as U,g as h,i as m,j,k as I,l as N,m as q,n as P,o as l,p as k,q as z,r as O,t as y,v as f,w as R,x as b,y as d,z as c,A as D}from"./scheduler.cb961abc.js";const E=e=>Array.isArray(e)&&e.length===1&&g(e[0]),H=(e,t)=>{if(typeof e=="string")return e;const{tag:s,props:r,children:n}=E(e)?e[0]:e;return u(s,{...r,...t},...n??[])},$=V(u),g=e=>!!(E(e)||e&&(typeof e=="string"||e.tag)),B=e=>t=>e(Object.values(t)),o=e=>u("_",{},...e).children,C=(e,t)=>e===null?null:o(o(e).map(t)),G={map:C,forEach:C,count(e){return e?o(e).length:0},only(e){const t=o(e);if(t.length!==1)throw"Children.only";return t[0]},toArray:o},J=e=>{let t,s,r;return n=>{if(t||(t=e(),t.then(a=>s=a.default||a,a=>r=a)),r)throw r;if(!s)throw t;return u(s,n)}},K=()=>({current:null}),Q=e=>function(s){const r={...s};return delete r.ref,e(r,s.ref||null)},W=e=>e.children,_=e=>e.children,X=e=>e.children;class x{constructor(t,s){this.props=t,this.context=s,this.state={},this.queueRender=R()}componentDidMount(){return!1}componentDidUnmount(){return!1}componentDidUpdate(){return!0}shouldComponentUpdate(t,s){return!0}componentDidCatch(t){}setState(t,s){const r={...this.state,...typeof t=="function"?t(this.state,this.props):t};this.shouldComponentUpdate(this.props,r)&&(s&&s(this.state,this.props),this.state=r,this.queueRender(()=>{this.rerender&&this.rerender()}))}render(t){return S(t)}}class Y extends x{shouldComponentUpdate(t,s){return t!==this.props&&s!==this.state}}const Z={__proto__:null,hook:w,Children:G,Component:x,Fragment:S,PureComponent:Y,StrictMode:X,Suspense:W,SuspenseList:_,unstable_SuspenseList:_,cloneElement:H,createContext:F,createElement:$,createRef:K,forwardRef:Q,isValidElement:g,lazy:J,memo:B,startTransition:i,unstable_startTransition:i,useId:M,useCallback:L,useContext:T,useDebugValue:U,useDeferredValue:h,unstable_useDeferredValue:h,useEffect:m,useImperativeHandle:j,useInsertionEffect:m,useLayoutEffect:I,useMemo:N,useDelta:q,useList:P,useMutableSource:l,unstable_useMutableSource:l,useReducer:k,useRef:z,useState:O,useSyncExternalStore:l,useTransition:y,unstable_useTransition:y,jsx:f,jsxs:f,jsxDEV:f},v=(e,t)=>(b(t,e),t),ee=e=>{const t=(s,r)=>n=>{n&&i(()=>{if(Array.isArray(n)){const a=d(e);r(e,u(a.tag,a.props,...n)),requestAnimationFrame(()=>e[p]=e.firstChild)}else s(e,n)})};return{render:t(D,c),hydrate:t(b,c),unmount:()=>{e.textContent="",e[p]=void 0}}},te=(e,t)=>{i(()=>{if(Array.isArray(e)){const s=d(t);c(t,u(s.tag,s.props,...e)),requestAnimationFrame(()=>t[p]=t.firstChild)}else D(t,e)})},se=(e,t)=>{const s=d(t);c(t,u(s.tag,s.props,...e))},re=R(),ne={__proto__:null,render:te,createPortal:se,createRoot:ee,hydrateRoot:v,flushSync:i,unstable_batchedUpdates:re},ae="18.1.0",oe={version:ae,...Z,...ne,...A};export{ee as c,oe as i};
//# sourceMappingURL=react.435e6ff6.js.map