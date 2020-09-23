import React, { Component } from "react";
import axios from "axios";
//import { Link } from "react-router-dom";
import "../../styles/product.css";

//import FarmerProducts from "../../services/user.service";

const URI = "http://localhost:4000/";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      products: [],
      filteredProducts: [],
      userId: "",
      aa: [],
    };

    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount = () => {
    this.getProducts();
  };

  getProducts = () => {
    axios.get(URI + "products").then((response) => {
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
    return (
      <div className="container">
        <div className="row ">
          <main className="col ">
            <article className="card card-product">
              <div className="card-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Product Name</th>
                      <th scope="col">Amount in Stock</th>
                      <th scope="col">Product Category</th>
                      {/* <th scope="col">Availabilty</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => {
                      return (
                        <tr key={index}>
                          <th scope="row"></th>
                          <td>{item.productName}</td>
                          <td>{item.quantity + " kg"}</td>
                          <td>{item.productCategory}</td>
                          <button className="btn-primary">View Details</button>
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

export default Products;
