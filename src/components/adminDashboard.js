import React from "react";
import Navbar from './Navbar';
import "./admin.css";

const AdminDashboard = () => {
  return ( 

    <div className="admin-main">
       <Navbar></Navbar>
       <h3 class="welcome">Welcome, administrator! Get ready to elevate your hostel's management experience with our intuitive platform.</h3>

        <div className="container-admin">
       <h3 >Application Usage Statistics</h3>
      <div className="dashboard-card">
        <h2>Applications</h2>
        <div className="pie-chart" id="application-chart">

        </div>
      </div>

      <div className="dashboard-card">
        <h2>Rooms</h2>
        <div className="pie-chart" id="room-chart">

        </div>
      </div>
      </div>
    <div className="admin-work">
        <h2> 1. List of Student application:-</h2><button className="big-button">Application List</button>
        <br />
        <br />
        <h2>2.List of Rooms in hostel 5:-</h2><button className="big-button">List of Rooms</button>
      </div>
  </div>
  );
};

export default AdminDashboard;
