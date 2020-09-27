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
    quantity: {
      type: String,
    },
    productCategory: {
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
