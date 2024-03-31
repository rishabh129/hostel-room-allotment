import React from "react";
import "./profile.css";
import "./dashboardStyle.css";
import Navbar from "./Navbar";
import MenuBar from "./MenuBar";

const ProfilePage = () => {
  return (
    <div className="dashboardBody">
      <Navbar loggedIn={true} />
      <div className="Container">
        <MenuBar />
        <Profile />
      </div>
    </div>
  );
};

function Profile() {
  return (
    <div className="main">
      <div className="sidemenu">
        <UpperInfo />
        <LowerInfo />
      </div>
      <div className="maincontent">
        <div className="welcome">
          <p>Welcome back! You are logged in as: <em>Dr. K. S. Patnaik</em></p>
        </div>
       
        <div className="set-1">
          <fieldset className="personal-info">
            <legend className="personal-legend">Personal Info</legend>
            <div className="info-item">
              <span className="label">Name:</span>
              <span className="value">John Doe</span>
            </div>
            <div className="info-item">
              <span className="label">Roll Number:</span>
              <span className="value">12345</span>
            </div>
            <div className="info-item">
              <span className="label">Email:</span>
              <span className="value">example@example.com</span>
            </div>
            <div className="info-item">
              <span className="label">Phone Number:</span>
              <span className="value">1234567890</span>
            </div>
            <div className="info-item">
              <span className="label">Gender:</span>
              <span className="value">Male</span>
            </div>
            <div className="info-item">
              <span className="label">Date of Birth:</span>
              <span className="value">01/01/2000</span>
            </div>
          </fieldset>
        </div>
        <div className="set-2">
          <fieldset className="academic-info">
            <legend className="academic-legend">Academic Info</legend>
            <div className="info-item">
              <span className="label">Program:</span>
              <span className="value">Bachelor of Technology</span>
            </div>
            <div className="info-item">
              <span className="label">Department:</span>
              <span className="value">Computer Science</span>
            </div>
            <div className="info-item">
              <span className="label">Current Course:</span>
              <span className="value">Course Name</span>
            </div>
            <div className="info-item">
              <span className="label">Start of Course Year:</span>
              <span className="value">2020</span>
            </div>
            <div className="info-item">
              <span className="label">End of Course Year:</span>
              <span className="value">2024</span>
            </div>
            <div className="info-item">
              <span className="label">Duration of Course:</span>
              <span className="value">4 years</span>
            </div>
          </fieldset>
        </div>
        <div className="set-3">
          <fieldset className="contact-info">
            <legend className="contact-legend">Contact Information</legend>
            <div className="info-item">
              <span className="label">Permanent Address:</span>
              <span className="value">Permanent Address Here</span>
            </div>
            <div className="info-item">
              <span className="label">Current Address:</span>
              <span className="value">Current Address Here</span>
            </div>
          </fieldset>
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
       <ProfileTable />
    </div>
    
  );
}

function ProfileTable() {
  return (
    <table className="table">
      <tbody>
        <tr id="profile_row">
          <th>Room Type</th>
          <th>Hostel Number</th>
          <th>Room Number</th>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td colSpan="3">Data Not Found...</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ProfilePage;
