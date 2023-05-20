import React, { useState } from "react";
import { RegisterAPI, GoogleSigninAPI } from "../api/AuthAPI";
import hopeSmall from "../assets/hopeSmall.png";
import "../Sass/LoginComponent.scss";
import { useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { toast } from "react-toastify";
import { postUserData } from "../api/FirestoreAPIs";

export default function RegisterComponent() {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({});
  const register = async () => {
    try {
      let res = await RegisterAPI(credentials.email, credentials.password);
      toast.success("Registered to 4Hope!");
      postUserData({ name: credentials.name, email: credentials.email });
      localStorage.setItem("userEmail", res.user.email);
      navigate("/home");
    } catch (error) {
      toast.error("Error registering!");
      console.log(error);
    }
  };

  return (
    <div className="login-wrapper">
      <img src={hopeSmall} className="hopeSmallLogo" />
      <h1 className="heading">Connect with the global workforce today!</h1>

      <div className="auth-inputs">
        <input
          onChange={(event) =>
            setCredentials({ ...credentials, name: event.target.value })
          }
          type="text"
          className="common-input"
          placeholder="Your Name"
        />
        <input
          onChange={(event) =>
            setCredentials({ ...credentials, email: event.target.value })
          }
          type="email"
          className="common-input"
          placeholder="Email or Phone Number"
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

      <button onClick={register} className="login-btn">
        Register
      </button>

      <p className="bottom-text">
        Already have an account?
        <span className="join-text" onClick={() => navigate("/login")}>
          Log in
        </span>
      </p>
    </div>
  );
}
