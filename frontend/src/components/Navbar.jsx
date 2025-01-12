import React, { useState } from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar">
      {/* Hamburger icon for mobile */}
      <div className="hamburger" onClick={handleMenuToggle}>
        &#9776;
      </div>

      <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/menu" className={({ isActive }) => (isActive ? "active-link" : "")}>Menu</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>About</NavLink>
        </li>
        <li>
          <NavLink to="/classify" className={({ isActive }) => (isActive ? "active-link" : "")}>Classifier</NavLink>
        </li>
        <li>
          <NavLink to="/recipes" className={({ isActive }) => (isActive ? "active-link" : "")}>Recipes</NavLink>
        </li>
        <li>
          <NavLink to="/blogs" className={({ isActive }) => (isActive ? "active-link" : "")}>Blogs</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
