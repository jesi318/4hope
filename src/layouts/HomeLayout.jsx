import React, { useMemo } from "react";
import Home from "../Pages/Home";
import { getCurrentUser } from "../api/FirestoreAPIs";
import Topbar from "../components/common/TopBar";

export default function HomeLayout() {
  useMemo(() => {
    getCurrentUser();
  },[]);
  return (
    <div>
      <Topbar />
      <Home />
    </div>
  );
}
