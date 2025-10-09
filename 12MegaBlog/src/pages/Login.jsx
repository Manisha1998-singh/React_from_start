import React from "react";
import LoginComponent from "../components/Login"; // Capitalized

function Login() {
  return (
    <div className="py-8">
      <LoginComponent />
      {/* ✅ capitalized, React recognizes it as a component */}
    </div>
  );
}

export default Login;
