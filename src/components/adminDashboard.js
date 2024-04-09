import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./admin.css";

const AdminDashboard = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="admin-main">
      <Navbar></Navbar>
      <h3 class="welcome">
        Welcome, administrator! Get ready to elevate your hostel's management
        experience with our intuitive platform.
      </h3>

      <div className="container-admin">
        <h3>Application Usage Statistics</h3>
        <div className="dashboard-card">
          <h2>Applications</h2>
          <div className="pie-chart" id="application-chart"></div>
        </div>

        <div className="dashboard-card">
          <h2>Rooms</h2>
          <div className="pie-chart" id="room-chart"></div>
        </div>
      </div>
      <div className="admin-work">
        <h2> 1. List of Student application:-</h2>
        <button className="big-button" onClick={togglePopup}>
          Applications
        </button>
        {showPopup && (
              <div className="popup">
              <button className="close-button" onClick={togglePopup}>
                X
              </button>
              <Link to="/applications?type=newroom">
                <button className="admin-button">New Room Applications</button>
              </Link>
              <Link to="/applications?type=swaproom">
                <button className="admin-button">Swap Room Applications</button>
              </Link>
              <Link to="/applications?type=vacateroom">
                <button className="admin-button">Vacate Room Applications</button>
              </Link>
            </div>
        )}
        <br />
        <br />
        <h2>2.List of Rooms in hostel 5:-</h2>
        <button className="big-button">List of Rooms</button>
      </div>
    </div>
  );
};

export default AdminDashboard;
