import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState("3");

  return (
    <>
      <div>
        <h1 id="textChanger"> number: {count}</h1>

        <button
          onClick={() => setCount((count) => Math.min(Number(count) + 3, 100))}>
          Click Me
        </button>
      </div>
    </>
  );
}

export default App;
