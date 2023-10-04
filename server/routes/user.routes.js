const express=require("express")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const router=express.Router()
const UserModel = require("../models/user.models")
const Blacklist = require("../models/Blacklist")
const password = require("../middlewares/passchecker")
const auth = require("../middlewares/auth.middlewares")
const CourseModel = require("../models/course.models")
router.post("/register",password, async(req,res)=>{
    const {email,pass}=req.body
    try {
        const already=await UserModel.findOne({email})
        if(already){
          return  res.status(201).send("User already exists")
        }
        const hash=bcrypt.hashSync(pass,6)
        const user=new UserModel({...req.body,pass:hash})
      
        await user.save()
      return  res.status(200).send( {"msg":"The new user has been registered", "registeredUser":user})
        
    } catch (error) {
        console.log(error)
      return  res.status(400).send( {"msg":"Something went wrong",error:error})
    }
})

router.post("/login",async(req,res)=>{
    const {email,pass}=req.body
    try {
        const user=await UserModel.findOne({email})
        if(user){
            const veriify=bcrypt.compareSync(pass,user.pass)
            if(!veriify){
                return res.status(401).send({"msg":"Wrong credentials!"})
            }
            token=jwt.sign({userID:user._id},"masai",{expiresIn:"1d"})
          return  res.status(200).send( {"msg":"Login successful!","username":user.username,"Token":token})
        }else{
          return  res.status(400).send( {"msg":"User Not Found"})
        }
    } catch (error) {
        console.log(error)
      return  res.status(400).send( {"msg":"Something went wrong",error:error})
    }
})
router.get("/logout",async(req,res)=>{
    const token=req.headers.authorization
  
    try {
        const data=new Blacklist({token})
        await data.save()
      return  res.status(200).send( {"msg":"User has been logged out"})
    } catch (error) {
        console.log(error)
      return  res.status(400).send( {"msg":"Something went wrong",error:error})
    }
})
router.get("/",async(req,res)=>{
  try {
    const users=await UserModel.find();
    res.status(200).json(users)
  } catch (error) {
    res.status(400).json(error)
  }
})
router.patch("/cart/:courseId",auth,async(req,res)=>{
  try{
  const addtoCart=await CourseModel.findById(req.params.courseId)
  // console.log('addtoCart:', addtoCart)
  const cartItemID=String(addtoCart._id)
  const userId=String(req.body.userID)
  // console.log('req.body:', req.body)
  //   return 
  const client=await UserModel.findById(userId)
  // console.log('client:', client)
  const checkID=client.cart.includes(cartItemID)
  // console.log('checkID:', checkID)
  if(checkID){
      res.send({msg:"Course already exist in cart!"})
  }else{
    client.cart.push(cartItemID)      
    const updatePost=await UserModel.findByIdAndUpdate(userId,client,{new:true})
    res.status(200).json(updatePost)
  }

  }catch(err){
      console.log(err)
      return res.status(500).json({message:"Internal server error"})
  }
})

router.get("/cart",auth,async(req,res)=>{
  try{
  
  const userId=String(req.body.userID)
  const client=await UserModel.findById(userId)
  const checkID=client.cart
  //  populating the cart field of the client document
  // populate will replace those ObjectIDs with the actual documents from the referenced collection
  await client.populate("cart")
  res.json(client.cart)
  }catch(err){
      console.log(err)
      return res.status(500).json({message:"Internal server error"})
  }
})

router.delete("/cart/:courseID",auth,async(req,res)=>{
  try{
  const userId=String(req.body.userID)
  const client=await UserModel.findById(userId)
   await UserModel.updateOne(
    {_id:req.body.userID}, 
    { $pull: { cart:req.params.courseID} })

  await client.populate("cart")

  res.send(client.cart)
  }catch(err){
      console.log(err)
      return res.status(500).json({message:"Internal server error"})
  }
})

module.exports=router