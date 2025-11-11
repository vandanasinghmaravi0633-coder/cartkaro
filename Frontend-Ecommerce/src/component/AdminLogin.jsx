// import React, { useState } from "react";
// import axios from "axios";

// const AdminLogin = () => {
//   const [loginData, setLoginData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setLoginData({ ...loginData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/api/admin/login", loginData);
//       alert(res.data.message || "Admin logged in successfully!");
//       localStorage.setItem("admintoken", res.data.token);
//       setLoginData({ email: "", password: "" });
//     } catch (err) {
//       alert(err.response?.data?.message || "Invalid credentials");
//     }
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "60px" }}>
//       <h2>Admin Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="email"
//         name="email" placeholder="Enter Admin Email"value={loginData.email}onChange={handleChange} /><br /><br />
//         <input type="password" name="password" placeholder="Enter Password" value={loginData.password} onChange={handleChange}/><br /><br />
//         <button type="submit">Login Admin</button>
//       </form>
//     </div>
//   );
// };

// export default AdminLogin;


// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const AdminLogin = () => {
//   const [admin, setAdmin] = useState({ email: "", password: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setAdmin({ ...admin, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/api/admin/login", admin, {
//         withCredentials: true,
//       });
//       alert(res.data.message);
//       navigate("/dashboard");
//     } catch (err) {
//       alert(err.response?.data?.message || "Invalid credentials!");
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2>Admin Login</h2>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Enter Email"
//           value={admin.email}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Enter Password"
//           value={admin.password}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//       <p>
//         Don’t have an account?{" "}
//         <span style={{ color: "blue", cursor: "pointer" }} onClick={() => navigate("/admin/signup")}>
//           Register here
//         </span>
//       </p>
//     </div>
//   );
// };

// const styles = {
//   container: { textAlign: "center", marginTop: "180px" },
//   form: { display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" },
// };

// export default AdminLogin;



import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../assets/style.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submithandler = async (e) => {
    e.preventDefault();
    try {
      const user = { email, password };
      const { data } = await axios.post("http://localhost:5000/api/admin/login", { email, password } );

      console.log("Login success:", data);
      alert("Login successful!");
      
      navigate("/home");

    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid email or password!");
    }
  };
8
  return (
    <div className="login">
      <div className="main-login">
        <div className="login-welcome">
          <img
            // src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo="
           src='https://static.vecteezy.com/system/resources/thumbnails/002/923/443/small_2x/pensive-upset-and-sad-girl-waiting-a-phone-call-free-vector.jpg'
            alt="Login"
            width="330px"
            height="500px"
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
              autoComplete='false'
              onChange={(e) => setPassword(e.target.value)}
            /><br /><br />

            <NavLink to="/forget">Forgot Password?</NavLink><br /><br />

            <p>New user? <NavLink to="/admin/signup">Sign up</NavLink></p>

            <button type="submit" className="btn">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
