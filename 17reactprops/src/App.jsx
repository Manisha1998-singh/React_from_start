import "./App.css";
import Child from "./components/child";

function App(props) {
  return (
    <>
      <div className="bg-red-400">
        <div person={props.name}>{props.name}We can write this way as well</div>
        <div size={props.width}>
          {props.width}
          We can write this way as well by take be default props name and
          created props name like this
        </div>
        <Child />
      </div>
    </>
  );
}

export default App;
