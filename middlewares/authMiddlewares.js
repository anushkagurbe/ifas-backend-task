import jwt from "jsonwebtoken";
import userModel from "../models/usermodel.js";

export let authMiddleware = async(req,res,next)=>{
    let jwttoken = req.headers.authorization;
    if(jwttoken && jwttoken.startsWith("Bearer "))
    {
        let token = jwttoken.split(" ")[1];
        try
        {
            let decodedtoken = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await userModel.findOne({_id: decodedtoken.id}).select("-password");
            next();
        }
        catch(error)
        {
            return res.status(401).json({success: false, msg: "Not authorized"});
        }
    }
    else
    {
        res.status(401).json({success: false, msg: "No token provided"});
    }
}