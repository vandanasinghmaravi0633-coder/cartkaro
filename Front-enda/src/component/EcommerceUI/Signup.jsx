import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import '../../assets/style.css';

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let [image, setimage] = useState("")
 
 
    let submithandler = async (e) => {
        e.preventDefault();
        try {
            let formdata = new FormData();
            formdata.append("name", name)
            formdata.append("email", email)
            formdata.append("password", password)
        //    formdata.append("image", image[0])
            for (let i of image) {
               formdata.append("image", i)
            }
 
            let data = await axios.post("http://localhost:4000/api/user/register", formdata)
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
            src="https://thumbs.dreamstime.com/b/cartoon-man-pointing-to-sign-up-button-online-registration-account-creation-points-user-interface-digital-onboarding-396493742.jpg"
            alt="Sign Up"
            width="330px"
            height="600px"
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

            <label htmlFor="image">Image</label><br />
            <input type="file" multiple name="image" id="" onChange={(e) => { setimage(e.target.files) }} /> <br /><br />


            <p>
              Already a user? <NavLink to="/login">Login</NavLink>
            </p>

            <button type="submit" className="btn">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
