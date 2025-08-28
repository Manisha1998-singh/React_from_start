import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// function MyApp() {
//   return (
//     <div>
//       <h1>Custom App</h1>
//     </div>
//   );
// }

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "http://google.com",
//     target: "_blank",
//   },
//   children: "click me to visit google",
// };
// const anotherElement = (
//   <a href="https://google.com" target="_blank">
//     google
//   </a>
// );
const anotherUser = "this my code and my solution";
const newReactElement = React.createElement(
  "a",
  {
    href: "http://google.com",
    target: "_blank",
  },
  "click me where you go",
  anotherUser
);

createRoot(document.getElementById("root")).render(newReactElement);
