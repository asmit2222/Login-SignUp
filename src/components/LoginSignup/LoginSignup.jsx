import React, { useState } from "react";
import "./LoginSignup.css";

function LoginSignup() {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {action === "Login" ? (
          ""
        ) : (
          <div className="input">
            <div>Name:</div>
            <input type="text" />
          </div>
        )}

        <div className="input">
          <div>Email:</div>
          <input type="email" />
        </div>
        <div className="input">
          <div>Password:</div>
          <input type="password" />
        </div>
      </div>
      {action === "Sign Up" ? (
        ""
      ) : (
        <div className="forget-password">
          Forget Password <span>Click here</span>
        </div>
      )}

      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => setAction("Sign Up")}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => setAction("Login")}
        >
          Login
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
