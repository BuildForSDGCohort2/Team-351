import React, { Component } from "react";
import {withRouter} from "react-router-dom"
import axios from "axios";


class NewProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productCategory: "",
      productName: "",
      productType: "",
      quantity: "",
      userId: "",
      id: "",
      idNum: Number,
    };

    this.handleChange = this.handleChange.bind(this);
    this.addProduct = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // const id = localStorage.getItem("user");
    // this.setState({ userId: id });
    // const uId = this.state.uId
    console.log(this.props);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const id = localStorage.getItem("user");
    let product = {
      productId: Math.floor(Math.random() * 100000) + 1,
      userId: id,
      productCategory: this.state.productCategory,
      productName: this.state.productName,
      productType: this.state.productType,
      quantity: this.state.quantity,
    };

    axios.post("http://localhost:4000/product", product).then((data) => {
      //console.log(data)
    });
  };

  render() {
    return (
      <div className="container">
        <div className="card mx-auto">
          <div className="card-body">
            <form type="form" className="form" onSubmit={this.addProduct}>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Product Category</label>
                    <select
                      className="form-control"
                      name="productCategory"
                      value={this.state.productCategory}
                      onChange={this.handleChange}
                    >
                      <option>Select</option>
                      <option>Crop</option>
                      <option>Livestock</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-12 mx-auto">
                  <div className="form-group">
                    <label>Product Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="productName"
                      value={this.state.productName}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="col-md-6 mx-auto">
                  <div className="form-group">
                    <label>Type</label>
                    <input
                      type="text"
                      className="form-control"
                      name="productType"
                      value={this.state.productType}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6 mx-auto">
                  <div className="form-group">
                    <label>Quantity Per kg</label>
                    <input
                      type="text"
                      className="form-control"
                      name="quantity"
                      value={this.state.quantity}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <button type="submit" className="btn-submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(NewProduct);
