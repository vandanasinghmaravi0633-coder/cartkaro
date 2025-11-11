import React, { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios';
const Signup = () => {
  let navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    moblieNumber: ""
  });
  const [image, setImage] = useState("")

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form, [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submitted", form);
    let formdata = new FormData;
    for (let i in form) {
      formdata.append(i, form[i])
    }
    formdata.append("image", image);
    // try {
    //   let { data } = await axios.post("http://localhost:5000/api/user/register", formdata);
    //   console.log("Server ka response:", data);
    //   // if (data.success) {
    //   //   navigate("/verify-otp");
    //   if (data.status === "ok") navigate("/verify-otp");

    //    else {
    //     console.log(data.message)
    //   }

    // } catch (error) {
    //   console.log(error?.response?.data?.message)
    // }
    try {
  let { data } = await axios.post("http://localhost:5000/api/user/register", formdata);
  console.log("Server ka response:", data);


  navigate("/verify-otp"); 
  alert("User registered (test mode) → Navigating to Verify Page!");

} catch (error) {
  console.log("Error:", error?.response?.data?.message);
  alert("Something went wrong: " + error?.response?.data?.message);
}

  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-left">
          <h1>Sign up</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
            <input
              type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
            <input
              type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
            <input
              type="number" name="moblieNumber" placeholder="moblieNumber" value={form.moblieNumber} onChange={handleChange} required />
            <input type="file" name="image" onChange={(e) => { setImage(e.target.files[0]) }} />
            <button type="submit">Register</button>
            <p className="already">Already have account  <NavLink to="/login">Login</NavLink></p>
          </form>
        </div>

        <div className="signup-right">
          <img src="/login.png" alt="Signup" />
        </div>
      </div>
    </div>
  );
};

export default Signup;

