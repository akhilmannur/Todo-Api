import Todo, { ITodo } from "../models/todoSchema";
import { Request, Response } from "express";

export const addTodo = async (req: Request, res: Response) => {
  const todoData = <ITodo>req.body;
  try {
    const newTodo = await Todo.create(todoData);
    res.status(200).json({
      message: "Todo created successfully",
      data: newTodo,
    });
  } catch (error) {
    console.error("Error saving todo:", error);
    res.status(500).json({
      message: "Error saving todo",
      error: error.message,
    });
  }
};

export const getAllTodo = async (req: Request, res: Response) => {
  try {
    const todos = await Todo.find<ITodo>();
    res.status(200).json({ message: "todo successfully fetched", todos });
  } catch (error) {
    console.error("Error fetching todo:", error);
    res.status(500).json({
      message: "Error fetching  todo",
      error: error.message,
    });
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  const todoId: string = req.params.id;
  const updatedTodoData = <ITodo>req.body;

  try {
    const Todoo = await Todo.findById(todoId);

    if (!Todoo) {
      res.status(404).json({ message: `Todo with ID ${todoId} not found` });
      return;
    }

    const updatedTodo = await Todo.findByIdAndUpdate(todoId, updatedTodoData, {
      new: true,
    });

    res.status(200).json({
      message: "Todo successfully updated",
      todo: updatedTodo,
    });
  } catch (error) {
    console.error("Error updating todo:", error);
    res.status(500).json({
      message: "Error updating todo",
      error: error.message,
    });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  const todoId: string = req.params.id;

  try {
    const Todoo = await Todo.findById(todoId);

    if (!Todoo) {
      res.status(404).json({ message: `Todo with ID ${todoId} not found` });
      return;
    }

    await Todo.findByIdAndDelete(todoId);

    res.status(200).json({
      message: "Todo successfully deleted",
    });
  } catch (error) {
    console.error("Error deleting todo:", error);
    res.status(500).json({
      message: "Error deleting todo",
      error: error.message,
    });
  }
};
