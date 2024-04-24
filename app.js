const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/NODE JS CRUD - REST API'

const app = express()

mongoose.connect(url, { useNewUrlParser: true })
const connectionHandle = mongoose.connection

connectionHandle.on('open', () => {
    console.log('connected...')
})

// adding middleware - for all the admin requests they will be forwarded to admins.js
const adminsRouter = require('./routes/admins')
app.use('/admins', adminsRouter)

app.listen(9000, () => {
    console.log('server started...');
})

