import React from "react";
import "./dashboardStyle.css";
import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <div className="dashboardBody">
      <Navbar loggedIn={true} />

      <div className="Container">
        <div className="menuBar">
          <h1>Menu</h1>
        </div>

        <div className="bodyContent">
          
          <div className="sideMenu">
            <h1>Side Menu</h1>
          </div>
          <div className="mainContent">
            <h1>Main Content</h1>
          </div>
          <div className="noticeSection">
            <h1>Notice</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
