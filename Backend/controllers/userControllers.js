const asyncHandeler = require("express-async-handler");
const generateToken = require("../config/generateToken");

const User = require("../models/userModel")

const RegisterUsers = asyncHandeler(async (req, res) => {

    const { name, email, password, pic } = req.body;

    if (!name || !email || !password) {
        res.status(400)
        throw new Error("Please Enter All The Field ")
    }
    const FindUser = await User.findOne({ email })

    if(FindUser){
        res.status(400)
        throw new Error("User Already Exists")
    }

    const CreateUser = await User.create({name,email,password,pic})

    if(CreateUser){
        res.status(201).json({
            _id:CreateUser._id,
            name:CreateUser.name,
            email:CreateUser.email,
            password:CreateUser.password,
            pic:CreateUser.pic,
            token:generateToken(CreateUser._id)
        })
    }else{
        res.status(400)
        throw new Error("Fail to Create User")
    }

})


const LoginUser = asyncHandeler ( async (req,res) => {
    const {password,email} = req.body

const usercheck = await User.findOne({email})

if(usercheck && (await usercheck.matchPassword(password))){
    res.json({
        _id:usercheck._id,
        name:usercheck.name,
        email:usercheck.email,
        password:usercheck.password,
        pic:usercheck.pic,
        token:generateToken(usercheck._id)
    })
    
}else{
    res.status(400)
        throw new Error("Invalid Email Or password")
}

})




module.exports = { RegisterUsers,LoginUser }

