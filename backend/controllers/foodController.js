import foodModel from "../models/foodModel.js";

import fs from 'fs';
// add food-item

const addFood=async(req,res)=>
{
    
        // let image_URL = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
        // if (!req.file) {
        //     return res.json({ success: false, message: "Image upload failed" });
        // }

        // const image_URL = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;

    
    
    // let image_URL = req.file ? `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}` : ""; 
    let image_filename=req.file ? req.file.filename : "";
    const food= new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename

    })

    
    try{
        await food.save();
        res.json({success:true,message:"Food Added"})
    } catch(error){
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}
// all food list
const listFood=async(req,res)=>{
    try{
        const foods=await foodModel.find({});
        res.json({success:true,data:foods})
    } catch(error){
        console.log(error);
        res.json({success:false,message:"error"})
    }
}
//remove food items
const removeFood=async(req,res)=>{
    try{
        const food=await foodModel.findById(req.body.id);
         fs.unlink(`uploads/${food.image}`,()=>{})
         await foodModel.findByIdAndDelete(req.body.id);
    } catch(error){
        console.log(error);
        res.json({success:false,message:"error"})
    }
}
export {addFood, listFood,removeFood}