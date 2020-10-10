import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../styles/farmerDashboard.css";

import Products from "./farmerProducts";
import NewProduct from "./addProduct";
import Preserve from "./storage";
import Transactions from "./transaction";

class Farmer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDashboard: true,
      isNewProduct: false,
      isProducts: true,
      isPreserve: false,
      isTransactions: false,
      user: "",
    };
    this.showProducts = this.showProducts.bind(this);
    this.showNewProduct = this.showNewProduct.bind(this);
    this.showPreserve = this.showPreserve.bind(this);
    this.showTransactions = this.showTransactions.bind(this);
  }
  showProducts = () => {
    this.setState({
      isProducts: true,
      isNewProduct: false,
      isPreserve: false,
      isTransactions: false,
      user: localStorage.getItem("user"),
    });
  };
  showNewProduct = () => {
    this.setState({
      isProducts: false,
      isPreserve: false,
      isTransactions: false,
      isNewProduct: true,
    });
  };

  showPreserve = () => {
    // this.setState({
    //   isProducts: false,
    //   isTransactions: false,
    //   isNewProduct: false,
    //   isPreserve: true,
    // });
    //  this.props.history.push("/storage")
  };

  showTransactions = () => {
    this.setState({
      isProducts: false,
      isNewProduct: false,
      isPreserve: false,
      isTransactions: true,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.isDashboard && (
            <aside className="col-sm-3 mt-5">
              <div className="card card-filter">
                <header className="card-header">
                  <a
                    className=""
                    aria-expanded="true"
                    href="/"
                    data-toggle="collapse"
                    data-target="#collapse22"
                  >
                    <i className="icon-action fa fa-chevron-down"></i>
                    <h6 className="title">Quick Links</h6>
                  </a>
                </header>
                <div className="filter-content collapse show" id="collapse22">
                  <div className="card-body">
                    <form className="pb-3">
                      <div className="input-group">
                        <input
                          className="form-control"
                          placeholder="Search"
                          type="text"
                          name="searchItem"
                        />
                        <div className="input-group-append">
                          <button className="btn btn-filter" type="button">
                            <i className="fa fa-search"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                    <ul className="list-unstyled list-lg">
                      <li>
                        <button
                          className="btn-link"
                          onClick={this.showProducts}
                        >
                          Products
                        </button>
                      </li>
                      <li>
                        <button
                          className="btn-link"
                          onClick={this.showNewProduct}
                        >
                          New Product
                        </button>
                      </li>
                      <li>
                        <button
                          className="btn-link"
                          onClick={this.showTransactions}
                        >
                          Transactions
                        </button>
                      </li>
                      <li>
                        <Link to="/storage" className="link">
                          Storage/Preservations
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </aside>
          )}
          {this.state.isProducts && (
            <div className="col-md-9 mt-5">
              <Products />
            </div>
          )}
          {this.state.isNewProduct && (
            <div className="col-md-9 mt-5">
              <NewProduct />
            </div>
          )}
          {this.state.isPreserve && (
            <div className="col-md-9 mt-5">
              <Preserve />
            </div>
          )}
          {this.state.isTransactions && (
            <div className="col-md-9 mt-5">
              <Transactions />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Farmer;
