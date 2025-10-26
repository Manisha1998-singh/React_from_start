import "./App.css";
import Child from "./components/child";
import Data from "./components/data";

function App(props) {
  return (
    <>
      <div className="bg-red-400">
        <div person={{ name: "manisha" }}>
          {"{props.name}"} We can write this way as well
        </div>
        <div size={props.size} style={{ backgroundColor: "red" }}>
          {"{props.width}"}
          We can write this way as well by take be default props name and
          created props name like this
        </div>
        <Data
          person="Mannu"
          size="medium"
          color="blue"
          married="yes"
          style={{ backgroundColor: "yellow" }}
        />
        <Child />
      </div>
    </>
  );
}

export default App;
