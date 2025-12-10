import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbconnection } from "./config/db_connect.js";
import authRoutes from "./routes/authRoutes.js";

let app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

dbconnection();

app.use("/auth",authRoutes);

app.listen(process.env.PORT, ()=>{
    console.log("The server is listening on",process.env.PORT);
})