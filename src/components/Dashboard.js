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
            {/* add by rishi */}
            <b>Main Content</b>
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="card-box bg-blue">
                  <div className="inner">
                    <h3>13436</h3>
                    <p>Application Form</p>
                  </div>
                  <div className="icon">
                    <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                  </div>
                  <a href="#" className="card-box-footer">
                    View More <i className="fa fa-arrow-circle-right"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="card-box bg-green">
                  <div className="inner">
                    <h3>185358</h3>
                    <p>Track Application Status</p>
                  </div>
                  <div className="icon">
                    <i className="fa fa-money" aria-hidden="true"></i>
                  </div>
                  <a href="#" className="card-box-footer">
                    View More <i className="fa fa-arrow-circle-right"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="card-box bg-orange">
                  <div className="inner">
                    <h3>5464</h3>
                    <p>Profile</p>
                  </div>
                  <div className="icon">
                    <i className="fa fa-user-plus" aria-hidden="true"></i>
                  </div>
                  <a href="#" className="card-box-footer">
                    View More <i className="fa fa-arrow-circle-right"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* rishi card style */}
            {/* <div className="containMaincard">
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
            </div> */}
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
