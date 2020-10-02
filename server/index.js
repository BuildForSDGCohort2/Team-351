// Require dependencies
const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
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

// Set CORS for all headers

app.use(cors());
//app.options("*", cors());
//app.use('/uploads', express.static('uploads'));

app.use(express.static(path.join(__dirname, "client/build")));
app.get((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

//App routes
const api = require("./routes/router");
app.use("/", api);

app.listen(port, () => success({ message: `Server start on PORT ${port}` }));
