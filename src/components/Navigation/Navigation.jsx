import React from "react";
import "./Navigation.scss";
import logo from "../../assets/logo.png";
const Navigation = () => {
  return (
    <nav className="navbar navbar-light navbar-expand-md">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} />
        </a>
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
            <a className="nav-link" href="/">
              <i className="la la-shopping-cart"></i>
            </a>
          </li>
        </ul>
        <ul className="navbar-nav d-none d-md-flex">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Shop
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact us
            </a>
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
              <a className="nav-link active" href="#">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact us
              </a>
            </li>
          </ul>
          <ul className="navbar-nav d-none d-md-flex">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="la la-search"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                <i className="la la-user"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                <i className="la la-shopping-cart"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
