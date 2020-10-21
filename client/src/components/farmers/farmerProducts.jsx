import React, { Component } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import "../../styles/product.css";

// const URL = "http://localhost:4000/";
const URL = "https://agroconnects.herokuapp.com/";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      products: [],
      filteredProducts: [],
      id: null,
    };

    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount = () => {
    this.getProducts();
  };

  getProducts = async () => {
    await axios.get(URL + "products").then((response) => {
      this.setState({ products: response.data.result });
      const prod = this.state.products;

      let uId = localStorage.getItem("user");

      //filter products by userId
      let filterredProd = prod.filter(function (e) {
        return e.userId === uId;
      });

      this.setState({
        filteredProducts: filterredProd,
      });

      return this.state.filterredProducts;
    });
  };

  render() {
    const data = this.state.filteredProducts;
    let match = this.props.match;
    return (
      <div className="container">
        <div className="row ">
          <main className="col ">
            <article className="card card-product">
              <div className="card-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">ID N0</th>
                      <th scope="col">Name</th>
                      <th scope="col">Quantity (kg)</th>
                      <th scope="col">Category</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{item.productId}</td>
                          <td>{item.productName}</td>
                          <td>{item.quantity}</td>
                          <td>{item.productCategory}</td>
                          <td>
                            <Link to={`${match.url}/${item.productId}`}>
                              Sale Product
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </article>
          </main>
        </div>
      </div>
    );
  }
}

export default withRouter(Products);
