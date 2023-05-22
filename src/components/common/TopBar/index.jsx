import React, { useState, useRef, useEffect } from "react";
import "./index.scss";
import hopeFull from "../../../assets/hopeFull.png";
import user from "../../../assets/user.png";
import {
  BiHomeAlt2,
  BiMessageSquareDetail,
  BiNotification,
  BiLogOut,
} from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { BsBriefcase, BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { onLogout } from "../../../api/AuthAPI";
export default function Topbar() {
  const options = ["Logout"];
  const defaultOption = options[0];
  let navigate = useNavigate();

  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  const goToRoute = (route) => {
    navigate(route);
  };
  return (
    <div className="topbar-main">
      <img className="topbar-logo" src={hopeFull} alt="4hope" />
      <div className="react-icons">
        <BsSearch size={30} className="react-icon" />
        <BiHomeAlt2
          size={30}
          className="react-icon"
          onClick={() => goToRoute("/home")}
        />
        <FiUser
          size={30}
          className="react-icon"
          onClick={() => goToRoute("/profile")}
        />
        <BsBriefcase size={30} className="react-icon" />
        <BiMessageSquareDetail size={30} className="react-icon" />
        <BiNotification size={30} className="react-icon" />
      </div>
      <div className="menu-container" ref={menuRef}>
        <div
          className="menu-trigger"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <img className="user-logo" src={user} alt="user" />
        </div>

        <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
          <h3>Username</h3>
          <ul>
            <DropdownItem text={"Logout"} />
          </ul>
        </div>
      </div>
    </div>
  );
}

function DropdownItem(props) {
  return (
    <li className="dropdownItem">
      <BiLogOut onClick={onLogout} />
      <a href="">{props.text}</a>
    </li>
  );
}
