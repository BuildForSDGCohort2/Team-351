const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const secretKey = process.env.SECRETE;

const Login = require("../models/userlogModel");
const { response } = require("express");

//Login user
const userLogIn = async (req, res) => {
  await Login.findOne({ email: req.body.email }, (err, response) => {
    if (err) {
      return res.status(500).json({
        message: "Error ",
      });
    }
    if (!response) {
      return res.status(401).json({
        message: "User not found",
      });
    }

    let comparePassword = bcrypt.compareSync(
      req.body.password,
      response.password
    );
    if (comparePassword !== true) {
      return res.status(401).json({
        status: "error",
      });
    }
    // let payload = { subject: response };
    // let token = jwt.sign(payload, secretKey, {
    //   expiresIn: "2d",
    // });

    // return res.status(200).json({ status: "success", token });

    return res.status(200).json({ status: "success", response });
  });
};

const facebookLogin = (req, res) => {
  const email = req.body;
  Login.findOne({ email: email }, (err, response) => {
    if (err) {
      return res.status(500).json({
        status: "error",
        message: "User not register",
      });
    } else {
      return res.status(200).json({
        status: "success",
        response,
      });
    }
  });
};

module.exports = { userLogIn, facebookLogin };
