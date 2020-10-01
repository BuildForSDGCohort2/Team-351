import React, { Component } from "react";
import axios from "axios";

//import "../styles/product.css";

class transactionStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      productData: {},
      name: "",
      phoneNumber: "",
    };
    this.getProducts = this.getProducts.bind(this);
    this.submitProduct = this.submitProduct.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
    this.getProducts();
  }
  getProducts = () => {
    let id = this.props.match.params.id;
    axios.get("http://localhost:4000/transactions").then((response) => {
      let prod = response.data.result;

      //Filter product with product Id
      let filterProduct = prod.filter(function (e) {
        return e.salesId === id;
      });
      this.setState({
        product: filterProduct,
      });
      //console.log(this.state.product);
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitProduct = () => {
    const prod = this.state.product;

    prod.forEach((element) => {
      let data = element;

      let request = {
        transactionId: Math.floor(Math.random() * 100000) + 1,
        userId: data.farmer.userId,
        salesId: data.salesId,
        productName: data.product.productName,
        quantity: data.product.quantity,
        price: data.product.price,
        buyerName: this.state.name,
        buyerPhoneNumber: this.state.phoneNumber,
        transactionStatus: false,
      };
      axios.post("http://localhost:4000/purchase", request).then((res) => {
        if (res) {
          this.props.history.push("/products");
        }
        //console.log(res);
      });
    });
  };
  render() {
    const data = this.state.product;

    return (
      <div className="container productContainer">
        {data.map((item, index) => {
          return (
            <div className="row" key={index}>
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
                          <dd>{item.product.productName}</dd>
                        </dl>
                        <dl className="dlist-align">
                          <dt>Quantity</dt>
                          <dd>{item.product.quantity} kg</dd>
                        </dl>
                        <dl className="dlist-align">
                          <dt>Price (per kg)</dt>
                          <dd>
                            <span className="price">
                              <del className="price-old">N</del>
                              {item.product.price}
                            </span>
                          </dd>
                        </dl>
                        <h5 className="mb-3">
                          <i>Product Owner Details</i>
                        </h5>
                        <dl className="dlist-align">
                          <dt>Farmer</dt>
                          <dd> {item.farmer.farmerName} </dd>
                        </dl>
                      </div>
                      <div className="col-sm-5">
                        <h5>
                          <i>Product location</i>
                        </h5>
                        <dl className="dlist-align">
                          <dt>State</dt>
                          <dd> {item.location.state} </dd>
                        </dl>
                        <dl className="dlist-align">
                          <dt>L.G.A</dt>
                          <dd> {item.location.lga} </dd>
                        </dl>
                        <dl className="dlist-align">
                          <dt>Address</dt>
                          <dd> {item.location.address} </dd>
                        </dl>
                        <br />
                        <br />
                        <dl className="dlist-align">
                          <dt>Phone Number</dt>
                          <dd> {item.farmer.phoneN0} </dd>
                        </dl>
                      </div>
                    </div>
                    <form type="form" className="form">
                      <div className="row">
                        <div className="col-md-4 mx-auto">
                          <div className="form-group">
                            <label>Your Full Name</label>
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              value={this.state.name}
                              onChange={this.handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-4 mx-auto">
                          <div className="form-group">
                            <label>Your Phone Number</label>
                            <input
                              type="text"
                              className="form-control"
                              name="phoneNumber"
                              value={this.state.phoneNumber}
                              onChange={this.handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </form>
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
          );
        })}
      </div>
    );
  }
}

export default transactionStatus;
