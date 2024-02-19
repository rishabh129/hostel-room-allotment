import { signOut } from 'firebase/auth';
import React from 'react';
import { database } from './firebase';
import { useHistory } from 'react-router-dom';
//pushCheck
const Dashboard = () => {
  const history = useHistory()
  const handleSignOut=()=>{
    signOut(database).then(val=>{
      console.log("Logged out! See you later")
      history.push('/')
    })
  }
  
  return (
    <div>
      <h1>Dashboard Page</h1>
      <p> Hostel Room Allocation </p>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Dashboard;
