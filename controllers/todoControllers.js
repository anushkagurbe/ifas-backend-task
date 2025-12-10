import todoModel from "../models/todomodel.js";
import userModel from "../models/usermodel.js";

export let addTodoController = async(req,res)=>{
    try
    {
        let {title} = req.body;
        if(!title)
        {
            return res.status(400).json({success: false, msg: "Title is required"});
        }
        else
        {
            let todo = await todoModel.create({user: req.user._id ,title: title});
            await userModel.findByIdAndUpdate(req.user._id, {$push: {todos: todo._id}});
            return res.status(201).json({success: true, todo: todo, msg: "Task added successfully"});
        }
    }
    catch(error)
    {
        res.status(500).json({success: false, message: "Server error"});
    }       
}


export let getTodoController = async(req,res)=>{
    try
    {
        let todos = await todoModel.find({user: req.user._id});
        return res.status(200).json({success: true, todos: todos});
    }
    catch(error)
    {
        return res.status(500).json({success: false, message: "Server error"});
    }
}


export let updateTodoController = async(req,res)=>{
    try
    {
        let title = req.body.title;
        if(!title)
        {
            return res.status(400).json({success: false, msg: "Title is required"});
        }
        let todo = await todoModel.findOne({_id: req.params.id});
        if(todo.user.toString() == req.user._id.toString())
        {
            if(todo)
            {
                await todoModel.findByIdAndUpdate(req.params.id,{title: title});
                return res.status(200).json({success: true, msg: "Todo updated successfully"});
            }
            else
            {
                return res.status(404).json({ success: false, msg: "Todo not found" });
            }
        }
        else
        {
            return res.status(401).json({ success: false, msg: "Unauthorized user" });
        }
    }

    catch(error)
    {
        return res.status(500).json({success: false, message: "Server error", error: error});
    }
}



export let deleteTodoController = async(req,res)=>{
    try
    {
        let todo = await todoModel.findOne({_id: req.params.id});
        if(todo.user.toString() == req.user._id.toString())
        {
            if(todo)
            {
                await todoModel.findByIdAndDelete(req.params.id);
                return res.status(200).json({success: true, msg: "Todo deleted successfully"});
            }
            else
            {
                return res.status(404).json({ success: false, msg: "Todo not found" });
            }
        }
        else
        {
            return res.status(401).json({ success: false, msg: "Unauthorized user" });
        }
    }

    catch(error)
    {
        return res.status(500).json({success: false, message: "Server error"});
    }
}