import mongoose from "mongoose";

let todoSchmema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    title: {
        type: String,
        required: true,
        minlength: 6
    }
},
{
    timestamps: true
})

let todoModel = mongoose.model("todo",todoSchmema);

export default todoModel;