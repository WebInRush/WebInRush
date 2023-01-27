import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const mongoURL = process.env.MONGO_URL || "mongodb://0.0.0.0:27017/webinrush";

const connectMongoDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    mongoose.createConnection(mongoURL);
    return Promise.resolve(true);
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};

export default connectMongoDB;
