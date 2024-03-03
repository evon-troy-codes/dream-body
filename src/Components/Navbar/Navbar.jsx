import React from "react";
import "./Navbar.css";
// import logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <nav className="container">
      {/* <img src={logo} alt="" className="logo" /> */}
      <ul>
        <li>HOME</li>
        <li>FIND A DOCTOR</li>
        <li>PROCEDURES</li>
        <li>PHOTOS & REVIEWS</li>
        <li>FORUMS</li>
        <li>
          <button className="btn">CONTACT US</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
