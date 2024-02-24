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
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li className="menuItem">
                <Link to="/dashboard">Profile</Link>
              </li>
              <li className="menuItem">
                <Link to="/dashboard">Application Form</Link>
              </li>
              <li className="menuItem">
                <Link to="/dashboard">Track Application</Link>
              </li>
              <li className="menuItem">
                <Link to="/dashboard">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="mainContent">
            <div className="mainContentHeading">
              <h1>Main Content</h1>
            </div>
            <div className="mainContentMenu">
              <div className="applicationFormButton">
                <h3>Application Form</h3>
              </div>

              <div className="trackApplicationButton">
                <h3>Track Application Status</h3>
              </div>

              <div className="profileButton">
                <h3>Profile</h3>
              </div>
            </div>
            <div className="mainContentDetails">
              <div className="userDetails">
                <div className="userDetailsApp">
                  <div className="appform">
                    <h6>Application Form : Not Yet Submitted</h6>
                  </div>
                  <div className="appstatus">
                    <h6>Application Status : Pending</h6>
                  </div>
                </div>
                <div className="userDetailsHostel">
                  <div className="hostelNum">
                    <h6>Hostel No : 5</h6>
                  </div>
                  <div className="hostelRoomNum">
                    <h6>Room No: 183</h6>
                  </div>
                  <div className="hostelStatus">
                    <h6>Hostel Status : Outer Hostel</h6>
                  </div>
                </div>
              </div>
              <div className="userHostelDetails">
                <div className="userDetailsApp">
                  <div className="appform">
                    <h6>Application Form : Not Yet Submitted</h6>
                  </div>
                  <div className="appstatus">
                    <h6>Application Status : Pending</h6>
                  </div>
                </div>
                <div className="userDetailsHostel">
                  <div className="hostelNum">
                    <h6>Hostel No : 5</h6>
                  </div>
                  <div className="hostelRoomNum">
                    <h6>Room No: 183</h6>
                  </div>
                  <div className="hostelStatus">
                    <h6>Hostel Status : Outer Hostel</h6>
                  </div>
                </div>
              </div>
              <div className="userExtraDetails">
                <div className="userDetailsApp">
                  <div className="appform">
                    <h6>Application Form : Not Yet Submitted</h6>
                  </div>
                  <div className="appstatus">
                    <h6>Application Status : Pending</h6>
                  </div>
                </div>
                <div className="userDetailsHostel">
                  <div className="hostelNum">
                    <h6>Hostel No : 5</h6>
                  </div>
                  <div className="hostelRoomNum">
                    <h6>Room No: 183</h6>
                  </div>
                  <div className="hostelStatus">
                    <h6>Hostel Status : Outer Hostel</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="noticeSection">
            <h1>Notice</h1>
            <ul className="menuItems">
              <li className="menuItem">
                <Link to="/dashboard">Notice 1</Link>
              </li>
              <li className="menuItem">
                <Link to="/dashboard">Notice 2</Link>
              </li>
              <li className="menuItem">
                <Link to="/dashboard">Notice 3</Link>
              </li>
              <li className="menuItem">
                <Link to="/dashboard">Notice 4</Link>
              </li>
              <li className="menuItem">
                <Link to="/dashboard">Notice 5</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
