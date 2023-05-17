import React from "react";
import { FaDribbble, FaInstagram } from "react-icons/fa";

import "./navbar.css";

const Navbar = () => {
  return (
    <div className="fe__navbar">
      <div className="fe__navbar-logo">
        <h1>Startup</h1>
      </div>
      <div className="fe__navbar-links">
        <div className="fe__navbar-links_container">
          <div>
            <p>Logo</p>
          </div>
          <div>
            <p>Tour</p>
          </div>
          <div>
            <p>Features</p>
          </div>
          <div>
            <p>Pricing</p>
          </div>
          <div>
            <p>Blog</p>
          </div>
          <div>
            <p>
              <FaDribbble />
            </p>
          </div>
          <div>
            <p>
              <FaInstagram />
            </p>
          </div>
          <div>
            <p>Be</p>
          </div>
        </div>
      </div>
      <div className="fe__navbar-start">
        <button type="button">Get Started</button>
      </div>
    </div>
  );
};

export default Navbar;
