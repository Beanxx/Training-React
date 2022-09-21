import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React 버전 문제로 처음 렌더링될 때 useEffect() 내의 return 함수 실행도 불러와지는 문제 발생...
// React 버전을 18 -> 17로 내려주고 index.js 내의 DOM 구조를 전 버전으로 바꾸면 처음에 불러와지는 문제는 해결 가능!

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
