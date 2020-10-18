const mongoose = require("mongoose");

const lga = mongoose.Schema({
  states: [],
});

module.exports = mongoose.model("state", lga);
