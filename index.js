import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbconnection } from "./config/db_connect.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import todoRoutes from "./routes/todoRoutes.js";

let app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

dbconnection();

app.use("/auth",authRoutes);
app.use("/user",userRoutes);
app.use("/todo",todoRoutes);

app.use((req, res, next) => {
    res.status(404).json({success: false, msg: `Route ${req.originalUrl} not found`});
});

app.listen(process.env.PORT, ()=>{
    console.log("The server is listening on",process.env.PORT);
})