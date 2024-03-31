import React from "react";
import { Link } from "react-router-dom";
import "./sidemenu.css";
const SideMenu = () => {
    return (
      <div className="sideMenu">
        <div className="profile-section">
          <div className="profile-image">
            <img src="" alt="Student Photo" />
          </div>
          <p className="profile-name">John Doe</p>
        </div>
        <div className="academic-info">
          <h2 className="info-title">Academic Information</h2>
          <p><strong>Roll No:</strong> XYZ/10000/23</p>
          <p><strong>Department:</strong> CSE</p>
          <p><strong>Course:</strong> MCA</p>
          <p><strong>Hostel:</strong>Hostel-5</p>
          <p><strong>Room No. :</strong>204</p>
        </div>
      </div>
    );
}

export default SideMenu;