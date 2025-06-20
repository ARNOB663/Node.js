import mongoose from "mongoose"
import { Schema } from "mongoose"
import { INote } from "../interfaces/notes.interface"
//mongoose model
const noteSchema = new Schema<INote>({

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
},{versionKey:false,timestamps:true}
)
export const Note = mongoose.model("Note",noteSchema)