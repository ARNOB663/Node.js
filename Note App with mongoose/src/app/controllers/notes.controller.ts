import { Note } from "../models/notes.model"
import  express, { Application,Request,Response }  from "express"
export const notesRoutes = express.Router()



//create note
notesRoutes.post('/create-note',async(req:Request,res:Response)=>{

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
        note:note
    })

})
//get all note
notesRoutes.get('/',async(req:Request,res:Response)=>{

    const notes = await Note.find().populate("user")//populate => runs a querry in the user model and gets the user information
   
    res.status(201).json({
        success:true,
        message:"Note Created successfuly",
        notes:notes
    })

})
//get single node with id 
notesRoutes.get('/:noteId',async(req:Request,res:Response)=>{
     
    const noteId= req.params.noteId;
   // const note = await Note.findById(noteId)
    //or
     const note = await Note.findOne({_id:noteId})
//with title
     //const note = awaite Note.findOne({"Learning Prisma"})

   
    res.status(201).json({
        success:true,
        message:"Note Created successfuly",
        note
    })

})
//update
notesRoutes.patch('/:noteId',async(req:Request,res:Response)=>{
     
    const noteId= req.params.noteId;
   const updatedBody = req.body;
     const note = await Note.findByIdAndUpdate(noteId,updatedBody,{new:true}) //new is used for getting the updated data 
     //or else it will show previouse data 
     // const note = await Note.UpdateOne({_id:noteId},noteId,updatedBody,{new:true}) //does not return the updated value
     //const note = awaiet Note.findOneUpdateOne({_id:noteID},noteId,updatedBody)
      
    res.status(201).json({
        success:true,
        message:"Note updated successfuly",
        note
    })

})
//Delete
notesRoutes.delete('/:noteId',async(req:Request,res:Response)=>{
     
    const noteId= req.params.noteId;
   await Note.findByIdAndDelete(noteId)
   //awaite Note.findByIdAndDelete
    res.status(201).json({
        success:true,
        message:"Note Deleted successfuly",
       
    })
})