import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
      {/* {...props.input}으로 input의 모든 객체 키&값을 받아올 수 있음 */}
    </div>
  );
});

export default Input;
