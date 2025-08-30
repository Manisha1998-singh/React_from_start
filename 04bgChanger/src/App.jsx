import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  // list of colors you want
  // const colors = ["blue", "red", "green", "yellow", "pink", "gray"];
  return (
    <>
      <div className="p-0 flex justify-center  align-middle bg-amber-400  border rounded pt-3">
        <button
          class=" mb-4  me-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          onClick={() => setColor("blue")}>
          Button
        </button>
        <button
          onClick={() => setColor("red")}
          class=" mb-4 me-3  bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded">
          Button
        </button>
        <button
          onClick={() => setColor("green")}
          class=" mb-4 me-3  bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded">
          Button
        </button>
        <button
          onClick={() => setColor("yellow")}
          class=" mb-4 me-3 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 border border-yellow-700 rounded">
          Button
        </button>
        <button
          onClick={() => setColor("pink")}
          class=" mb-4 me-3 bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 border border-pink-700 rounded">
          Button
        </button>
        <button
          onClick={() => setColor("gray")}
          class="mb-4  bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-700 rounded">
          Button
        </button>
      </div>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}></div>
    </>
  );
}

export default App;
