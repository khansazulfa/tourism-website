import { useRef, useState } from "react";
import { FaBars, FaCaretDown, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { navItems, serviceDropdown } from "./NavItems";
import Dropdown from "./Dropdown";
import Button from "../Button";


function NavBar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="container">
      <nav ref={navRef} className="navbar">
        <Link to="/" className="navbar-logo">
          <img className="imgLogo" src="src/assets/images/logo.png" alt="logo" />
        </Link>
        <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "Category") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title} <FaCaretDown /></Link>
                  {dropdown && <Dropdown />}

                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}

        </ul>
        <Button />

        {/* <Link to="/login" className="login">
          <li>Login</li>
        </Link>
        <Link to="/register" className="signup">
          <li>Sign Up</li>
        </Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button> */}

      </nav>
      <button onClick={showNavbar} className="nav-btn">
        <FaBars />
      </button>
    </div>

  )
}

export default NavBar;
