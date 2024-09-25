import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async(req,res)=>{
    console.log(req.body)
    const {username,email,password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password,10);

    const newUser = new User({username,email,password:hashedPassword});
    await newUser.save();

};