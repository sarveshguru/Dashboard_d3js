import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import dataRoutes from "./routes/dataRoutes.js";
import { loadData } from "./dataLoader.js";

// Configuration
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("BLACK COFFER server is listening");
});

// Routes
app.use("/api", dataRoutes);

// Mongoose setup
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Server is Online at Port: ${PORT}`));
    // load data from server only once
    loadData();
  })
  .catch((error) => console.log(`${error} did not connect`));
