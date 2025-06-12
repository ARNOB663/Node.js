import e, { NextFunction } from "express";
import express, { Application, Request, Response } from "express";
import fs  from 'fs'
import path from "path";
import { todosRouter } from "./todos/todos.routes";
import { console } from "inspector/promises";
import { error } from "console";
const app : Application = express()


//middleware does auto parsirng 
app.use(express.json());



const userRouter = express.Router()

app.use("/users",userRouter)
app.use("/todos",todosRouter);


// data base pass dk7LeQXPtjYWVHuX

app.get('/',(req: Request,res : Response,next:NextFunction)=>{
   
    console.log({
         url: req.url,
         method:req.method,
         header:req.header
    })
    next();
},
async (req: Request,res : Response)=>{
   try{
    console.log(something)
    res.send("welcome to the todo app")

   }
   catch{
    console.log(error,error)
    res.status(400).json({message:"something went wrong",error})
   }
}
)

// app.get('/todos',(req: Request,res : Response)=>{

//    console.log(req.query)

//     const data = fs.readFileSync(filePath,{encoding:"utf-8"});
//    //  console.log(data)
//     res.send(data)

// })
//


//[app] - express.json - [...] - [todosrouter] - [rootrouter] - [...] - [post todo create todo]



export default app;