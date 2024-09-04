import React from 'react'
import { useState } from 'react';
import axios from 'axios';
function Signin({onSwitchToSignUp}) {

    const [email,setEmail]=useState("");
    const [password,setpassword]=useState("");
    async function handleSubmit(e){
e.preventDefault();
const credentials={email,password};
console.log("hello");
const content=await axios.post("http://localhost:3000/signin",credentials);

console.log(content.data);
console.log(content.data.token);
localStorage.setItem("tokenValue",content.data.token);
}
  return (
    <div>
    <div className="container">
      <div className="maindiv">Login Form</div>
      <div className="switchpages"><button className="switchpages1">Login</button>
      <button className="switchpages2" onClick={onSwitchToSignUp}>Signup</button></div><br/>
      <form onSubmit={handleSubmit}>
        <div><input type="email" value={email} placeholder="Email Address" onChange={(e)=>{setEmail(e.target.value)}}/></div>
        <div><input type="password" value={password} placeholder="Password" onChange={(e)=>{setpassword(e.target.value)}}/></div>
        <div className="fgt_pwd"><a href="#">Forgot password?</a></div>
        <button>Login</button>
        <div className="footer-div">Not a member?<a href="#">Signup now</a></div>
      </form>
    </div></div>
  )
}

export default Signin
