const express = require('express');
const app = express();
const cors = require('cors');

const customerController = require('./controllers/customerController');
const productController = require('./controllers/productControllers');
const userController = require('./controllers/userController');
//MIDDLEWARE
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//CONTROLLERS
app.use('/api/customers', customerController);
app.use('/api/products', productController);
app.use('/api/users', userController);

module.exports = app