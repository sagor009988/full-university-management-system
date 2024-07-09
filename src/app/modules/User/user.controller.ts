import { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.service";


const createStudent=async(req:Request,res:Response,next:NextFunction)=>{
   try{
        const {password,student:studentData}=req.body;

        const result=await UserServices.createStudentIntoDb(password,studentData)
        res.status(200).json({
            success:true,
            message:'student id created successFully',
            data:result
        })

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }catch(err){
       next(err)
    }
}

export const UserControlles={
    createStudent
}