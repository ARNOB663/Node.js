import { z } from "zod";
import { User } from "../models/user.model";
import  express ,{Request,Response}  from 'express';
import { parse } from '../../../node_modules/acorn/dist/acorn.d';


export const userRouter = express.Router()

const CreateUserZodSchema = z.object({
   firstName: z.string(),
   lastName: z.string(),
   age:z.number(),
   email:z.string(),
   password: z.string(),
   role:z.string().optional()
}) 

userRouter.post('/create-user',async (req:Request,res:Response) =>{

try{
    const body = await CreateUserZodSchema.parseAsync(req.body)

    console.log(body,"zod body")

const users = await User.create(body)

res.status(201).json({
    success: true,
    message: "user created succesfully",
    user :{}
})
}
catch(error:any){

    res.status(400).json({
    success: false,
    message: error.message,
    error
})
   
}

})
//get all user
userRouter.get('/',async(req:Request,res:Response)=>{
    const users = await User.find()
    res.status(202).json({
      success: true,
      message:"all users fatch",
      users
    })
})
//get single user by id
userRouter.get('/:userId',async(req:Request,res:Response)=>{
    const userId= req.params.userId
    const user = await User.findById(userId)
    res.status(202).json({
      success: true,
      message:"user is fatched",
      user
    })
})
//update user
//get single user by id
userRouter.patch('/:userId',async(req:Request,res:Response)=>{
    const body= req.body
    const userId= req.params.userId
    const user = await User.findByIdAndUpdate(userId,body)
    res.status(202).json({
      success: true,
      message:"user is updated",
      user
    })
})
//Delete user
userRouter.delete('/:userId',async(req:Request,res:Response)=>{
    
    const userId= req.params.userId
    await User.findByIdAndDelete(userId)
    res.status(202).json({
      success: true,
      message:"user is Deleteted",
    })
})
