const users = require("../Models/userModel");
const jwt = require('jsonwebtoken')

exports.userRegister = async (req, res) => {
    console.log(req.body);
    const { username, password, email } = req.body
    console.log(username, password, email);
    console.log("Inside register function ");

    const existingUser = await users.findOne({ email })

    try {
        if (existingUser) {
            res.status(401).json("user already Exist")
        } else {

            const newUser = new users({
                username, password, email, profile: "", github: "", linkdin: ""
            })
            await newUser.save()
            res.status(201).json(newUser)

        }
    }
    catch (err) {
        res.status(404).json(err)
    }
}

exports.userLogin = async (req, res) => {
    const { email, password } = req.body

    try {
        const existingUser = await users.findOne({ email, password })

        if (existingUser) {
            
            const token=jwt.sign({email:existingUser.email,username:existingUser.username,userId:existingUser._id},process.env.secret_key)
            const rest={token,user:existingUser.username}
            console.log(token);
            res.status(200).json(rest)
        } else {
            res.status(406).json("Invalid Username/Password")
        }
    }
     catch(err){
        console.log(err);
        res.status(401).json(err)
     }
  
}