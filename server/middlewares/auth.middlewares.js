const jwt=require("jsonwebtoken")
const Blacklist = require("../models/Blacklist")
const auth=async(req,res,next)=>{
    const token=req.headers.authorization
    // console.log('token:', token)
    if(!token){
    return  res.status(400).send({"msg":"token not provided"})
}
    const valid=jwt.verify(token,"masai")
    const isthere=await Blacklist.findOne({token:token})

    if(!valid){
  return  res.status(400).send({"msg":"token expired"})

    }

    else if(isthere){

        res.status(400).send({"msg":"You Are Not Authorized"})
    }else{
        // console.log(valid)
        req.body.userID=valid.userID
        next()
    }

}
module.exports=auth