import { useState } from "react";

const heavyWork = () => {
  console.log("Very heavy work!!");
  return ["춘식이", "영심이"];
};

function App() {
  // useState를 사용해서 초기값을 받아올 때 어떤 무거운 일을 해야 한다면
  // useState의 인자로 콜백함수를 넣어주면 맨 처음 렌더링 될 때만 실행되게 할 수 있음.
  const [names, setNames] = useState(() => {
    return heavyWork();
  });
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleUpload = () => {
    // state를 변경할 때 새로 변경할 state 값이 이전 state 값과 연관되어 있다면
    // setState() 인자로 새로운 state를 리턴하는 콜백함수를 넣어주는 것이 좋음
    setNames((prevState) => {
      console.log("이전 state: ", prevState);
      return [input, ...prevState];
    });
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleUpload}>Upload</button>
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>;
      })}
    </div>
  );
}

export default App;
