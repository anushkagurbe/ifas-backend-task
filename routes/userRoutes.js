import express from "express";
import { authMiddleware } from "../middlewares/authMiddlewares.js";
import { getUserDetails, updateUserDetails } from "../controllers/userControllers.js";


let router = express.Router();

router.get("/getuserdetails",authMiddleware,getUserDetails);
router.put("/updateuserdetails",authMiddleware,updateUserDetails);

export default router;