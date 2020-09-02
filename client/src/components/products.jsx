import React, { Component } from "react";
import "../styles/product.css";

class Product extends Component {
  render() {
    return (
      <div className="container">
        <div className="row ">
          <main className="col-sm-8 ">
            <article className="card card-product">
              <div className="card-body">
                <div className="row">
                  <aside className="col-sm-3">
                    <div className="img-wrap">image here...</div>
                  </aside>
                  <article className="col-sm-6">
                    <h4 className="title">Product title</h4>
                    <h5>Description:</h5>
                    <p name="description">Product description</p>
                    <dl className="dlist-align">
                      <dt>Size</dt>
                      <dd>Product size</dd>
                    </dl>
                    <dl className="dlist-align">
                      <dt>Price</dt>
                      <dd>
                        <span className="price">
                          <del className="price-old">N</del>produc price
                        </span>
                      </dd>
                    </dl>
                    <dl className="dlist-align">
                      <dt>Delivery</dt>
                      <dd>Abuja</dd>
                    </dl>
                  </article>
                </div>
              </div>
            </article>
          </main>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                This is some text within a card body.
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        {/* <div className="row">
          <main className="col-md-9">
            <div className="card card-product">
              <div className="card-body">
                <table class="table">
                  <thead>
                    <tr>
                      <th >Image</th>
                      <th >Name</th>
                      <th >Quantity</th>
                      <th >Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </main>
          <div className="col-md-3">
            <p>
              <aside>side bar</aside>
            </p>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Product;
