import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "../../styles/login.css";

import Backdrop from "./backdrop";
import AuthService from "../../services/auth.service";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    AuthService.login(this.state.email, this.state.password).then(
      (response) => {
        if (response) {
          let user = response.data;
          console.log(user)
          user.response.userType === "Farmer"
            ? this.props.history.push("/farmer")
            : this.props.history.push("/products");

          this.setState({
            email: "",
            password: "",
          });

          this.props.hide();
        }
      }
    );
  };
  render() {
    return (
      <>
        <Backdrop show={this.props.show} hide={this.props.hide} />
        <div
          className="Modal"
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? 1 : 0,
          }}
        >
          <div className="modal-content">
            <div className="modal-header d-flex justify-content-center">
              <button className="btn-primary fb-btn">
                Login with Facebook
              </button>
            </div>
            <div className="modal-body">
              <form type="form" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="">Email</label>
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="d-flex justify-content-end">
                  <button className="btn-primary" type="submit">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Login);
