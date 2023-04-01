// dependencies
const express = require('express');
const mongoose = require('mongoose');
// express app
const app = express();

app.use(express.json());

// configuring dotenv to import any variable secretly
require('dotenv').config();

const eventInquiryRouter = require('./routes/eventInquiry');
app.use('/api/event-inquiry', eventInquiryRouter);

// connecting to MongoDB
mongoose.connect(process.env.MONGO_LINK, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to mongoose');
  })
  .catch((err) => {
    console.log('Failed to connect to mongoose', err);
  });

// Creating our schema for book table form
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

app.get('/api', (req, res) => {
  res.send('home');
});

// routes
app.post("/book-table", async (req, res, next) => {
  try {
    const { firstName, lastName, phone, email, date, time, person, table } = req.body;
    const bookData = new bookModel({
      firstName,
      lastName,
      phone,
      email,
      date,
      time,
      person,
      table,
    });
    const savedBookData = await bookData.save();
    res.status(200).send(savedBookData);
  } catch (err) {
    next(err);
  }
});

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// listen for requests
app.listen(process.env.PORT, () => {
  console.log('listening on port', process.env.PORT);
});
