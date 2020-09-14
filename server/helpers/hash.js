const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const secretKey = process.env.SECRETE;

const Login = require("../models/userloModel");

const hashed = (req, res) => {
  const { userId, role, email, password } = req.body;
  let login = new Login({ userId, role, email, password });
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(login.password, salt, (err, hash) => {
      login.password = hash;
      login.saltSecret = salt;

      login.save(res, (err, details) => {
        if (err) throw err;

        let payload = { subject: details };
        let token = jwt.sign(payload, secretKey);
        return res.status(200).send({ token });
      });
    });
  });
};

module.exports = hashed;
