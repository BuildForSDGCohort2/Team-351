import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
const URI = "http://localhost:4000/";
class saleProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      products: [],
      product: [],
      farmer: [],
      farma: {},

      saleQuantity: "",
      price: "",
      states: "",
      lga: "",
      address: "",
      landmark: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.getProductById();
    this.getFarmer();
  }

  //Retrieve product with a matching ID
  getProductById = async () => {
    let id = this.props.match.params.prod_id;

    await axios.get(URI + "products").then((res) => {
      this.setState({ products: res.data.result });
      const prod = this.state.products;

      //Filter product with product Id
      let filterProduct = prod.filter(function (e) {
        return e.productId === id;
      });

      filterProduct.forEach((item) => {
        this.setState({
          product: item,
        });
      });

      return this.state.product;
    });
  };

  getFarmer = async () => {
    let userId = localStorage.getItem("user");
    await axios.get(URI + "farmers").then((fama) => {
      this.setState({ farmer: fama.data.response });
      const famaa = this.state.farmer;

      // filter farmer by Id
      let fam = famaa.filter(function (e) {
        return e.userId === userId;
      });

      fam.forEach((element) => {
        let farmerDetails = element;
        this.setState({ farma: farmerDetails });
      });
    });
    return this.state.farma;
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = this.state.product;
    const farmerData = this.state.farma;
    let prod = {
      salesId: Math.floor(Math.random() * 100000) + 1,

      product: {
        productId: data.productId,
        productName: data.productName,
        quantity: this.state.saleQuantity,
        price: this.state.price,
        productCategory: data.productCategory,
      },
      location: {
        state: this.state.states,
        lga: this.state.lga,
        address: this.state.address,
        landmark: this.state.landmark,
      },
      farmer: {
        userId: farmerData.userId,
        farmerName: farmerData.fullName,
        phoneN0: farmerData.phoneNumber,
      },
      date: Date(),
    };
    axios.post("http://localhost:4000/product-sale", prod).then((response) => {
      if (response) {
        this.props.history.push("/farmer");
      }
    });
  };
  render() {
    const data = this.state.product;

    return (
      <div className="container">
        <div className="row ">
          <main className="col ">
            <div className="card card-product">
              <div className="card-body">
                <form type="form" className="form" onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mx-auto">
                      <div className="form-group">
                        <label>Name of your product</label>
                        <input
                          type="text"
                          className="form-control"
                          name="productName"
                          defaultValue={data.productName}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mx-auto">
                      <div className="form-group">
                        <label>Total Products in Stock</label>
                        <input
                          type="text"
                          className="form-control"
                          name="quantity"
                          defaultValue={data.quantity}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mx-auto">
                      <div className="form-group">
                        <label>How many do you want to Sale?</label>
                        <input
                          type="text"
                          className="form-control"
                          name="saleQuantity"
                          value={this.state.saleQuantity}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mx-auto">
                      <div className="form-group">
                        <label>How much is your Product per kg</label>
                        <input
                          type="text"
                          className="form-control"
                          name="price"
                          value={this.state.price}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <span>Where is you product Located</span>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>State</label>
                        <select
                          className="form-control"
                          name="states"
                          value={this.state.states}
                          onChange={this.handleChange}
                        >
                          <option>Select</option>
                          <option>Bauchi</option>
                          <option>Gombe</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>LGA</label>
                        <select
                          className="form-control"
                          name="lga"
                          value={this.state.lga}
                          onChange={this.handleChange}
                        >
                          <option>Select</option>
                          <option>Bogoro</option>
                          <option>Billiri</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12 mx-auto">
                      <div className="form-group">
                        <label>Address</label>
                        <input
                          type="text"
                          className="form-control"
                          name="address"
                          value={this.state.address}
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
          </main>
        </div>
      </div>
    );
  }
}

export default withRouter(saleProduct);
