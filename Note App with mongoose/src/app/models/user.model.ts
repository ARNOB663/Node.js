    import { model, Schema } from "mongoose";
    import { IAddress, IUser } from "../interfaces/user.interface";
    import { Admin } from "mongodb";
    import validator from "validator"
import { number, string } from "zod";


const addressSchema = new Schema<IAddress>({
        city: {type: String},
        street:{type: String},
        zip: {type:Number}
},{_id:false})


    const userSchema = new Schema<IUser>({
        firstName:{
            type:String,
            required:[true,"first name keno daw nai"],
            trim:true,
            minlength:[3,'Must be at least 6,got {VALUE}']
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
            unique:[true,'Email common hoy gese change it '],
            trim:true,
            lowercase:true,
            // validate: {
            //     validator: function(value){
            //         //cheaks if the email is valid or not
            //         return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
            //     },
            //     message:function(props){
            //         return `Email ${props.value} is not valid email`
            //     }
            // }
             validate:[validator.isEmail,"Invalid Email {}"],
        },

    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:'USER',
        enum:   {
            values: ['USER','ADMIN','SUPERADMIN'],
            message : "Role is not valid, got {VALUE} role" 
        },
        uppercase:true
    },
    age:{
        type:Number,
        required:true,
        min:[18,'Age must be above 18, got {VALUE}'],
        max:60
    },
    address:{
        type: addressSchema
    }

    },{versionKey:false,timestamps:true})

    export const User = model('User',userSchema)