import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

//import States from "../header/state";
import LGA from "../header/lga"

//import getLGA from "../../services/user.service"

const URL = "http://localhost:4000/";
// const URL = "https://agroconnects.herokuapp.com/";

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
      stat : "",
      lgaSelected : "",
      address: "",
      landmark: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getStates = this.getStates.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
    this.selectLGA = this.selectLGA.bind(this);
  }

  componentDidMount() {
    
    this.getProductById();
    this.getFarmer();
    this.getStates();
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
        console.log(item)
        this.setState({
          product: item,
        });
      });

      return this.state.product;
    });
  };   

  // Retrieve product owner details
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
      let stateArray = response.data.result
      stateArray.forEach(stat => {
        this.setState({states : stat.states})
      });
    })
  }
    //Toggle selected states 
  onValueChange = async (e)=>{
    const selectedState =  e.target.value
    
    this.getLGA(selectedState)
    this.setState({ stat : selectedState })
  }

  selectLGA = (e) =>{
    const selectedLGA = e.target.value
    this.setState({lgaSelected : selectedLGA })

    //console.log(selectedLGA)
  }

  getLGA=(selectedState)=>{
    
    switch (selectedState) {
      case "Abia":
        this.setState({lga : LGA.Abia})
        break;
      case "Abuja":
        this.setState({lga : LGA.Abuja})
        break;
      case "Adamawa":
        this.setState({lga : LGA.Adamawa})
        break;
      case "Akwa-Ibom":
        this.setState({lga : LGA.AkwaIbom})
        break;
      case "Anambra":
        this.setState({lga : LGA.Anambra})
        break;
      case "Bauchi":
        this.setState({lga : LGA.Bauchi})
        break;
      case "Bayelsa":
        this.setState({lga : LGA.Bayelsa})
        break;
      case "Benue":
        this.setState({lga : LGA.Benue})
        break;
      case "Borno":
        this.setState({lga : LGA.Borno})
        break;
      case "Cross-River":
        this.setState({lga : LGA.CrossRiver})
        break;
      case "Delta":
        this.setState({lga : LGA.Delta})
        break;
      case "Ebonyi":
        this.setState({lga : LGA.Ebonyi})
        break;
      case "Enugu":
        this.setState({lga : LGA.Enugu})
        break;
      case "Edo":
        this.setState({lga : LGA.Edo})
        break;
      case "Ekiti":
        this.setState({lga : LGA.Ekiti})
        break;
      case "Gombe":
        this.setState({lga : LGA.Gombe})
        break;
      case "Imo":
        this.setState({lga : LGA.Imo})
        break;
      case "Jigawa":
        this.setState({lga : LGA.Jigawa})
        break;
      case "Kaduna":
        this.setState({lga : LGA.Kaduna})
        break;
      case "Kano":
        this.setState({lga : LGA.Kano})
        break;
      case "Katsina":
        this.setState({lga : LGA.Katsina})
        break;
      case "Kebbi":
        this.setState({lga : LGA.Kebbi})
        break;
      case "Kogi":
        this.setState({lga : LGA.Kogi})
        break;
      case "Lagos":
        this.setState({lga : LGA.Lagos})
        break;
      case "Nasarawa":
        this.setState({lga : LGA.Nasarawa})
        break;
      case "Niger":
        this.setState({lga : LGA.Niger})
        break;
      case "Ogun":
        this.setState({lga : LGA.Ogun})
        break;
      case "Ondo":
        this.setState({lga : LGA.Ondo})
        break;
      case "Osun":
        this.setState({lga : LGA.Osun})
        break;
      case "Oyo":
        this.setState({lga : LGA.Oyo})
        break;
      case "Plateau":
        this.setState({lga : LGA.Plateau})
        break;
      case "Rivers":
        this.setState({lga : LGA.Rivers})
        break;
      case "Sokoto":
        this.setState({lga : LGA.Sokoto})
        break;
      case "Taraba":
        this.setState({lga : LGA.Taraba})
        break;
      case "Yobe":
        this.setState({lga : LGA.Yobe})
        break;
      case "Zamfara":
        this.setState({lga : LGA.Zamfara})
        break;
      default:
        break;
    }
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    const data = this.state.product;
    const farmerData = this.state.farma;
    let prod = {
      salesId: Math.floor(Math.random() * 100000) + 1,

      product: {
        productId: data.productId,
        productName: data.productName,
        totalQuantity : data.quantity,
        quantity: this.state.saleQuantity,
        price: this.state.price,
        productCategory: data.productCategory,
      },
      location: {
        state: this.state.stat,
        lga: this.state.lgaSelected,
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
    const lgaList = this.state.lga

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
                          onChange={this.handleChange}
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
                          onChange={this.onValueChange}
                        >
                          {stateList.map((item, i) => {
                            return <option key={i} value={item}>{item}</option>;
                          })}
                        </select>                        
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>LGA</label>
                        <select
                          className="form-control"
                          name="lga"
                          onChange={this.selectLGA}
                        >
                           {lgaList.map((item, i) => {
                            return <option key={i} value={item}>{item}</option>;
                          })}
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
