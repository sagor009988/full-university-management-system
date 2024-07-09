import { NextFunction, Request, Response } from 'express';
import { studentServices } from './student.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';



// const createStudent = async (req: Request, res: Response) => {
//   try {
//     const { student } = req.body;

//     const zodValidation =
//      StudentZodValidationSchema.parse(student)

//     const result = await studentServices.createStudentIntoDb(zodValidation);

//     res.status(200).json({
//       success: true,
//       message: 'Student Create successfully',
//       data: result,
//     });
//   } catch (Error) {
//     res.status(500).json({
//       status: false,
//       message:Error ||"something wrong",
//       err: Error,
//     });
//   }
// };

//get All Students
const getAllStudents = async (req: Request, res: Response ,next:NextFunction) => {

  try {
    const result = await studentServices.getAllStudentsFromDb();
    sendResponse(res,{statusCode:httpStatus.OK,success:true,message:'All Students are get successFully',data:result})
  } catch (err) {
    next(err)
  }
};
//get single

const getSingleStudent = async (req: Request, res: Response ,next:NextFunction) => {
  try {
    const { studentId } = req.params;
    const result = await studentServices.getSingleStudentsFromDb(studentId);

    sendResponse(res,{statusCode:httpStatus.OK,success:true,message:'student get successFully',data:result});
  } catch (err) {
   next(err)
  }
};
//dlete student
const deleteStudent=async(req:Request,res:Response,next:NextFunction)=>{
  try{
    const {studentId}=req.params
  const result=await studentServices.deleteStudentFromDb(studentId)
  sendResponse(res,{statusCode:httpStatus.OK,success:true,message:'student Delete successFully',data:result})
  }catch(err){
   next(err)

}
}
export const studentController = {

  getAllStudents,
  getSingleStudent,
  deleteStudent
}
