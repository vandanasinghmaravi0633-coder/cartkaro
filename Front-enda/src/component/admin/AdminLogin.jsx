import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';   // ✅ Add this import
import "../../assets/style.css"

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();  // ✅ For redirect

  const submithandler = async (e) => {
    e.preventDefault();
    try {
      const admin = { email, password };
      const { data } = await axios.post(
        "http://localhost:4000/api/admin/loginAdmin",
        admin,
        { withCredentials: true }
      );

      console.log("Login success:", data);

      localStorage.setItem("adminToken", data.token || "true");

      alert("Login successful!");

                navigate("/dashboard");

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
            height="500px"
          />
        </div>

        <div className="login-form">
          <h1>Admin Login </h1><br />
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
            <button type="submit" className="btn">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
