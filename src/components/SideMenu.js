import React, {useState, useEffect} from "react";
import {UpperInfo, LowerInfo} from "./profile";
import { useFirebase} from "./firebase";
import { getAuth } from "firebase/auth";

import "./sidemenu.css";
const SideMenu = () => {
  
  
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
      firebase.getStudentProfileData(user.email)
        .then((snapshot) => {
          if (!snapshot.empty) {
            // Check if the snapshot contains any documents
            setStudent(snapshot.docs[0].data());
          } else {
            // Handle the case where no documents are found
            console.log("No student profile data found for the user.");
          }
        })
        .catch((error) => {
          // Handle any errors that occur during data retrieval
          console.error("Error getting student profile data:", error);
        });
    }
  }, [user, firebase]);
  
  return(
    <div className="sidemenu">
      <UpperInfo student={student}/>
<LowerInfo student={student}/>

    </div>
    ) ; 
  
  // return (
    //   <div className="sideMenu">
    //     <div className="profile-section">
    //       <div className="profile-image">
    //         <img src="" alt="Student Photo" />
    //       </div>
    //       <p className="profile-name">John Doe</p>
    //     </div>
    //     <div className="academic-info">
    //       <h2 className="info-title">Academic Information</h2>
    //       <p><strong>Roll No:</strong> XYZ/10000/23</p>
    //       <p><strong>Department:</strong> CSE</p>
    //       <p><strong>Course:</strong> MCA</p>
    //       <p><strong>Hostel:</strong>Hostel-5</p>
    //       <p><strong>Room No. :</strong>204</p>
    //     </div>
    //   </div>
    // );
}

export default SideMenu;