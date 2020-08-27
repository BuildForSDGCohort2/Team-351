import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <FaAlignJustify className="nav-icon" />
            </span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavDropdown">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link to="/agro" className="nav-link">Agro</Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
