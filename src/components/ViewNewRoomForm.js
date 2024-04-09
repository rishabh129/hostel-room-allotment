import React, { useState, useEffect } from "react";
import { useFirebase } from "./firebase";
import "./formStyle.css";
import { useLocation} from "react-router-dom";
import Navbar from "./Navbar";
import "./formStyle.css";

const ViewNewRoomForm = () => {
  const firebase = useFirebase();
  const [studentData, setStudentData] = useState([]);
  const location = useLocation();
  const roll = new URLSearchParams(location.search).get("roll");


  useEffect(() => {
    
      firebase.getApplication(roll, "newroom").then((studentData) => {
        setStudentData(studentData.docs[0].data());
        
      });
    
  }, [roll, firebase]);

  return (
    <>
      <Navbar loggedIn={true}/>
  
      <div className="contain">
        <div className="scrollable-container">
          <div className="scrollable-content">
            <form>
              <fieldset className="personal-info-section">
                <legend>Personal Information</legend>
                <label htmlFor="first-name" id="first-namel">
                  First Name: {studentData?.firstName}
                </label>
                
                <label htmlFor="middle-name" id="middle-namel">
                  Middle Name:{studentData?.middleName}
                </label>
                <label htmlFor="last-name" id="last-namel">
                  Last Name: {studentData?.lastName}
                </label>
                <br />
                <label htmlFor="student-id" id="student-idl">
                  Roll Number: {studentData?.studentId}
                </label>
                <br />
                <label htmlFor="contact-email" id="contact-emaill">
                  Email: {studentData?.contactEmail}
                </label>
                <br />
                <label htmlFor="contact-phone" id="contact-phonel">
                  Phone Number: {studentData?.contactPhone}
                </label>
                <label htmlFor="gender" id="genderl">
                  Gender: {studentData?.gender}
                </label>
                <label htmlFor="dob" id="dobl">
                  Date of Birth: {studentData?.dob}
                </label>
                
              </fieldset>
              {/* academic section */}
              <fieldset className="academic-info-section">
                <legend>Academic Information</legend>
                <div className="wrapper">
                  Program: {studentData?.program}
                </div>
                <label htmlFor="department" id="departmentl">
                  Department: {studentData?.department}
                </label>
                <br />
                <label htmlFor="current-course" id="current-coursel">
                  Current Course: {studentData?.currentCourse}
                </label>
                <br />
                <label htmlFor="start-year" id="start-yearl">
                  Start of Course Year: {studentData?.startYear}
                </label>
                <br />
                <label htmlFor="end-year" id="end-yearl">
                  End of Course Year: {studentData?.endYear}
                </label>
                <br />
                <label htmlFor="duration" id="durationl">
                  Duration of Course: {studentData?.duration + " Years"}
                </label>
                <br />
              </fieldset>

              <fieldset className="contact-information">
                <legend>Contact Information</legend>
                <label htmlFor="permanent-address" id="permanent-addressl">
                  Permanent Address: {studentData?.permanentAddress}
                </label>
                <br />
                <label htmlFor="current-address" id="current-addressl">
                  Current Address: {studentData?.currentAddress}
                </label>
                
              </fieldset>
              <button className="button-22" type="submit">
                Approve
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
  
};

export default ViewNewRoomForm;
