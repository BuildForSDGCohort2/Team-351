// Require dependencies
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const dbInit = require("./config/db");
const { success, error } = require("consola");

// Initialize application
const app = express();

//import environment variables
require("dotenv").config();
const port = process.env.PORT;

//DB connection method
dbInit();

// perse request
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//enable cors for all http headers
app.use(cors());
//app.use('/uploads', express.static('uploads'));

app.listen(port, () =>
  success({ message: `Server start on PORT ${port}`, badge: true })
);
