const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({

    firstName:      {type: String, required: true},
    lastName:       {type: String, required: true},
    email:          {type: String, required: true, unique: true},
    passwordHash:   {type: String, required: true},

}, { timestamps: true })

module.export = mongoose.model('Customer', customerSchema);