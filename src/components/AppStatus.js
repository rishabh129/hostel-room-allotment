import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import MenuBar from "./MenuBar";
import NoticeSection from "./NoticeSection";
import SideMenu from "./SideMenu";
import axios from "axios"; // Import Axios for making HTTP requests
import "./dashboardStyle.css";

const AppStatus = () => {
  const [applicationStatus, setApplicationStatus] = useState([]);

  useEffect(() => {
    // Fetch application status data from the backend
    const fetchApplicationStatus = async () => {
      try {
        const response = await axios.get("/api/application-status"); // Adjust the endpoint URL accordingly
        setApplicationStatus(response.data);
      } catch (error) {
        console.error("Error fetching application status:", error);
      }
    };

    fetchApplicationStatus();
  }, []); // Fetch data only once on component mount

  return (
    <>
      <Navbar loggedIn={true} />
      <MenuBar />
      <div className="bodyContent">
        <SideMenu />
        <div className="mainContent">
          <h2>Status</h2>
          <div className="mainContent-status">
            {applicationStatus.map((app, index) => (
              <div key={index}>
                <p>Roll Number: {app.rollNumber}</p>
                <p>Type of Application: {app.type}</p>
                <p>Status: {app.status}</p>
              </div>
            ))}
          </div>
        </div>
        <NoticeSection />
      </div>
    </>
  );
};

export default AppStatus;
