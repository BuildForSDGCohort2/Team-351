const Storage = require("../models/productStorage");

const addStorageTips = async (req, res) => {
  await Storage.findOne((err, result) => {
    if (err) {
      return res.status(500).json({
        message: err.message,
      });
    }

    const storage = new Storage(req.body);
    storage.save().then((data) => {
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
  });
};

const getStorageTips = async (req, res) => {
  await Storage.find((err, result) => {
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

updateStorage = async (req, res) => {
  await Storage.findOneAndUpdate(
    { categoryId: req.body.categoryId },
    {
      $set: {
        categoryId: req.body.categoryId,
        productCategory: req.body.productCategory,
        storageDetail: req.body.storageDetail,
      },
    },

    (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Error Occurred" });
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

module.exports = { addStorageTips, getStorageTips, updateStorage };
