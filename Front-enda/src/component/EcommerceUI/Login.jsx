import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../assets/style.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submithandler = async (e) => {
    e.preventDefault();
    try {
      const user = { email, password };
      const { data } = await axios.post("http://localhost:4000/api/user/login", user);

      console.log("Login success:", data);
      alert("Login successful!");
      
      navigate("/home");

    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="login">
      <div className="main-login">
        <div className="login-welcome">
          <img
            src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo="
            alt="Login"
            width="330px"
            height="600px"
          />
        </div>

        <div className="login-form">
          <h1>Login Account</h1><br />

          <form onSubmit={submithandler}>
            <label>Email</label><br />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            /><br /><br />

            <label>Password</label><br />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            /><br /><br />

            <NavLink to="/forget">Forgot Password?</NavLink><br /><br />

            <p>New user? <NavLink to="/signup">Sign up</NavLink></p>

            <button type="submit" className="btn">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
