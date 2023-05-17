import React from "react";
import "./header.css";
import Navbar from "../../components/navbar/Navbar";

const Header = () => {
  return (
    <div className="fe__header">
      <Navbar />
      <div className="fe__header-container">
        <h1>Create sites without routine</h1>
        <p>
          Startup gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and
          absolutely no coding.
        </p>
      </div>
    </div>
  );
};

export default Header;
