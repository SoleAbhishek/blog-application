import express from "express";
import {User} from '../models/users.model.js'
const userRouter = express.Router();

userRouter.post('/signup', async (req,res)=>{
    const userData = req.body;
    try {

        await User.create({
        name: userData.name,
        email: userData.email,
        password: userData.password,
        // profilePicture:'' //Upadate it with real one after learning
        })
        res.json({message: 'Successfully Signed up.', message_id: 200})

    } catch (error) {
        res.json({message:error.message, message_id: 500 })
    }
})

export default userRouter;