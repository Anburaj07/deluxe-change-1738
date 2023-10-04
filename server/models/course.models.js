const mongoose =require("mongoose")
const courseschrma=mongoose.Schema({
_id:String,
title:String,
image:String,
author:String,
rating:Number,
total_ratings:Number,
description:String,
price:Number,
category:{type:String,enum:["Machine Learning","Python","Data Science","Excel","Web Development","AWS"],default:"Python"},
duration:String,
userID:String
})
const CourseModel=new mongoose.model("course",courseschrma)
module.exports=CourseModel