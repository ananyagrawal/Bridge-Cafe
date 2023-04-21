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
        // console.error(err);
    }
 });

 router.post('/add-cart', async(req,res) => {
    const {cart} = req.body;
    const token = req.cookies.jwt;
   try{
       const decodedToken = jwt.verify(token, process.env.SECRET);
       console.log(decodedToken._id)
       const user = await UserModel.findOneAndUpdate({_id: decodedToken.id}, {cart}, {upsert: true}).populate('cart.itemId');
       res.json(user)
   } catch (error) {
       console.error(error);
       res.status(500).json({message: 'Error adding item to cart'})
   }
})

router.get('/get-cart', async (req, res) => {
  //  const userId = req.user ? req.user.id : undefined; 
   // If the user is logged in, get their user ID from the request object
  const {userId} = req.body;
   try {
     const user = await UserModel.findOne({ userId }).populate('cart.itemId'); // Find the user's cart and populate the `itemId` field with data from the `MenuItem` model
     res.json(user.cart);
   } catch (error) {
     console.error(error);
     res.status(500).json({ message: 'Error retrieving cart' });
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