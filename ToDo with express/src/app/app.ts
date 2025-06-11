import e from "express";
import express, { Application, Request, Response } from "express";
import fs  from 'fs'
import path from "path";
import { todosRouter } from "./todos/todos.routes";
const app : Application = express()


//middleware does auto parsirng 
app.use(express.json());



const userRouter = express.Router()

app.use("/users",userRouter)
app.use("/todos",todosRouter);


// data base pass dk7LeQXPtjYWVHuX

app.get('/',(req: Request,res : Response)=>{
   
    res.send("Hello World!!! he he")
})
// app.get('/todos',(req: Request,res : Response)=>{

//    console.log(req.query)

//     const data = fs.readFileSync(filePath,{encoding:"utf-8"});
//    //  console.log(data)
//     res.send(data)

// })
//


//[app] - express.json - [...] - [todosrouter] - [rootrouter] - [...] - [post todo create todo]



export default app;