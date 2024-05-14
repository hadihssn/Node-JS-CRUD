const express = require('express')
const router = express.Router()
const Admin = require('../models/admin')


// this is for sending data to the frontend/client after it has been retrieved from the database
router.get('/', async (req, res) => {
    try {
        const admins = await Admin.find()
        res.json(admins)
    }
    catch (err) {
        res.send('Error: ' + err);
    }
})

// this route is also for sending data to the frontend/cient but here we will be doing it for a specific object which will be specified by the ID
router.get('/:id', async (req, res) => {
    try {
        const admin = await Admin.findById(req.params.id) // using params here because id will be in url and not in the body
        res.json(admin)
    }
    catch (err) {
        res.send('Error: ' + err);
    }
})


// this is for saving data to the database which is coming from the frontend/client
router.post('/', async (req, res) => {
    const admin = new Admin({
        name: req.body.name,
        email: req.body.email,
        designation: req.body.designation
    })

    try {
        //saving data in a variable

        /*In line 24 of admins.js, a new Admin document is being created and saved to the database.

        The admin.save() function is an asynchronous operation that saves the admin document to the database. However, there's a mistake in the code. The await keyword is missing, which means the promise returned by admin.save() is not being properly handled.

        The corrected code should look like this:

        This code will wait for the admin.save() operation to complete before moving on. If the operation is successful, the saved Admin document will be stored in object1. If there's an error during the operation, the code will catch the error and send a response with 'Error'.*/
        const object1 = await admin.save()

        // this is sending the data to the front end/client to show to the user
        res.json(object1)
    }
    catch (err) {
        res.send('Error')
    }
})

// below is the code for PATCH command
router.patch('/:id', async (req, res) => {
    try {
        const admin = await Admin.findById(req.params.id)
        admin.designation = req.body.designation

        // saving our modified data
        const object1 = await admin.save()
        res.json(object1)
    }
    catch (err) {
        res.send('Error')
    }
})

// below is the code for DELETE command
router.delete('/:id', async (req, res) => {
    try {
        const admin = await Admin.findByIdAndDelete(req.params.id) // removing the specified admin from DB
        console.log(req.params.id)
  
        res.json("User deleted successfully")
    }
    catch (err) {
        res.send('Error')
    }
})

// exporting this router so that it is accessible in app.js
module.exports = router