const mongoose = require("mongoose");

const LGA = mongoose.Schema({
    state : {
        type : String
    },
    lga : []
})

module.exports = mongoose.model("lga", LGA)