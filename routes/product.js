const express = require('express');
const productController = require('../controller/product');
const router = express.Router();

router
    .post('/', productController.create)
    .get('/', productController.getALL)
    .get('/:id', productController.getProduct)
    .put('/:id', productController.replaceProduct)
    .patch('/:id', productController.updateProduct)
    .delete('/:id', productController.deleteProduct);

module.exports = { router };
