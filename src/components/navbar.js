import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <h2>My Portfolio</h2>
      <div className="nav-links">
        <a href="#about" className="navi">About</a>
        <a href="#projects" className="navi">Projects</a>
        <a href="#contact" className="navi">Contact</a>
        </div>
    </div>
  );
}

export default Navbar;