

//to add testimonials

const testimonials = require("../models/testimonialModel");

exports.addTestimonialController = async(req , res)=>{

    const { name , email , message } = req.body
    console.log(name , email , message);
    

    try {

        const usertestimonials = new testimonials( {
            name , 
            email ,
            message
        })
        await usertestimonials.save()
        res.status(200).json(usertestimonials)
        
    } catch (error) {
        res.status(500).json(error)
    }
}