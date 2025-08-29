import { useState } from "react";

import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  //let counter = 5;
  const addValue = () => {
    // counter = counter + 1;
    // console.log(counter);
    // console.log("value added", Math.random());
    if (counter < 100) {
      setCounter(counter + 1);
    }
  };
  const decreaseValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br></br>
      <button onClick={decreaseValue}>Decrease Value</button>
    </>
  );
}

export default App;
