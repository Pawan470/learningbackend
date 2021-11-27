const mongoose = require('mongoose')
var bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    }
    ,
    phone:{
        type:Number,
        required:true,
    },
    work:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    }
})
 

userSchema.pre('save', async function(next){
        console.log("hwy i am in")
    if(this.isModified('password')){
        // used for hash Password 
        this.password = await bcrypt.hash(this.password,12);
        this.cpassword = await bcrypt.hash(this.cpassword,12);
        console.log(this.password)
    }
    next();
    
})
const User = mongoose.model('USER',userSchema)
module.exports = User