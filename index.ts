import express, { Express, Request, Response } from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
// import { Request, Response } from "express";

require("dotenv").config();
// const express: express = require("express");
const app: Express = express();

app.use(
  cors({
    credentials: true,
  })
);
// app.use("/image", express.static("image"));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, () => {
  console.log("Server running on http//localhost:8080/");
});

app.get("/", (req: Request, res: Response) => {
  console.log("test");
  return res.status(200).json({
    message: "done!",
  });
});
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URL);
mongoose.connection.on("error", (error: Error) => console.log(error));
