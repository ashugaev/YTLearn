import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Body from "./js/components/Body";
import reducer from "./js/store";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Body />
  </Provider>,
  document.getElementById("root")
);
