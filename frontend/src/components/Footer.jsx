import React from "react";
import "./Footer.css";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate(); 

  return (
    <footer className="footer">
      <div className="footer-title">
        <h2>Food Vision</h2>
      </div>

      <div className="footer-links">
        <h3>Quick Links</h3>
        <ul>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/menu")}>Menu</li>
          <li onClick={() => navigate("/about")}>About</li>
          <li onClick={() => navigate("/classify")}>Classifier</li>
          <li onClick={() => navigate("/recipes")}>Recipes</li>
          <li onClick={() => navigate("/blogs")}>Blogs</li>
        </ul>
      </div>

      <div className="footer-follow">
        <h3>Follow Me On:</h3>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/anas-hasan-a5546524b/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon1"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/believer.1864/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon2"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/AnasHasan786"
            target="_blank"
            rel="noopener noreferrer"
            className="icon3"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      <div className="footer-copyright">
        <p>© 2024 Food Vision. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
