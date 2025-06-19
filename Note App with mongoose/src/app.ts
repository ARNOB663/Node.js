import  express, { Application,Request,Response }  from "express";
import mongoose from "mongoose";
import { Schema  } from "mongoose";
const app:Application = express();


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

app.post('/create-note',async(req:Request,res:Response)=>{
    const myNote = new Note({
        title: "Learning express",
        tags:{
            label:"database",

        }
        
        
    })
    await myNote.save()

    res.status(201).json({
        success:true,
        message:"Note Created successfuly",
        note:myNote
    })

})


app.get('/',(req:Request,res:Response)=>{
res.send('Welcome to note app')
})


export default app
