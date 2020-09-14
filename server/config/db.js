const mongoose = require("mongoose");
const { success, error } = require("consola");

require("dotenv").config();
const URI = process.env.CONNECTION_STRING;

const dbInit = async () => {
  await mongoose
    .connect(URI, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => {
      success({ message: `Database Connected`, badge: true });
    })
    .catch(() => {
      error({ message: `Failed to connect database`, badge: true });
    });
};

module.exports = dbInit;