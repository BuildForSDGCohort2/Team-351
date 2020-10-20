import React, { Component } from "react";
//import {withRouter} from "react-router-dom";
import axios from "axios";

const URL = "http://localhost:4000/";
// const URL = "https://agroconnects.herokuapp.com/";

class saleStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
    };

    this.updateStatus = this.updateStatus.bind(this);
    this.unPaid = this.unPaid.bind(this);
  }

  componentDidMount() {
    //console.log(this.props)
    this.getDetails();
  }

  getDetails = async () => {
    let id = this.props.match.params.id;
    await axios.get(URL + "transactions").then((response) => {
      let prod = response.data.result;

      //Filter product with product Id
      let filterProduct = prod.filter(function (e) {
        return e.transactionId === id;
      });

      this.setState({
        product: filterProduct,
      });

      return this.state.product;
    });
  };

  // Update products document
  updateProduct = async () => {
    let prod = this.state.product;

    prod.forEach((element) => {
      let item = element;
      let qnt = item.totalQuantity - item.quantity;

      //
      let updatedProduct = {
        productId: item.productId,
        userId: localStorage.getItem("user"),
        productCategory: item.productCategory,
        productName: item.productName,
        quantity: qnt,
      };

      axios.put(URL + "update-product", updatedProduct).then((res) => {
        //console.log(res);
      });
    });
  };

  //Update Transaction status
  updateStatus() {
    const data = this.state.product;

    data.forEach((element) => {
      let item = element;

      let status = {
        transactionId: item.transactionId,
        userId: item.userId,
        salesId: item.salesId,
        productName: item.productName,
        quantity: item.quantity,
        price: item.price,
        buyerName: item.buyerName,
        buyerPhoneNumber: item.buyerPhoneNumber,
        transactionStatus: "Sold",
      };
      axios.put(URL + "update", status).then((data) => {
        if (data) {
          // Deduct number of product sold from total number product in db
          this.updateProduct();

          //route user
          this.props.history.push("/farmer");
        }
      });
    });
  }
  unPaid = () => {
    //route user
    this.props.history.push("/farmer");
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
                          <dt>Total Price</dt>
                          <dd>
                            <span className="price">
                              <del className="price-old">N</del>
                              {item.totalPrice}
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
                            name="check1"
                            onChange={this.updateStatus}
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
                            name="check2"
                            onClick={this.unPaid}
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
