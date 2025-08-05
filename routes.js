const express = require('express')

const userController = require('./controllers/userController')

const recipeController = require('./controllers/recipeController')

const route = new express.Router()



//-------------------COMMON-----------------

//path to login
route.post('/login' , userController.loginController)


//path to get home recipe
route.get('/home-recipes' , recipeController.getAllHomeRecipesController)




//---------------------USER-----------

//path to register
route.post('/user-register' , userController.registerController)



//path to get all recipes
route.get('/all-recipes' , recipeController.getAllRecipesController)




//---------------------ADMIN------------------





module.exports = route