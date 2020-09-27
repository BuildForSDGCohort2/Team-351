import React, { Component } from "react";
import axios from "axios";
import "../styles/product.css";

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
    axios.get("http://localhost:4000/products").then((response) => {
      // let prod = response.data.result
      this.setState({
        prod: response.data.result,
      });
      console.log(this.state.prod);
    });
  };

  render() {
    const data = this.state.prod;
    return (
      <div className="container">
        <div className="row ">
          <main className="col ">
            <article className="card card-product">
              <div className="card-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">S/N</th>
                      <th scope="col">Product Category</th>
                      <th scope="col">Product Name</th>
                      <th scope="col">Amount in Stock</th>
                      {/* <th scope="col">Availabilty</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{item.product.productName}</td>
                          <td>{item.product.quantity}</td>
                          <td>{item.product.price}</td>
                          <td>{item.product.productCategory}</td>
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

export default Product;
