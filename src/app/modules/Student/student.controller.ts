import { NextFunction, Request, RequestHandler, response, Response } from 'express';
import { studentServices } from './student.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';





const getAllStudents=catchAsync( async (req, res ,next) => {


    const result = await studentServices.getAllStudentsFromDb();
    sendResponse(res,{statusCode:httpStatus.OK,success:true,message:'All Students are get successFully',data:result})
  
});
//get single

const getSingleStudent:RequestHandler = catchAsync(async (req, res,next) => {
  
  const { studentId } = req.params;
  const result = await studentServices.getSingleStudentsFromDb(studentId);

  sendResponse(res,{statusCode:httpStatus.OK,success:true,message:'student get successFully',data:result});

});
//dlete student
const deleteStudent:RequestHandler=catchAsync(async(req,res,next)=>{
 
  const {studentId}=req.params
const result=await studentServices.deleteStudentFromDb(studentId)
sendResponse(res,{statusCode:httpStatus.OK,success:true,message:'student Delete successFully',data:result})

})
export const studentController = {

  getAllStudents,
  getSingleStudent,
  deleteStudent
}
