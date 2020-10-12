import React, { Component } from "react";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <div className="card card-about mx-auto">
        <div className="card-body">
          {/* <div className="container"> */}
          <div className="d-flex-justify-content-center">
            <h3 className="about-title"><b>About AgroConnect</b></h3>
          </div>
          <div className="about d-flex-justify-content-center">
            <p>
              AgroConnect is a platform that aims to bridge the gap between
              farmers and consumers by eliminating exploitation and hoarding
              that brings about food price inflation, scarcity and insecurity.
              We intend to use this platform to promote and provide availability
              and accessibility of food and cash crops, prevention of food
              wastage and other difficulties faced by farmers and consumers.
            </p>
          </div>
          <hr />
          <div className="about-title">
            <h3><b>Meet Our Developer</b></h3>
          </div>
          <br/>
          <div className="row">
            <div className="col-md-4 content-left">
              <img src="./img/Vic.png" alt="Victor Yohanna" />
              <br />
              <div className="d-flex justify-content-center">
                <h5>Victor Yohanna</h5>
              </div>
              <div>
                <Link to="/about" className="d-flex justify-content-center">
                  View Profile
                </Link>
              </div>
            </div>
            <div className="col-md-7 content-main">
              <p>
                I'm a fullstack software developer who sought out meaningful
                opportunities and challenges. I strive to make things that makes
                the diffrence by paying obsessive attention to details. When I
                am not coding, I hangout with my family, friends or working out
                in a park.
              </p>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default About;
