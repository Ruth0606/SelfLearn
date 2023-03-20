//import { express } from "express";
require('dotenv').config()
const express=require("express")
const app = express()
const PORT = process.env.PORT || 8000
const userRoute= require("./routes/users.js")
const questionRouter=require("./routes/questions")
const dataRouter=require("./routes/data")
const materialRouter=require("./routes/material")
const answerRouter=require("./routes/answer")
const cors=require('cors');

app.use(express.urlencoded())
app.use(express.json())
app.use(cors())
// app.use("/",(req,res,next)=>{
    
//     next()
// })

app.use("/user",userRoute)
app.use("/question",questionRouter)
app.use("/material",materialRouter)
app.use("/data",dataRouter)
app.use("/answer",answerRouter)

app.listen(PORT,()=>
    console.log(`connected! ${PORT}`))