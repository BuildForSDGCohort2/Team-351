import React, { Component } from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

import "../../styles/footer.css";

class Footer extends Component {
  render() {
    return (
      <div className=" d-flex justify-content-center pt-4 ">
        <div className="row footer">
          <div className="col-12 col-md">
            <a href="#" className="dashboard-img" to="#">
              <img src={"../logo.png"} alt="logo" />
            </a>
            <br></br>
            <small className="-block mb-3 text-muted">&copy; 2020</small>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href="#">
                  Team
                </a>
              </li>

              <li>
                <a className="text-muted" href="#">
                  Privacy
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Terms
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href="#">
                  FAQ
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Testimonials
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md">
            <h5>Follow Us</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a
                  href="https://www.facebook.com/signup"
                  target="_blank"
                  className="footer-img"
                >
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/i/flow/signup"
                  target="_blank"
                  className="footer-img"
                >
                  <FaTwitter />
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/signup"
                  target="_blank"
                  className="footer-img"
                >
                  <img src="https://res.cloudinary.com/lordefid/image/upload/v1590108539/linkedin_b2x3ts.png" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
