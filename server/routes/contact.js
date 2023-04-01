const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/', async(req, res) => {
    try{
        const {firstName, lastName, email, subject, message} = req.body;
        const contact = new Contact({firstName, lastName, email, subject, message});
        await contact.save();
        res.status(201).json({ message: 'Event Inquiry submitted successfully'});
    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Server error'})
    }
})

module.exports = router;