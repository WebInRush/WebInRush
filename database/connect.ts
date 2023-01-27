const mongoose = require("mongoose");
require("dotenv").config();
const mongoURL = "mongodb://0.0.0.0:27017/test";

const connectMongoDB = async () => {
  mongoose
    .connect(mongoURL)
    .then(() => {
      console.log("Backend: Connected to MongoDB");
      return Promise.resolve(true);
    })
    .catch((err: Error) => {
      console.log(err);
      return Promise.reject(err);
    });
};

export default connectMongoDB;
