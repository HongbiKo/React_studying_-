import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App";
// import App2 from "./App2";
// import Practice from "./Practice";
// import Jjang from "./Jjang";
// import UseEffectTest from "./UseEffectTest";
// import ReactRouter from "./ReactRouter";
// import Shoppingmall from "./Shoppingmall";
// import ReactAjax from "./ReactAjax";
import ComponentRedux from "./ComponentRedux";
import { Provider } from "react-redux";
import store from "./components/store";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ComponentRedux />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
