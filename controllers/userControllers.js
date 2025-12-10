import userModel from "../models/usermodel.js";

export let getUserDetails = async(req,res)=>{
    return res.status(200).json({success: true, user: req.user});
}


export let updateUserDetails = async(req,res)=>{
    try
    {
        let userexist = await userModel.findOne({_id: req.user._id});
        if(userexist)
        {
            let newname = req.body.name || req.user.name;
            let newemail = req.body.email || req.user.email;
            let user = await userModel.updateOne({_id: req.user._id},{name: newname, email: newemail});
            return res.status(200).json({success: true, msg: "User updated successfully"});
        } 
        else
        {
            return res.status(404).json({success: false, msg: "User not found"});
        }
    }
    catch(error)
    {
        res.status(500).json({success: false, msg: "Server error while updating profile"});
    }
}