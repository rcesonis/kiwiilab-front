import React from "react";
import "./Navigation.scss";
import logo from "../../assets/logo.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartIcon from "../CartIcon/CartIcon";

const Navigation = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  console.log(quantity);
  return (
    <nav className="navbar navbar-light navbar-expand-md">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" />
        </Link>
        <ul className="navbar-nav d-flex flex-row d-md-none">
          <li className="nav-item">
            <a className="nav-link" href="/">
              <i className="la la-search"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              <i className="la la-user"></i>
            </a>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link">
              <CartIcon cartContent={quantity} />
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav d-none d-md-flex">
          <li className="nav-item">
            <Link to="/products" className="nav-link">
              Shop
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about-us" className="nav-link">
              About us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact-us" className="nav-link">
              Contact us
            </Link>
          </li>
        </ul>

        <button
          data-bs-toggle="collapse"
          className="navbar-toggler nav-icon"
          data-bs-target="#navcol-1"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navcol-1"
        >
          <ul className="navbar-nav d-md-none">
            <li className="nav-item">
              <Link to="/products" className="nav-link">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about-us" className="nav-link">
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact-us" className="nav-link">
                Contact us
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav d-none d-md-flex">
            <li className="nav-item">
              <Link to="/contact-us" className="nav-link">
                <i className="la la-search"></i>{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact-us" className="nav-link">
                <i className="la la-user"></i>{" "}
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/cart" className="nav-link">
                <CartIcon cartContent={quantity} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
