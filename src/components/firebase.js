// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { createContext, useContext} from "react";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where, updateDoc, doc 
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyCcVMbD_ZhGdY1Md5r7KKsdIQPoaK0aEoE",
  authDomain: "hostelroomallocation-b14d9.firebaseapp.com",
  projectId: "hostelroomallocation-b14d9",
  storageBucket: "hostelroomallocation-b14d9.appspot.com",
  messagingSenderId: "1087980853194",
  appId: "1:1087980853194:web:614c2098989ee3a33b6133",
  measurementId: "G-NFNDEEPTXG",
};

export const useFirebase = () => useContext(FirebaseContext);

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const database = getAuth(app);
export const firestore = getFirestore(app);
const storage = getStorage(app);

export { database };
// export const auth = firebase.auth();


export const FirebaseProvider = (props) => {
  const handleNewRoomApplicationSubmit = async (formData, userPhoto, admissionSlip, feeReceipt) => {
    // console.log(formData);
    const imageRef = ref(
      storage,
      `uploads/userImage/${Date.now()}-${formData.firstName}-${formData.lastName}}`
    );
    const uploadPhoto = await uploadBytes(imageRef, userPhoto);
    
    const admissionRef = ref(
      storage,
      `uploads/admissionSlip/${Date.now()}-${formData.firstName}-${formData.lastName}`
    );
    const uploadAdmSlip = await uploadBytes(admissionRef, admissionSlip);
    
    const feeRef = ref(
      storage,
      `uploads/feeReceipt/${Date.now()}-${formData.firstName}-${formData.lastName}`
    );
    const uploadFeeReceipt = await uploadBytes(feeRef, feeReceipt); 
    
    
    await addDoc(collection(firestore, "newroom"), {
      firstName: formData.firstName,
      middleName: formData.middleName,
      lastName: formData.lastName,
      studentId: formData.studentId,
      contactEmail: formData.contactEmail,
      contactPhone: formData.contactPhone,
      gender: formData.gender,
      dob: formData.dob,
      currentCourse: formData.currentCourse,
      startYear: formData.startYear,
      endYear: formData.endYear,
      department: formData.department,
      duration: formData.duration,
      program: formData.program,
      permanentAddress: formData.permanentAddress,
      currentAddress: formData.currentAddress,
      hostel: 0,
      room: 0,
      userPhoto: uploadPhoto.ref.fullPath,
      admissionSlip: uploadAdmSlip.ref.fullPath,
      feeReceipt: uploadFeeReceipt.ref.fullPath,

    });

    await addDoc(collection(firestore, "student"), {
      firstName: formData.firstName,
      middleName: formData.middleName,
      lastName: formData.lastName,
      studentId: formData.studentId,
      contactEmail: formData.contactEmail,
      contactPhone: formData.contactPhone,
      gender: formData.gender,
      dob: formData.dob,
      currentCourse: formData.currentCourse,
      startYear: formData.startYear,
      endYear: formData.endYear,
      department: formData.department,
      duration: formData.duration,
      program: formData.program,
      permanentAddress: formData.permanentAddress,
      currentAddress: formData.currentAddress,
      userPhoto: uploadPhoto.ref.fullPath,
    });
    return;
  };

  const getStudentProfileData = async (email) => {
    const collectionRef = collection(firestore, "student");
    const q = query(collectionRef, where("contactEmail", "==", email));

    const result = await getDocs(q);
    return result;
  };

  const getApplication = async (studentId, type) => {
    const collectionRef = collection(firestore, type);
    const q = query(collectionRef, where("studentId", "==", studentId));

    const result = await getDocs(q);
    //console.log(result);
    return result;
  };

  const checkRoom = async (type) => {
    const collectionRef = collection(firestore, type);
    const q = query(collectionRef, where("Allotted", "==", 0));

    const result = await getDocs(q);
    //console.log(result);
    return result;
  };

  const updateRoom = async (type, id, newData) => {
    const docRef = doc(getFirestore(), type, id);
    await updateDoc(docRef, newData);
    console.log("Document updated successfully!");
  };

  const updateStudent = async ( id, newData) => {
    const docRef = doc(getFirestore(), "student", id);
    await updateDoc(docRef, newData);
    console.log("Document updated successfully!");
  };
  
  



  const getProfileImage = (path) =>{
    console.log(path);
    return getDownloadURL(ref(storage, path));
  };

  const getDefaultProfileImage = () =>{
    return getDownloadURL(ref(storage, "uploads/userImage/defaultUserImage"));
  };

  const fetchApplications = async (collectionName) => {
    try {
      const documentsRef = collection(firestore, collectionName);
      const snapshot = await getDocs(documentsRef);
      const documents = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      return documents;
    } catch (error) {
      console.error(`Error fetching documents from collection ${collectionName}:`, error);
      return []; // Return an empty array or handle the error as needed
    }
  };

  const fetchRooms = async () => {
    try {
      const documentsRef = collection(firestore, "h1");
      const snapshot = await getDocs(documentsRef);
      const documents = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      return documents;
    } catch (error) {
      console.error(`Error fetching documents from collection :`, error);
      return []; // Return an empty array or handle the error as needed
    }
  };

  return (
    <FirebaseContext.Provider
      value={{
        handleNewRoomApplicationSubmit,
        getStudentProfileData,
        getProfileImage,
        getDefaultProfileImage,
        fetchApplications,
        getApplication,
        fetchRooms,
        checkRoom,
        updateRoom,
        updateStudent,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
