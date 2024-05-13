import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            Supreme Food Products is dedicated to providing high-quality sago
            products to our customers in Tamil Nadu and Maharashtra.
          </p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p><span>Email:</span> zakirahamed@yahoo.com</p>
          <p><span>Phone:</span> +91 94433 66774</p>
          <p><span>Address:</span> 37, Ayyasamy Road, Shop No 3, Ist Floor,<br/>Shevapet, Salem - 636 002. Tamilnadu.</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="#" className="social-icon">
              <FaTwitter />
            </a>
            <a href="#" className="social-icon">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Supreme Food Products. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
