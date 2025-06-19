import  express, { Application,Request,Response }  from "express";
const app:Application = express();
import { Note } from "./app/models/notes.model";
import { notesRoutes } from "./app/controllers/notes.controller";

app.use(express.json())
app.use('/notes',notesRoutes)


app.get('/',(req:Request,res:Response)=>{
res.send('Welcome to note app')
})


export default app

//mvc - model - view - controller
