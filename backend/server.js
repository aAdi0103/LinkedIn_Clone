import express from "express";
import dotenv from "dotenv";
import authRoutes from "./Routes/authRouter.js";
import { connectDB } from "./lib/db.js";
const app = express();
dotenv.config();
const port = process.env.PORT || 3000;

app.use("/api/v1/auth", authRoutes);
app.get("/", function (req, res) {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  connectDB();
});
