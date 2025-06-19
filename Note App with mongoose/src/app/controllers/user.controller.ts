import { User } from "../models/user.model";
import  express ,{Request,Response}  from 'express';


export const userRouter = express.Router()

userRouter.post('/create-user',async (req:Request,res:Response) =>{

const body = req.body

const users = await User.create(body)

res.status(201).json({
    success: true,
    message: "user created succesfully",
    users
})

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
