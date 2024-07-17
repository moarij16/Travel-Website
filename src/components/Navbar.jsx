import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import "../styles/Navbar.css"; // Import the CSS file

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [button, setButton] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
    return () => window.removeEventListener("resize", showButton);
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <p className="logo">Paktvl</p> <FontAwesomeIcon icon={faPlane} />
          </Link>
          <div className="menu-icon" onClick={toggleMenu}>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </div>
          <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-links" onClick={toggleMenu}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-links" onClick={toggleMenu}>
                Products
              </Link>
            </li>
            <li className="nav-item">
              {!button && (
                <Link
                  to="/signup"
                  className="nav-links-mobile"
                  onClick={toggleMenu}
                >
                  Sign Up
                </Link>
              )}
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Sign Up</Button>}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
