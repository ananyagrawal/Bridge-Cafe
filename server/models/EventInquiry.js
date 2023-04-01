import mongoose from "mongoose"

const eventInquirySchema = new mongoose.Schema({
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    email: { type: String, required: true},
    subject: { type: String, required: true},
    message: { type: String, required: true},
});

export const eventInquiryModel = mongoose.model('eventInquiry', eventInquirySchema);

