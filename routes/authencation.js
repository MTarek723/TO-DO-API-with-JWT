const express = require('express')
const {register , login} = require('../controllers/authcontrollers')

const authRoute = express.Router()

authRoute.post('/login', login)
authRoute.post('/register', register);

module.exports = authRoute