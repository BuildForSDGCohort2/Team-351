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
      console/log({ message: `Database Connected` });
    })
    .catch(() => {
      console.log({ message: `Failed to connect database` });
    });
};

module.exports = dbInit;
