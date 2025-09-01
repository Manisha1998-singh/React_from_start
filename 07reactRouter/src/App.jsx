import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
//import Home from "./components/Home/Home";
import { Outlet } from "react-router-dom";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
