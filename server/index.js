// const { configDotenv, configs } = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/config");
const userRouter = require("./routes/user.router");
const corsmiddleware = require("./middleware/cors.middleware");
// const config = require("config");
require("dotenv").config();

const app = express();

// const Port = config.get("serverPort");
const Port = config.SERVER_PORT;
// app.use("/user/:id", userRouter.getUserById);

app.use(corsmiddleware);
app.use("/api/auth", userRouter);
const start = async () => {
  try {
    // await mongoose.connect(config.get("dbUrl"));
    // app.listen(Port, () => {
    // console.log("server start on port ", Port);
    app.listen(Port, async () => {
      await mongoose.connect(config.DB_URL);
      console.log("server start on port ", Port);
    });
  } catch (error) {}
};

start();
