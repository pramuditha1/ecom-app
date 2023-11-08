import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          IMAGE
        </div>
        <ul className="nav-links">
          <li className="nav-link">
            <Link to="home">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="portfolio">Gallary</Link>
          </li>
          <li className="nav-link">
            <Link to="technologies">About us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
