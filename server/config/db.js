const mongoose = require("mongoose");
const { success, error } = require("consola");

require("dotenv").config();
// const URI = process.env.CONNECTION_STRING;
const conn =
  "mongodb+srv://victoryohanna:tanams5562@cluster0-pizvr.mongodb.net/agroConnect";
const dbInit = async () => {
  await mongoose
    .connect(conn, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => {
      success({ message: `Database Connected` });
    })
    .catch(() => {
      error({ message: `Failed to connect database` });
    });
};

module.exports = dbInit;
