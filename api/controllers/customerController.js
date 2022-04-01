const router = require('express').Router();
const customerModel = require('../models/customers/customerModel');

router.post('/register', customerModel.registerCustomer )


module.exports = router;