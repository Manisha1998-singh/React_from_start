//import { useState } from "react";

import "./App.css";

function App() {
  //const [count, setCount] = useState(0);
  const numbers = [1, 3, 4, 5, 6];
  const users = [
    { id: 1, name: "Manisha" },

    { id: 2, name: "Mannu" },
  ];
  return (
    <>
      <div>
        {numbers.map((abc) => (
          <p key={abc}>{abc}</p>
        ))}
      </div>
      <div>
        {users.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
    </>
  );
}

export default App;
