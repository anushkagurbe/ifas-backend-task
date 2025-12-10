import userModel from "../models/usermodel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export let registerController = async(req,res)=>{
    try
    {
        let {name, email, password} = req.body;
        if(!name || !email || !password)
        {
            return res.status(400).json({success: false, msg: "All fields are required"});
        }
        let userExist = await userModel.findOne({email: email});
        if(userExist)
        {
            return res.status(400).json({success: false, msg: "Email already exists"});;
        }
        let hashedpassword = await bcrypt.hash(password,10);
        let user = await userModel.create({name: name, email: email, password: hashedpassword});
        if(user)
        {
            console.log(user);
            return res.status(201).json({success: true, msg: "User registered successfully"});
        }
        else
        {
            return res.status(400).json({success: false, msg: "Invalid user data"})
        }
    }
    catch(error)
    {
        return res.status(500).json({success: false, msg: "Server error"})
    }
}

export let logincontroller = async(req,res)=>{
    try
    {
        let {email, password} = req.body;
        if(!email || !password)
        {
            return res.status(400).json({status: false, msg: "All fields are required"});
        }
        let user = await userModel.findOne({email: email});
        if(user && (await bcrypt.compare(password, user.password)))
        {
            let token = jwt.sign({id: user._id}, process.env.JWT_SECRET, { expiresIn: "1d" });
            return res.status(200).json({success: true, token: token, user: {name: user.name, email: user.email, id: user._id}});
        }
        else
        {
            return res.status(401).json({status: false, msg: "Invalid credentials"});
        }
    }
    catch(error)
    {
        return res.status(500).json({success: false, msg: "Server error"})
    }
}