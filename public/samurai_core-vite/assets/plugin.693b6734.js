var o=Object.defineProperty;var r=(t,e,i)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var n=(t,e,i)=>(r(t,typeof e!="symbol"?e+"":e,i),i);class l{constructor(){n(this,"pluginStore");n(this,"namespace","ShowAlert")}getPluginName(){return"ShowAlert@1.0.0"}getDependencies(){return[]}init(e){this.pluginStore=e}activate(){this.pluginStore.addFunction(`${this.namespace}.doIt`,()=>{alert("Hello from the ShowAlert Plugin")})}deactivate(){this.pluginStore.removeFunction(`${this.namespace}.doIt`)}}export{l as S};
//# sourceMappingURL=plugin.693b6734.js.map