// dependencies
const express = require('express');
const mongoose = require('mongoose');

// express app
const app = express();
app.use(express.json());

// configuring dotenv to import any variable secretly
require('dotenv').config();

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

const eventInquiryRouter = require('./routes/eventInquiry');
app.use('/event-inquiry', eventInquiryRouter);

const contactRouter = require('./routes/contact');
app.use('/contact', contactRouter);

const bookTableRouter = require('./routes/bookTable');
app.use('/book-table', bookTableRouter);

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// listen for requests
app.listen(process.env.PORT, () => {
  console.log('listening on port', process.env.PORT);
});
