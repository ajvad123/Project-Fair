//load .env file  contents into process .env by defualt 
require('dotenv').config()
const express=require('express')
const cors=require('cors')
const router=require('./Routes/routes')
// creating express Server instance
const pfServer=express()
require('./DB/connection')

// configuring cors into server

pfServer.use(cors())

// confiquring json to server

pfServer.use(express.json())

// configuring router into server

pfServer.use(router)

// 

pfServer.use('/uploads',express.static('./uploads'))

const  PORT=3000


//calling listen method to impliment listen mode for server to run 

pfServer.listen(PORT,()=>{
    console.log(`Server is running at :${PORT}`);
})

//setting response for base_url get request
pfServer.get('/',(req,res)=>{
    res.status(200).send("<h1>The get request Hit successfully</h1>")
}) 