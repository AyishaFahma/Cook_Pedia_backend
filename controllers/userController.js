

const users = require("../models/userModel");

// bcrypt
const bcrypt = require('bcrypt');

//json webtoken
const jwt = require('jsonwebtoken')




//register controller

exports.registerController = async(req, res)=>{

    const { username , password , email } = req.body
    console.log( username , password , email );


    try {

        const existingUser = await users.findOne( {email} )

        if(existingUser){
            res.status(406).json('User Already Exist')
        }
        else{

            // password encode using bcrypt
            const encryptedPassword = await bcrypt.hash(password , 10)
            console.log(encryptedPassword);
            
            // encrypted paasword is storing in db
            const newUser = new users( {
                username,
                email,
                password:encryptedPassword
            })
            await newUser.save()
            res.status(200).json(newUser)
        }


        
    } catch (error) {
        res.status(500).json(error)
    }
    

}



//login controller
exports.loginController = async(req, res)=>{
    const {email , password} = req.body
    console.log(email , password);


    try {

        const existingUser = await users.findOne( {email})

        if(existingUser){

            //comparing the password given by the user and db stored encrypted password

            const result = await bcrypt.compare(password,existingUser.password)
            console.log(result); // it return true or false

            if(result){

                //token creation for user
                const token = jwt.sign( {userId:existingUser._id} , process.env.SECRETKEY)
                console.log(token);
                

                res.status(200).json({existingUser , token})
            }
            else{
                res.status(401).json('Invalid Credential')
            }
            
        }
        else{
            res.status(406).json('Account doesnot Exist !!! Please Login')
        }
        
    } catch (error) {
        res.status(500).json(error)
    }
    
}