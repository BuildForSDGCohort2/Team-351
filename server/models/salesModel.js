const mongoose = require("mongoose");

const saleProduct = mongoose.Schema({  
  salesId: {
    type: String,
  },
  product: {
    productId: {
      type: String,
    },
    productName: {
      type: String,
    },
    price: {
      type: String,
    },
    totalQuantity: { //Available quantity
      type : Number,
    },
    quantity: { // Quantity to be sold
      type: Number,
    },
    productCategory: {
      type: String,
    },
    status: {
      type: String,
    },
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
    // nearestLandMark: {
    //   type: String,
    // },
  },
  farmer: {
    userId: {
      type: String,
    },
    farmerName: {
      type: String,
    },
    phoneN0: {
      type: String,
    },
  },
  date: {
    type: String,
  },
});

module.exports = mongoose.model("sale", saleProduct);
