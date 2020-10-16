const mongoose = require("mongoose");

const LGA = mongoose.Schema({
    states : []
})

module.exports = mongoose.model("state", LGA)