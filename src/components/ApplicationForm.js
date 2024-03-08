import React, { useState } from 'react';
import "./formStyle.css"

const ApplicationForm = () => {
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
        permanentAddress: '',
        currentAddress: ''
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

    return (
         <div className="scrollable-container">
               <div className="scrollable-content">
        <form onSubmit={handleSubmit}>
           
            <fieldset className="personal-info-section">
                <legend>Personal Information</legend>
                <label htmlFor="first-name">First Name:</label>
                <input type="text" id="first-name" name="firstName" value={formData.firstName} onChange={handleChange} required />
                <label htmlFor="middle-name">Middle Name:</label>
                <input type="text" id="middle-name" name="middleName" value={formData.middleName} onChange={handleChange} required />
                <label htmlFor="last-name">Last Name:</label>
                <input type="text" id="last-name" name="lastName" value={formData.lastName} onChange={handleChange} required />
                <label htmlFor="student-id">Roll Number:</label>
                <input type="text" id="student-id" name="studentId" value={formData.studentId} onChange={handleChange} required />
                <label htmlFor="contact-email">Email:</label>
                <input type="email" id="contact-email" name="contactEmail" value={formData.contactEmail} onChange={handleChange} required />
                <label htmlFor="contact-phone">Phone Number:</label>
                <input type="tel" id="contact-phone" name="contactPhone" value={formData.contactPhone} onChange={handleChange} />
                <label htmlFor="gender">Gender:</label>
                <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <label htmlFor="dob">Date of Birth:</label>
                <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required />
            </fieldset>

            <fieldset className="academic-info-section">
                <legend>Academic Information</legend>
                <label htmlFor="current-course">Current Course:</label>
                <input type="text" id="current-course" name="currentCourse" value={formData.currentCourse} onChange={handleChange} required />
                <label htmlFor="start-year">Start of Course Year:</label>
                <input type="number" id="start-year" name="startYear" value={formData.startYear} onChange={handleChange} required />
                <label htmlFor="end-year">End of Course Year:</label>
                <input type="number" id="end-year" name="endYear" value={formData.endYear} onChange={handleChange} required />
                <label htmlFor="department">Department:</label>
                <input type="text" id="department" name="department" value={formData.department} onChange={handleChange} required />
                <label htmlFor="duration">Duration of Course:</label>
                <input type="text" id="duration" name="duration" value={formData.duration} onChange={handleChange} />
                <div className="wrapper">
                    Select one Program:
                    <input type="radio" id="ug" name="program" value="UG" checked={formData.program === 'UG'} onChange={handleChange} />
                    <label htmlFor="ug">UG</label>
                    <input type="radio" id="pg" name="program" value="PG" checked={formData.program === 'PG'} onChange={handleChange} />
                    <label htmlFor="pg">PG</label>
                </div>
            </fieldset>

            <fieldset className="contact-information">
                <legend>Contact Information</legend>
                <label htmlFor="permanent-address">Permanent Address:</label>
                <textarea id="permanent-address" name="permanentAddress" rows="4" cols="50" value={formData.permanentAddress} onChange={handleChange} required></textarea>
                <label htmlFor="current-address">Current Address:</label>
                <textarea id="current-address" name="currentAddress" rows="4" cols="50" value={formData.currentAddress} onChange={handleChange} required></textarea>
            </fieldset>

            <fieldset className="documents-section">
                <legend>Document Upload</legend>
                <label htmlFor="photo-upload">Photo:</label>
                <input type="file" id="photo-upload" name="photoUpload" multiple />
                <label htmlFor="admission-slip-upload">Admission Slip:</label>
                <input type="file" id="admission-slip-upload" name="admissionSlipUpload" multiple />
                <label htmlFor="fee-slip-upload">Fee Slip:</label>
                <input type="file" id="fee-slip-upload" name="feeSlipUpload" multiple />
            </fieldset>

            <button className="button-22" type="submit">Submit</button>
           </form>
         </div>
      </div>
    );
};

export default ApplicationForm;