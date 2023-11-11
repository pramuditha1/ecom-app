import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import navbarLogo from '../../assets/images/navbar-logo.png';

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <img src={navbarLogo} alt="logo"/>
        </div>
        <ul className="nav-links">
          <li className="nav-link">
            <Link to="home">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="portfolio">Gallery</Link>
          </li>
          <li className="nav-link">
            <Link to="about">About us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
