import config from "../../config";
import { TStudent } from "../Student/student.interface";
import { newUser } from "./user.interface";
import { UserModel } from "./user.model";

const createStudentIntoDb=async (password:string,payload:TStudent)=>{
  //create user object
  const user:newUser={}

  //  password is not set then set default pass

  // if(password){
  //   password=password
  // }
  // else{
  //   password=config.default_password as string
  // }
  user.password=password || config.default_password as string;

  //set role
  user.role='student';

  //set manually generated id

  user.id='2030100001';

  // create user
  const newUser=await UserModel.create(user);

  //create student

  if(Object.keys(newUser).length){
    payload.id=newUser.id;
    payload.user=newUser._id
  }



}

export const UserServices={
  createStudentIntoDb
}