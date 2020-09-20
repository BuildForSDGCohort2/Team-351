const mongoose = require("mongoose");

const product = mongoose.Schema(
  {
    productId: {
      type: String,
    },
    productName: {
      type: String,
    },
    quantity: {
      type: Number,
    },   
    price: {
      type: Number,
    },
    location: {
      state: {
        type: String,
      },
      lga: {
        type: String,
      },
      address: {
        type: String,
      },
      nearestLandmark: {
        type: String,
      },
    },
    category: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("product", product);
