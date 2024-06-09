import { TStudent } from "./student.interface";
import { StudentModel } from "./student.model";

const createStudentIntoDb=async(payload:TStudent)=>{

    const result=await StudentModel.create(payload);
    return result;
}

export const studentServices={
    createStudentIntoDb
}