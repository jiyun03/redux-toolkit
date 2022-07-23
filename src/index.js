import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import youtubeReducer from "./redux/youtubeSlice";

// 각각의 reducer데이터를 하나의 객체로 묶어 store에 저장
const store = configureStore({
  reducer: {
    youtube: youtubeReducer,
  },
});

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById("root")
);
