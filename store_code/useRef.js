// Ref & 그냥 번수 차이

import React, { useState, useRef } from "react";

function App() {
  const [renderer, setRenderer] = useState(0);
  const countRef = useRef(0); // 함수가 불릴 때 마다 초기화 x -> 언마운트될 때까지 값 유지
  let countVar = 0; // 함수가 불릴 때 마다 즉, 렌더링될 때 마다 countVar는 계속 0으로 초기화

  const doRendering = () => {
    setRenderer(renderer + 1);
  };

  const increaseRef = () => {
    countRef.current = countRef.current + 1;
    console.log("ref: ", countRef.current);
  };

  const increaseVar = () => {
    countVar += 1;
    console.log("var: ", countVar);
  };

  const printResults = () => {
    console.log(`ref: ${countRef.current}, var: ${countVar}`);
  };

  return (
    <div>
      <p>Ref: {countRef.current}</p>
      <p>Var: {countVar}</p>
      <button onClick={doRendering}>Render!!</button>
      <button onClick={increaseRef}>Ref 올려</button>
      <button onClick={increaseVar}>Var 올려</button>
      <button onClick={printResults}>Ref Var 값 출력</button>
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
