import React, { useState, useEffect } from "react";
import React from "react";
import Navbar from './Navbar';

const ApplicationListPage = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    // Fetch applications data from backend API
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      // Fetch applications data from backend API
      const response = await fetch("YOUR_BACKEND_API_ENDPOINT");
      if (response.ok) {
        const data = await response.json();
        // Update state with the fetched applications data
        setApplications(data.applications);
      } else {
        console.error("Failed to fetch applications data");
      }
    } catch (error) {
      console.error("Error fetching applications data:", error);
    }
  };

  return (
    <div className="application-list-page">
        <Nav></Nav>
      <h2>Application List</h2>
      <table>
        <thead>
          <tr>
            <th>Application ID</th>
            <th>Name</th>
            <th>Status</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {applications.map((application) => (
            <tr key={application.id}>
              <td>{application.id}</td>
              <td>{application.name}</td>
              <td>{application.status}</td>
              {/* Render more application details as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationListPage;
