import mongoose from "mongoose";

let userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    todos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "todo"
    }]
},
{
    timestamps: true
});

let userModel = mongoose.model("user",userSchema);

export default userModel;