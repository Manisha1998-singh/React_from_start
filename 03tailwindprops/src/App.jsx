//import { useState } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  let myObj = {
    username: "manisha",
    age: 22,
  };
  let myArr = [1, 4, 5, 6];
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      <Card username="chaiaurcode" btnText="Come meet me " />
      <Card username="Manisha" />
    </>
  );
}

export default App;
