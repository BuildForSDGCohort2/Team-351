import React, { Component } from "react";
import axios from "axios";
import "../styles/register.css";

// const URL = "http://localhost:4000/";
const URL = "https://agroconnects.herokuapp.com/";

class StorageTips extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: "",
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

    let storageTips = {
      categoryId: Math.floor(Math.random() * 100000) + 1,
      title: this.state.title,
      content: this.state.content,
    };

    axios.post(URL + "add-tips", storageTips).then((response) => {
      console.log(response);
    });
  };
  render() {
    return (
      <div className="container">
        <div className="card card-contact mx-auto">
          <div className="card-body contact-body">
            <form type="form" className="form" onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-md mx-auto">
                  <div className="form-group">
                    <label>Title</label>
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      value={this.state.title}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="col-md-12 mx-auto">
                  <div className="form-group">
                    <label>Content</label>
                    <textarea
                      type="textarea"
                      rows="7"
                      cols=""
                      className="form-control"
                      name="content"
                      value={this.state.content}
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

export default StorageTips;
