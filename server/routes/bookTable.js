const express = require('express');
const router = express.Router();
const BookTable = require('../models/BookTable');

router.post('/', async (req, res) => {
  try {
    const { firstName, lastName, phone, email, date, time, person, table } = req.body;
    const bookData = new BookTable({
      firstName,
      lastName,
      phone,
      email,
      date,
      time,
      person,
      table,
    });
    await bookData.save();
    res.status(201).json({message: 'Table booked successfully'});
  } catch (err) {
    console.log(err);
    res.status(500).json({message: 'Server error'})
  }
});

module.exports = router;