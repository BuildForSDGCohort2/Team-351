import React, { Component } from "react";

class NewProduct extends Component {
  render() {
    return (
      <div className="container">
        <div className="card mx-auto">
          <div className="card-body">
            <form type="form" className="form" onSubmit="">
              <div className="row">
                <div className="col-md-12 mx-auto">
                  <div className="form-group">
                    <label>Product Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value=""
                      onChange=""
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Product Category</label>
                    <select class="form-control">
                      <option>Select</option>
                      <option>Vegitable</option>
                      <option>Grains</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 mx-auto">
                  <div className="form-group">
                    <label>Type</label>
                    <input
                      type="text"
                      className="form-control"
                      id="ptype"
                      value=""
                      onChange=""
                    />
                  </div>
                </div>
                <div className="col-md-6 mx-auto">
                  <div className="form-group">
                    <label>Quantity Per kg</label>
                    <input
                      type="text"
                      className="form-control"
                      id="quantity"
                      value=""
                      onChange=""
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

export default NewProduct;
