import express, { Request,Response } from "express";
import fs from 'fs'
import path from "path";
import { client } from "../../config/mongodb";
import { Collection } from '../../../../node_modules/mongodb/src/collection';
export const todosRouter = express.Router()

const filePath = path.join(__dirname, "../../../db/todo.json")

todosRouter.get("/",(req:Request,res:Response)=>{
    
    // const data = fs.readFileSync(filePath,{encoding:"utf-8"});
   //  console.log(data)
    res.send({
        message : "From Todos Router",
        // data
    })
})

todosRouter.post('/create-todo',async (req: Request,res : Response)=>{
   
    const db = await client.db("todosDB")
    const collection = await db.collection("todos")
        collection.insertOne({
        title:"Mongodb",
        description:"Learning  Mongodb",
        priority:"High",
        isCompleted: false
    })

    const todos = collection.find({})
     res.json(todos)

})

todosRouter.get("/:title",(req,res)=>{
   const {body,title} = req.body;
   console.log(body,title)
   res.send('Hello world');
})

todosRouter.put("/update-todo/:title",(req,res)=>{
    const {title,body} = req.body;
    console.log(title,body)
    res.send("Hello World");
})
todosRouter.delete("/delete-todo/:title",(req,res)=>{
    const {title,body} = req.body;
    console.log(title,body)
    res.send("Hello world")
})