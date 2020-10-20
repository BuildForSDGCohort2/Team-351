import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import { withRouter } from "react-router-dom";
import axios from "axios"

import "../../styles/login.css";

import Backdrop from "./backdrop";
import AuthService from "../../services/auth.service";

const URL = "http://localhost:4000/";

const responseFacebook = (response) => {
  if(response){
    //this.props.history.push("/farmer")
     let email, password = response.email
     axios
    .post(URL + "login", {  
      email, password
      
    })
    .then((result) => {
      // if (result.data) {
      //   let userData = result.data.response;
      //   let id = parseInt(userData.userId, 10);
      //   localStorage.setItem("user", id);
      // }
      // return result;
      alert("You are logged in")
    });
     //console.log(response.email)
  }
  //console.log(response.);
};

const componentClicked = () => {
  //console.log("Clicked!");
};
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      inValid: "",
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
        if (response.status === 200) {
          //Check user type and redirect to user component
          let user = response.data;
          user.response.userType === "Farmer"
            ? this.props.history.push("/farmer")
            : this.props.history.push("/products");

          this.setState({
            email: "",
            password: "",
          });

          //Hide login modal
          this.props.hide();
        }
      }
    );
  };

  render() {
    const valide = this.state.inValid;
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
              <FacebookLogin
                appId="619143948759544"
                autoLoad
                fields="name,email"
                onClick={componentClicked}
                callback={responseFacebook}
                icon="fa-facebook"
              />
            </div>
            <div className="modal-body">
            
              <form type="form" onSubmit={this.handleSubmit}>
              <span>{valide}</span>
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
