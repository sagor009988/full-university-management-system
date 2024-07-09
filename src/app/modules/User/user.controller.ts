import { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";


const createStudent=async(req:Request,res:Response,next:NextFunction)=>{
   try{
        const {password,student:studentData}=req.body;

        const result=await UserServices.createStudentIntoDb(password,studentData)
        sendResponse(res,{statusCode:httpStatus.OK,success:true,message:' new student  successFully',data:result})
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }catch(err:any){
       next(err)
    }
}

export const UserControlles={
    createStudent
}