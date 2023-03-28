import React from "react";
import "./Register.css";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

const Register = () => {
  return (
    <div className="register">
      <div className="registerform">
        <h1>Chatpata Chat</h1>
        <h6>Register</h6>
        <input type="text" placeholder="display Name" />
        <hr></hr>
        <input type="email" placeholder="Email" />
        <hr></hr>
        <input type="password" placeholder="password" />
        <hr></hr>
        <span>
          <AddPhotoAlternateIcon /> Add an avatar
        </span>
        <button className="signinbtn">Sign in</button>
        <p>
          You do have an account?<span>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Register;
