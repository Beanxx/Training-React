import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  console.log("DemoOutput Running");
  return <MyParagraph>{props.show ? "This is new!" : ""}</MyParagraph>;
};

export default React.memo(DemoOutput);

// show값이 바뀔 때만 재실행하고 싶을 때 React.memo() 사용 -> 함수형 컴포넌트 최적화
// React.memo(): 인자로 들어간 컴포넌트에 어떤 props가 들어가는지 확인하고, 입력되는 모든 props의 신규 값을 확인한 뒤 이를 기존 props 값과 비교하도록 리액트에게 전달함
// & props 값이 바뀐 경우에만 컴포넌트를 재실행 및 재평가하게 됨
// & 부모 컴포넌트가 변경되었지만 그 컴포넌트의 props 값이 바뀌지 않았다면 컴포넌트 실행은 skip
