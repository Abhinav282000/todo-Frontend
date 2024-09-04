import React from 'react'
import Signin from './Signin'
import Signup from './Signup'
import { useState } from 'react';
function Auth() {

const[Login,setLogin]=useState(true);
const handleSwitchToSignIn=()=>{setLogin(true)}
const handleSwitchToSignUp=()=>{setLogin(false)}
  return (
    <div>
      {Login?(<Signin onSwitchToSignUp={handleSwitchToSignUp}/>):(<Signup onSwitchToSignIn={handleSwitchToSignIn}/>)}
    </div>
  )
}

export default Auth
