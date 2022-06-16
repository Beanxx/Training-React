import React, { useState, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  // console.log(countRef); // countRef.current
  console.log("Rendering...");

  const increaseCountState = () => {
    setCount(count + 1);
  };

  const increaseCountRef = () => {
    countRef.current += 1;
    console.log("Ref: ", countRef.current);
  };

  return (
    <div>
      <p>State: {count}</p>
      <p>Ref: {countRef.current}</p>
      <button onClick={increaseCountState}>State 올려</button>
      <button onClick={increaseCountRef}>Ref 올려</button>
    </div>
  );
}

export default App;

// const ref = useRef(value)
// ref -> { current: value }
// ref는 수정 가능

// const ref = useRef("hi")
// { current: "hi" }
// ref는 state와 비슷하게 어떤 값을 저장해두는 공간 => 저장공간

// state 변화 -> 자동으로 컴포넌트 다시 렌더링 -> 컴포넌트 내부 변수들 초기화
// ref 변화 -> ref 안의 값을 변경해도 컴포넌트는 다시 렌더링 Nope -> 변수들 값 유지
// state 변화 -> 렌더링 -> Ref 값은 유지

// Ref로 DOM 요소에 접근 (ex. focus() ...)
