import React, { useState } from "react";
import "../assets/style.css";

function OTP() {
  const [otp, setOtp] = useState("");

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // only numbers
    if (value.length <= 6) setOtp(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.length === 6) {
      alert("OTP Verified: " + otp);
    } else {
      alert("Please enter 6-digit OTP");
    }
  };

  return (
    <div className="otp-container">
      <div className="otp-card">
        <h2>OTP Verification</h2>
        <p>Enter the 6-digit OTP sent to your phone</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={otp}
            onChange={handleChange}
            maxLength="4"
            className="otp-input"
            placeholder="Enter OTP"
          />
          <button type="submit" className="otp-btn">
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
}

export default OTP;
