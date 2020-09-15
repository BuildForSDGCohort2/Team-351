const express = require("express");
const router = express.Router();

const signUp = require("../controllers/userSignup.controller");
const { userLogIn } = require("../controllers/userLogin.controller");

//Register user
router.post("/register", signUp);

//user login
router.post("/login", userLogIn);

module.exports = router;
