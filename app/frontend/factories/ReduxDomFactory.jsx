import { Provider }		from 'react-redux';
import React			from 'react';
import { createRoot } from 'react-dom/client'
import { createPluginStore, PluginProvider } from "react-pluggable";

/**
 * React Redux DOM Factory
 */
export default class ReduxDomFactory {

	constructor(store = null, pluginStore = null) {

		/**
		 * The redux store
		 */
		this.store = store;
		this.pluginStore = pluginStore || createPluginStore();
	}

	/**
	 * Inject the module into the dom wrapped in a redux provider
	 * @param {*} module - The component to inject
	 * @param {object} props  - The component props
	 * @param {node} target - The node to inject to
	 */
	inject(module, props = {}, target) {
		if (target) {
			this.root = createRoot(target);
			this.root.render(
				<React.StrictMode>
					<PluginProvider pluginStore={this.pluginStore}>
						<Provider store={this.store}>
							{React.createElement(module, props)}
						</Provider>
					</PluginProvider>
				</React.StrictMode>
			)
			//root.render(React.createElement(Provider, { store: this.store }, React.createElement(module, props)));
		}
	}

	/**
	 * Dispose of any react instances for a node
	 * @param {node} target - The node to tear down
	 */
	dispose(target) {
		if (target) {
			this.root.unmount()
		}
	}
}