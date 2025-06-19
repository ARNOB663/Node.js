    import { model, Schema } from "mongoose";
    import { IUser } from "../interfaces/user.interface";
    import { Admin } from "mongodb";

    const userSchema = new Schema<IUser>({
        firstName:{
            type:String,
            required:true,
            trim:true,
            minlength:3
        },
        lastName:{
            type:String,
            required:true,
            trim:true,
            maxlength:10
        },
        email: {
            type:String,
            required:true,
            unique:true,
            trim:true,
            lowercase:true,
        },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['USER','ADMIN','SUPERADMIN'],
        default:'USER',
        uppercase:true
    },
    age:{
        type:Number,
        required:true,
        min:18,
        max:60
    }

    },{versionKey:false,timestamps:true})

    export const User = model('User',userSchema)