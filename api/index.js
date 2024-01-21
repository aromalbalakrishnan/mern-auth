import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

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

app.use(express.json());

app.listen(3000, () => {
  console.log("Server is Listening to port 3000");
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

// Middleware fn to handle error
app.use((err, req, res, next) =>{
  const statusCode = err.statusCode || 500;
  const message = err.statusMessage || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode
  });
});