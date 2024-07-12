import { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";


const createStudent=catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
  
    const {password,student:studentData}=req.body;

    const result=await UserServices.createStudentIntoDb(password,studentData)
    sendResponse(res,{statusCode:httpStatus.OK,success:true,message:' new student  successFully',data:result})

})

export const UserControlles={
    createStudent
}