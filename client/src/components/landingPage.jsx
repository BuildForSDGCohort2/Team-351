import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/landingPage.css";

import Banner from "./banner";
import Footer from "./footer/footer";

class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <div className=" main">
          <Banner
            title="AgroConnect"
            subtitle="A platform that connect farmers and consumers together"
          >
            <Link to="/products" className="btn-product">
              Available Products
            </Link>
          </Banner>
        </div>
        <Footer />
      </>
    );
  }
}

export default Home;
