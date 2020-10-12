import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

import States from "../header/state";
//import LGA from "../header/lga"

import doSomeThing from "../../services/user.service";

// const URL = "http://localhost:4000/";
const URL = "https://agroconnects.herokuapp.com/";

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
      states: [],
      lga: [],
      address: "",
      landmark: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getStates = this.getStates.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
  }
  componentDidMount() {
    this.setState({ states: States });
    this.getProductById();
    this.getFarmer();
    this.getStates();
    //console.log(LGA)
  }

  //Retrieve product with a matching ID
  getProductById = async () => {
    let id = this.props.match.params.prod_id;

    await axios.get(URL + "products").then((res) => {
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
    await axios.get(URL + "farmers").then((fama) => {
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


  getStates=()=>{
    axios.get(URL + "states").then((response)=>{
      return response.data;
    })
    .then(data => {
      let statesFromApi = data.map((stat, i) => {
        return {value: stat, display: stat}
      });
      this.setState({
        states: [{value: '', display: '(Select your favourite team)'}].concat(statesFromApi)
      });
    }).catch((error) => {
      return error;
    });
  }

  onValueChange = (e) => {
    const nam = e.target.value;
    doSomeThing(nam);
    // console.log(this.state.lga)
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
    axios.post(URL + "product-sale", prod).then((response) => {
      if (response) {
        this.props.history.push("/farmer");
      }
    });
  };

  render() {
    const data = this.state.product;
    const stateList = this.state.states;

    return (
      <div className="container">
        <div className="row ">
          <main className="col ">
            <div className="card card-product-sale mx-auto ">
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
                          onChange={this.onValueChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mx-auto">
                      <div className="form-group">
                        <label>How many kg do you want to Sale?</label>
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
                  <div className="d-flex justify-content-center tit">
                    <span>Where is your product Located</span>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>State</label>
                         <select
                          className="form-control"
                          name="states"
                          onChange={this.handleChange}
                        >
                          <option>Select</option>
                      <option value="Abia">Abia</option>
                      <option value="Abuja">Abuja</option>
                      <option value="Adamawa">Adamawa</option>
                      <option value="Akwa Ibom">Akwa Ibom</option>
                      <option value="Anambra">Anambra</option>
                      <option value="Bauchi">Bauchi</option>
                      <option value="Bayelsa">Bayelsa</option>
                      <option value="Benue">Benue</option>
                      <option value="Borno">Borno</option>
                      <option value="Cross River">Cross River</option>
                      <option value="Delta">Delta</option>
                      <option value="Ebonyi">Ebonyi</option>
                      <option value="Enugu">Enugu</option>
                      <option value="Edo">Edo</option>
                      <option value="Ekiti">Ekiti</option>
                      <option value="Gombe">Gombe</option>
                      <option value="Imo">Imo</option>
                      <option value="Jigawa">Jigawa</option>
                      <option value="Kaduna">Kaduna</option>
                      <option value="Kano">Kano</option>
                      <option value="Katsina">Katsina</option>
                      <option value="Kebbi">Kebbi</option>
                      <option value="Kogi">Kogi</option>
                      <option value="Kebbi">Kebbi</option>
                      <option value="Lagos">Lagos</option>
                      <option value="Nasarawa">Nasarawa</option>
                      <option value="Niger">Niger</option>
                      <option value="Ogun">Ogun</option>
                      <option value="Ondo">Ondo</option>
                      <option value="Osun">Osun</option>
                      <option value="Oyo">Oyo</option>
                      <option value="Plateau">Plateau</option>
                      <option value="Rivers">Rivers</option>
                      <option value="Taraba">Taraba</option>
                      <option value="Yobe">Yobe</option>
                      <option value="Zamfara">Zamfara</option>
                        </select>
                        {/* <select
                          className="form-control"
                          name="states"
                          onChange={this.handleChange}
                        >
                          {stateList.map((item, i) => {
                            return <option key={i}>{item} </option>;
                          })}
                        </select> */}
                        {/* <select className="form-control"
                          name="states">
                        {stateList.map((item, i) => <option key={i} value={item.value}>{item.display}</option>)}
                        </select> */}

                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>LGA</label>
                        <select
                          className="form-control"
                          name="lga"
                          ref={this.props.lga}
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
