import React, { useState } from 'react';
import './styles.css'; // Import your CSS file

function RoomApplicationForm() {
    // State for form inputs
    const [student1, setStudent1] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        rollNumber: '',
        email: '',
        phone: '',
        gender: '',
        dob: '',
        currentCourse: '',
        startYear: '',
        endYear: '',
        department: '',
        duration: '',
        program: ''
    });

    const [student2, setStudent2] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        rollNumber: '',
        email: '',
        phone: '',
        gender: '',
        dob: '',
        currentCourse: '',
        startYear: '',
        endYear: '',
        department: '',
        duration: '',
        program: ''
    });

    // Handle form input changes
    const handleInputChange = (e, student, setStudent) => {
        const { name, value } = e.target;
        setStudent(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div>
            <h1>Swap-Room Application Form</h1>

            <div className="divider">
                <span className="glow-text">Student-1 Details</span>
            </div>

            <form onSubmit={handleSubmit}>
                {/* Student 1 Personal Information */}
                <fieldset className="personal-info-section">
                    <legend>Student Personal Information-1</legend>
                    <label htmlFor="first-name">First Name:</label>
                    <input type="text" id="first-name" name="firstName" value={student1.firstName} onChange={(e) => handleInputChange(e, student1, setStudent1)} required />
                    <label htmlFor="middle-name">Middle Name:</label>
                    <input type="text" id="middle-name" name="middleName" value={student1.middleName} onChange={(e) => handleInputChange(e, student1, setStudent1)} required />
                    <label htmlFor="last-name">Last Name:</label>
                    <input type="text" id="last-name" name="lastName" value={student1.lastName} onChange={(e) => handleInputChange(e, student1, setStudent1)} required />
                    <label htmlFor="student-id">Roll Number:</label>
                    <input type="text" id="student-id" name="rollNumber" value={student1.rollNumber} onChange={(e) => handleInputChange(e, student1, setStudent1)} required />
                    <label htmlFor="contact-email">Email:</label>
                    <input type="email" id="contact-email" name="email" value={student1.email} onChange={(e) => handleInputChange(e, student1, setStudent1)} required />
                    <label htmlFor="contact-phone">Phone Number:</label>
                    <input type="tel" id="contact-phone" name="phone" value={student1.phone} onChange={(e) => handleInputChange(e, student1, setStudent1)} />
                    <label htmlFor="gender">Gender:</label>
                    <select id="gender" name="gender" value={student1.gender} onChange={(e) => handleInputChange(e, student1, setStudent1)} required>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    <label htmlFor="dob">Date of Birth:</label>
                    <input type="date" id="dob" name="dob" value={student1.dob} onChange={(e) => handleInputChange(e, student1, setStudent1)} required />
                </fieldset>

                {/* Student 1 Academic Information */}
                <fieldset className="academic-info-section">
                    <legend>Academic Information (Student 1)</legend>
                    <label htmlFor="current-course">Current Course:</label>
                    <input type="text" id="current-course" name="currentCourse" value={student1.currentCourse} onChange={(e) => handleInputChange(e, student1, setStudent1)} required />
                    <label htmlFor="start-year">Start of Course Year:</label>
                    <input type="number" id="start-year" name="startYear" value={student1.startYear} onChange={(e) => handleInputChange(e, student1, setStudent1)} required />
                    <label htmlFor="end-year">End of Course Year:</label>
                    <input type="number" id="end-year" name="endYear" value={student1.endYear} onChange={(e) => handleInputChange(e, student1, setStudent1)} required />
                    <label htmlFor="department">Department:</label>
                    <input type="text" id="department" name="department" value={student1.department} onChange={(e) => handleInputChange(e, student1, setStudent1)} required />
                    <label htmlFor="duration">Duration of Course:</label>
                    <input type="text" id="duration" name="duration" value={student1.duration} onChange={(e) => handleInputChange(e, student1, setStudent1)} />
                    <div className="wrapper">
                        Select one Program:
                        <input type="radio" id="ug" name="program" value="UG" onChange={(e) => handleInputChange(e, student1, setStudent1)} />
                        <label htmlFor="ug">UG</label>
                        <input type="radio" id="pg" name="program" value="PG" onChange={(e) => handleInputChange(e, student1, setStudent1)} />
                        <label htmlFor="pg">PG</label>
                    </div>
                </fieldset>

                {/* Student 2 Personal Information */}
                {/* Similar structure as Student 1 Personal Information, but using student2 state variables */}

                {/* Student 2 Academic Information */}
                {/* Similar structure as Student 1 Academic Information, but using student2 state variables */}

                {/* Document upload section */}
                <fieldset className="documents-section">
                    <legend>Document upload</legend>
                    <label htmlFor="student1-photo">Photo (Student 1):</label>
                    <input type="file" id="student1-photo" name="student1Photo" multiple /><br />
                    <label htmlFor="student2-photo">Photo (Student 2):</label>
                    <input type="file" id="student2-photo" name="student2Photo" multiple /><br />
                    <label htmlFor="consent-form">Consent Form:</label>
                    <input type="file" id="consent-form" name="consentForm" multiple /><br />
                </fieldset>

                {/* Submit Button */}
                <button className="button-22" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default RoomApplicationForm;
