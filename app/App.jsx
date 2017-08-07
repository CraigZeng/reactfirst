import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";

import R from "./R";

const reduxState = {};
const store = configureStore(reduxState);

ReactDOM.render(
  <Provider store={store}>
    <R />
  </Provider>,
  document.getElementById("app")
);
