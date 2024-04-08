import React, { useState } from "react";
import { useFirebase } from './firebase';
import Loader from "./loading";
import "./formStyle.css";

const NewApplication = () => {
  const firebase = useFirebase();
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    studentId: "",
    contactEmail: "",
    contactPhone: "",
    gender: "Male",
    dob: "",
    currentCourse: "",
    startYear: "",
    endYear: "",
    department: "",
    duration: "",
    program: "UG",
    permanentAddress: "",
    currentAddress: "",
    });

  const [userPhoto, setUserPhoto] = useState("")
  const [admissionSlip, setAdmissionSlip] = useState("")
  const [feeReceipt, setFeeReceipt] = useState("")
  const [loading, setLoading] = useState(false);

  const resetFormData = () => {
    setFormData({
      firstName: "",
      middleName: "",
      lastName: "",
      studentId: "",
      contactEmail: "",
      contactPhone: "",
      gender: "Male",
      dob: "",
      currentCourse: "",
      startYear: "",
      endYear: "",
      department: "",
      duration: "",
      program: "UG",
      permanentAddress: "",
      currentAddress: "",
      
    });
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here, you can send formData to your server or perform any other action
    setLoading(true);
    await firebase.handleNewRoomApplicationSubmit(formData, userPhoto, admissionSlip, feeReceipt);
    console.log("Form Submitted Successfully!");
    
    resetFormData();
    setLoading(false);
    alert("Application Submitted!");
  };

    return (
      <>
      <Loader loading = {loading}/>
        <div className="contain">
            <div className="scrollable-container">
                <div className="scrollable-content">
                    <form onSubmit={handleSubmit} method>
                        <fieldset className="personal-info-section">
                            <legend>Personal Information</legend>
                            <label htmlFor="first-name" id="first-namel">First Name:</label>
                            <input type="text" id="first-name" name="firstName" value={formData.firstName} onChange={handleChange} required />
                            <label htmlFor="middle-name" id="middle-namel">Middle Name:</label>
                            <input type="text" id="middle-name" name="middleName" value={formData.middleName} onChange={handleChange}  />
                            <label htmlFor="last-name" id="last-namel">Last Name:</label>
                            <input type="text" id="last-name" name="lastName" value={formData.lastName} onChange={handleChange} required />  <br />
                            <label htmlFor="student-id" id="student-idl">Roll Number:</label>
                            <input type="text" id="student-id" name="studentId" value={formData.studentId} onChange={handleChange} required /><br />
                            <label htmlFor="contact-email" id="contact-emaill" >Email:</label>
                            <input type="email" id="contact-email" name="contactEmail" value={formData.contactEmail} onChange={handleChange} required /> <br />
                            <label htmlFor="contact-phone" id="contact-phonel">Phone Number:</label>
                            <input type="tel" id="contact-phone" name="contactPhone" value={formData.contactPhone} onChange={handleChange} />
                            <label htmlFor="gender" id='genderl'>Gender:</label>
                            <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required><br />
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                            <label htmlFor="dob" id='dobl'>Date of Birth:</label>
                            <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required />
                        </fieldset>
{/* academic section */}
                        <fieldset className="academic-info-section">
                            <legend>Academic Information</legend>
                            <div className="wrapper">
                                Select Program:
                                <input type="radio" id="ug" name="program" value="UG" checked={formData.program === 'UG'} onChange={handleChange} />
                                <label htmlFor="ug">UG</label>
                                <input type="radio" id="pg" name="program" value="PG" checked={formData.program === 'PG'} onChange={handleChange} />
                                <label htmlFor="pg">PG</label><br />
                            </div>

                            <label htmlFor="department" id='departmentl'>Department:</label>

                            <select name="department" id="department" value={formData.department} onChange={handleChange} required>
                              <option value="arch">Architechture and Planning</option>
                              <option value="bio">Bioengineering and Biotechnology</option>
                              <option value="chemical">Chemical Engineering</option>
                              <option value="food">Center for Food Engineering and Technology</option>
                              <option value="chemistry">Chemistry</option>
                              <option value="civil">Civil and ENV Engineering</option>
                              <option value="cs">Computer Science and Engineering</option>
                              <option value="ds">Centre for Quantitative Analysis and Data Science</option>
                              <option value="eee">Electrical and Electronic Engineering</option>
                              <option value="ece">Electronics and Communication Engineering</option>
                              <option value="hmct">Hotel Management and Catering Technology</option>
                              <option value="humanities">Humanities and Social Sciences</option>
                              <option value="management">Management</option>
                              <option value="math">Mathematics</option>
                              <option value="mech">Mechanical Engineering</option>
                              <option value="pharma">Pharmaceutical Sciences and Technology</option>
                              <option value="physics">Physics</option>
                              <option value="prod">Production and Industrial Engineering</option>
                              <option value="rs">Remote Sensing</option>
                              <option value="rocketry">Space Engineering and Rocketry</option>

                            </select> <br />

                            <label htmlFor="current-course" id="current-coursel">Current Course:</label>
                            <input type="text" id="current-course" name="currentCourse" value={formData.currentCourse} onChange={handleChange} required /><br />
                            <label htmlFor="start-year" id='start-yearl'>Start of Course Year:</label>
                            <input type="number" id="start-year" name="startYear" value={formData.startYear} onChange={handleChange} required /><br />
                            <label htmlFor="end-year" id='end-yearl'>End of Course Year:</label>
                            <input type="number" id="end-year" name="endYear" value={formData.endYear} onChange={handleChange} required /><br />
                            
                            <label htmlFor="duration" id='durationl'>Duration of Course:</label>
                            <input type="text" id="duration" name="duration" value={formData.duration} onChange={handleChange} /><br />
                            
                        </fieldset>

                        <fieldset className="contact-information">
                            <legend>Contact Information</legend>
                            <label htmlFor="permanent-address" id='permanent-addressl'>Permanent Address:</label>
                            <textarea id="permanent-address" name="permanentAddress" rows="4" cols="50" value={formData.permanentAddress} onChange={handleChange} required></textarea>
                            <br />
                            <label htmlFor="current-address"id='current-addressl'>Current Address:</label>
                            <textarea id="current-address" name="currentAddress" rows="4" cols="50" value={formData.currentAddress} onChange={handleChange} required></textarea>
                        </fieldset>

                        <fieldset className="documents-section">
                            <legend>Document Upload</legend>
                            <label htmlFor="photo-upload" id='photo'>Photo:</label>
                            <input type="file" id="photo-upload" name="userPhoto" onChange={(e) => setUserPhoto(e.target.files[0])} /> <br />
                            <label id='slip' htmlFor="admission-slip-upload">Admission Slip:</label>
                            <input type="file" id="admission-slip-upload" name="admissionSlip" onChange={(e) => setAdmissionSlip(e.target.files[0])}/> <br />
                            <label id='fee' htmlFor="fee-slip-upload">Fee Slip:</label>
                            <input type="file" id="fee-slip-upload" name="feeReceipt" onChange={(e) => setFeeReceipt(e.target.files[0])}/><br />
                        </fieldset>

            <button className="button-22" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default NewApplication;
