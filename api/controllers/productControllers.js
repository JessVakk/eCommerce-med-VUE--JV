const router = require('express').Router();
const productModel = require('../models/products/productModel');
const auth = require('../authentication/auth');

//Get all products
router.get('/', productModel.getProduct);

//Get one product by id
router.get('/:id', productModel.getProductById);

//Create new product
router.post('/', auth.verifyToken, productModel.createProduct);

//Update product
router.patch('/:id', auth.verifyToken, productModel.updateProduct);
router.put('/:id', auth.verifyToken, productModel.updateProduct);

//Delete product
router.delete('/:id', productModel.deleteProduct);


module.exports = router;