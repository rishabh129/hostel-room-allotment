import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useFirebase } from "./firebase"; // Import useFirebase hook
import Card from "react-bootstrap/Card";

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
      <h2>Application List</h2>
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
    <Card>
      <Card.Body>
        Name :{" "}
        {application.firstName +
          " " +
          application.middleName +
          " " +
          application.lastName}

Student ID: {application.studentId}
      </Card.Body>
    </Card>
    // <div className="card">
    //   <h3>{application.type}</h3>
    //   <p>Name: {application.firstName + " "+ application.middleName +" "+ application.lastName}</p>
    //   <p>Student ID: {application.studentId}</p>
    //   {/* Add more details as needed */}
    // </div>
  );
};

export default ApplicationListPage;
