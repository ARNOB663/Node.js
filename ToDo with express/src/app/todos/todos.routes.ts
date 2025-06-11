import express, { Request,Response } from "express";
import fs from 'fs'
import path from "path";
import { client } from "../../config/mongodb";
import { Collection } from '../../../../node_modules/mongodb/src/collection';
import { ObjectId } from "mongodb";

export const todosRouter = express.Router()


todosRouter.get("/",async (req:Request,res:Response)=>{
    
    const db = await client.db("todosDB")
    const collection = await db.collection("todos")

    const todos = await collection.find({}).toArray()

    res.json(todos)
})

todosRouter.post('/create-todo',async (req: Request,res : Response)=>{

    const {title,description,priority,isCompleted} = req.body
   
    const db = await client.db("todosDB")
    const collection = await db.collection("todos")
     await collection.insertOne({
        title:title,
        description:description,
        priority:priority,
        isCompleted: isCompleted
    })
     
    const todos =await collection.find({}).toArray()
    
     res.json(todos)

})

todosRouter.get("/:id",async (req,res)=>{
      

    const id = req.params.id
    const db = await client.db("todosDB")
    const collection = await db.collection("todos")

    const todo = await collection.findOne({_id:new ObjectId(id)})
    res.json(todo)

})

todosRouter.put("/update-todo/:id",async (req,res)=>{
   
   const id = req.params.id
   const db = await client.db("todosDB")
   const collection =await db.collection("todos")
   const { title,description,priority,isCompleted} =req.body;
   const filter  = {_id:new ObjectId(id)}

   const updatedTodo = await collection.updateOne(filter,{$set:{title,description,priority,isCompleted}},{upsert:true})
   res.json(updatedTodo)
 
})
todosRouter.delete("/delete-todo/:id", async (req,res)=>{
    const id = req.params.id
    const db = await client.db("todosDB")
    const collection = await db.collection("todos")

await collection.deleteOne({_id:new ObjectId(id)})
   
    res.send(`${id} no todo is deleted`)
})