const mongoose = require("mongoose");

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
      console.log("Successfully Connected ");
    })
    .catch((error) => {
      console.log("Connection failed");
    });
};

module.exports = dbInit;