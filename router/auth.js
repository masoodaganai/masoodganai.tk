
const dotenv = require('dotenv');
const express = require('express');
const bcrypt =require('bcryptjs');
const router = express.Router();
dotenv.config({path:'./config.env'});
const authenticate = require("../middleware/authenticate");
require('../db/conn');
const User = require('../model/UserSchema');
router.get('/',(req, res) =>{
    res.send('hello from server router');

});
//using promises
// router.post('/register',(req,res) =>{
//     const { name, email,  phone, work, password, cpassword}=req.body;

   

//     if (( !name || !email|| !phone || !work || !password || !cpassword)){
//         return res.status(422).json({error:'plz filled the field properly'});
// }
// User.findOne({email:email})
// .then((userExsist)=>{
//     if (userExsist){
//             return res.status(422).json({err:"Email already exsist"});
//     }
//     const user =new User({name, email, phone, work, password, cpassword});
//     user.save().then(() =>{
//         res.status(201).json({message:"user registered succesfully"});
//     }).catch((err)=> res.status(500).json({error:"failed to register", err}));
// }).catch(err=> {console.log(err);});

// });
// usingAsync method

router.post('/register', async (req,res) =>{
    const { name, email,  phone, work, password, cpassword}=req.body;

   

    if (( !name || !email|| !phone || !password || !cpassword)){
        return res.status(422).json({error:'plz filled the field properly'});
}
try{
  const userExsist =await User.findOne({email:email})
  if (userExsist){
    return res.status(422).json({err:"Email already exsist"});
    }
    else if(password != cpassword){
        return res.status(422).json({error:'password not matched'});

    }else{
        const user =new User({name, email, phone, work, password, cpassword});

        await  user.save();
        res.status(201).json({message:"user registered succesfully"}); 
    }
   

   

}catch(err){
    console.log(err);

}
});
//login route

router.post('/signin', async(req,res)=>{
    // console.log(req.body);
    // res.json({message:"awesome"});
    try{ 
        let token;
    const {email, password}= req.body;
 
    if(!email || !password) {
        return res.status(400).json({error:"plz filled the data"})
    }

  const userLogin= await User.findOne({email:email});

 console.log(userLogin);

if(userLogin){
const isMatch = await bcrypt.compare(password,userLogin.password);

token = await userLogin.generateAuthToken();
console.log(token);
res.cookie("jwtoken", token ,{
expires:new Date(Date.now()+ 25892000000),
httpOnly:true
});
   
 
if(!isMatch){   
    res.status(400).json({error:"Credentials Invalid pass"}); 
}else{
    res.json({token:token,message:'user sign in successfully'});
}
 } else{
    res.status(400).json({error:"Credentials Invalid"});
 }
}

 catch(err){
        console.log(err);

    }
}); 
router.get('/about', authenticate, (req,res)=>{
    res.status(200).send({message:'Hello about world from server'})
});
router.get('/Contact', authenticate, (req,res)=>{
    res.status(200).send({message:'Hello about world from server'})
});

module.exports = router;