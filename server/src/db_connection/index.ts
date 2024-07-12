import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    console.log("-----------------------");
    console.log("MONGO DB CONNECTED");
    console.log(`${connectionInstance.connection.host}`);
    console.log("");
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
  }
};
export default connectDB;
