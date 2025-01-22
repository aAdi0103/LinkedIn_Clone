import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from 'cors'

import authRoutes from "./Routes/authRouter.js";
import userRoutes from "./Routes/userRoutes.js";
import postRoutes from "./Routes/postRoutes.js";
import notificationRoutes from './Routes/notificationRouter.js';
import connectionRequestRoutes from './Routes/connectionRequestRouter.js'

import { connectDB } from "./lib/db.js";
const app = express();
dotenv.config();

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin:"http://localhost:5173",
    credentials: true,
  
})
);


app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users",userRoutes);
app.use("/api/v1/posts",postRoutes);
app.use("/api/v1/notifications", notificationRoutes);
app.use("/api/v1/connectionRequest", connectionRequestRoutes);




app.get("/", function (req, res) {
  res.send("Hello World!");
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  connectDB();
});
