import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
const VerifyUser = () => {
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let { data } = await axios.post("http://localhost:5000/api/user/verify-user", { email, otp });
      if (data.success) {
        nav("/")
      } else {
        console.log(data.message)
      }

    } catch (error) {
      console.log(error?.response?.data?.message)
    }

  }
  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-left">
          <h1>Verify OTP</h1>
          <form onSubmit={handleSubmit}>

            <input
              type="email" name="email" placeholder="Your Email" value={email} onChange={(e) => { setEmail(e.target.value) }} required />
            <input
              type="text" name="otp" placeholder="otp" value={otp} onChange={(e) => { setOtp(e.target.value) }} required />

            <button type="submit">Verify Otp</button>
          </form>
        </div>

        <div className="signup-right">
          <img src="/login.png" alt="Signup" />
        </div>
      </div>
    </div>
  );
};

export default VerifyUser;

