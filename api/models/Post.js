const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    userId:{
        type:String,
        require:true
        },
        img:{
            type:String,
        },
        description:{
            type:String,
            require:true
        },     
       likes:{
            type:Array,
            default:[]
        },
        dislikes:{
            type:Array,
            default:[]
        }
    },
        {
            timestamps:true
        }
);

module.exports = mongoose.model("Post",PostSchema);

