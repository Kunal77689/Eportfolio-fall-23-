// Footer.js

import React from "react";
import { FaEnvelope, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="horizontal-line"></div>
      <div className="social-links">
        <a href="mailto:ksikka@mun.ca" className="social-link">
          <FaEnvelope className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/kunal-sikka-015192207/"
          className="social-link"
        >
          <FaLinkedin className="icon" />
        </a>
        <a
          href="https://www.instagram.com/kunal_sikka77/"
          className="social-link"
        >
          <FaInstagram className="icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
