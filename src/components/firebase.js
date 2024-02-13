// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
    apiKey: "AIzaSyCcVMbD_ZhGdY1Md5r7KKsdIQPoaK0aEoE",
    authDomain: "hostelroomallocation-b14d9.firebaseapp.com",
    projectId: "hostelroomallocation-b14d9",
    storageBucket: "hostelroomallocation-b14d9.appspot.com",
    messagingSenderId: "1087980853194",
    appId: "1:1087980853194:web:614c2098989ee3a33b6133",
    measurementId: "G-NFNDEEPTXG"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getAuth(app);

export { database };
// export const auth = firebase.auth();
export default app;