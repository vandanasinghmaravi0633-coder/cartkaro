import React from "react";
import Navbar from "../component/E-Commerce/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1>Welcome to ShopEase</h1>
        <p>Your favorite online shopping platform.</p>
      </div>
    </>
  );
};

export default Home;
