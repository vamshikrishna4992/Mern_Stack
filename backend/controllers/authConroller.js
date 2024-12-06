import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import mongoose from 'mongoose';

const generateToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'30d'});
}

export const registerUser = async (req,res)=>{
    const {name,email,password} = req.body // try to print the req.body after filling the form in front-end

    try {
        const userExists = await User.findOne({email});
        if(userExists){
            return res.status(400).json({message:'User Already exists'});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const user = await User.create({
            name,
            email,
            password:hashedPassword,
        });

        res.status(201).json({
            _id:user.id,
            name:user.name,
            email:user.email,
            token:generateToken(user._id),
        });

    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const loginUser = async (req,res)=>{
    const {email,password} = req.body;

    try {
        const user = await User.findOne({email});
        if(user && (await bcrypt.compare(password,user.password))){
            res.status(200).json({
                _id:user.id,
                name:user.name,
                email:user.email,
                token:generateToken(user._id),
            })
        }else{
            res.status(401).json({message:'Invalid email or password'});
        }
    } catch (error) {
       res.status(500).json({message:error.message}) 
    }
}

export const updateuser = async (req,res)=>{
    const {name,email,password} = req.body;
    const {id} = req.params;
    try {
        console.log(id)
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({message:'Invalid User id'})
        }
        const updatedUser = await User.findByIdAndUpdate(id,{
            name:name || undefined,
            email:email || undefined,
            password:password ? await bcrypt.hash(password,10) : undefined,
        },{new:true});

        if(!updatedUser){
            return res.status(401).json({message:'User Not Found!'})
        }

        res.status(200).json({
            _id:updatedUser.id,
            name:updatedUser.name,
            email:updatedUser.email,
        });


    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const deletUser = async (req,res)=>{
    const {id} = req.params;
    try {
        const user = await User.findByIdAndDelete(id);
        if(!user){
            return res.status(401).json({message:'User Not Found!'});
        };
        res.status(200).json({message:'User Deleted Successfully! '})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const getAllUsers = async (req,res)=>{
    try {
        const users = await User.find();
        if(users.length == 0){
            return res.status(404).json({message:'No users found!'})
        }
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

