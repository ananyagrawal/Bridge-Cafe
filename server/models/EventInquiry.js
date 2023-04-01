const mongoose = require('mongoose');

const eventInquirySchema = new mongoose.Schema({
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    email: { type: String, required: true},
    subject: { type: String, required: true},
    message: { type: String, required: true},
});

const EventInquiry = mongoose.model('EventInquiry', eventInquirySchema);

module.exports = EventInquiry;