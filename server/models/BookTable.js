const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  person: {
    type: Number,
    required: true,
  },
  table: {
    type: String,
    required: true,
  },
});

// Creating model for book table schema
const bookModel = mongoose.model('bookModel', BookSchema);

module.exports = bookModel;