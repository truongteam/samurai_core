import ReactHabitat                 from 'react-habitat';
import ReduxDomFactory          from './ReduxDomFactory';
import { createPluginStore } from "react-pluggable";

class MyApp extends ReactHabitat.Bootstrapper {
    constructor(store, components, plugins = []){
        super();
        // Create a new container builder:
        const containerBuilder = new ReactHabitat.ContainerBuilder();
        const pluginStore = createPluginStore();
        containerBuilder.factory = new ReduxDomFactory(store, pluginStore);

        // Register a component:
        const keys = Object.keys(components)
        for(let comp of keys) {
            containerBuilder.register(components[comp]).as(comp);  
            //containerBuilder.registerAsync(() => components[comp]).as(comp);  
        }
        for(let plugin of plugins) {
            pluginStore.install(plugin);
        }
 
        // Or register a component to load on demand asynchronously:
        // builder.registerAsync(() => System.import('./AnotherReactComponent')).as('AnotherReactComponent');
 
        // Finally, set the container:
        this.setContainer(containerBuilder.build());
    }
}
 
// Always export a 'new' instance so it immediately evokes:
export const createApp = (store, components, plugins) => new MyApp(store, components, plugins);