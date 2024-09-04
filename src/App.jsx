import { useState } from 'react'
import './App.css'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Profile from './components/Profile'
import {BrowserRouter,Routes,Route} from "react-router-dom"
// import Auth from "./components/Auth"
function App() {

  return (
    <>
 
    
     <BrowserRouter>
     <Routes>
      <Route path="/Signin" element={<Signin/>}></Route>
      <Route path="/Signup" element={<Signup/>}></Route>
      <Route path="/Profile" element={<Profile/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
