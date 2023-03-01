const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const port = 5000;
dotenv.config();

// routes

const categoryRoute = require("./routes/categories.js");
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

//middlewares
app.use(express.json());
app.use(cors());

app.use("/api/categories", categoryRoute);
app.listen(port, () => {
  connect();
  console.log("Example app listenin on port " + port);
});
