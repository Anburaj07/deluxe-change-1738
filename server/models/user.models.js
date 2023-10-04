const mongoose =require("mongoose")
const userschrma=mongoose.Schema({
username:String,
pass:String,
email:String,
cart:{type:[String],ref:"course",default:[]},
mylearning:{type:[String],ref:"course",default:[]},
payment:{type:[String],ref:"course",default:[]}
})
const UserModel=new mongoose.model("user",userschrma)
module.exports=UserModel