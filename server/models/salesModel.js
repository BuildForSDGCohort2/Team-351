const mogoose = require("mongoose");

const sales = mogoose.Mongoose.schema({
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
    nearestLandMark: {
      type: String,
    },
  },
  farmer: {
    farmerId: {
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

module.exports = mogoose.Mongoose.model("sale", sales);
