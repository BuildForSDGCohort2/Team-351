const mongoose = require("mongoose");

const user = mongoose.Schema({
  userId: {
    type: String,
  },
  userType : {
    type : String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});
module.exports = mongoose.model("user", user);
