import "dotenv/config";
import mongoose from "mongoose";
const connectDB = async () => {
  const MONGO_URL = process.env.MONGO_URL;
  console.log(MONGO_URL);

  try {
    await mongoose.connect(MONGO_URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error connecting to database:", error);
    process.exit(1);
  }
};

export default connectDB;
