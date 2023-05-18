import React, { useState } from "react";
import { LoginAPI, RegisterAPI, GoogleSigninAPI } from "../api/AuthAPI";
import hopeSmall from "../assets/hopeSmall.png";
import "../Sass/LoginComponent.scss";
import GoogleButton from "react-google-button";
import { toast } from "react-toastify";

export default function LoginComponent() {
  const [credentials, setCredentials] = useState({});
  const login = () => {
    try {
      let res = LoginAPI(credentials.email, credentials.password);
      toast.success("Logged in to 4Hope!");
    } catch (error) {
      toast.error("Error signing in!");
      console.log(error);
    }
  };

  const googleSignin = () => {
    let response = GoogleSigninAPI();
    console.log(response);
  };
  return (
    <div className="login-wrapper">
      <img src={hopeSmall} className="hopeSmallLogo" />
      <h1 className="heading">Sign In</h1>
      <h3 className="sub-heading">Stay updated in the professional world</h3>

      <div className="auth-inputs">
        <input
          onChange={(event) =>
            setCredentials({ ...credentials, email: event.target.value })
          }
          type="email"
          className="common-input"
          placeholder="Email or Phone"
        />
        <input
          onChange={(event) =>
            setCredentials({ ...credentials, password: event.target.value })
          }
          type="password"
          className="common-input"
          placeholder="Enter your Password"
        />
      </div>

      <button onClick={login} className="login-btn">
        Sign In
      </button>

      <hr class="hr-text" data-content="or" />

      <div className="google-btn-cont">
        <GoogleButton className="google-btn" onClick={googleSignin} />
      </div>

      <p className="bottom-text">
        Don't have an account yet? <span className="join-text">Join now</span>
      </p>
    </div>
  );
}
