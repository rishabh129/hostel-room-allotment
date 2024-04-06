// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { createContext, useContext, useState, useEffect } from "react";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  query,
  where,
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
const analytics = getAnalytics(app);
const database = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { database };
// export const auth = firebase.auth();


export const FirebaseProvider = (props) => {
  const handleApplicationSubmit = async (formData) => {
    console.log(formData);
    const imageRef = ref(
      storage,
      `uploads/userImage/${Date.now()}-${formData.studentId}`
    );
    const uploadPhoto = await uploadBytes(imageRef, formData.userPhoto);
    
    const admissionRef = ref(
      storage,
      `uploads/admissionSlip/${Date.now()}-${formData.studentId}`
    );
    const uploadAdmSlip = await uploadBytes(admissionRef, formData.admissionSlip);
    
    const feeRef = ref(
      storage,
      `uploads/feeReceipt/${Date.now()}-${formData.studentId}`
    );
    const uploadFeeReceipt = await uploadBytes(feeRef, formData.feeReceipt);
    
    
    return await addDoc(collection(firestore, "applications"), {
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
      admissionSlip: uploadAdmSlip.ref.fullPath,
      feeReceipt: uploadFeeReceipt.ref.fullPath,
    });
  };
  return (
    <FirebaseContext.Provider
      value={{
        handleApplicationSubmit,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
