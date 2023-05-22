import React, { useMemo, useState } from "react";
import Home from "../Pages/Home";
import { getCurrentUser } from "../api/FirestoreAPIs";
import Topbar from "../components/common/TopBar";

export default function HomeLayout() {
  const [currentUser, setCurrentUser] = useState({});
  useMemo(() => {
    getCurrentUser(setCurrentUser);
    console.log("2", currentUser);
  }, [currentUser.id]);
  return (
    <div>
      <Topbar />
      <Home currentuser={currentUser} />
    </div>
  );
}
