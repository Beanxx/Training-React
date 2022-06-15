import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleInputChnage = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    console.log("Rendering...");
  }, []);

  return (
    <div>
      <button onClick={handleCountUpdate}>Update</button>
      <span>count: {count}</span>
      <input type="text" value={name} onChange={handleInputChnage} />
      <span>name: {name}</span>
    </div>
  );
}

export default App;

// useEffect(() => {
//   // subscribe ...
//   return () => {
//     // unsubscritbe ...
//   }
// }, [])
