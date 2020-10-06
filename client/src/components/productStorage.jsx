import React, { Component } from "react";
import axios from "axios";

const URL = "http://localhost:4000/";

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
      //console.log(this.state.product);
      return this.state.product;
    });
  };

  render() {
    const data = this.state.product;

    return (
      <div className="container productContainer">
        <div className="row">
          <div className="col ">
            <div className="select mx-auto">
              <form type="form">
                <div className="form-gorup">
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
              </form>
            </div>
            <div className="card  card-main mx-auto">
              <div className="card-body">
                <div className="row">
                  <div className="m-10">
                    {data.map((item, index) => {
                      return <div key={index}> {item.storageDetail} </div>;
                    })}
                  </div>
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    className="btn-submit"
                    type="submit"
                    onClick={this.submitProduct}
                  >
                    Submit
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
