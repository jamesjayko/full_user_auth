import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./reducers";

import App from "./components/app";

ReactDOM.render(
  <Provider store={createStore(rootReducers, {}, applyMiddleware(thunk))}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
