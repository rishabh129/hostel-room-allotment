import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useFirebase } from "./firebase"; // Import useFirebase hook
import "./appList.css";
const ApplicationListPage = () => {
  const [applications, setApplications] = useState([]);
  const firebase = useFirebase(); // Access the firebase object using the useFirebase hook

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch applications from the 'newroom' collection
        const newRoomApplications = await firebase.fetchApplications("newroom");

        // Set the fetched applications in state
        setApplications(newRoomApplications);
      } catch (error) {
        console.error("Error fetching applications:", error);
      }
    };

    fetchData();
  }, [firebase]); // Include firebase in the dependency array to re-fetch applications if firebase object changes

  return (
    <div>
      <Navbar />
      <h2 className="appListHeading">Application List</h2>
      <div className="application-list">
        {applications.map((application) => (
          <ApplicationCard key={application.id} application={application} />
        ))}
      </div>
    </div>
  );
};

const ApplicationCard = ({ application }) => {
  return (
    <div className="appBox">
      <table border="0" className="appTable">
        <tbody>
          <tr>
            <td>
              Name:
              {" " +
                application.firstName +
                " " +
                application.middleName +
                " " +
                application.lastName}
            </td>
            <td>Roll No: {application.studentId}</td>
            <td>Course: {application.currentCourse}</td>
            <td style={{ width: '33%' }}>Email: {application.contactEmail}</td>
            <td className="appBtn"><button className="viewAppButton">View Application</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationListPage;
