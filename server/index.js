// dependencies
import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import { userRouter} from './routes/users.js'
import {eventInquiryRouter} from './routes/eventInquiry.js'
import {contactRouter} from './routes/contact.js'
import {bookTableRouter} from './routes/bookTable.js'
import {menuRouter} from './routes/menu.js'
import { cartRouter } from "./routes/cart.js"
import connectDb from './config/db.js'

connectDb();

// express app
const app = express();
app.use(express.json());

app.use(cookieParser());

// configuring dotenv to import any variable secretly
dotenv.config();

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
const PORT = process.env.PORT;
app.get("/", (req,res) => {
  return res.status(200).send('Hello world');
})
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
