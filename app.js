const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/ADMINSDB'

// this is how you start your express
const app = express()

// this url is where the database will be connecting
mongoose.connect(url, { useNewUrlParser: true })
const connectionHandle = mongoose.connection

// connection to the database
connectionHandle.on('open', () => {
    console.log('connected...')
})

// for using JSON
app.use(express.json())

// adding middleware - for all the admin requests they will be forwarded to admins.js
const adminsRouter = require('./routes/admins')
// for all the admin requests you need to use the admins.js file
app.use('/admins', adminsRouter)

app.listen(9000, () => {
    console.log('server started...');
})

