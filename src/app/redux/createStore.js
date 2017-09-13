import { createStore as createReduxStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

const createStore = initialState => {
  // Middleware you want to use in development:
  const enhancers = [];

  // Required! Enable Redux DevTools with the monitors you chose
  const devToolsExtension = window.devToolsExtension;
  if (typeof devToolsExtension === "function" && process.env.NODE_ENV !== "production") {
    enhancers.push(devToolsExtension());
  }

  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/reactjs/redux/releases/tag/v3.1.0
  const store = createReduxStore(rootReducer, initialState, compose(applyMiddleware(thunk), ...enhancers));

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept("./reducers", () => store.replaceReducer(require("./reducers")));
  }

  return store;
};

export default createStore;
