import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import  reduxThunk from "redux-thunk";


import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import combineReducers from "./Store/Reducer/combineReducers";

export const store = createStore(combineReducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
