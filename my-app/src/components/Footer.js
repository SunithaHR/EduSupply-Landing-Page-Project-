// components/Footer.js
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
        <p>Email: info@edusupply.com</p>
        <p>Phone: +1 234 567 890</p>
      </div>
      <div className="social-media">
        <a href="https://facebook.com"><FaFacebook /></a>
        <a href="https://twitter.com"><FaTwitter /></a>
        <a href="https://instagram.com"><FaInstagram /></a>
      </div>
      <div className="quick-links">
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;