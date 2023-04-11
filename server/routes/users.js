import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";
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

    const token = jwt.sign({id: user._id }, process.env.SECRET, {expiresIn: '1h' });
    res.cookie('jwt', token, {httpOnly: true, secure: true});
    res.json({message: "Login Successful"});
    // res.json({token});
})

 router.post('/current-user', async(req,res) => {
    const token = req.cookies.jwt;
    try{
        const decodedToken = jwt.verify(token, process.env.SECRET);
        const user = await UserModel.findOne({_id: decodedToken.id});
        return res.json(user);
    } catch (err) {
        return res.json({message: "Invalid token"})
    }
 });

 router.post("/logout", (req, res) => {
    res.cookie("jwt", "", {
      httpOnly: true,
      expires: new Date(0),
      secure: true,
    });
    res.json({ message: "Logged out successfully" });
  });
  

export {router as userRouter}