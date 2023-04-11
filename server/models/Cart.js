import mongoose from "mongoose"

const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: false
    },
    items: [{
        itemId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'menuItems',
            required: true
        },
        quantity: {
            type: Number, 
            required: true
        },
        price: {
            type: Number,
            required: false
        }
    }]
})

export const cartModel = mongoose.model('Cart', cartSchema);

