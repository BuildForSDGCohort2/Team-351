const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const secretKey = process.env.SECRETE;

const Login = require("../models/userlogModel");

//Login user
const userLogIn = async (req, res) => {
  //const pwd = req.body.password;
  await Login.findOne(
    // {
    //   $and: [{ email: req.body.email }, { password: req.body.password }],
    // },
    { email: req.body.email },
    (err, response) => {
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
          status: "false",
        });
      }
      // let payload = { subject: response };
      // let token = jwt.sign(payload, secretKey, {
      //   expiresIn: "2d",
      // });

      // return res.status(200).json({ status: "success", token });

      return res.status(200).json({ status: "success", response });
    }
  );
};

module.exports = { userLogIn };
