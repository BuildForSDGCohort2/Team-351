import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";

import Login from "./login";

import "../../styles/navBar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      isLogin: false,
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.logout = this.logout.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  logout(e) {
    e.preventDefault();
    localStorage.removeItem("user");
    this.props.history.push("/");
  }
  render() {
    const loginLink = (
      <ul className="navbar-nav ml-auto">
        <li className="navbar-item">
          <Link to="/" className="nav-link" onClick={this.showModal}>
            Login
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
      </ul>
    );

    const userLink = (
      <ul className="navbar-nav ml-auto">
        <li className="navbar-item">
          <Link className="nav-link" to="/farmer">
            User
          </Link>
        </li>
        <li className="navbar-item">
          <Link className="nav-link" to="/" onClick={this.logout}>
            Logout
          </Link>
        </li>
      </ul>
    );
    return (
      <>
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
                <li className="nav-item active">
                  <Link to="/products" className="nav-link">
                    Products
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
              {/* render login/logout button if token exist in localStorage */}
              {localStorage.user ? userLink : loginLink}
            </div>
          </div>
        </nav>
        <Login show={this.state.show} hide={this.hideModal} />
      </>
    );
  }
}

export default withRouter(Navbar);
