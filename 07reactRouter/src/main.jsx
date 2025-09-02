import React from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import Github, { githubInfoLoader } from "./components/Github/Github.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact-us",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path=" " element={<Home />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="contact-us" element={<Contact />}></Route>
      <Route path="user/:userid" element={<User />}></Route>
      <Route
        loader={githubInfoLoader}
        path="github"
        element={<Github />}></Route>
    </Route>
  )
);
const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}></RouterProvider>);
