import express from "express"
import cors from "cors"
//app configurations
const app=express()
const port=4000

//middleware use
app.use(express.json()) //whenever we getting request from frontend to backend it is getting parsed through this json
app.use(cors()) //using this we can access any backend from frontend

//request the data from server 
app.get("/",(req,res)=>{
    res.send("API working")
}) 
//to run the express server
app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})