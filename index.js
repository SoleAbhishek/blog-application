import express, { urlencoded } from "express";
import dotenv from "dotenv";
import { connectToDB } from "./connection.js";

dotenv.config();

connectToDB(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB Succesfully");
  })
  .catch((err) => {
    console.log("Error connecting to DB", err);
  });

const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("HOME PAGE");
});

app.listen(port, () => {
  console.log("APP RUNNING ON PORT: ", port);
});
