import React, { Component } from "react";

class Preserve extends Component {
  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-body">
            <form type="form">
              <div className="form-gorup">
                <input type="text" className="form-control" />
                <button type="submit" className="btn-search">
                  Search
                </button>
              </div>
            </form>
            <div>Some content here</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Preserve;
