import React from "react";
import "./index.scss";

export default function ProfileEdit({ onEdit }) {
  return (
    <div className="profile-card">
      <div className="edit-btn">
        <button onClick={onEdit}>Go Back</button>
      </div>

      <div className="profile-edit-inputs">
        <input className="common-input" type="text" placeholder="Name" />
        <input className="common-input" type="text" placeholder="Headline" />
        <input className="common-input" type="text" placeholder="Location" />
        <input className="common-input" type="text" placeholder="Company" />
        <input className="common-input" type="text" placeholder="College" />
      </div>
    </div>
  );
}
