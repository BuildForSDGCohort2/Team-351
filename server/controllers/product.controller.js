const Product = require("../models/productModel");
const SaleProduct = require("../models/salesModel");
const Transaction = require("../models/transactionModel");

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

//Product purchase request
transaction = async (req, res) => {
  const purchase = new Transaction(req.body);

  await purchase.save().then((response) => {
    if (!response) {
      return res.status(401).json({
        message: "Request is empty",
      });
    }
    return res.status(200).json({
      status: "ok",
      response,
    });
  });
};

// Retrieve all products available for sale
const listTransactions = async (req, res) => {
  await Transaction.find((err, result) => {
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

transactionStatus = async (req, res) => {
  await Transaction.findOneAndUpdate(
    { transactionId: req.body.transactionId },
    {
      $set: {
        userId: req.body.userId,
        salesId: req.body.salesId,
        productName: req.body.productName,
        quantity: req.body.quantity,
        price: req.body.price,
        buyerName: req.body.buyerName,
        buyerPhoneNumber: req.body.buyerPhoneNumber,
        transactionStatus: req.body.transactionStatus,
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

//Update product quantity
productUpdate = async (req, res) => {
  await Product.findOneAndUpdate(
    { productId: req.body.productId },
    {
      $set: {
        productId: req.body.productId,
        userId: req.body.userId,
        productCategory: req.body.productCategory,
        productName: req.body.productName,
        quantity: req.body.quantity,
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

module.exports = {
  addProduct,
  getProduct,
  listProduct,
  saleProduct,
  transaction,
  listTransactions,
  transactionStatus,
  productUpdate,
};
