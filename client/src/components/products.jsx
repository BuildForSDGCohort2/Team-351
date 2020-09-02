import React, { Component } from "react";
import "../styles/product.css";

class Product extends Component {
  render() {
    return (
      <div className="container">
        <div className="search d-flex justify-content-center m-3">
          <input type="text"/>
          <button>Search</button>
        </div>
        <div className="row ">
          <main className="col ">
            <article className="card card-product">
              <div className="card-body">
                <div className="row">
                  <aside className="col-sm-3">
                    <div className="img-wrap">image here...</div>
                  </aside>
                  <article className="col-sm-6">
                    <h4 className="title">Product Name</h4>
                    <h5>Category:</h5>
                    <p name="description">What is the category do your product </p>
                    <dl className="dlist-align">
                      <dt>Quantity</dt>
                      <dd>How much of the product do you have</dd>
                    </dl>
                    <dl className="dlist-align">
                      <dt>Price per kg</dt>
                      <dd>
                        <span className="price">
                          <del className="price-old">N</del>How much do you product cost for each kg
                        </span>
                      </dd>
                    </dl>
                  </article>
                </div>
              </div>
            </article>
          </main>
          {/* <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                This is some text within a card body.
              </div>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Product;
