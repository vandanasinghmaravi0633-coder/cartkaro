// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";


// const Login = () => {
//   const [form, setForm] = useState({ email: "", password: "" });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit =async (e) => {
//     e.preventDefault();
//     if (!form.email || !form.password) {
//       alert("Please fill in all fields");
//       return;
//     }
    
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <div className="login-left">
//           <h1>Welcome Back 👋</h1>
//           <p>Login to continue to your account</p>

//           <form onSubmit={handleSubmit}>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               value={form.email}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="password"
//               name="password"
//               placeholder="Enter your password"
//               value={form.password}
//               onChange={handleChange}
//               required
//             />

//             <button type="submit">Login</button>
//           </form>

//           <p className="register">
//             Don’t have an account? <NavLink to="/signup">Sign up</NavLink>
//           </p>
//         </div>

//         <div className="login-right">
//           <img src="/login.png" alt="Login" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("http://localhost:5000/api/user/login", form);
      console.log("Login Response:", data);

      if (data.success) {
        // 👇 navigate to OTP verify page for login
        localStorage.setItem("email", form.email); // store email to verify later
        navigate("/verify-login-otp");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error?.response?.data?.message);
      alert("Something went wrong while logging in!");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-left">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
            <button type="submit">Login</button>
          </form>
        </div>
        <div className="signup-right">
          <img src="/login.png" alt="Login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
