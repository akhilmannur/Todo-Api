import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const MONGODB:string=process.env.MONGODB_URL

mongoose.connect(MONGODB).then(()=>{
    console.log("connected to DB Successfully")
}).catch(err=>{
    console.error(err)
})