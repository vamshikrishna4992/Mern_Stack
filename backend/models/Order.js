import mongoose, { mongo } from "mongoose";

const orderSchema = new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
    orderItems:[
        {
            name:{type:String,required:true},
            quantity:{type:Number,required:true},
            price:{type:Number,required:true},
        },
    ],
    shippingAddress:{type:String,required:true},
    totalPrice:{type:Number,required:true},
    isPaid:{type:Boolean,default:false},
    paidAt:{type:Date},
},{timestamps:true});

const Order = mongoose.model('Order',orderSchema);

export default Order;