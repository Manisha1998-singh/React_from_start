import { useState, useMemo } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(3);
  const [text, setText] = useState("manisha");
  const [add, setAdd] = useState(3);

  const calculation = useMemo(() => {
    return count * (count + 1);
  }, [count]);

  const addnumbers = useMemo(() => {
    return add + 1;
  });
  return (
    <>
      <p>count : {count}</p>
      <p>calculation : {calculation}</p>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>count : {add}</p>
      <p>calculation : {addnumbers}</p>
      <button onClick={() => setAdd(add + 1)}>{add}</button>
      <button onClick={() => setText(text + "singh")}>{text}</button>
    </>
  );
}

export default App;
