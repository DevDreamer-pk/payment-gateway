import express from "express";
import userController from "./user.controller.js"
const userRouter = express.Router();

userRouter.post("/payment", new userController().payment) 
userRouter.post("/payment/success", new userController().paymentSuccess)
userRouter.get("/receipt/:customerId", new userController().getReceipt)
userRouter.post("/create-transaction", new userController().createTransaction)


export default userRouter