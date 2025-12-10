import express from "express";
import { logincontroller, registerController } from "../controllers/authControllers.js";


let router = express.Router();

router.post("/register",registerController);
router.post("/login",logincontroller);

export default router;