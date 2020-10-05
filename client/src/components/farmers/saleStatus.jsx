import React, { Component } from "react";
import axios from "axios";

const URL = "http://localhost:4000/";

class saleStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
    };
  }
  componentDidMount() {
    //console.log(this.props);
    this.getDetails();
  }
  getDetails = async () => {
    let id = this.props.match.params.id;
    await axios.get(URL + "transactions").then((response) => {
      //console.log(response);
      let prod = response.data.result;

      //Filter product with product Id
      let filterProduct = prod.filter(function (e) {
        return e.transactionId === id;
      });
      this.setState({
        product: filterProduct,
      });
      console.log(this.state.product);
    });
  };
  render() {
    const data = this.state.product;
    return (
      <div className="container productContainer">
        {data.map((item, index) => {
          return (
            <div className="row">
              <div className="col ">
                <div className="card card-product">
                  <div className="card-body" key={index}>
                    <div className="row">
                      <div className="col-md-3">
                        <div className="image-wrap">
                          <img src="" alt="productImage" />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <h5 className="mb-3">
                          <i>Product Details</i>
                        </h5>
                        <dl className="dlist-align">
                          <dt>Product Name</dt>
                          <dd>{item.productName}</dd>
                        </dl>
                        <dl className="dlist-align">
                          <dt>Quantity</dt>
                          <dd>{item.quantity} kg</dd>
                        </dl>
                        <dl className="dlist-align">
                          <dt>Price (per kg)</dt>
                          <dd>
                            <span className="price">
                              <del className="price-old">N</del>
                              {item.price}
                            </span>
                          </dd>
                        </dl>
                      </div>
                      <div className="col-sm-5">
                        <h5 className="mb-3">
                          <i>Customer Details</i>
                        </h5>
                        <dl className="dlist-align">
                          <dt>Customer Name</dt>
                          <dd> {item.buyerName} </dd>
                        </dl>
                        <dl className="dlist-align">
                          <dt>Phone Number</dt>
                          <dd> {item.buyerPhoneNumber} </dd>
                        </dl>
                      </div>
                    </div>
                    <div className=" d-flex justify-content-end">
                      <dl className="dlist-align">
                        <dt>Product Sold</dt>
                        <dd>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck1"
                          />
                        </dd>
                      </dl>
                    </div>
                    <div className=" d-flex justify-content-end">
                      <dl className="dlist-align">
                        <dt> Not Sold</dt>
                        <dd>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck1"
                          />
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default saleStatus;
