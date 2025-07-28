import express from "express"
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoutes.js";
import foodModel from './models/foodModel.js';
import userRouter from "./routes/userRoutes.js";
import dotenv from "dotenv";
import cartRouter from "./routes/cartRoutes.js";
dotenv.config();
//app configurations
const app=express()
const port=process.env.PORT ||4000;

//middleware use
app.use(express.json()) //whenever we getting request from frontend to backend it is getting parsed through this json
app.use(cors()) //using this we can access any backend from frontend

//db connection
connectDB();


//api endPoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
//request the data from server 
app.get("/",(req,res)=>{
    res.send("API working")
}) 
//to run the express server
app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})
//mongodb+srv://thakurpalak679:Palak6789@cluster0.vq30j.mongodb.net/?