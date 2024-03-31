import React, { useState, useEffect } from "react";
import "./profile.css";
import "./dashboardStyle.css";
import Navbar from "./Navbar";
import MenuBar from "./MenuBar";

const ProfilePage = () => {
  // Define state variable to hold the profile data
  const [profileData, setProfileData] = useState([]);

  // Fetch profile data from backend API
  useEffect(() => {
    // Make a fetch request to your backend API to get profile data
    fetch("your-backend-api-url")
      .then((response) => response.json())
      .then((data) => setProfileData(data))
      .catch((error) => console.error("Error fetching profile data: ", error));
  }, []); // This effect runs once after the initial render

  return (
    <div className="dashboardBody">
      <Navbar loggedIn={true} />
      <div className="Container">
        <MenuBar />
        <Profile profileData={profileData} />
      </div>
    </div>
  );
};

function Profile({ profileData }) {
  return (
    <div className="main">
      <div className="sidemenu">
        <UpperInfo profileData={profileData} />
        <LowerInfo profileData={profileData} />
      </div>
      <div className="maincontent">
        <div className="welcome">
          <p>Welcome back! You are logged in as: <em>Dr. K. S. Patnaik</em></p>
        </div>
        <ProfileTable profileData={profileData} />
      </div>
    </div>
  );
}

function UpperInfo({ profileData }) {
  return (
    <div className="upperinfo">
      <img src="download.jpeg" alt="" />
      <h3>{profileData.name}</h3>
    </div>
  );
}

function LowerInfo({ profileData }) {
  return (
    <div className="lowerinfo">
      <div className="info-item">
        <span className="label">Roll Number:</span>
        <span className="value">{profileData.rollNumber}</span>
      </div>
      <div className="info-item">
        <span className="label">Department:</span>
        <span className="value">{profileData.department}</span>
      </div>
      <div className="info-item">
        <span className="label">Course:</span>
        <span className="value">{profileData.course}</span>
      </div>
      <div className="info-item">
        <span className="label">Hostel Number:</span>
        <span className="value">{profileData.hostelNumber}</span>
      </div>
      <div className="info-item">
        <span className="label">Room Number:</span>
        <span className="value">{profileData.roomNumber}</span>
      </div>
    </div>
  );
}

function ProfileTable({ profileData }) {
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
          {/* Display profile data in the table */}
          <td>{profileData.hostelPlan}</td>
          <td>{profileData.roomType}</td>
          <td>{profileData.buildingName}</td>
          <td>{profileData.floorName}</td>
          <td>{profileData.roomName}</td>
          <td>{profileData.allocatedOn}</td>
        </tr>
      </tbody>
    </table>

    
  );
}

export default ProfilePage;
