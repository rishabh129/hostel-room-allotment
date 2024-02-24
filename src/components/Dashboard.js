import React from "react";
import "./dashboardStyle.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

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
            <ul className="menuItems">
              <li className="menuItem">
              <Link to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="menuItem">
              <Link to="/dashboard">
                  Profile
                </Link>
              </li>
              <li className="menuItem">
              <Link to="/dashboard">
                  Application Form
                </Link>
              </li>
              <li className="menuItem">
              <Link to="/dashboard">
                  Track Application
                </Link>
              </li>
              <li className="menuItem">
              <Link to="/dashboard">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="mainContent">
            <h1>Main Content</h1>
            <div className="applicationFormButton">
              <h3>Application Form</h3>
            </div>

            <div className="trackApplicationButton">
              <h3>Track Application Status</h3>
            </div>

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
