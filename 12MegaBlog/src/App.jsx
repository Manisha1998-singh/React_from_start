import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logOut } from "./store/authSlice";

import "./App.css";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";
//import { reducer } from "@reduxjs/toolkit";

function App() {
  //and this is for react app with Vite
  //console.log(import.meta.env.VITE_APPWRITE_URL);
  //this is for create react app
  //console.log(process.env.REACT_APP_APPWRITE_URL);

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logOut());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="flex flex-wrap min-h-screen bg-gray-400">
      <div className="w-full block">
        <Header></Header>
        <main>
          TODO: <Outlet></Outlet>{" "}
        </main>
        <Footer></Footer>
      </div>
    </div>
  ) : null;
}

export default App;
