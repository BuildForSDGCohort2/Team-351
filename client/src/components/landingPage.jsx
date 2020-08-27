import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "../styles/mainPage.css"; 

//import Services from './services'
import Banner from './banner'

class Home extends Component {
  state = {};  
  render() {
    return (
      <>
        <div className=" main">
            <Banner title="AgroConnect" subtitle="A platform that connect farmers and consumers together">
                <Link to ="/products"  className="btn-product">
                    Available Products
                </Link>
            </Banner>
        </div>
        
      </>
    );
  }
}

export default Home;  
