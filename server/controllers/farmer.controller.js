const Farmer = require("../models/farmerModel");

const getAllFarmers = async (req, res) => {
  await Farmer.find((err, response) => {
    if (err) {
      return res.status(500).json({ status: err });
    }
    return res.status(200).json({
      status: "ok",
      response,
    });
  });
};

const UpdateFarmer = async (req, res) => {
  await Farmer.findOneAndUpdate(
    { email: req.body.email },
    {
      $set: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        state: req.body.state,
        lga: req.body.lga,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
      },
    },

    (err, response) => {
      if (err) {
        return res.status(500).json({ message: "Error Occurred" });
        //console.log(err);
      }
      if (!response) {
        return res.status(400).json({ message: "Record not found" });
      }

      return res.status(200).json({
        status: "ok",
        response,
      });
    }
  );
};

module.exports = { getAllFarmers, UpdateFarmer };
