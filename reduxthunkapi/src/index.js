import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { defaultReducer } from './reducers/ruducer'

const store = createStore(defaultReducer, applyMiddleware(thunk));
//review steps in TK for this

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
