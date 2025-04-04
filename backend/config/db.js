import mongoose from "mongoose";

 export const connectDB =async()=>{
    await mongoose.connect('mongodb+srv://thakurpalak679:Palak6789@cluster0.vq30j.mongodb.net/food-del').then(()=>console.log("DB connected"));
 }