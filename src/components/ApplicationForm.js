import React, { useState } from "react";
import "./formStyle.css";

const ApplicationForm = () => {
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
    permanentAddress: "",
    currentAddress: "",
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
        <div className="contain">
            <div className="scrollable-container">
                <div className="scrollable-content">
                    <form onSubmit={handleSubmit}>
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
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                            <label htmlFor="dob" id='dobl'>Date of Birth:</label>
                            <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required />
                        </fieldset>
{/* academic section */}
                        <fieldset className="academic-info-section">
                            <legend>Academic Information</legend>
                            <label htmlFor="current-course" id="current-coursel">Current Course:</label>
                            <input type="text" id="current-course" name="currentCourse" value={formData.currentCourse} onChange={handleChange} required /><br />
                            <label htmlFor="start-year" id='start-yearl'>Start of Course Year:</label>
                            <input type="number" id="start-year" name="startYear" value={formData.startYear} onChange={handleChange} required /><br />
                            <label htmlFor="end-year" id='end-yearl'>End of Course Year:</label>
                            <input type="number" id="end-year" name="endYear" value={formData.endYear} onChange={handleChange} required /><br />
                            <label htmlFor="department" id='departmentl'>Department:</label>
                            <input type="text" id="department" name="department" value={formData.department} onChange={handleChange} required /><br />
                            <label htmlFor="duration" id='durationl'>Duration of Course:</label>
                            <input type="text" id="duration" name="duration" value={formData.duration} onChange={handleChange} /><br />
                            <div className="wrapper">
                                Select one Program:
                                <input type="radio" id="ug" name="program" value="UG" checked={formData.program === 'UG'} onChange={handleChange} />
                                <label htmlFor="ug">UG</label>
                                <input type="radio" id="pg" name="program" value="PG" checked={formData.program === 'PG'} onChange={handleChange} />
                                <label htmlFor="pg">PG</label><br />
                            </div>
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
                            <input type="file" id="photo-upload" name="photoUpload" multiple /> <br />
                            <label id='slip' htmlFor="admission-slip-upload">Admission Slip:</label>
                            <input type="file" id="admission-slip-upload" name="admissionSlipUpload" multiple /> <br />
                            <label id='fee' htmlFor="fee-slip-upload">Fee Slip:</label>
                            <input type="file" id="fee-slip-upload" name="feeSlipUpload" multiple /><br />
                        </fieldset>

            <button className="button-22" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
