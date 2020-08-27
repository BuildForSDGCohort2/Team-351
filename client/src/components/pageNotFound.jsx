import React, { Component } from "react";

class PageNotFound extends Component {
  render() {
    return (
      <div className="container">
      <div className="card mx-auto">
        <div className="card-body d-flex justify-content-center not-found">
          <h2>Page Not found</h2>
        </div>
        <div className="d-flex justify-content-end">
          <button className="btn-back">Back</button>
        </div>
      </div>
    </div>
    );
  }
}  

export default PageNotFound;
