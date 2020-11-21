import React, { Component } from "react";
import axios from "axios";
import "../../styles/contact.css";

//const URL = "http://localhost:4000/";
const URL = "https://agroconnects.herokuapp.com/"

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      subject: "",
      message: "",
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
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message,
    };

    axios.post(URL + "contact", msg).then((data) => {
      if (data) {
        this.setState({
          email: "",
          subject: "",
          message: "",
        });
        this.props.history.push("/");
      }
    });
  };
  render() {
    return (
      <div className="container">
        <div className="card card-contact mx-auto">
          <div className="card-header contact-header">Contact Us</div>
          <div className="card-body contact-body">
            <form type="form" className="form" onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-md-6 mx-auto">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6 mx-auto">
                  <div className="form-group">
                    <label>Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      value={this.state.subject}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-12 mx-auto">
                  <div className="form-group">
                    <label>Message</label>
                    <textarea
                      type="textarea"
                      rows="7"
                      cols=""
                      className="form-control"
                      name="message"
                      value={this.state.message}
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

export default Contact;
