import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import history from "./utils/history";
import "./index.css";
import { store } from "./store";
import App from "./App";
import { RootLayout } from "layouts/RootLayout";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <RootLayout>
        <App />
      </RootLayout>
    </Router>
  </Provider>,
  document.getElementById("root")
);
