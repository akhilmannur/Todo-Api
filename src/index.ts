import express from "express";
import "./db/mongoose";
import todoRouter from "./routes/todoRouter"; 

const app = express();

app.use(express.json());
app.use('/api/todo', todoRouter); 

app.listen(3000, () => {
    console.log("server is running on port 3000");
});
