const mongoose =require("mongoose")
const courseschrma=mongoose.Schema({
title:String,
image:String,
author:String,
rating:Number,
description:String,
price:Number,
category:String,
duration:String,
email:String
})
const CourseModel=new mongoose.model("course",courseschrma)
module.exports=CourseModel