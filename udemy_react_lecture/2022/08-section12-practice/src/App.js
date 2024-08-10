import React, { useState, useCallback, useMemo } from "react";
import "./App.css";
import DemoList from "./components/Demo/DemoList";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const [listTitle, setListTitle] = useState("My List");

  console.log("APP Running");

  // 함수는 App 컴포넌트가 리렌더링될 때마다 매번 새롭게 다시 생성되게 된다.
  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagrah) => !prevShowParagrah);
    }
  }, [allowToggle]); // allowToggle 변경될 때만 함수 재생성

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      {/* <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button> */}
    </div>
  );
}

export default App;

// useCallback(): 컴포넌트 실행 전반에 걸쳐 함수를 저장할 수 있게 하는 훅
// 즉, 매번 실행할 때 마다 해당 함수를 재샛ㅇ성할 필요가 없다는걸 알릴 수 있음
// => 동일한 함수 객체가 메모리의 동일한 위치에 저장되므로 비교 작업이 가능해짐
// 역할: 우리가 선택한 함수를 리액트의 내부 저장 공간에 저장해서 함수 객체가 실행될 때마다 이를 재사용할 수 있게 해줌
