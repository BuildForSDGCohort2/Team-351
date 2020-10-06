const mongoose = require("mongoose");

const storageSchema = mongoose.Schema({
  categoriId: {
    type: String,
  },
  productCategory: {
    type: String,
  },
  storageDetail: {
    type: String,
  },
});

module.exports = mongoose.model("storagetip", storageSchema);
