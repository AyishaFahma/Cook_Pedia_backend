const express = require('express')

const userController = require('./controllers/userController')

const recipeController = require('./controllers/recipeController')


const savedRecipeController = require('./controllers/savedRecipeController')

const downloadRecipeController = require('./controllers/downloadRecipeController')

const testimonialController = require('./controllers/testimonialController')

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


//path to get all saved recipes for a perticular user
route.get('/all-saved-recipes' , jwt , savedRecipeController.getAllSavedRecipeController)


//path to delete a saved recipe from saved recipes
route.delete('/delete-savedRecipe/:id' , savedRecipeController.deleteASavedRecipeController)


//path to add a recipe to download
route.post('/download-recipe/:recipeId' , jwt , downloadRecipeController.addToDownloadRecipeController)


//path to get all downloaded recipe by user
route.get('/all-user-downloads' , jwt , downloadRecipeController.getAllDownloadedRecipeController)


//path to add a testimonial
route.post('/add-testimonials' , testimonialController.addTestimonialController)


//---------------------ADMIN------------------





module.exports = route