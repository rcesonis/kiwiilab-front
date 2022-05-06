import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container-fluid padding-0 py-3 justify-content-center">
        <div className="row pt-3">
          <div className="col-sm-12 text-center">
            <Link to="/" className="navbar-brand">
              <img src={logo} alt="logo" />
            </Link>
          </div>
        </div>
        <div className="row g-0 justify-content-center">
          <div
            className="col-sm-12
           justify-content-center align-items-center padding-0 text-center"
          >
            <div className="justify-content-center align-items-center p-1 flex-column">
              <Link to="/products" className="navbar-brand px-3">
                <span className="text-white footer-links">Shop</span>
              </Link>
              <Link to="/about-us" className="navbar-brand px-3">
                <span className="text-white footer-links">About us</span>
              </Link>
              <Link to="/contact-us" className="navbar-brand px-3">
                <span className="text-white footer-links">Contact us</span>
              </Link>
            </div>
          </div>
          <div
            className="col-sm-12
           justify-content-center align-items-center padding-0 text-center p-2"
          >
            <div className="justify-content-center align-items-center flex-column">
              <Link to="/about-us" className="navbar-brand">
                <i class="lab la-facebook-f text-white"></i>
              </Link>
              <Link to="/about-us" className="navbar-brand">
                <i class="lab la-instagram text-white  "></i>
              </Link>
              <Link to="/about-us" className="navbar-brand">
                <i class="lab la-linkedin-in text-white "></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
