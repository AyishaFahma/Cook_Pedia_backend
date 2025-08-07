
const recipes = require("../models/recipeModel")


//get home recipe
exports.getAllHomeRecipesController = async(req , res) =>{

   try {

       const allrecipes = await recipes.find().limit(3) 
       res.status(200).json(allrecipes)
        
    } catch (error) {
        res.status(500).json(error)
    } 

}



//get all recipes
exports.getAllRecipesController = async( req , res) =>{

    try {

       const allrecipes = await recipes.find() 
       res.status(200).json(allrecipes)
        
    } catch (error) {
        res.status(500).json(error)
    }
}


//get single recipe
exports.getARecipeController = async (req , res)=>{

    const {id} = req.params
    console.log(id);

    try {

        const recipe = await recipes.findOne( {_id:id} )
        res.status(200).json(recipe)
        
    } catch (error) {
       res.status(500).json(error) 
    }
    
}