import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "최수빈",
    content: "하잇1",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "채형원",
    content: "하잇2",
    emotion: 3,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "김원필",
    content: "하잇3",
    emotion: 2,
    created_date: new Date().getTime(),
  },
  {
    id: 4,
    author: "황민현",
    content: "하잇4",
    emotion: 1,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
