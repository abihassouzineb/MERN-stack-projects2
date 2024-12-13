const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const mongoose = require('mongoose');

router.get("/", async (req, res) => {
      try {
            const products = await Product.find();
            if (products.length === 0) {
                  return res.status(404).json({ message: "No products found" });
            }
            res.status(200).json({ success: true, data: products, number_of_products: products.length });
      } catch (err) {
            res.status(500).json({ message: err.message });
      }
});

router.post("/", async (req, res) => {
      const product = req.body;
      try {
            const newProduct = new Product(product);
            await newProduct.save();
            res.status(201).json({ success: true, data: newProduct });
      } catch (err) {
            res.status(500).json({ message: err.message });
      }
});


router.put("/:id", async (req, res) => {
      const { id } = req.params;
      const product = req.body;

      // Check if the product ID is valid
      if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid ID" });
      }
      try {
            const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
            if (!updatedProduct) {
                  return res.status(404).json({ message: "Product not found" });
            }
            res.status(200).json({ success: true, data: updatedProduct });
      } catch (err) {
            res.status(500).json({ message: err.message });
      }
});

router.delete("/:id", async (req, res) => {
      const { id } = req.params;
      try {
            const deletedProduct = await Product.findByIdAndDelete(id);
            if (!deletedProduct) {
                  return res.status(404).json({ message: "Product not found" });
            }
            res.status(200).json({ success: true, data: deletedProduct });
      } catch (err) {
            res.status(500).json({ message: err.message });
      }
});

module.exports = router;