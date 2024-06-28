const model = require('../model/product');
const mongoose = require('mongoose');
const Product = model.Product;

// Create a new product
exports.create = async (req, res) => {
    try {
        const product = new Product(req.body);
        const doc = await product.save();
        res.status(201).json(doc);
    } catch (err) {
        console.log({err});
        res.status(400).json(err);
    }
};

// Get all products
exports.getALL = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Get a product by ID
exports.getProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(product);
    } catch (err) {
        res.status(500).json(err);
    } 
};

// Replace a product by ID
exports.replaceProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const doc = await Product.findOneAndReplace({ _id: id }, req.body, { new: true });
        if (!doc) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(201).json(doc);
    } catch (err) {
        res.status(400).json(err);
    }
};

// Update a product by ID
exports.updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const doc = await Product.findOneAndUpdate({ _id: id }, req.body, { new: true });
        if (!doc) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(201).json(doc);
    } catch (err) {
        res.status(400).json(err);
    }
};

// Delete a product by ID
exports.deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const doc = await Product.findOneAndDelete({ _id: id });
        if (!doc) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(201).json(doc);
    } catch (err) {
        res.status(400).json(err);
    }
};
