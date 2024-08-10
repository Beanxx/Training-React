import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  console.log("Button Running");
  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);

// props로 함수를 받는 Button은 React.memo()를 사용해도 계속 리렌더링이 됨
// props.button !== props.previous.button <- 즉, 우리 눈에는 같아보이지만 실제론 전의 값과 비교했을 때 다르므로 변경되었다고 여겨져서 리렌더링이 되는 것
