import React, { useState } from "react";
import "./vacateRoom.css"; // Import your CSS file
import Navbar from "./Navbar";
import MenuBar from "./MenuBar";

const VacateRoomForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    studentId: "",
    contactEmail: "",
    contactPhone: "",
    gender: "male",
    dob: "",
    currentCourse: "",
    startYear: "",
    endYear: "",
    department: "",
    duration: "",
    program: "UG",
    reason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, you can send formData to your server or perform any other action
    console.log(formData);
  };

  const toggleDocumentUpload = (reason) => {
    // Logic to toggle document upload based on reason
  };

  return (
    <>
    <Navbar loggedIn={true}/>
    <MenuBar/>
    <div className="vacate-room-form">
      <div className="divider">
        <span className="glow-text">Vacate-Room Application Form</span>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Personal Information */}
        <fieldset className="personal-info-section">
          <legend>Student Personal Information-1</legend>
          <label htmlFor="first-name">First Name:</label>
          <input
            type="text"
            id="first-name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          {/* Add other personal information fields */}
        </fieldset>

        {/* Academic Information */}
        <fieldset className="academic-info-section">
          <legend>Academic Information (Student 1)</legend>
          {/* Add academic information fields */}
        </fieldset>

        {/* Reason for Vacate */}
        <fieldset className="reason-section">
          <legend>Reason for Vacate</legend>
          <label className="radio">
            <input
              type="radio"
              name="reason"
              value="Internship"
              onChange={() => toggleDocumentUpload("Internship")}
            />
            <span>Internship</span>
          </label>
          {/* Add other radio options */}
        </fieldset>

        {/* Documents */}
        <fieldset className="documents-section" id="document-upload-section">
          <legend>Document upload</legend>
          <label htmlFor="document-upload">Photo</label>
          <input type="file" id="document-upload" name="document-upload" multiple />
        </fieldset>

        {/* Permission from Warden */}
        <fieldset className="documents-section" id="warden-permission-section">
          <legend>Permission from Warden</legend>
          <label htmlFor="warden-permission-upload">Upload Permission Document:</label>
          <input type="file" id="warden-permission-upload" name="warden-permission-upload" multiple />
        </fieldset>

        {/* Submit Button */}
        <button className="button-22" type="submit">
          Submit
        </button>
      </form>
    </div>
    </>
  );
};

export default VacateRoomForm;
