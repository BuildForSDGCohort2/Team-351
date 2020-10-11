const mongoose = require("mongoose");
const { success, error } = require("consola");

require("dotenv").config();
const conn = "mongodb://localhost:27017/agroconnect";
// const conn =
//   "mongodb+srv://victoryohanna:tanams5562@cluster0-pizvr.mongodb.net/agroConnect";
const dbInit = async () => {
  await mongoose
    .connect(conn, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => {
      success({ message: `Database Connected`, badge: true });
    })
    .catch(() => {
      error({ message: `Failed to connect database`, badge : true });
    });
};

module.exports = dbInit;
