const mongoose = require("mongoose");

const LGA = mongoose.Schema({
    state : []
})

module.exports = mongoose.model("state", LGA)