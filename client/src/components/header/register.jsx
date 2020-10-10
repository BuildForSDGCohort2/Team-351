import React, { Component } from "react";
import axios from "axios";
import "../../styles/register.css";

// const URL = "http://localhost:4000/";
const URL = "https://agroconnects.herokuapp.com/";

const validEmailRegex = RegExp(
  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
);

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

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

      errors: {
        fullName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
      },
      formInvalid: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    let err = this.state.errors;

    switch (name) {
      case "email":
        err.email = validEmailRegex.test(value)
          ? ""
          : "Please enter valid email";
        break;
      case "password":
        err.password =
          value.length < 8 ? "Password must be atleat 8 characters" : "";
        break;
      default:
        break;
    }

    if (this.state.confirmPassword.length === this.state.password.length - 1) {
      err.confirmPassword = "";
    } else {
      err.confirmPassword = "Password not matched";
    }
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    //Check form fields status to make sure is not empty
    let err = this.state.errors;

    if (this.state.fullName === "") {
      err.fullName = " Name required";
    }

    if (this.state.email === "") {
      err.email = "Email required";
    }
    if (this.state.phoneNumber === "") {
      err.phoneNumber = "Phone Number required";
    }

    if (this.state.password === "") {
      err.password = "Pasword required";
    }

    if (validateForm(this.state.errors)) {
      //create instance of user model
      let user = {
        userId: Math.floor(Math.random() * 100000) + 1,
        fullName: this.state.fullName,
        email: this.state.email,
        phoneNumber: this.state.phoneNumber,
        userType: this.state.userType,
        username: this.state.username,
        password: this.state.confirmPassword,
      };

      //send http call to backend
      axios.post(URL + "register", user).then((response) => {
        if (response) {
          let data = response.data;

          localStorage.setItem("user", data.userId);
          //Redirect user
          if (data.userType === "Farmer") {
            this.props.history.push("/farmer");
          } else {
            this.props.history.push("/products");
          }
        }
      });
    } else {
      //send validation notification
      this.setState({
        formInvalid: "Please fill required values in form fields",
      });
      // this.props.history.push("/register");
    }
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <div className="card card-main mx-auto">
          {/* <div className="d-flex justify-content-center">
            <button type="submit" className="btn-primary btn-fb">
              Register with Facebook
            </button>
          </div> */}
          <div className="card-body contact-body">
            <form type="form" className="form" onSubmit={this.handleSubmit}>
              <h5 className="text-center">
                <span className="error">{this.state.formInvalid}</span>
              </h5>
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
                      noValidate
                    />
                    {errors.fullName.length > 0 && (
                      <span className="error">{errors.fullName}</span>
                    )}
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
                      noValidate
                    />
                    {errors.email.length > 0 && (
                      <span className="error">{errors.email}</span>
                    )}
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
                      noValidate
                    />
                    {errors.phoneNumber.length > 0 && (
                      <span className="error">{errors.phoneNumber}</span>
                    )}
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
                      type="password"
                      className="form-control control"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      noValidate
                    />
                    {errors.password.length > 0 && (
                      <span className="error">{errors.password}</span>
                    )}
                  </div>
                </div>
                <div className="col-md-6 mx-auto">
                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      className="form-control control"
                      name="confirmPassword"
                      value={this.state.confirmPassword}
                      onChange={this.handleChange}
                      noValidate
                    />
                    {errors.confirmPassword.length > 0 && (
                      <span className="error">{errors.confirmPassword}</span>
                    )}
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
