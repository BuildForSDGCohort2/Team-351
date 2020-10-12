const Lga = require("../models/lga")

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

// get all products
const getLga = async (req, res) => {
   await Lga.findOne({state : req.body.state}, (err, result) => {
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

  module.exports = {addLga, getLga}
  