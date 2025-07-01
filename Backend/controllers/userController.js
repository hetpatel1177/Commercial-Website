import userModel from "../models/userModel.js"
import validator from "validator"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET) 
}

// route for user login
const loginUser = async (req,res) => {
    try{
        const {email,password} = req.body
        // checking user exists or not
        const user = await userModel.findOne({email});
        if(!user){
            return res.json({success:false, message: "User not found"})
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(isMatch){
            const token = createToken(user._id);
            res.json({success: true, token})
        }
        else{
            res.json({success:false, message: "Invalid credentials"})
        }
    }
    catch(err){
        console.log(err)
        res.json({success: false, message:error.message })
    }
}

// route for user registration
const registerUser = async (req,res) => {
    
    try{
        const {name,email,password} = req.body
        // shecking user already exists or not
        const exists = await userModel.findOne({email});
        if(exists){
            return res.json({success:false, message: "User already exists"})
        }
        //validating email formate and strong password
        if(!validator.isEmail(email)){
            return res.json({success:false, message: "Invalid email"})
        }
        if(password.length < 8){
            return res.json({success:false, message: "Password should be at least 8 characters"})
        }
        // hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })
        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({success: true, token})
    }catch(err){
        console.log(err)
        res.json({success: false, message: "Internal server error"})
    }
}
// route for admin login
const adminLogin = async (req,res) => {
    try{
        const{email, password} = req.body
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password,process.env.JWT_SECRET);
            res.json({success:true, token:token})
        }
        else{
            res.json({success:false,message:"Invalid Credentials"})
        }
    }catch(error){
        console.log(error)
        res.json({success: false, message: "Internal server error"})
    }
}

export default {loginUser, registerUser, adminLogin}