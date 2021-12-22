import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; //importe app
import { Provider } from "react-redux";
import store from "../src/store/estore";
import { BrowserRouter  } from "react-router-dom";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>,

  document.getElementById("root")
);
