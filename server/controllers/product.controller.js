const Product = require("../models/productModel");
const SaleProduct = require("../models/salesModel");
const Transaction = require("../models/transactionModel")

const addProduct = async (req, res) => {
  await Product.findOne((err, result) => {
    if (err) {
      return res.status(500).json({
        message: err.message,
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

//Post product for sale
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

// Retrieve all products available for sale
const listProduct = async (req, res) => {
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

transaction= async(req, res)=>{
  const purchase = new Transaction(req.body);

  await purchase.save().then((data) => {
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
}

module.exports = {
  addProduct,
  getProduct,
  listProduct,
  saleProduct,
  transaction,
};
