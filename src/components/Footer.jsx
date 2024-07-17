import React from "react";
import Button from "./Button";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Subscribe to our news letter
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at anytime
        </p>
        <div className="input-areas">
          <form>
            <input type="email" name="email" className="footer-input" />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-links wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/products"> It Works</Link>
            <Link to="/services"> Services</Link>
            <Link to="/"> Careers</Link>
            <Link to="/"> Terms of Service</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
