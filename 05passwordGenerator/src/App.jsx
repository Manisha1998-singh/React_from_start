import { useState } from "react";
import { useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClip = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password);
  }, [password]);
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);
  //passwordGenerator();

  return (
    <>
      <div className=" w-xl shadow  center rounded-lg overflow-hidden mb-4 p-4 bg-gray-100">
        <label className="text-4xl text-center mb-3">Password Generator</label>

        <div className="w-xl mt-3 flex gap-3">
          <input
            type="text"
            value={password}
            onChange={passwordGenerator}
            className="outline w-md py-1 rounded-sm  px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClip}
            className="bg-blue-600 p-1 ps-3 hover:bg-blue-700 cursor-pointer pe-3 rounded-lg text-white">
            Copy
          </button>
        </div>
        <div className="w-xl mt-3 flex gap-3">
          <label>Range: {length}</label>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className=" cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}></input>
          <input
            type="checkbox"
            id="numberInput"
            defaultChecked={numberAllowed}
            onChange={() => {
              setnumberAllowed((prev) => !prev);
            }}
            className="cursor-pointer"></input>
          <label htmlFor="numberInput">Number</label>
          <input
            type="checkbox"
            className="cursor-pointer"
            id="charInput"
            defaultChecked={numberAllowed}
            onChange={() => {
              setcharAllowed((prev) => !prev);
            }}></input>
          <label htmlFor="charInput">Charachtor</label>
        </div>
      </div>
    </>
  );
}

export default App;
