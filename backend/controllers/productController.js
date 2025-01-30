import Product from '../models/Product.js';


export const getProducts = async (req,res)=>{
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};

export const createPoduct = async (req,res)=>{
    const {name,price,description,image,category,countInStock} = req.body;

    try {
        const newProduct = new Product({name,price,description,image,category,countInStock});
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
};

export const updateProdct = async (req,res)=>{
    try {
        const product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true});

        if(!product){
            return res.status(404).jon({message:'Product Not Found!'});
        };

        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

export const deleteProduct = async (req,res)=>{
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
    
    if(!product){
        return res.status(404).jon({message:'Product Not Found!'});
    };

    res.status(200).json({message:'Product deleted!'})
} catch (error) {
    res.status(500).json({message:error});
}
};
