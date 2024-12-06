import Order from '../models/Order.js';

export const getOrders = async (req,res)=>{
    try {
        const orders = await Order.find({});
        res.status(200).json(orders)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const createOrder = async (req,res)=>{
    const {orderItems,shippingAddress,totalPrice} = req.body;
    try {
        const order = await Order.create({
            orderItems,
            shippingAddress,
            totalPrice,
        });
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}