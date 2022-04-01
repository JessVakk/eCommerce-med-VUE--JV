const Customer = require('./customerSchema')
const bcrypt = require('bcryptjs');

exports.registerCustomer = (req, res) => {

    Customer.exists({ email: req.body.email }, (err, result) => {
  

        if(err) {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'You made a bad request',
                err
            })
        }

        if(result) {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'The email adress already exist',
            })
        }
        
    const salt =bcrypt.genSaltSync(10);
    bcrypt.hash(req.body.password, salt, (err, hash) =>{

        if(err) {
            return res.status(500).json({
               statusCode: 500,
               status: false,
               message: 'Failed to encypt the password',  
               err  
            })
        }
    
    res.json({
        password: req.body.password,
        passwordHash: hash
    })


    })

    })

}