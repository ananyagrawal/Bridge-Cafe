import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/Users.js";

const router = express.Router();

router.post("/register", async(req,res) => {
    const {name, emailOrPhone, password} = req.body;

    if(!name || !emailOrPhone || !password) {
        return res.json({message: "Enter all fields"})
    }

    const user = await UserModel.findOne({emailOrPhone});

    if (user) {
        return res.json({message: "User already exists!"});
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = new UserModel({name, emailOrPhone, password: hashedPassword})
    await newUser.save();

    res.json({message: "User Registered Successfully"});
});

router.post("/login", async(req,res) => {
    const {emailOrPhone, password} = req.body;

    if(!emailOrPhone || !password) {
        return res.json({message: "Enter all fields"})
    }

    const user = await UserModel.findOne({emailOrPhone});

    if (!user) {
        return res.json({message: "User Doesn't Exist"});
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.json({message: "Username or Password is incorrect"});
    }

    const token = jwt.sign({id: user._id }, process.env.SECRET, {expiresIn: '10m' });
    res.json({token, userId: user._id});
})

 router.post('/current-user', async(req,res) => {
    const {userID} = req.body;
    try{
        const user = await UserModel.findOne({_id: userID});
        return res.json(user);
    } catch (err) {
        return res.json({message: "something went wrong"})
    }

 });

export {router as userRouter}