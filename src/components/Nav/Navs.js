import React, { useState } from "react";
import "./Navs.css";
import logo from "./../../Assets/logo-foodie.png";

const Navs = ({ refs }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    setIsMenuOpen(false); // Close menu after navigation
  };

  return (
    <div className="container-nav">
      <div className="logo" onClick={() => scrollTo(refs.homeRef)}>
        <img src={logo} title="logo" alt="Foodie Logo" />
      </div>

      {/* Hamburger Menu Button */}
      <div 
        className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li onClick={() => scrollTo(refs.homeRef)}>Home</li>
          <li onClick={() => scrollTo(refs.aboutRef)}>About us</li>
          <li onClick={() => scrollTo(refs.exploreRef)}>Explore Foods</li>
          <li onClick={() => scrollTo(refs.faqRef)}>FAQ</li>
          <li className="nav-num" onClick={() => setIsMenuOpen(false)}>121 3090 5465</li>
        </ul>
      </div>
    </div>
  );
};

export default Navs;