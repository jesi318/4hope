import React, { useMemo, useState } from "react";
import "./index.scss";
import { getCurrentUser } from "../../../api/FirestoreAPIs";

export default function ProfileCard({ onEdit }) {
  const [currentUser, setCurrentUser] = useState({});
  useMemo(() => {
    getCurrentUser(setCurrentUser);
  });

  return (
    <div className="profile-card">
      <div className="edit-btn">
        <button onClick={onEdit}>Edit</button>
      </div>
      <h3 className="userName">{currentUser.name}</h3>
      <p className="userEmail">{currentUser.email}</p>
    </div>
  );
}
