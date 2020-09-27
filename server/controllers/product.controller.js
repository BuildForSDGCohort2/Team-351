const Product = require("../models/productModel");
const SaleProduct = require("../models/salesModel");

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

const saleProduct = async (req, res) => {

  const product = new SaleProduct(req.body);

  await product.save().then((data) => {
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
const getProduct = async (req, res) => {
  await SaleProduct.find((err, result) => {
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

const productFilter = async (req, res) => {
  await Product.findOne({ userId: req.body.userId }, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "error" });
    }

    return result
      ? res.status(200).json({ status: "ok", result })
      : res.status(400).json({ message: "record not found" });
  });
};

const productDetails = async (req, res) => {
  await Product.find({ productId: req.body.productId }, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "error" });
    }

    return result
      ? res.status(200).json({ status: "ok", result })
      : res.status(400).json({ message: "record not found" });
  });
};
module.exports = {
  addProduct,
  getProduct,
  productFilter,
  productDetails,
  saleProduct,
};
