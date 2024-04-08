import React from "react";
import Navbar from './Navbar';
import "./admin.css";

const AdminDashboard = () => {
  return (
        <div className="container-admin">
          <div className="nav">
            <Navbar></Navbar>
          </div>
      
      <div className="dashboard-card">
        <h2>Applications</h2>
        <div className="pie-chart" id="application-chart"></div>
      </div>

      <div className="dashboard-card">
        <h2>Rooms</h2>
        <div className="pie-chart" id="room-chart"></div>
      </div>

      <div className="admin-work">
        <button className="big-button">Application List</button>
        <button className="big-button">List of Rooms</button>
      </div>
    </div>
  );
};

export default AdminDashboard;
