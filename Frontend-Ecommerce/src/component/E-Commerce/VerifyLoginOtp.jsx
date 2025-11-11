import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const VerifyLoginOtp = () => {
    const [otp, setOtp] = useState("");
    const navigate = useNavigate();
    const email = localStorage.getItem("email"); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.post("http://localhost:5000/api/user/verify-login-otp", {
                email,
                otp
            });

            if (data.success) {
                alert("Login verified successfully!");
                localStorage.removeItem("email"); 
                navigate("/home"); 
            } else {
                alert(data.message || "Invalid OTP!");
            }
        } catch (error) {
            console.log(error?.response?.data?.message);
        }
    };

    return (
        <div class  Name="signup-container">
            <div className="signup-card">
                <div className="signup-left">
                    <h1>Verify OTP</h1>
                    <form onSubmit={handleSubmit}>
                        <p>OTP sent to: <strong>{email}</strong></p>
                        <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} required />
                        <button type="submit">Verify</button>
                    </form>
                </div>
               
            </div>
        </div>
    );
};

export default VerifyLoginOtp;
