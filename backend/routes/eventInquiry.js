const express = require('express');
const router = express.Router();
const EventInquiry = require('../models/EventInquiry');

router.post('/', async(req, res) => {
    try{
        const {firstName, lastName, email, subject, message} = req.body;
        const eventInquiry = new EventInquiry({firstName, lastName, email, subject, message});
        await eventInquiry.save();
        res.status(201).json({ message: 'Event Inquiry submitted successfully'});
    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Server error'})
    }
})

module.exports = router;