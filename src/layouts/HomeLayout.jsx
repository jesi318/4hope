import React from "react";
import Home from "../Pages/Home";
import Topbar from "../components/common/TopBar";

export default function HomeLayout() {
  return (
    <div>
      <Topbar />
      <Home />
    </div>
  );
}
