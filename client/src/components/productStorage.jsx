import React, { Component } from "react";
import axios from "axios";

const URL = "http://localhost:4000/";
// const URL = "https://agroconnects.herokuapp.com/";

class productStorage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      productData: {},
      productCategory: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });

    let category = e.target.value;

    axios.get(URL + "storage-tips").then((response) => {
      let storage = response.data.result;

      //filter storage
      let store = storage.filter(function (e) {
        return e.productCategory === category;
      });
      this.setState({
        product: store,
      });

      return this.state.product;
    });
  };

  goBack = () => {
    this.props.history.push("/farmer");
  };

  render() {
    const data = this.state.product;

    return (
      <div className="container productContainer">
        <div className="row">
          <div className="col ">
            <div className="select mx-auto">
              <form type="form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-gorup">
                      <label>Product Category</label>
                      <select
                        className="form-control"
                        name="productCategory"
                        value={this.state.productCategory}
                        onChange={this.handleChange}
                      >
                        <option>Select</option>
                        <option>Grains</option>
                        <option>Tubers</option>
                        <option>Fruits</option>
                        <option>Spices</option>
                        <option>Vegetables</option>
                        <option>Oil Crops</option>
                        <option>Livestocks</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 mx-auto">
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
                </div>
              </form>
            </div>
            <div className="card  card-main mx-auto">
              <div className="card-body">
                <div className="row">
                  <div className="m-10">
                    {data.map((item, index) => {
                      return (
                        <div key={index}>
                          <div className=" textTitle d-flex justify-content-center">
                            <h4>{item.storageDetail.title}</h4>
                          </div>
                          <div className="textBody">
                            <span>{item.storageDetail.content}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    className="btn-submit"
                    type="submit"
                    onClick={this.goBack}
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default productStorage;
