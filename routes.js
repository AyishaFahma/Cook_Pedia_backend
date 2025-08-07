const express = require('express')

const userController = require('./controllers/userController')

const recipeController = require('./controllers/recipeController')


const savedRecipeController = require('./controllers/savedRecipeController')

const jwt = require('./middleware/jwtMiddleware')

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


//path to view a single recipe
route.get('/view-recipes/:id' , recipeController.getARecipeController)


//path to save recipe
//jwt used to get userid
route.post('/add-savedRecipe/:id' , jwt , savedRecipeController.addSavedController)




//---------------------ADMIN------------------





module.exports = route