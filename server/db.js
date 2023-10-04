const mongoose=require("mongoose")
require("dotenv").config()

//creating connection to DB from server
const connection=mongoose.connect(process.env.mongoURL)

module.exports={connection}