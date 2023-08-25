import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaCaretDown, FaTimes } from "react-icons/fa";
import "./Button.css";

function Button() {

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }
  return (
    <>
      <Link to="/login" className="login">
        Login
      </Link>
      <Link to="/register" className="signup">
        Sign Up
      </Link>
      <button className="nav-btn nav-close-btn" onClick={showNavbar}>
        <FaTimes />
      </button>
    </>
  )
}

export default Button;