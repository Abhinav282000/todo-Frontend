import React from 'react'
import axios from 'axios'
import { useState } from 'react';
function Signup({onSwitchToSignIn}) {
  const[name,setname]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

   async function handleSubmit(e){
    e.preventDefault();
      const data_of_user={name,email,password};
        const response=await axios.post("http://localhost:3000/signup",data_of_user
          );
        alert(response.data);
         
    }
  return (
    <div> <div className="container">
      <div className="maindiv">Signup Form</div>
      <div className="switchpages"><button className="switchpages1" onClick={onSwitchToSignIn}>Login</button>
      <button className="switchpages2">Signup</button></div><br/>
      <form onSubmit={handleSubmit}>
<div>       <input type="text" value={name} placeholder="Enter your name" onChange={(e)=>{setname(e.target.value)}}/></div>
        <div><input type="email" value={email} placeholder="Email Address" onChange={(e)=>{setEmail(e.target.value)}}/></div>
        <div><input type="password" value={password} placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/></div>
     <button>Signup</button>
      </form></div>
    </div>
  )
}

export default Signup
