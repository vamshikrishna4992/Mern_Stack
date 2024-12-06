import express from 'express';
import dotnv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/produtRoutes.js';
import orderRoutes from './routes/orderRoutes.js'

dotnv.config();
connectDB();
 const app = express();

 app.use(express.json());
 app.use(cors());


 app.use('/api/auth',authRoutes);
 app.use('/api/products',productRoutes);
 app.use('/api/orders',orderRoutes);

 app.get('/',(req,res)=>{
    res.send("API is Running....")
 })

 const PORT = process.env.PORT || 6000

 app.listen(PORT,()=>console.log(`Server is Running on port:${PORT}`))