const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const secretKey = process.env.SECRETE;

const Login = require("../models/userlogModel");

//Login user
const userLogIn = async (req, res) => {
  let { userType, email } = req.body;

  await Login.findOne({ $and: [{ email }, { userType }] }, (err, data) => {
    if (err) {
      return res.status(500).json({
        message: "Error ",
      });
    }
    if (!data) {
      return res.status(401).json({
        message: "User not found",
      });
    }

    let comparePassword = bcrypt.compareSync(req.body.password, data.password);
    if (comparePassword !== true) {
      return res.status(401).json({
        status: "false",
      });
    }
    let payload = { subject: data };
    let token = jwt.sign(payload, secretKey, {
      expiresIn: "2d",
    });

    return res.status(200).json({ status: "success", token });
  });
};

module.exports = { userLogIn };
