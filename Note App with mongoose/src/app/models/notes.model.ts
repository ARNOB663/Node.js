import mongoose from "mongoose"
import { Schema } from "mongoose"
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
},{versionKey:false,timestamps:true}

)

export const Note = mongoose.model("Note",noteSchema)