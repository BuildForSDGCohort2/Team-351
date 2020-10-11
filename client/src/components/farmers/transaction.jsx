import React, { Component } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import "../../styles/product.css";

const URL = "http://localhost:4000/";
// const URL = "https://agroconnects.herokuapp.com/";

class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      checked: false,
      unChacked: true,
      products: [],
      filteredProducts: [],

      id: null,
    };

    this.getTransactions = this.getTransactions.bind(this);
  }

  componentDidMount = () => {
    this.getTransactions();
  };

  getTransactions = async () => {
    await axios.get(URL + "transactions").then((response) => {
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
                      <th>Product Name</th>
                      <th>Quantity (kg)</th>
                      <th>Amount </th>
                      <th>Customer Name</th>
                      <th>Phone Number</th>
                      <th>Confirm Payment</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{item.productName}</td>
                          <td>{item.quantity}</td>
                          <td>{item.totalPrice}</td>
                          <td>{item.buyerName}</td>
                          <td>{item.buyerPhoneNumber}</td>
                          <td>
                            <Link
                              to={`${match.url}/sales/${item.transactionId}`}
                            >
                              Confirm 
                            </Link>
                          </td>
                          <td> {item.transactionStatus} </td>
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

export default withRouter(Transactions);
