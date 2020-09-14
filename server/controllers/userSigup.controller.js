const customer = require("../helpers/authCustomer");
const farmer = require("../helpers/authFarmer");

const signUp = async (req, res) => {
  const { role } = req.body;
  return role === "farmer" ? farmer(req, res) : customer(req, res);
};

module.exports = signUp;
