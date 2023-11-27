import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config();

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_LINK, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to mongoose')
    } catch (err) {
        console.error('Failed to connect to mongoose');
        console.error(err.message);
        process.exit(1);
    }
}

export default connectDb;