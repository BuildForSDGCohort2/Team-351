import React, { Component } from "react";
//import axios from "axios";

const URL = "http://localhost:4000/";
// const URL = "https://agroconnects.herokuapp.com/";

class productStorage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      productData: {},
      name: "",
      phoneNumber: "",
    };
   
  }

  render() {
    

    return (
      <div className="container productContainer">
        
            <div className="row">
              <div className="col ">
                <div className="card card-product">
                  <div className="card-body">
                    <div className="row">
                      {/* <div className="col-md-3">
                        <div className="image-wrap">
                          <img src="" alt="productImage" />
                        </div>
                      </div> */}
                      <div className="col-md-3">
                        <h5 className="mb-3">
                          <i>Product Details</i>
                        </h5>
                        <dl className="dlist-align">
                          <dt>Product Name</dt>
                          <dd>item.product.productName</dd>
                        </dl>
                        <dl className="dlist-align">
                          <dt>Quantity</dt>
                          <dd>item.product.quantity kg</dd>
                        </dl>
                        <dl className="dlist-align">
                          <dt>Price (per kg)</dt>
                          <dd>
                            <span className="price">
                              <del className="price-old">N</del>
                              item.product.price    
                            </span>
                          </dd>
                        </dl>
                        <h5 className="mb-3">
                          <i>Product Owner Details</i>
                        </h5>
                        <dl className="dlist-align">
                          <dt>Farmer</dt>
                          <dd> item.farmer.farmerName </dd>
                        </dl>
                      </div>
                      <div className="col-sm-5">
                        <h5>
                          <i>Product location</i>
                        </h5>
                        <dl className="dlist-align">
                          <dt>State</dt>
                          <dd> item.location.state </dd>
                        </dl>
                        <dl className="dlist-align">
                          <dt>L.G.A</dt>
                          <dd> item.location.lga </dd>
                        </dl>
                        <dl className="dlist-align">
                          <dt>Address</dt>
                          <dd> item.location.address </dd>
                        </dl>
                        <br />
                        <br />
                        <dl className="dlist-align">
                          <dt>Phone Number</dt>
                          <dd> item.farmer.phoneN0 </dd>
                        </dl>
                      </div>
                    </div>
                    
                    <div className="d-flex justify-content-end ">
                      <button
                        className="btn-submit"
                        type="submit"
                        onClick={this.submitProduct}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
      </div>
    );
  }
}

export default productStorage;
