const express = require("express");
const router = express.Router();

const signUp = require("../controllers/userSignup.controller");
const { userLogIn } = require("../controllers/userLogin.controller");
const {
  UpdateFarmer,
  getAllFarmers,
} = require("../controllers/farmer.controller");

//Register user
router.post("/register", signUp);

//user login
router.post("/login", userLogIn);

//farmers routes
router.get("/farmers", getAllFarmers);
router.put("/farmer-edit", UpdateFarmer);

module.exports = router;
