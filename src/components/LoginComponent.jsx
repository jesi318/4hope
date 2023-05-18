import React, { useState } from "react";
import { LoginAPI, RegisterAPI, GoogleSigninAPI } from "../api/AuthAPI";
import hopeSmall from "../assets/hopeSmall.png";
import "../Sass/LoginComponent.scss";
import { useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { toast } from "react-toastify";

export default function LoginComponent() {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({});
  const login = async () => {
    try {
      let res = await LoginAPI(credentials.email, credentials.password);
      toast.success("Logged in to 4Hope!");
      navigate("/home");
    } catch (error) {
      toast.error("Error signing in!");
      console.log(error);
    }
  };

  const googleSignin = async () => {
    let response = await GoogleSigninAPI();
    navigate("/home");
    console.log(response);
  };
  return (
    <div className="whole-wrapper">
      <img src={hopeSmall} className="hopeSmallLogo" />

      <div className="login-wrapper">
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
          Don't have an account yet?
          <span className="join-text" onClick={() => navigate("/register")}>
            Join now
          </span>
        </p>
      </div>
    </div>
  );
}
