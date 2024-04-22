import React, { useState, useEffect } from "react";
import { useFirebase } from "./firebase";
import "./formStyle.css";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import "./formStyle.css";

const ViewNewRoomForm = () => {
  const firebase = useFirebase();
  const [studentData, setStudentData] = useState([]);
  const location = useLocation();
  const roll = new URLSearchParams(location.search).get("roll");
  let [sId, setSId] = useState("");

  useEffect(() => {

    firebase.getApplication(roll, "newroom").then((studentData) => {
      // setSId(studentData.docs[0].id);
      setStudentData(studentData.docs[0].data());
    });

  }, [roll, firebase]);

  const allotRoom = async () => {
    try {

      const studentProfileSnapshot = await firebase.getStudentProfileData(studentData?.contactEmail);
      setSId(studentProfileSnapshot.docs[0].id);
      console.log('studentId: ', sId);
      
       

      firebase.checkRoom("hostel").then((roomsData) => {
        if (roomsData.docs.length > 0) {
          const roomsSnapshot = roomsData.docs[0];
          console.log(roomsSnapshot.id);
          const hostelData = {
            Allotted: 1,
            studentId: studentData.studentId
          }
          const studentRoomData = {
            hostel: "5",
            room: roomsSnapshot.id
          }
          firebase.updateRoom("hostel", roomsSnapshot.id, hostelData);
          firebase.updateStudent(sId, studentRoomData);

          // firebase.firestore().collection('hostel').doc(roomToAllot.id).update({
          //   Allotted: 1,
          //   Email: studentData?.studentId // Replace with the admin's email ID
          // });
          // firebase.firestore().collection('student').where('studentId', '==', studentData.studentId).update({
          //   Allotted: 1,
          //   Email: studentData?.studentId // Replace with the admin's email ID
          // });
          alert('Room allotted successfully!');
        } else {
          alert('No available rooms to allot.');
        }
      });
    } catch (error) {
      console.error('Error allotting room:', error);
      alert('Failed to allot room. Please try again later.');
    }
  };



  return (
    <>
      <Navbar loggedIn={true} />

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
              <button onClick={allotRoom} className="button-22" type="button">
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
