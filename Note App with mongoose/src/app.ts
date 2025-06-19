import  express, { Application,Request,Response }  from "express";
import mongoose from "mongoose";
import { Schema  } from "mongoose";
const app:Application = express();

app.use(express.json())

//mongoose model
const noteSchema = new Schema({

title:{type:String,
    required:true,
    trim: true
},
content:{
    type:String,
    default:''
},
catagory:{
    type:String,
    enum:["personal","work","other"],
    default:"personal"
},
pinned:{
    type:Boolean,
    default: false,
},
tags:{
    label: {   type:String, required : true },
    color: {type:String , default:"gray"} 
}
})

const Note = mongoose.model("Note",noteSchema)

app.post('/notes/create-note',async(req:Request,res:Response)=>{

   const body = req.body

   //aproch 1 of creating a data 
    // const myNote = new Note({
    //     title: "Learning express",
    //     tags:{
    //         label:"database",

    //     }
        
        
    //})
   // await myNote.save()

   //Approch -2
   const note = await Note.create(body)

    res.status(201).json({
        success:true,
        message:"Note Created successfuly",
        note:body
    })

})
app.get('/notes',async(req:Request,res:Response)=>{

    const notes = await Note.find()
   
    res.status(201).json({
        success:true,
        message:"Note Created successfuly",
        notes:notes
    })

})


app.get('/',(req:Request,res:Response)=>{
res.send('Welcome to note app')
})


export default app
