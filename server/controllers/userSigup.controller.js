const isConsumer = require("../helpers/consumer");
const isFarmer = require("../helpers/farmer");

const signUp = async (req, res) => {
  const userType = req.body;
  return userType === "farmer" ? isFarmer(req, res) : isConsumer(req, res);
};

module.exports = signUp;
