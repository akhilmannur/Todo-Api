import mongoose from "mongoose";

export interface ITodo{
    title:string;
    description:string;
}

const todoSchema= new mongoose.Schema<ITodo>(
    {
        title:{type:String,required:true},
        description:{type:String,required:true}
    },
    {
        timestamps:true
    }
)

const Todo = mongoose.model<ITodo>("todo",todoSchema);
export default Todo;