import React, { Component } from "react";
import { Link } from "react-router-dom";

class Farmer extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <aside className="col-sm-3">
            <div className="card card-filter">
              <article className="card-group-item">
                <header className="card-header">
                  <a
                    className=""
                    aria-expanded="true"
                    href="/"
                    data-toggle="collapse"
                    data-target="#collapse22"
                  >
                    <i className="icon-action fa fa-chevron-down"></i>
                    <h6 className="title">By Category</h6>
                  </a>
                </header>
                <div className="filter-content collapse show" id="collapse22">
                  <div className="card-body">
                    <form className="pb-3">
                      <div className="input-group">
                        <input
                          className="form-control"
                          placeholder="Search"
                          type="text"
                          name="searchItem"
                        />
                        <div className="input-group-append">
                          <button className="btn btn-filter" type="button">
                            <i className="fa fa-search"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                    <ul className="list-unstyled list-lg">
                      <li>
                        <Link to="/">New Product</Link>
                      </li>
                      <li>
                        <Link to="/">Preservation Methods</Link>
                      </li>
                      <li>
                        <Link to="/">Transactions</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>
          </aside>
        </div>
      </div>
    );
  }
}

export default Farmer;
