import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js"

dotenv.config();

//const mongoose = require("mongoose");
/*
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://aromal:aromal@mern.dqpiija.mongodb.net/mersn-auth?retryWrites=true&w=majority");
  }
  catch (error) {
    console.log(error.message , error)
  }
}*/

mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDb!");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
  console.log("Server is Listening to port 3000");
});

app.use('/api/user', userRoutes);