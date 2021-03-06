const mongoose = require("mongoose");

const farmer = mongoose.Schema(
  {
    userId: {
      type: String,
      //required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    userType: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("farmers", farmer);
