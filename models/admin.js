const mongoose = require('mongoose')

const adminsSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Admin', adminsSchema)