const express = require('express')
const router = express.Router()
const Admin = require('../models/admin')

router.get('/', async(req, res) => {
    try {
        const admins = await Admin.find()
        res.json(admins)
    }
    catch (err) {
        res.send('Error: ' + err);
    }
})

// exporting this router so that it is accessible in app.js
module.exports = router