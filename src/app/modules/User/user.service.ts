import config from "../../config";
import { TStudent } from "../Student/student.interface";
import { StudentModel } from "../Student/student.model";
import { TUser } from "./user.interface";
import { UserModel } from "./user.model";



const createStudentIntoDb=async(password:string,studentData:TStudent)=>{
  //create user objects
  const user:Partial<TUser>={};
//check pass if not det default
  user.password=password || config.default_password as string;

  //set role
  user.role='student';
  
  //set manuly generated id
  user.id='2030100001';

  const newUser=await UserModel.create(user);

  //create student by embded and ref with user conditionally

  if(Object.keys(newUser).length){
    studentData.id=newUser.id;
    studentData.user=newUser._id

    const result =await StudentModel.create(studentData)
    return result ;
  }


}

export const UserServices={
  createStudentIntoDb
}