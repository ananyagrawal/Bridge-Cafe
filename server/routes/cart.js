import express from "express";
import mongoose from "mongoose";
const router = express.Router();
import { cartModel } from "../models/Cart.js";

// router.post('/', async (req, res) => {
//     const { itemId, quantity } = req.body;
//     const userId = req.user ? req.user.id : undefined;
  
//     try {
//       let cart;
//       if (userId) {
//         cart = await cartModel
//           .findOneAndUpdate(
//             { userId },
//             { $addToSet: { items: { itemId, quantity } } },
//             { upsert: true, new: true }
//           )
//           .populate('items.itemId');
//       } else {
//         const sessionCart = req.session.cart || { items: [] };
//         const item = sessionCart.items.find((item) => item.itemId === itemId);
//         if (item) {
//           item.quantity += parseInt(quantity);
//         } else {
//           sessionCart.items.push({ itemId, quantity });
//         }
//         req.session.cart = sessionCart;
//         cart = sessionCart;
//       }
//       res.json(cart);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Error adding item to cart' });
//     }
//   });
  

router.post('/', async (req, res) => {
    const {userId, itemId, quantity} = req.body;
    // const userId = req.user ? req.user.id : undefined;

    if (!mongoose.Types.ObjectId.isValid(itemId)) {
        return res.status(400).json({ message: 'Invalid item id' });
      }
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ message: 'Invalid user id' });
      }
    
    try{
        const cart = await cartModel.findOneAndUpdate(
            {userId},
            { $addToSet: { items: {itemId, quantity} } },
            { upsert: true, new: true }
        ).populate('items.itemId');
        res.json(cart);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Error adding item to cart'})
    }
})

router.get('/', async (req, res) => {
    const userId = req.user ? req.user.id : undefined; // If the user is logged in, get their user ID from the request object
  
    try {
      const cart = await cartModel.findOne({ userId }).populate('items.itemId'); // Find the user's cart and populate the `itemId` field with data from the `MenuItem` model
  
      res.json(cart);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error retrieving cart' });
    }
  });
  

export {router as cartRouter}