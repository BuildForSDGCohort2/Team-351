const Storage = require("../models/productStorage");

const storageTips = async (req, res) => {
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

module.exports = storageTips;
