import React, { useState } from "react";
import "./App.css";
import Page from "./components/Page";
import { ThemeContext } from "./context/ThemeContext";
import { UserContext } from "./context/UserContext";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    // ThemeContext.Provider로 감싼 모든 하위 컴포넌트는 isDark, setIsDark에 접근 가능
    <UserContext.Provider value={"사용자"}>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Page />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;

// props 대신 context를 사용하여 데이터를 공유하면 한 곳에 있는 데이터를 모든 잔여 컴포넌트들에게 방송
// -> 그 컴포넌트를 사용하고 싶은 자식 컴포넌트들은 useContext를 통해서 값을 받아오기만 하면 됨

// context를 사용하면 컴포넌트 재사용이 어려워질 수 있음 -> 꼭 필요할 때만 사용!
