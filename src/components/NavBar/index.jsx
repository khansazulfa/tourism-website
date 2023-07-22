import { useRef } from "react";
import {FaBars, FaCaretDown,FaTimes} from "react-icons/fa";
import {Link} from "react-router-dom";
import "./NavBar.css" ;


function NavBar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <div className="container">
      <nav ref={navRef} className="navbar">
       <img className="imgLogo" src="src/assets/images/logo.png" alt="logo" />
        <ul className="nav-links">
        <Link to="/" className="home active">
          <li>Home</li>
        </Link>
        <Link to="/tourism" className="tourism">
          <li>Tourism</li>
        </Link>
        <Link to="/category" className="category">
          <li>Category
          <FaCaretDown />
          </li>
        </Link>
        <Link to="/login" className="login">
          <li>Login</li>
        </Link>
        <Link to="/signup" className="signup">
          <li>Sign Up</li>
        </Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </ul>
      </nav>
    <button onClick={showNavbar} className="nav-btn">
      <FaBars />
    </button>
    </div>
   
    )
  }
  
  export default NavBar;
  