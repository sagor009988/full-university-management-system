import { Request, Response } from "express";
import { UserServices } from "./user.service";

const createStudent=async(req:Request,res:Response)=>{
    try{
        const {password,student}=req.body;
        const result=UserServices.createStudentIntoDb(password,student)
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

export const UserControlles={
    createStudent
}