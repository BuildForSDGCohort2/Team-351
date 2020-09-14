const Customer = require("../models/consumerModel");
const hashed = require("../helpers/hash");

const isConsumer = async (req, res) => {
  await Customer.findOne({ email: req.body.email }, (err, result) => {
    if (err) throw err;

    if (result) {
      return res.status(400).json({ message: "User already registerred" });
    }

    let customer = new Customer(req.body);

    customer.save().then((data) => {
      return data ? hashed(req, res) : null;
    });
  });
};

module.exports = isConsumer;
