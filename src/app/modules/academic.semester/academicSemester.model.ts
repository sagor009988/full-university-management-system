import { model, Schema } from "mongoose";
import { TacademicSemester } from "./academicSemester.interFace";
import { AcademicSemesterCode, AcademicSemesterName, months } from "./academicSemester.constant";


const AcademicSemesterSchema:Schema=new Schema<TacademicSemester>({
    name:{
        type:String,
        enum:AcademicSemesterName,
        required:true
    },
    year:{
        type:Date,
        required:true,

    },
    code:{
        type:String,
        required:true,
        enum:AcademicSemesterCode
    },
    startMonth:{
        type:String,
        required:true,
        enum:months
    },
    endMonth:{
        type:String,
        required:true,
        enum:months
    }
},
{
    timestamps:true
}
);

export const AcademicSemesterModel=model<TacademicSemester>('AcademicSemester',AcademicSemesterSchema)