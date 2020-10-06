import React, { Component } from "react";
import axios from "axios";
import "../../styles/contact.css";

const URL = "http://localhost:4000/";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
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
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };

    axios.post(URL + "contact", msg).then((data) => {
      if (data) {
        this.setState({
          name: "",
          email: "",
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
                    <label>Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={this.state.name}
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
                <div className="col-md-12 mx-auto">
                  <div className="form-group">
                    <label>Message</label>
                    <textarea
                      type="textarea"
                      rows="7"
                      cols=""
                      className="form-control"
                      id="message"
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
