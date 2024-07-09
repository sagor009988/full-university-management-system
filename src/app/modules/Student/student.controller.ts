import { NextFunction, Request, Response } from 'express';
import { studentServices } from './student.service';



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
    res.status(200).json({
      success: true,
      message: 'students  are retrived successFully',
      data: result,
    });
  } catch (err) {
    next(err)
  }
};
//get single

const getSingleStudent = async (req: Request, res: Response ,next:NextFunction) => {
  try {
    const { studentId } = req.params;
    const result = await studentServices.getSingleStudentsFromDb(studentId);
    res.status(200).json({
      success: true,
      message: 'student is Retrive successFully',
      data: result,
    });
  } catch (err) {
   next(err)
  }
};
//dlete student
const deleteStudent=async(req:Request,res:Response,next:NextFunction)=>{
  try{
    const {studentId}=req.params
  const result=await studentServices.deleteStudentFromDb(studentId)
  res.status(200).json({
    success:true,
    message:'Student Is delete successfully',
    data:result
  })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }catch(err:any){
   next(err)

}
}
export const studentController = {

  getAllStudents,
  getSingleStudent,
  deleteStudent
}
