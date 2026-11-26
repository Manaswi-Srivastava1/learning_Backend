//require ('dotenv').config({path:'./env'})

// import mongoose from "mongoose";
// import { DB_NAME } from "../constants";

// import dotenv from "dotenv";
// import connectDB from "./db/index.js"
// dotenv.config({
//     path:'./env'
// })

// const connectDB=async () => {
//   try {
//    const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//    console.log(`\n MongoDB is connected!! DB host: ${connectionInstance.connection.host}`);
//   } catch (error) {
//     console.log("mongoDB connection error: ", error);
//     process.exit(1)
//   }
// }


import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(`\n MongoDB is connected!! DB host: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error: ", error);
    process.exit(1);
  }
};

export default connectDB;
