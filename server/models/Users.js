import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    emailOrPhone: {type:String, required: true, unique: true},
    password: {type: String, required: true},
    address: {
        street: {type: String},
        city: {type: String},
        state: {type: String},
        zip: {type: Number}
    },
    cart: [{
        itemId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'menuItems',
            required: true
        },
        quantity: {
            type: Number, 
            required: true
        }
    }]
});

export const UserModel = mongoose.model("users", UserSchema);

