import express from "express";
const router = express.Router();
import {BookModel} from "../models/BookTable.js"

router.post('/', async (req, res) => {
  try {
    const { firstName, lastName, phone, email, date, time, person, table } = req.body;
    const bookData = new BookModel({
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

export {router as bookTableRouter}