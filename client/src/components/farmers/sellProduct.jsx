import React, { Component } from "react";
import axios from "axios";
//import { Link } from "react-router-dom";
import "../../styles/product.css";

//import FarmerProducts from "../../services/user.service";

const URI = "http://localhost:4000/";

class SaleProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="row ">
          <main className="col ">
            <div className="card card-product">
              <div className="card-body">
                <form type="form" className="form">
                  <div className="row">
                    {/* <div className="col-md-12">
                  <div className="form-group">
                    <label>Product Name</label>
                    <select
                      className="form-control"
                      name="productCategory"
                      value={this.state.productCategory}
                      onChange={this.handleChange}
                    >
                      <option>Select</option>
                      <option>Crop</option>
                      <option>Livestock</option>
                    </select>  
                  </div>
                </div> */}
                    <div className="col-md-6 mx-auto">
                      <div className="form-group">
                        <label>Product Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="productName"
                          value={this.state.productName}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mx-auto">
                      <div className="form-group">
                        <label>Products in Stock</label>
                        <input
                          type="text"
                          className="form-control"
                          name="productName"
                          value={this.state.productName}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>

                    <div className="col-md-6 mx-auto">
                      <div className="form-group">
                        <label>Quantity for Sale</label>
                        <input
                          type="text"
                          className="form-control"
                          name="productType"
                          value={this.state.productType}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mx-auto">
                      <div className="form-group">
                        <label>Price</label>
                        <input
                          type="text"
                          className="form-control"
                          name="quantity"
                          value={this.state.quantity}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <span>Product Location</span>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                  <div className="form-group">
                    <label>State</label>
                    <select
                      className="form-control"
                      name="productCategory"
                      value={this.state.productCategory}
                      onChange={this.handleChange}
                    >
                      <option>Select</option>
                      <option>Crop</option>
                      <option>Livestock</option>
                    </select>  
                  </div>
                </div>
                    
                <div className="col-md-6">
                  <div className="form-group">
                    <label>LGA</label>
                    <select
                      className="form-control"
                      name="productCategory"
                      value={this.state.productCategory}
                      onChange={this.handleChange}
                    >
                      <option>Select</option>
                      <option>Crop</option>
                      <option>Livestock</option>
                    </select>  
                  </div>
                </div>

                    <div className="col-md-6 mx-auto">
                      <div className="form-group">
                        <label>Address</label>
                        <input
                          type="text"
                          className="form-control"
                          name="productType"
                          value={this.state.productType}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mx-auto">
                      <div className="form-group">
                        <label>Nearest Landmark</label>
                        <input
                          type="text"
                          className="form-control"
                          name="quantity"
                          value={this.state.quantity}
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
          </main>
        </div>
      </div>
    );
  }
}

export default SaleProducts;
