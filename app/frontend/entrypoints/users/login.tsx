import React from "react";
import { usePluginStore } from "react-pluggable";

const Login = () => {
    const pluginStore = usePluginStore();

  return (
    <>
      <h1>Working</h1>
      <div data-controller="content-loader"
     data-content-loader-url-value="/messages.html"></div>
      <button
        onClick={() => {
          pluginStore.executeFunction("ShowAlert.doIt");
        }}
      >
        Show Alert
      </button>
    </>
  );
}

export default Login