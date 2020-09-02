import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../styles/login.css";

import Backdrop from "./backdrop";
const Login = (props) => {
  return (
    <>
      <Backdrop show={props.show} hide={props.hide} />
      <div
        className="Modal"
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? 1 : 0,
        }}
      >
        <div className="modal-content">
          <div className="modal-header d-flex justify-content-center">
            {/* <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button> */}
            <button className="btn-primary btn-fb">Login with Facebook</button>
          </div>
          <div className="modal-body">
            {/* <button className="btn-primary">Login with Facebook</button> */}
            <form>
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input type="password" className="form-control" />
                </div>
                <div className="d-flex justify-content-end">
                    <button className="btn-primary" type="submit">Login</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
