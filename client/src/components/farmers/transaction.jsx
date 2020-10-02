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
      products: [],
      filteredProducts: [],

      id: null,
    };

    this.getTransactions = this.getTransactions.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
  }

  componentDidMount = () => {
    console.log(this.props);
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

  updateStatus() {
    const data = this.state.filteredProducts;
    data.forEach((element) => {
      let item = element;
      console.log(item)
    //   let status = {
    //     transactionId: item.transactionId,
    //     userId: item.userId,
    //     salesId: item.salesId,
    //     productName: item.productName,
    //     quantity: item.quantity,
    //     price: item.price,
    //     buyerName: item.name,
    //     buyerPhoneNumber: item.phoneNumber,
    //     transactionStatus: true,
    //   };
    //   axios.put("http://localhost:4000/update", status).then((data) => {
    //     console.log(data);
    //   });
      
    });
    
  }

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
                      <th scope="col">Product Name</th>
                      <th scope="col">Quantity (kg)</th>
                      <th scope="col">Amount </th>
                      <th scope="col">Customer Name</th>
                      <th scope="col">Phone Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{item.productName}</td>
                          <td>{item.quantity}</td>
                          <td>{item.price}</td>
                          <td>{item.buyerName}</td>
                          <td>{item.buyerPhoneNumber}</td>
                          <td>
                            <Link to={`farmer`} onClick={this.updateStatus}>
                              Status
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

export default withRouter(Transactions);
