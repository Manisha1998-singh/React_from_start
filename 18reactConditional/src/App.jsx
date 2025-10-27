import "./App.css";
import Items from "./components/items";
import Listitem from "./components/Listitem";

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
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Listitem name="mannu" isPacked={false}></Listitem>
          <Listitem name="mannu1" isPacked={true}></Listitem>
          <Listitem name="mannu3" isPacked={true}></Listitem>
          <Listitem name="mannu" isPacked={false}></Listitem>
          <Listitem name="mannu4" isPacked={true}></Listitem>
        </ul>
      </div>
    </>
  );
}

export default App;
