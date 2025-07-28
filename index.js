

require('dotenv').config()
const express = require('express')

const cors = require('cors')
const route = require('./routes')
require('./connection')


const cookpediaServer = express()

cookpediaServer.use(cors())
cookpediaServer.use(express.json())
cookpediaServer.use(route)


const PORT = 4000 || process.env.PORT

cookpediaServer.listen(PORT , ()=>{
    console.log(`server running successfully at port ${PORT}`);
    
})