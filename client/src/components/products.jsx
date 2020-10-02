import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/product.css";

const URL = "http://localhost:4000/";
// const URL = "https://agroconnects.herokuapp.com/";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prod: [],
    };
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }
  getProducts = () => {
    axios.get(URL + "product-purchase").then((response) => {
      this.setState({
        prod: response.data.result,
      });
    });
  };

  render() {
    const data = this.state.prod;
    let match = this.props.match;
    return (
      <div className="container productContainer">
        {data.map((item, index) => {
          return (
            <Link to={`${match.url}/${item.salesId}`} className="product">
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
                          <dl className="dlist-align">
                            <dt>Category</dt>
                            <dd>{item.product.productCategory}</dd>
                          </dl>
                        </div>
                        <div className="col-sm-5">
                          <dl className="dlist-align">
                            <dt>Product Location</dt>
                            <dd> {item.location.state} </dd>
                          </dl>
                          <dl className="dlist-align">
                            <dt>Farmer</dt>
                            <dd> {item.farmer.farmerName} </dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default Product;
