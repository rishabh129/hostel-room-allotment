import React, { useState, useEffect } from "react";
import "./profile.css";
import "./dashboardStyle.css";
import Navbar from "./Navbar";
import MenuBar from "./MenuBar";
import { useFirebase} from "./firebase";
import { getAuth } from "firebase/auth";
const ProfilePage = () => {

  
  const firebase = useFirebase();
  const [student, setStudent] = useState([]);
  const [user, setUser] = useState(null);


  useEffect(() => {
    const auth = getAuth();
    if (auth.currentUser) {
      setUser(auth.currentUser);
      //console.log(user.email);
    } else {
      setUser(null);
    }
  }, []);

  useEffect(() => {
    if (user) {
      console.log(user);
      firebase.getStudentProfileData(user.email).then((student) => {
        setStudent(student.docs[0].data());
        
      });
    }
  }, [user]); 
  return (
    <div className="dashboardBody">
      <Navbar loggedIn={true} />
      <div className="Container">
        <MenuBar />
        
        <Profile student={student} />
      </div>
    </div>
  );
};

function Profile({student}) {
  console.log(student);
  return (
    <div className="main">
      <div className="sidemenu">
        <UpperInfo student={student}/>
        <LowerInfo student={student}/>
      </div>
      <div className="maincontent">
        <div className="welcome">
          <p>Welcome back! You are logged in as: <em>{student.firstName +" " + student.lastName}</em></p>
        </div>
       
        <div className="set-1">
          <fieldset className="personal-info">
            <legend className="personal-legend">Personal Info</legend>
            <div className="info-item">
              <span className="label">Name:</span>
              <span className="value">{student.firstName+" "+student.middleName+" "+student.lastName}</span>
            </div>
            <div className="info-item">
              <span className="label">Roll Number:</span>
              <span className="value">{student.studentId}</span>
            </div>
            <div className="info-item">
              <span className="label">Email:</span>
              <span className="value">{student.contactEmail}</span>
            </div>
            <div className="info-item">
              <span className="label">Phone Number:</span>
              <span className="value">{student.contactPhone}</span>
            </div>
            <div className="info-item">
              <span className="label">Gender:</span>
              <span className="value">{student.gender}</span>
            </div>
            <div className="info-item">
              <span className="label">Date of Birth:</span>
              <span className="value">{student.dob}</span>
            </div>
          </fieldset>
        </div>
        <div className="set-2">
          <fieldset className="academic-info">
            <legend className="academic-legend">Academic Info</legend>
            <div className="info-item">
              <span className="label">Program:</span>
              <span className="value">{student.program}</span>
            </div>
            <div className="info-item">
              <span className="label">Department:</span>
              <span className="value">{student.department}</span>
            </div>
            <div className="info-item">
              <span className="label">Current Course:</span>
              <span className="value">{student.currentCourse}</span>
            </div>
            <div className="info-item">
              <span className="label">Start of Course Year:</span>
              <span className="value">{student.startYear}</span>
            </div>
            <div className="info-item">
              <span className="label">End of Course Year:</span>
              <span className="value">{student.endYear}</span>
            </div>
            <div className="info-item">
              <span className="label">Duration of Course:</span>
              <span className="value">{student.duration  + " years"}</span>
            </div>
          </fieldset>
        </div>
        <div className="set-3">
          <fieldset className="contact-info">
            <legend className="contact-legend">Contact Information</legend>
            <div className="info-item">
              <span className="label">Permanent Address:</span>
              <span className="value">{student.permanentAddress}</span>
            </div>
            <div className="info-item">
              <span className="label">Current Address:</span>
              <span className="value">{student.currentAddress}</span>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
}

function UpperInfo({student}) {
  const firebase = useFirebase();
  const [url, setURL] = useState(null);
  const [user, setUser] = useState(null);


  useEffect(() => {
    const auth = getAuth();
    if (auth.currentUser) {
      setUser(auth.currentUser);
      //console.log(user.email);
    } else {
      setUser(null);
    }
  }, []);


  useEffect(() => {
    if (student && student.userPhoto) {
      firebase.getProfileImage(student.userPhoto)
        .then((url) => setURL(url))
        .catch((error) => {
          console.error("Error fetching profile image:", error);
          // Handle error if necessary
        });
    }
  }, [student]); // Add student as a dependency
  
  return (
    <div className="upperinfo">
      <img src={url || user.photoURL} alt="Profile Picture" />
      <h3>{user?.displayName}</h3>
    </div>
  );
}

function LowerInfo({student}) {
  return (
    <div className="lowerinfo">
      <div className="info-item">
        <span className="label">Roll Number:</span>
        <span className="value">{student.studentId}</span>
      </div>
      <div className="info-item">
        <span className="label">Department:</span>
        <span className="value">{student.department}</span>
      </div>
      <div className="info-item">
        <span className="label">Course:</span>
        <span className="value">{student.currentCourse}</span>
      </div>
      <div className="info-item">
        <span className="label">Hostel Number:</span>
        <span className="value">{student.hostel}</span>
      </div>
      <div className="info-item">
        <span className="label">Room Number:</span>
        <span className="value">{student.room}</span>
      </div>
       <ProfileTable student={student}/>
    </div>
    
  );
}

function ProfileTable({student}) {
  return (
    <table className="table">
      <tbody>
        <tr id="profile_row">
          <th>Room Type</th>
          <th>Hostel Number</th>
          <th>Room Number</th>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td colSpan="3">Data Not Found...</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ProfilePage;
export { UpperInfo, LowerInfo };