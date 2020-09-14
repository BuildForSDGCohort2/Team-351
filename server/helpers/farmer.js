const Farmer = require("../models/farmerModel");
const hashed = require("../helpers/hash");

const isFarmer = async (req, res) => {
  await Farmer.findOne({ email: req.body.email }, (err, result) => {
    if (result) {
      return res.status(400).json({ message: " User already exist" });
    }

    let farmer = new Farmer(req.body);

    farmer.save().then((data) => {
      return data ? hashed(req, res) : null;
    });
  });
};

module.exports = isFarmer;
