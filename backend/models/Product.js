import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{type:String,required:true},
    price:{type:String,required:true},
    description:{type:String},
    image:{type:String},
    category:{type:String},
});

const Product = mongoose.model('Product',productSchema);

export default Product;