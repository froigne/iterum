import App from "app";
import React from "react";
import registerServiceWorker from "./registerServiceWorker";
import renderApp from "./renderApp";
import "./index.css";

renderApp(<App />, document.getElementById("root"));
registerServiceWorker();

if (module.hot) {
  module.hot.accept("app", () => {
    renderApp(<App />, document.getElementById("root"));
  });
}
