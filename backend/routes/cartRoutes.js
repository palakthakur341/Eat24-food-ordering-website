import express from "express"
import { addToCart,removeFromCart,getCart } from "../controllers/cartController.js"
import authMiddleware from "../middleware/auth.js";
const cartRouter=express.Router();
cartRouter.post("/add",authMiddleware,addToCart)
cartRouter.post("/remove",authMiddleware,removeFromCart)
cartRouter.post("/get",authMiddleware,getCart)
cartRouter.get("/test", (req, res) => {
    res.json({ success: true, message: "Test route working" });
});

export default cartRouter;