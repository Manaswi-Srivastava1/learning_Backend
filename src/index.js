// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";

import connectDB from "./db/index.js";

console.log("index.js start");

connectDB();

/*
import express from "express"
const app=express()

(async() => {
    try {
     await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errror",(error) => {
          console.log("ERR : ",error);
          throw error
        })
        
        app.listen(process.env.PORT,() => {
          console.log(`app is listening at PORT ${process.env.PORT}`);
        }
        )

    } catch (error) {
        console.error("Error: ",error)
        throw err
    }
})()

*/