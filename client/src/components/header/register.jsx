import React, { Component } from "react";
import axios from "axios";

import "../../styles/register.css";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      email: "",
      phoneNumber: "",
      userType: "",
      username: "",
      password: "",
      confirmPassword: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let msg = {
      fullName: this.state.fullName,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      userType: this.state.userType,
      username: this.state.username,
      password: this.state.confirmPassword,
    };

    axios.post("http://localhost:4000/register", msg).then((response) => {
      if (response) {
        let data = response.data;

        //Redirect user
        if (data.userType === "Farmer") {
          this.props.history.push("/farmer");
        }else{
          this.props.history.push("/products");
        }
      }
    });
  };
  render() {
    return (
      <div className="container">
        <div className="card card-main mx-auto">
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn-primary btn-fb">
              Register with Facebook
            </button>
          </div>
          <div className="card-body contact-body">
            <form type="form" className="form" onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-md-12 mx-auto">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      className="form-control control"
                      name="fullName"
                      value={this.state.fullName}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6 mx-auto">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control control"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6 mx-auto">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      className="form-control control"
                      name="phoneNumber"
                      value={this.state.phoneNumber}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Status</label>
                    <select
                      className="form-control control"
                      name="userType"
                      onChange={this.handleChange}
                      value={this.state.userType}
                    >
                      <option>Select</option>
                      <option>Farmer</option>
                      <option>Consumer</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 mx-auto">
                  <div className="form-group">
                    <label>Username</label>
                    <input
                      type="text"
                      className="form-control control"
                      name="username"
                      value={this.state.username}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6 mx-auto">
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="text"
                      className="form-control control"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6 mx-auto">
                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                      type="text"
                      className="form-control control"
                      name="confirmPassword"
                      value={this.state.confirmPassword}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <button type="submit" className="btn-submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
