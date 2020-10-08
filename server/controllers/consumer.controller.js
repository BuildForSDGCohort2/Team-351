const Customer = require("../models/consumerModel");

const getAllConsumers = async (req, res) => {
  await Customer.find((err, result) => {
    if (err) {
      return res.status(500).json({ status: err });
    }
    return res.status(200).json({
      status: "ok",
      result,
    });
  });
};

const UpdateConsumer = async (req, res) => {
  await Customer.findOneAndUpdate(
    { email: req.body.email },
    {
      $set: {
        fullName: req.body.fullName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        
      },
    },

    (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Error Occurred" });
        //console.log(err);
      }
      if (!result) {
        return res.status(400).json({ message: "Record not found" });
      }

      return res.status(200).json({
        status: "ok",
        result,
      });
    }
  );
};    

module.exports = { getAllConsumers, UpdateConsumer };   
