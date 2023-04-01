import express from 'express';
import { eventInquiryModel } from '../models/EventInquiry.js';

const router = express.Router();

router.post('/', async(req, res) => {
    try{
        const {firstName, lastName, email, subject, message} = req.body;
        const eventInquiry = new eventInquiryModel({firstName, lastName, email, subject, message});
        await eventInquiry.save();
        res.status(201).json({ message: 'Event Inquiry submitted successfully'});
    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Server error'})
    }
})

export {router as eventInquiryRouter}