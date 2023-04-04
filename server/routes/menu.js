import express from "express"
const router = express.Router();
import {MenuModel} from "../models/Menu.js"

router.get('/', async(req,res) => {
    try{
        const menuItems = await MenuModel.find();
        res.json(menuItems);
    }
    catch(err) {
        res.status(500).json({message: err.message})
    }
})

router.post('/', async(req,res) => {
    try{
        const {name, description, price, category, image} = req.body;
        const menuItem = new MenuModel({
            name, description, price, category, image,
        });
        await menuItem.save();
        res.status(201).json({message: 'Item added successfully'});
    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Server error'})
    }
})

export { router as menuRouter }