import React, {useState} from 'react';
import "./swaproom.css";
import Loader from "./loading";
import Navbar from './Navbar';
import Menubar from './MenuBar';

const SwapRoomApplicationForm = () => {
    const [loading, setLoading] = useState(false);
    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add code to handle form submission
        setLoading(true);
            
        setLoading(false);
    };

    return(
        <>
          <Navbar/>
          <Menubar/>
          <Loader loading={loading}/>
          
               
           <div className="divider">
        <span className="glow-text">Student-1 Details</span>
           </div>


    <form action="#" method="POST" onSubmit={handleSubmit}>
        {/* <!-- Personal Information --> */}
        <fieldset className="personal-info-section">
            <legend>Student Personal Information-1</legend>
            {/* <!-- Name of Candidate --> */}
            <label className="first-name">First Name:</label>
            <input type="text" id="first-name-1" name="full-name" required/>
            <label className="name" for="middle-name">Middle Name:</label>
            <input type="text" id="middle-name-1" name="middle-name" required/>
            <label className="name" for="last">Last Name:</label>
            <input type="text" id="last-name-1" name="last-name" required/><br/>
            {/* <!-- Name of Candidate --> */}
            <label for="student-id">Roll Number:</label>
            <input type="text" id="student-id-1" name="student-id" required/><br/>

            <label for="contact-email">Email:</label>
            <input type="email" id="contact-email-1" name="contact-email" required/><br/>

            <label for="contact-phone">Phone Number:</label>
            <input type="tel" id="contact-phone-1" name="contact-phone"/><br/>



            <label for="gender">Gender:</label>
            <select id="gender-1" name="gender" required>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>

            <label for="dob">Date of Birth:</label>
            <input type="date" id="dob-1" name="dob" required/><br/>











        </fieldset>

        {/* <!-- Academic Information --> */}
        <fieldset className="academic-info-section">
            <legend>Academic Information(student 1)</legend>
            <label for="current-course">Current Course:</label>
            <input type="text" id="current-course-1" name="current-course" required/><br/>

            <label for="year-of-study">Start of Course Year:</label>
            <input type="number" id="year-of-study-1" name="year-of-study" required/><br/>
            <label for="end-of-study">End of Course Year:</label>
            <input type="number" id="end-of-study-1" name="year-of-study" required/><br/>

            <label for="department">Department:</label>
            <input type="text" id="department-1" name="department" required/><br/>

            <label for="duration">Duration of Course:</label>
            <input type="text" id="duration-1" name="duration"/><br/>
            <div className="wrapper">
                Select one Program:
                <input type="radio" id="ug-1" name="program" value="UG" onchange="disableRadio('ug')"/>
                <label for="ug">UG</label>
                <input type="radio" id="pg-1" name="program" value="PG" onchange="disableRadio('pg')"/>
                <label for="pg">PG</label><br/>
            </div>
        </fieldset>



        <div className="divider">
            <span className="glow-text">Student-2 Details</span>
        </div>



<fieldset className="personal-info-section">
    <legend>Student Personal Information-2</legend>
    {/* <!-- Name of Candidate --> */}
    <label className='first-name'>First Name:</label>
    <input type="text" id="first-name-2" name="first-name" required/>
    <label className="name" htmlFor="middle-name">Middle Name:</label>
    <input type="text" id="middle-name-2" name="middle-name" required/>
    <label className="name" htmlFor="last-name">Last Name:</label>
    <input type="text" id="last-name-2" name="last-name" required/><br/>
    {/* <!-- Name of Candidate --> */}
    <label htmlFor="student-id-2">Roll Number:</label>
    <input type="text" id="student-id-2" name="student-id" required/><br/>

    <label htmlFor="contact-email-2">Email:</label>
    <input type="email" id="contact-email-2" name="contact-email" required/><br/>

    <label htmlFor="contact-phone-2">Phone Number:</label>
    <input type="tel" id="contact-phone-2" name="contact-phone"/><br/>

    <label htmlFor="gender-2">Gender:</label>
    <select id="gender-2" name="gender" required>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
    </select>

    <label htmlFor="dob-2">Date of Birth:</label>
    <input type="date" id="dob-2" name="dob" required/><br/>
</fieldset>

        {/* <!-- Academic Information --> */}
        <fieldset className="academic-info-section">
    <legend>Academic Information (student 2)</legend>
    <label htmlFor="current-course-2">Current Course:</label>
    <input type="text" id="current-course-2" name="current-course" required/><br/>

    <label htmlFor="year-of-study-2">Start of Course Year:</label>
    <input type="number" id="year-of-study-2" name="year-of-study" required/><br/>
    
    <label htmlFor="end-of-study-2">End of Course Year:</label>
    <input type="number" id="end-of-study-2" name="end-of-study" required/><br/>

    <label htmlFor="department-2">Department:</label>
    <input type="text" id="department-2" name="department" required/><br/>

    <label htmlFor="duration-2">Duration of Course:</label>
    <input type="text" id="duration-2" name="duration"/><br/>

    <div className="wrapper">
        Select one Program:
        <input type="radio" id="ug-2" name="program" value="UG"/>
        <label htmlFor="ug-2">UG</label>
        
        <input type="radio" id="pg-2" name="program" value="PG"/>
        <label htmlFor="pg-2">PG</label><br/>
    </div>
</fieldset>







        <div className="divider">
            <span className="glow-text">For Student-1 and Student-2</span>
        </div>


        {/* <!-- Documents --> */}
      <fieldset className="documents-section">
    <legend>Document upload</legend>
    <label htmlFor="reg-1">Registration Slip(student-1)</label>
    <input type="file" id="reg-1" name="reg-1" multiple/><br/>

    <label htmlFor="reg-2">Registration Slip(student-2)</label>
    <input type="file" id="reg-2" name="reg-2" multiple/><br/>

    <label htmlFor="consent">Consent Form</label>
    <input type="file" id="consent" name="consent" multiple/><br/>
</fieldset>


        {/* <!-- Submit Button --> */}
        <button className="button-22" type="submit">Submit</button>
    </form>

        </>
    );
};

export default SwapRoomApplicationForm;
