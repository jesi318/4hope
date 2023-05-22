import React, { useMemo, useState } from "react";
import Profile from "../Pages/Profile";
import { getCurrentUser } from "../api/FirestoreAPIs";
import Topbar from "../components/common/TopBar";

export default function ProfileLayout() {
  const [currentUser, setCurrentUser] = useState({});
  useMemo(() => {
    getCurrentUser(setCurrentUser);
    console.log("2", currentUser);
  }, [currentUser.id]);
  return (
    <div>
      <Topbar />
      <Profile currentuser={currentUser} />
    </div>
  );
}
