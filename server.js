const express = require('express')
const app = express()
const axios = require('axios')
const bodyParser = require('body-parser')
const path = require('path')
const api = require('./server/routes/api')


const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/bankDB', { useNewUrlParser: true })

// app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use( '/', api )

const port = 4200
app.listen(port, () =>
    console.log(`Running on port ${port}`))