
//create schema

import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";


const userSchema=new Schema<TUser>({
  id:{type:String,required:true,unique:true},
  password:{type:String,required:true},
  needsChangePassword:{type:Boolean,default:true},
  role:{
    type:String,
    enum:{
      
      values:['student','faculty','admin'],
      message:'{VALUE} is not correct'
    }
  },
  status:{
    type:String,
    enum:['in-progress','blocked'],
    default:'in-progress'
  },
  isDeleted:{
    type:Boolean,
    default:false
  }
},
{
  timestamps:true
})

//create a model 
export const UserModel=model<TUser>('user',userSchema)