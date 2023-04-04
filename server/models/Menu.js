import mongoose  from "mongoose";

const MenuSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String, 
        required: true,
    },
    image: {
        type: String, 
        required: true,
    }
});

export const MenuModel = mongoose.model('menuItems', MenuSchema);