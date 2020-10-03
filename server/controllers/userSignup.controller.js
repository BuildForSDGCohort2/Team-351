const isConsumer = require("../helpers/consumer");
const isFarmer = require("../helpers/farmer");

const signUp = async (req, res) => {
  const userType = req.body.userType;
  return userType !== "Farmer" ? isConsumer(req, res) : isFarmer(req, res);
};

module.exports = signUp;
