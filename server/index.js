// dependencies
import mongoose from "mongoose"
import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import { userRouter} from './routes/users.js'
import {eventInquiryRouter} from './routes/eventInquiry.js'
import {contactRouter} from './routes/contact.js'
import {bookTableRouter} from './routes/bookTable.js'
import {menuRouter} from './routes/menu.js'
import { cartRouter } from "./routes/cart.js"

// express app
const app = express();
app.use(express.json());

app.use(cookieParser());

// configuring dotenv to import any variable secretly
dotenv.config();

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

app.use('/event-inquiry', eventInquiryRouter);

app.use('/contact', contactRouter);

app.use('/book-table', bookTableRouter);

app.use("/user", userRouter);

app.use("/menu", menuRouter);

app.use("/cart", cartRouter);

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// listen for requests
app.listen(process.env.PORT, () => {
  console.log('listening on port', process.env.PORT);
});
