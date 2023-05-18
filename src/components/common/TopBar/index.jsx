import React from "react";
import "./index.scss";
import hopeFull from "../../../assets/hopeFull.png";
import user from "../../../assets/user.png";
import {
  BiHomeAlt2,
  BiMessageSquareDetail,
  BiNotification,
} from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { BsBriefcase, BsSearch } from "react-icons/bs";
export default function Topbar() {
  return (
    <div className="topbar-main">
      <img className="topbar-logo" src={hopeFull} alt="4hope" />
      <div className="react-icons">
        <BsSearch size={30} className="react-icon" />
        <BiHomeAlt2 size={30} className="react-icon" />
        <FiUser size={30} className="react-icon" />
        <BsBriefcase size={30} className="react-icon" />
        <BiMessageSquareDetail size={30} className="react-icon" />
        <BiNotification size={30} className="react-icon" />
      </div>
      <img className="user-logo" src={user} alt="user" />
    </div>
  );
}
