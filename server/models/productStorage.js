const mongoose = require("mongoose");

const storageSchema = mongoose.Schema({
  categoryId: {
    type: String,
  },
  productCategory: {
    type: String,
  },
  productName: {
    type: String,
  },
  storageDetail: {
    title: {
      type: String,
    },
    content: {
      type: String,
    },
  },
});

module.exports = mongoose.model("storagetip", storageSchema);
