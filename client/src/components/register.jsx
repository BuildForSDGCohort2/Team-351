import React, { Component } from "react";
import axios from "axios";

//import "../styles/register.css";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: "",
      password: "",
      confirmPassword: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  //  componentDidMount(){
  //    console.log(this.props)
  //  }
  handleSubmit = (e) => {
    e.preventDefault();

    let msg = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      address: this.state.address,
      password: this.state.confirmPassword,
    };

    axios.post("http://localhost:4000/user", msg).then((response) => {
      if (response) {
        console.log(response);
        this.setState({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          address: "",
          password: "",
          confirmPassword: "",
        });
        // this.props.history.push("/");
      }
    });
  };
  render() {
    return (
      <div className="container">
        <div className="card card-main mx-auto">
          <div className="card-body contact-body">
            <form type="form" className="form" onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-md-12 mx-auto">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      value={this.state.firstName}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6 mx-auto">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
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
                      className="form-control"
                      id="phoneNumber"
                      value={this.state.phoneNumber}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Status</label>
                    <select class="form-control">
                      <option>Select</option>
                      <option>Farmer</option>
                      <option>Consumer</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-12 mx-auto">
                  <div className="form-group">
                    <label>Address</label>
                    <textarea
                      type="textarea"
                      className="form-control"
                      rows="2"
                      col=""
                      id="address"
                      value={this.state.address}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6 mx-auto">
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="text"
                      className="form-control"
                      id="password"
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
                      className="form-control"
                      id="confirmPassword"
                      value={this.state.confirmPassword}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mx-auto">
                  <div className="d-flex justify-content-end">
                    <button type="submit" className="btn-submit">
                      Submit
                    </button>
                  </div>
                </div>
                <div className="col-md-6 mx-auto">
                  <div className="d-flex justify-content-end">
                    <button type="submit" className="btn-fb">
                      Signup with Facebook
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
