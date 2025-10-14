import React from "react";
import { useState } from "react";

function For() {
  const [count, setCount] = useState(5);
  const Number = [];
  for (let i = 0; i < count; i++) {
    Number.push(i);
  }

  return (
    <div>
      {Number.map((num) => (
        <p key={num}>Printed Number: {num}</p>
      ))}

      <button onClick={() => setCount(count + 1)}></button>
    </div>
  );
}

export default For;
