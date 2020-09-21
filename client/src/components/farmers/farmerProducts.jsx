import React, { Component } from "react";
import axios from "axios"
import "../../styles/product.css";

class Products extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    let email = localStorage.getItem("email");

    //retrieve products from db
    console.log(email);
  };
  render() {
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
                      <th scope="col">Products</th>
                      <th scope="col">Amount in Stock</th>
                      {/* <th scope="col">Availabilty</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
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
