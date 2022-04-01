const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({

    products: { type: Array },
        customerId: { type: mongoose.Schema.Types.ObjectId }
    }, {timestamps: true})
     [
        {
            product: {type: String },
            quantity: {type: Number, default: 1 },
            
        }
        
    ]
   

module.exports = mongoose.model('Order', orderSchema)