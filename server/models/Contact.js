import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    email: { type: String, required: true},
    subject: { type: String, required: true},
    message: { type: String, required: true},
});

export const Contact = mongoose.model('contact', contactSchema);
