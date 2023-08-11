import mongoose from "mongoose";

let isConnected = false;
export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (!process.env.MONGODB_URL) return console.log("MONGODB_URL is not found");
  if (isConnected) return console.log("Already Connected To MongoDB");
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    isConnected = true;
    console.log("Database Connected!");
  } catch (error) {
    console.log(error);
  }
};
