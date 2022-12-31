import { IPlugin, PluginStore } from "react-pluggable";

class ShowAlertPlugin implements IPlugin {
  pluginStore!: PluginStore;
  namespace = "ShowAlert";

  getPluginName(): string {
    return "ShowAlert@1.0.0";
  }

  getDependencies(): string[] {
    return [];
  }

  init(pluginStore: PluginStore): void {
    this.pluginStore = pluginStore;
  }

  activate(): void {
    this.pluginStore.addFunction(`${this.namespace}.doIt`, () => {
      alert("Hello from the ShowAlert Plugin");
    });
  }

  deactivate(): void {
    this.pluginStore.removeFunction(`${this.namespace}.doIt`);
  }
}

export default ShowAlertPlugin;