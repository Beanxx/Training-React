import React, { useState } from "react";
import OddEvenResult from "./OddEvenResult";

const Counter = (props) => {
  const [count, setCount] = useState(props.a);

  const onIncrease = () => {
    setCount(count + 1);
  };

  const onDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <OddEvenResult count={count} />
    </div>
  );
};

// props로 넘겨준 값이 존재하지 않아 undefined가 나올 떄 초기 props 값 설정
Counter.defaultProps = {
  initialValue: 0,
};

export default Counter;
