const express=require("express")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

const CourseModel = require("../models/course.models")
const router=express.Router()

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
    const {title,category}=req.query
    
    let condition ={}
   
    try {
        if(title){
          condition["title"]=new RegExp(title,"i")
        }
        if(category){
            condition.category=category
          }
          const sorting = {};
          if (req.query.sort === 'rating') {
              sorting.rating = req.query.sortOrder === 'asc' ? 1 : -1;
            } else if (req.query.sort === 'price') {
              sorting.price = req.query.sortOrder === 'asc' ? 1 : -1;
            }
          let courses=await CourseModel.find(condition).sort(sorting)
          
         
           return res.status(200).send({"Course":courses})  
        
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
            const course=await CourseModel.findByIdAndUpdate(id,req.body,{new:true})
            
           return res.status(200).send({"Course":course})  
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

// router.get("/singleCourse/:id",async(req,res)=>{
//     const {id}=req.params
//     try {
//             const course=await CourseModel.findById(id)
//             // console.log(course)
//            return res.status(200).json({course})  
//     } catch (error) {
//         console.log(error)
//        return res.status(400).send( {"msg":"Something went wrong",error:error})
//     }
// })

router.get("/singleCourse/:id", async (req, res) => {
    try {
        const {id} = req.params;    
        // console.log('id:', id) 
      const course = await CourseModel.findOne({_id:id});
    //   console.log('course:', course)
      if (!course) {
         res.status(404).json({ error: "course not found" });
      }else{
          res.status(200).json(course);
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });  
module.exports=router