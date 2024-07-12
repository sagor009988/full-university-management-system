import express, { NextFunction, Request, Response } from 'express';
import { UserControlles } from './user.controller';
import { AnyZodObject } from 'zod';
import { StudentZodValidations } from '../Student/studend.zod.validation';


const router =express.Router();

const zodValidateRequest=(schema:AnyZodObject)=>{
 return async(req:Request,res:Response,next:NextFunction)=>{
  try{
    await schema.parseAsync({
        body:req.body
      })
       next()
  } catch(err){
    next(err)
  }
}
};

router.post('/create-student',zodValidateRequest(StudentZodValidations.studenCreateValidationSchema),UserControlles.createStudent)

export const userRoute=router