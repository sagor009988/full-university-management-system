import { Request, Response } from "express";
import { UserService } from "./user.service";

const createUser=async(req:Request,res:Response)=>{
    try{
        const {student}=req.body;
        const result=UserService.createStudentIntoDb(student)
        res.status(200).json({
            success:true,
            message:'user Created successfully',
            data:result
        })

    }catch(err:any){
        res.status(500).json({
            status:false,
            message:err.message||'someThing Wrong',
            Error:err
        })
    }
}

export const UserController={
    createUser
}