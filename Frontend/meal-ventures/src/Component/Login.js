import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/Login.css";
import { FiEye, FiEyeOff } from "react-icons/fi";
import video from "../Images/login.mp4";
import Logo from "../Images/logo.png";
import poster from "../Images/1.png";
import axios from "axios";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const history=useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function submit(e){
    e.preventDefault();

    try{
      await axios.post("http://localhost:3001/login",{
        email,password
      })
      .then(res=>{
        if(res.data==="Exists"){
            history("/home")
        }
        else if(res.data==="Not Found"){
          alert("Please Register First, User Does not Exist")
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
    <div className="Middle">
      <div className="login-container">
        <div className="video-section">
          <video
            autoPlay
            muted
            loop
            className="background-video"
            poster={poster}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="form-section">
          <div className="logo-container">
            <img src={Logo} alt="Logo" />
            <p className="welcome-text">Welcome back!</p>
          </div>
          <form className="login-form" action="POST" >
            <div className="form-group">
              <input
                className="Input-login"
                type="email"
                id="email"
                placeholder="Your email address"
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                name="email"
              />
              
            </div>
            <div className="form-group">
              <div className="password-container">
                <input
                  className="Input-login"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Your password"
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                  name="password"
                />
                
                <div className="show-password" onClick={handleTogglePassword}>
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </div>
              </div>
            </div>
            <button type="submit" className="login-button" onClick={submit}>
              Login
            </button>
          </form>
          <div className="links">
            <Link to="/signup">Create an account</Link>
            <span className="separator">|</span>
            Forgot password
            {/*<a href="#">Forgot password?</a>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
