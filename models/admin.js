const mongoose = require('mongoose')

const adminsSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        default: 'person@gmail.com'
    },
    designation: {
        type: String,
        required: true,
        default: 'Employee'
    }

})

module.exports = mongoose.model('Admin', adminsSchema)