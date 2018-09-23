import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Body from "./js/components/Body";
import reducers from "./js/store";

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Body />
  </Provider>,
  document.getElementById("root")
);
