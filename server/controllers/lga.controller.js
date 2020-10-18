const States = require("../models/statemodel");
const Lga = require("../models/lga");

const addState = async (req, res) => {
  const states = new States(req.body);
  states.save().then((data) => {
    if (!data) {
      return res.status(401).json({
        message: "Request is empty",
      });
    }
    return res.status(200).json({
      status: "ok",
      data,
    });
  });
};

const addLga = async (req, res) => {
  const lga = new Lga(req.body);
  lga.save().then((data) => {
    if (!data) {
      return res.status(401).json({
        message: "Request is empty",
      });
    }
    return res.status(200).json({
      status: "ok",
      data,
    });
  });
};

// get all States
const getState = async (req, res) => {
  await States.find((err, result) => {
    if (err) {
      return res.status(500).json({
        message: " server error",
      });
    }
    return res.status(200).json({
      status: "ok",
      result,
    });
  });
};

// get all LGA
const getLga = async (req, res) => {
  //console.log(req.body)
  await Lga.find((err, result) => {
    //console.log(result)

    if (err) {
      return res.status(500).json({
        message: " server error",
      });
    }

    if (!result) {
      return res.status(401).json({
        message: " Not found",
      });
    }

    return res.status(200).json({
      status: "ok",
      result,
    });
  });
};

module.exports = { addLga, getLga, addState, getState };
