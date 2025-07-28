const express = require('express')

const userController = require('./controllers/userController')

const route = new express.Router()

//---------------------USER-----------

//path to register
route.post('/user-register' , userController.registerController)

//path to login
route.post('/login' , userController.loginController)

module.exports = route