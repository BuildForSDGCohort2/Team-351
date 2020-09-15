const express = require("express");
const router = express.Router();

const signUp = require("../controllers/userSignup.controller");
const { userLogIn } = require("../controllers/userLogin.controller");

const {
  UpdateFarmer,
  getAllFarmers,
} = require("../controllers/farmer.controller");

const {
  UpdateConsumer,
  getAllConsumers,
} = require("../controllers/consumer.controller");

//Register user
router.post("/register", signUp);

//user login
router.post("/login", userLogIn);

//farmers routes
router.get("/farmers", getAllFarmers);
router.put("/farmer-edit", UpdateFarmer);

//consumers routes
router.get("/consumers", getAllConsumers);
router.put("/consumers-edit", UpdateConsumer);

module.exports = router;
