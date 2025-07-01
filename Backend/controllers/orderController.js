import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// placing orders using COD method
export const placeOrder = async (req,res)=>{
    try {
        const {userId, amount, items, address} = req.body;
        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod:"cod",
            payment:false,
            date:Date.now()
        }
        const newOrder = new orderModel(orderData)
        await newOrder.save()
        await userModel.findByIdAndUpdate(userId,{cartData:{}})
        res.json({success:true,message:"order placed"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

// placing orders using COD method
export const placeOrderStripe = async (req,res)=>{
    
}

// placing orders using COD method
export const placeOrderRazorpay = async (req,res)=>{
    
}

//All orders data for admin panel
export const allOrders = async (req,res)=>{
    try {
        const orders = await orderModel.find({})
        res.json({success:true,orders})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

//User order data for frontend
export const userOrders = async (req,res)=>{
    try {
        const {userId} = req.body
        const orders = await orderModel.find({userId})
        res.json({success:true,orders})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}   

//update order status from admin panel
export const updateStatus = async (req,res)=>{
    try {
        const {orderId, status} = req.body
        await orderModel.findByIdAndUpdate(orderId,{status})
        res.json({success:true,message:'status updated'})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}