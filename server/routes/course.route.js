const express=require("express")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

const CourseModel = require("../models/course.models")
const auth = require("../middlewares/auth.middlewares")
const router=express.Router()

router.use(auth)
router.post("/addcourse",async(req,res)=>{
 
    try {
        const token=req.headers.authorization
    const decoded=jwt.verify(token,"masai")
    const useremail=decoded.email
        const data=new CourseModel({...req.body,email:useremail})
        await data.save()
       return res.status(200).send({"msg":"Course added"})
    } catch (error) {
        console.log(error)
       return res.status(400).send( {"msg":"Something went wrong",error:error})
    }
})
router.get("/",async(req,res)=>{
    const {title}=req.query
    try {
        if(title){
          let condition ={title:new RegExp(title)}
          const course=await CourseModel.find(condition)
         return res.status(200).send({"Course":course})
        }else{
            const courses=await CourseModel.find({})
            // console.log(course)
           return res.status(200).send({"Course":courses})  
        }
    } catch (error) {
        console.log(error)
       return res.status(400).send( {"msg":"Something went wrong",error:error})
    }
})
router.patch("/update/:id",async(req,res)=>{
    const {id}=req.params
    
    const token=req.headers.authorization
    const decoded=jwt.verify(token,"masai")
    const useremail=decoded.email
    const course=await CourseModel.findById(id)
    try {
        if(useremail==course.email){
            const courses=await CourseModel.findByIdAndUpdate(id,req.body)
            const data=await CourseModel.findById(id)
           return res.status(200).send({"Course":data})  
        }
        else{
           return res.status(400).send("You Are Not Authorized")
        }
       
       
    } catch (error) {
        console.log(error)
       return res.status(400).send( {"msg":"Something went wrong",error:error})
    }
})
router.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params
    
    const token=req.headers.authorization
    const decoded=jwt.verify(token,"masai")
    const useremail=decoded.email
    const course=await CourseModel.findById(id)
    try {
        if(useremail==course.email){
            await CourseModel.findByIdAndDelete(id)
           return res.status(200).send({"message":"course deleted"})  
        }
        else{
           return res.status(400).send("You Are Not Authorized")
        }
       
       
    } catch (error) {
        console.log(error)
       return res.status(400).send( {"msg":"Something went wrong",error:error})
    }
})

router.get("/singleProductPage/:courseId", async (req, res) => {
    const { courseId } = req.params;    
    console.log('courseId:', courseId)
    try {
      const singleProductPage = await CourseModel.findOne({_id:courseId});
      console.log('singleProductPage:', singleProductPage)
      if (!singleProductPage) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.status(200).json(singleProductPage);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });  
module.exports=router