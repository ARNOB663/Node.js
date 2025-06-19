import  express, { Application,Request,Response }  from "express";
const app:Application = express();
import { Note } from "./app/models/notes.model";
import { notesRoutes } from "./app/controllers/notes.controller";
import { userRouter } from "./app/controllers/user.controller";

app.use(express.json())
app.use('/notes',notesRoutes)
app.use('/user',userRouter)


app.get('/',(req:Request,res:Response)=>{
res.send('Welcome to note app')
})


export default app

//mvc - model - view - controller
