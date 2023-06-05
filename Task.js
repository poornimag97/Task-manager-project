let mongoose=require("mongoose")

//schema , store the data in db ,let's us have the validation for data

const TaskSchema=new mongoose.Schema({
    task:{
        type:String,
        required:true,
        trim:true
    },

},{timestamps:true})

module.exports=mongoose.model("task",TaskSchema)