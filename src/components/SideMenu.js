import React from "react";
import { Link } from "react-router-dom";
import "./sidemenu.css";
const SideMenu = () => {
    return (
      <div className="sideMenu">
        <div className="profile-section">
          <div className="profile-image">
            <img src="https://images.unsplash.com/photo-1630178836733-3d61d8974258?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Student Photo" />
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