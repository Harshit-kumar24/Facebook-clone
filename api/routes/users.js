const express = require('express');
const bcrypt = require('bcrypt');
const app = express();


//REGISTER
app.post("/register", async (req,res)=>{
    try{
        //generating hash
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password,salt);

        const newUser  = new User({
            username: req.body.username,
            password:req.body.password,
            email:hash
        })

        //saving the user
        const user = await newUser.save();
        res.status(200).log("user registered succesfully");

    }
    catch(err){
        console.log("There was a error registering you try again!");
        console.log(err);
    }
});

//LOGIN
app.get("/login", async (req,res)=>{

    try{

    const existingUser = User.findOne({email:req.body.email});
    
    if(!existingUser){
        res.status(404).send("user not found");
    }
    else{
        if(bcrypt.compare(req.body.password,existingUser.password)){
            res.status(200).json(existingUser);
        }
        else{
            res.status(400).send("wrong password");
        }
      }
    }
    catch(err){
        console.log(err);
    }
})