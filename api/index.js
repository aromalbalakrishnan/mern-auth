import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect("mongodb+srv://aromal:aromal@mern.dqpiija.mongodb.net/mern-auth?retryWrites=true&w=majority")
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