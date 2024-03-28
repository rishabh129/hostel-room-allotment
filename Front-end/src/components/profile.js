import React from "react";
import "./profile.css";
import Navbar from "./Navbar";
import MenuBar from "./MenuBar";
function Profile() {
  return (
    <div className="main">
      <Navbar loggedIn={true} />
      <div className="Container">
        <MenuBar />
        {/* <MainMenu page={"application"}/>         */}
        <div className="sidemenu">
          <UpperInfo />
          <LowerInfo />
        </div>
        <div className="maincontent">
          <div className="welcome">
            Welcome back! You are logged in as: Name Here
          </div>
          <ProfileTable />
        </div>
      </div>
    </div>
  );
}

function UpperInfo() {
  return (
    <div className="upperinfo">
      <img src="download.jpeg" alt="" />
      <h3>Name here</h3>
    </div>
  );
}

function LowerInfo() {
  return (
    <div className="lowerinfo">
      <div className="info-item">
        <span className="label">Roll Number:</span>
        <span className="value">12345</span>
      </div>
      <div className="info-item">
        <span className="label">Department:</span>
        <span className="value">Computer Science</span>
      </div>
      <div className="info-item">
        <span className="label">Course:</span>
        <span className="value">Bachelor of Technology</span>
      </div>
      <div className="info-item">
        <span className="label">Hostel Number:</span>
        <span className="value">H1</span>
      </div>
      <div className="info-item">
        <span className="label">Room Number:</span>
        <span className="value">101</span>
      </div>
    </div>
  );
}

function ProfileTable() {
  return (
    <table className="table table-bordered">
      <thead>
        <tr id="profile_row">
          <th>Hostel Plan</th>
          <th>Room Type</th>
          <th>Building Name</th>
          <th>Floor Name</th>
          <th>Room Name</th>
          <th>Allocated On</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan="6">Data Not Found...</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Profile;
