import "./App.css";
import Items from "./components/items";

function App() {
  return (
    <>
      <div>
        <ul>
          <Items name="mannu" isPacked={false}></Items>
          <Items name="mannu1" isPacked={true}></Items>
          <Items name="mannu2" isPacked={false}></Items>
          <Items name="mannu3" isPacked={true}></Items>
          <Items name="mannu4" isPacked={true}></Items>
        </ul>
      </div>
    </>
  );
}

export default App;
