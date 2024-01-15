import { addTodo, deleteTodo, getAllTodo, updateTodo } from "../controllers/todoController";
import express from 'express';

const todoRouter=express.Router();


todoRouter.post("/createtodo" ,addTodo);
todoRouter.get("/getalltodo" ,getAllTodo);
todoRouter.post("/edittodo/:id" ,updateTodo);
todoRouter.post("/deletetodo/:id" ,deleteTodo);

export default todoRouter;