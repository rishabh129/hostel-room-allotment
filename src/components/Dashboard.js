import React from "react";
import "./dashboardStyle.css";
import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <div className="dashboardBody">
      <Navbar loggedIn={true} />

      <div className="Container">
        <div className="menuBar">
          <h1>Menu Bar</h1>
          
        </div>
        <div className="bodyContent">
          <div className="sideMenu">
            <h2>Side Menu</h2>
            <ul className="menuItems">
              <li className="menuItem">Dashboard</li>
              <li className="menuItem">Profile</li>
              <li className="menuItem">Application Form</li>
              <li className="menuItem">Track Application Status</li>
              <li className="menuItem">Contact</li>
            </ul>
          </div>
          <div className="mainContent">
            <h2>Main Content</h2>
            
          </div>
          <div className="noticeSection">
            <h2>Notice Section</h2>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
