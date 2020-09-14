const Product = require("../models/productModel");

const addProduct = async (req, res) => {
  await Product.findOne({ productId: req.body.productId }, (err, result) => {
    if (err) {
      return res.status(500).json({
        message: err.message,
      });
    }

    if (result) {
      return res.status(400).json({
        message: "product already saved",
      });
    }
    const product = new Product(req.body);
    product.save().then((data) => {
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

const getProduct = async (req, res) => {
  await Product.find((err, result) => {
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
module.exports = { addProduct, getProduct };
