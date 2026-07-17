import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="logo">
        🎵 InstaVibe
      </div>

      <div className="nav-links">
        <Link to="/Home">Home</Link>
        <Link to="/Songs">Songs</Link>
        <Link to="/Captions">Captions</Link>
        <Link to="/Favorites">Favorites</Link>
        <Link to="/About">About</Link>
      </div>

      <button className="login-btn">Login</button>
    </nav>
  );
};

export default Navbar;