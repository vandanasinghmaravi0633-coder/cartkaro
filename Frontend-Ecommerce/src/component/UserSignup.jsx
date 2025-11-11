import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import '../assets/style.css';

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
 
    let submithandler = async (e) => {
        e.preventDefault();
        try {
            let data = await axios.post("http://localhost:5000/api/User/register", {name,email,password})
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className="signup">
      <div className="main-signup">
        <div className="signup-welcome">
          <img
            //  src="https://thumbs.dreamstime.com/b/cartoon-man-pointing-to-sign-up-button-online-registration-account-creation-points-user-interface-digital-onboarding-396493742.jpg"
            src='https://static.vecteezy.com/system/resources/previews/000/963/023/non_2x/woman-working-on-computer-at-desk-vector.jpg'
            alt="Sign Up"
            width="340px"
            height="498px"
            
          />
        </div>

        <div className="sign-form">
          <h1>Create Account</h1><br />

          <form onSubmit={submithandler}>
            <label>Name</label><br />
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            /><br /><br />

            <label>Email</label><br />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            /><br /><br />

            <label>Password</label><br />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            /><br /><br />
 
            <p>
              Already a user? <NavLink to="/User/login">Login</NavLink>
            </p>

            <button type="submit" className="btn">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
