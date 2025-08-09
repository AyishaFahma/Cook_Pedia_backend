
const downloads = require("../models/downloadRecipeModel");


//add to download a recipe
exports.addToDownloadRecipeController = async(req , res)=>{


    const {recipeId} = req.params
    const userId = req.payload

    const { name , image , cuisine } = req.body

    console.log(recipeId , userId , name , image , cuisine );
    


    try {

        const existingRecipe = await downloads.findOne( {recipeId , userId} )


        if(existingRecipe){
            existingRecipe.count += 1
            await existingRecipe.save()
            res.status(200).json(existingRecipe)
        }
        else{

            const newRecipe = new downloads( {
                recipeId , recipeName:name , recipeImage:image , cuisine , count:1 , userId 
            })

            await newRecipe.save()
            res.status(200).json(newRecipe)

        }
        
    } catch (error) {
        res.status(500).json(error)
    }
}


//get all downloaded recipes
exports.getAllDownloadedRecipeController = async(req , res)=>{

    const userId = req.payload
    console.log(userId);
    

    try {

        const alluserDownloadedRecipe = await downloads.find({userId})
        res.status(200).json(alluserDownloadedRecipe)
        
    } catch (error) {
       res.status(500).json(error) 
    }
}