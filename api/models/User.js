const mongoose  = require('mongoose');

const UserSchema = mongoose.Schema({
    username:{
        type:String,
        require:true,
        min:3,
        max:20,
        unique:true
    },
    password:{
        type:String,
        require:true,
        min:5,
    },
    email:{
        type:String,
        require:true,
        max:50,
        unique:true
    },
    profilePicture:{
        type:String,
        default:""
    },
    coverPicture:{
        type:String,
        default:""
    },
    followers:{
        type:Array,
        default:[]
    },
    following:{
        type:Array,
        default:[]
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    description:{
        type:String,
        max:120
    },
    city:{
        type:String,
        max:50
    },
    relationship:{
        type:Boolean,
        default:false
    }
},
{
    timestamp:true
});

module.exports = mongoose.model("User",UserSchema);