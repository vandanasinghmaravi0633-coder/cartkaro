import React from "react";
import "./E-Commerce.css";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3>CartKaro</h3>
          <p>
            Discover a wide range of trendy clothing, accessories, and home
            products at affordable prices. Shop smart and stylish every day!
          </p>
        </div>

\        <div className="footer-section">
          <h4>Get to know Us</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Become a Supplier</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

\        <div className="footer-section">
          <h4>Let Us Help You</h4>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Return Policy</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Connect With Us</h4>
          <div className="social-icons">
             <a href="#" className="icon facebook"><Facebook /></a>
          <a href="#" className="icon instagram"><Instagram /></a>
          <a href="#" className="icon twitter"><Twitter /></a>
          <a href="#" className="icon youtube"><Youtube /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()}. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
