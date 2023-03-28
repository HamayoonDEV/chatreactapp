import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <div className="login">
      <div className="loginform">
        <h1>Chatpata Chat</h1>
        <h6>login</h6>
        <input type="email" placeholder="Email" />
        <hr></hr>
        <input type="password" placeholder="password" />
        <hr></hr>
        <button className="signinbtn">Sign in</button>
        <p>
          You don't have an account?<span>Register</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
