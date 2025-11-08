import React from "react";
import { FaHiking } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <FaHiking className="logo-icon" />
        <h2>ExploreNepal</h2>
      </div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#treks">Treks</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
