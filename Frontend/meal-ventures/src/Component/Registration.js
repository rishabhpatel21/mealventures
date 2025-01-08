import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../CSS/Registration.css';

import { FiEye, FiEyeOff } from 'react-icons/fi';
import video from '../Images/registration.mp4';
import poster from '../Images/1.png';
import axios from 'axios';

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const history=useNavigate();

  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function submit(e){
    e.preventDefault();

    try{
      await axios.post("http://localhost:3001/signup",{
        fname,lname,email,password
      })
      .then(res=>{
        if(res.data==="Exists"){
            alert("User already exists!")
        }
        else if(res.data==="Not Found"){
          history("/home",{state:{id:email}})
        }
    
    })
    .catch(e=>{
      alert("Wrong Details")
      console.log(e);
         
      })

    }
    catch(e){
      console.log(e)

    }
  }

  return (
   <div className='Mid'>
    <div className="registration-container">
      <div className="video-section">
      <video
          autoPlay
          muted
          className="background-video"
          poster={poster}
          playsInline
          controls={false}
          loop="loop"
          reverse="reverse"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="form-section">
          <p className="welcome-text">Welcome to Meal Ventures!</p>        
        <form className="registration-form" action='POST'>
          <div className="form-group">
            <input className='Input-login' type="text" id="firstname" name='fname' onChange={(e) => {setFname(e.target.value)}} placeholder="Your First Name" />
            
            <input className='Input-login' type="text" id="lastname" name='lname' onChange={(e) => {setLname(e.target.value)}} placeholder="Your Last Name" />
            
            <input className='Input-login' type="email" id="email" name='email' onChange={(e) => {setEmail(e.target.value)}} placeholder="Your email address" />
            
          </div>
          <div className="form-group">
            
            <div className="password-container">
              <input
                className='Input-login'
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Your password"
                name='password'
                onChange={(e) => {setPassword(e.target.value)}}
              />
              
              <div className="show-password" onClick={handleTogglePassword}>
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </div>
            </div>
          </div>
          <button type="submit" className="registration-button" onClick={submit}>
            Register
          </button>
        </form>
        <div className="links">
        <Link to="/login">Already had an Account?</Link>
        </div>
      </div>
        </div>
   </div>
   
  );
};

export default Registration;
