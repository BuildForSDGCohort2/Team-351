const express = require("express");
const router = express.Router();

const signUp = require("../controllers/userSignup.controller");

//Register user
router.post("/register", signUp);

module.exports = router;  