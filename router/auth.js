const express = require('express')

const router = express.Router()

require('../server')
const User = require('../model/userScheme')


router.get('/',(req,res) =>{
    res.send('hellow wolrd')
})

router.post('/register', async (req,res) =>{
    console.log(req.body)
    const { name, email, phone, work, password, cpassword} =  req.body
    if(!name || !email || !phone ||!work || !password || !cpassword){
        console.log('not form valid error');
        return res.status(422).json({error:'Please filled all required field'})
    }

    try{
            let userExist = await User.find({email:req.body.email});
            console.log('userExist',userExist,userExist.length)
            if(userExist.length) {
                res.status(422).json({error:'user alredy exist'})
            } 
            const user = new User(req.body)
            let save = await user.save()
            console.log('save',save)
            if(save){
                res.status(200).json({message:"user registered successfuly  "})
            }

    }catch (err){
        console.log('catch error ==========>', err)
    }

})


router.post("/signin", async (req,res)=>{
    console.log(req.body)
    try{
        if(!req.body.email || !req.body.password){
            res.json({"message":"fill all mendatory fields"})
        }
        const userLogin = await  User.findOne({email:req.body.email})
        console.log(userLogin)

    }catch(error){
        console.log('error',error)

    }
})






module.exports = router