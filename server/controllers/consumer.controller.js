const Customer = require("../models/consumerModel");

const getAllCustomers = async (req, res) => {
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

const UpdateCustomer = async (req, res) => {
  await Customer.findOneAndUpdate(
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

module.exports = { getAllCustomers, UpdateCustomer };
