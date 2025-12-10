import express from "express";
import { authMiddleware } from "../middlewares/authMiddlewares.js";
import { addTodoController, getTodoController, deleteTodoController, updateTodoController } from "../controllers/todoControllers.js";


let router = express.Router();

router.post("/addtodo",authMiddleware,addTodoController);
router.get("/gettodos",authMiddleware,getTodoController);
router.put("/updatetodo/:id",authMiddleware,updateTodoController);
router.delete("/deletetodo/:id",authMiddleware,deleteTodoController)

export default router;