import React, { useEffect, useState } from 'react';
import axios from 'axios';

 function Profile() {
  const [userData, setUserData] = useState({});

useEffect(()=>{
  async function fetchData(){
    const response={};
      try {
        const token_String = localStorage.getItem("tokenValue")
        const response = await axios.get("http://localhost:3000/profile", {
          headers: { Authorization: `Bearer ${token_String}` }
        });
        setUserData(response.data);
      } catch (err) {
        console.log(err);
      } 
    }
    fetchData();
},[])
 

  if (!userData) {
    return <div>No user data available</div>;
  }

  return (
    <>
      <div><span>Name: {userData.name}</span></div>
      <div><span>Email: {userData.email}</span></div>
      <div><span>Id: {userData.id}</span></div>
    </>
  );
}

export default Profile;
