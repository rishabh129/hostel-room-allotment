import React, { useState } from 'react';
import './vacateRoom.css'; // Import your CSS file
import Navbar from './Navbar';
import Menubar from './MenuBar';
const VacateRoomForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    studentId: '',
    contactEmail: '',
    contactPhone: '',
    gender: 'male',
    dob: '',
    currentCourse: '',
    startYear: '',
    endYear: '',
    department: '',
    duration: '',
    program: 'UG',
    reason: '',
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

  // const toggleDocumentUpload = (e) => {
  //   //const reason = e.target.value;
  //   // Logic to toggle document upload based on reason
  // };

  return (
   
      
    <div className="divider">
       <Navbar></Navbar>
      <Menubar className='menu' />
  
      <span className="glow-text">Vacate-Room Application Form</span>
      <form action="#" method="POST" onSubmit={handleSubmit}>
        {/* Personal Information */}
        <fieldset className="personal-info-section">
          <legend>Student Personal Information-1</legend>
          {/* Name of Candidate */}
          <label htmlFor="first-name">First Name:</label>
          <input type="text" id="first-name" name="firstName" value={formData.firstName} onChange={handleChange} required />
          <label className="name" htmlFor="middle-name">Middle Name:</label>
          <input type="text" id="middle-name" name="middleName" value={formData.middleName} onChange={handleChange} required />
          <label className="name" htmlFor="last-name">Last Name:</label>
          <input type="text" id="last-name" name="lastName" value={formData.lastName} onChange={handleChange} required /><br />
          {/* Roll Number */}
          <label htmlFor="student-id">Roll Number:</label>
          <input type="text" id="student-id" name="studentId" value={formData.studentId} onChange={handleChange} required /><br />
          {/* Email */}
          <label htmlFor="contact-email">Email:</label>
          <input type="email" id="contact-email" name="contactEmail" value={formData.contactEmail} onChange={handleChange} required /><br />
          {/* Phone Number */}
          <label htmlFor="contact-phone">Phone Number:</label>
          <input type="tel" id="contact-phone" name="contactPhone" value={formData.contactPhone} onChange={handleChange} /><br />
          {/* Gender */}
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select><br />
          {/* Date of Birth */}
          <label htmlFor="dob">Date of Birth:</label>
          <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required /><br />
        </fieldset>

        {/* Academic Information */}
        <fieldset className="academic-info-section">
          <legend>Academic Information (Student 1)</legend>
          <label htmlFor="current-course">Current Course:</label>
          <input type="text" id="current-course" name="currentCourse" value={formData.currentCourse} onChange={handleChange} required /><br />
          <label htmlFor="start-year">Start of Course Year:</label>
          <input type="number" id="start-year" name="startYear" value={formData.startYear} onChange={handleChange} required /><br />
          <label htmlFor="end-year">End of Course Year:</label>
          <input type="number" id="end-year" name="endYear" value={formData.endYear} onChange={handleChange} required /><br />
          <label htmlFor="department">Department:</label>
          <input type="text" id="department" name="department" value={formData.department} onChange={handleChange} required /><br />
          <label htmlFor="duration">Duration of Course:</label>
          <input type="text" id="duration" name="duration" value={formData.duration} onChange={handleChange} /><br />
          <div className="wrapper">
            Select one Program:
            <input type="radio" id="ug" name="program" value="UG" onChange={handleChange} checked={formData.program === 'UG'} />
            <label htmlFor="ug">UG</label>
            <input type="radio" id="pg" name="program" value="PG" onChange={handleChange} checked={formData.program === 'PG'} />
            <label htmlFor="pg">PG</label><br />
          </div>
        </fieldset>

        {/* Reason for Vacate */}
        <fieldset className="reason-section">
  <legend>Reason for Vacate</legend>
  <label className="radio">
    <input 
      type="radio" 
      name="reason" 
      value="Internship" 
      onChange={handleChange} 
      checked={formData.reason === 'Internship'} 
    />
    <span>Internship</span>
  </label>
  <label className="radio">
    <input 
      type="radio" 
      name="reason" 
      value="Medical" 
      onChange={handleChange} 
      checked={formData.reason === 'Medical'} 
    />
    <span>Medical Issue</span>
  </label>
  <label className="radio">
    <input 
      type="radio" 
      name="reason" 
      value="Personal" 
      onChange={handleChange} 
      checked={formData.reason === 'Personal'} 
    />
    <span>Personal</span>
  </label>
  <p className="note">Note: Students selecting "Personal" reason should take permission from the warden.</p>
</fieldset>


        {/* Documents */}
        <fieldset className="documents-section" id="document-upload-section">
          <legend>Document upload</legend>
          <label htmlFor="document-upload">Required Document</label>
          <input type="file" id="document-upload" name="document-upload" multiple /><br />
        </fieldset>

        {/* Permission from Warden */}
        {formData.reason === 'Personal' && (
          <fieldset className="documents-section" id="warden-permission-section">
            <legend>Permission from Warden</legend>
            <label htmlFor="warden-permission-upload">Upload Permission Document:</label>
            <input type="file" id="warden-permission-upload" name="warden-permission-upload" multiple /><br />
          </fieldset>
        )}

        {/* Submit Button */}
        <button className="button-22" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default VacateRoomForm;
