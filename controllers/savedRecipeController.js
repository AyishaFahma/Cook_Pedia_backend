const savedRecipes = require("../models/savedRecipesModel");


//to add recipe to saverecipe
exports.addSavedController = async(req , res)=>{

    const {id} = req.params
    const {image , name} = req.body

    // userid is get from the jwt

    const userId = req.payload

    console.log(name, image, userId , id);
    


    try {

        const existingRecipe = await savedRecipes.findOne({recipeId:id})

        if(existingRecipe){
            res.status(406).json('Recipe Already Added')
        }
        else{

            const newRecipe = new savedRecipes( {
                recipeId:id,
                name,
                image,
                userId
            })

            await newRecipe.save()
            res.status(200).json(newRecipe)

        }
        
    } catch (error) {
        res.status(500).json(error)
    }
}



//get all saved recipes
exports.getAllSavedRecipeController = async(req , res)=>{

    const userId = req.payload
    console.log(userId);
    

    try {

        const allSavedRecipes = await savedRecipes.find({userId})
        res.status(200).json(allSavedRecipes)
        
    } catch (error) {
        res.status(500).json(error)
    }
}


//to delete a saaved recipe
exports.deleteASavedRecipeController = async(req , res) => {

    //delete based on _id unique key in every document

    const {id} = req.params

    try {

        await savedRecipes.findByIdAndDelete({_id:id})
        res.status(200).json('Deleted')
        
    } catch (error) {
        res.status(500).json(error)
    }

}