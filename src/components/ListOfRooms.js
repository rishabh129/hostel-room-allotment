// RoomMatrix.js

import React, { useState, useEffect } from 'react';
import './RoomList.css'; // Import your CSS file for room list container styling
import Navbar from './Navbar'; // Ensure that Navbar is imported correctly

const RoomMatrix = () => {
  const [roomData, setRoomData] = useState([]);

  useEffect(() => {
    // Fetch room data from Firebase
    // Example: fetch('your_firebase_endpoint')
    // .then(response => response.json())
    // .then(data => setRoomData(data))
    // .catch(error => console.error('Error fetching room data:', error));

    // Mock data for demonstration
    const mockData = Array.from({ length: 50 }, (_, index) => ({
      firstName: `First${index + 1}`,
      lastName: `Last${index + 1}`,
      rollNumber: `Roll${index + 1}`,
      email: `email${index + 1}@example.com`,
      phoneNumber: `123456789${index + 1}`,
      gender: index % 2 === 0 ? 'Male' : 'Female',
      dateOfBirth: '01/01/1990',
      program: `Program${index + 1}`,
      department: `Department${index + 1}`,
      currentCourse: `Course${index + 1}`,
      startYear: 2020,
      endYear: 2024,
      courseDuration: '4 years',
    }));
    setRoomData(mockData);
  }, []);

  const RoomCard = ({ roomNumber, roomInfo }) => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
      setShowPopup(!showPopup);
    };

    const closePopup = () => {
      setShowPopup(false);
    };

    return (
      <div className="room-card" onClick={togglePopup}>
        <h2>Room {roomNumber}</h2>
        {showPopup && (
          <div className="popup">
            <button className="close-button" onClick={closePopup}>X</button>
            <h3>Room Information</h3>
            <p><strong>First Name:</strong> {roomInfo.firstName}</p>
            <p><strong>Last Name:</strong> {roomInfo.lastName}</p>
            <p><strong>Roll Number:</strong> {roomInfo.rollNumber}</p>
            <p><strong>Email:</strong> {roomInfo.email}</p>
            <p><strong>Phone Number:</strong> {roomInfo.phoneNumber}</p>
            <p><strong>Gender:</strong> {roomInfo.gender}</p>
            <p><strong>Date of Birth:</strong> {roomInfo.dateOfBirth}</p>
            <p><strong>Program:</strong> {roomInfo.program}</p>
            <p><strong>Department:</strong> {roomInfo.department}</p>
            <p><strong>Current Course:</strong> {roomInfo.currentCourse}</p>
            <p><strong>Start of Course Year:</strong> {roomInfo.startYear}</p>
            <p><strong>End of Course Year:</strong> {roomInfo.endYear}</p>
            <p><strong>Duration of Course:</strong> {roomInfo.courseDuration}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <Navbar loggedIn={true}/>
      <div className="room-container">
        {roomData.map((roomInfo, index) => (
          <div key={index} className="room-card-container">
            <RoomCard roomNumber={index + 1} roomInfo={roomInfo} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomMatrix;
