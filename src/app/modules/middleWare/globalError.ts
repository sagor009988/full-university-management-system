import { NextFunction, Request, Response } from "express";

const globalErrorHandler=(error:any,req:Request,res:Response,next:NextFunction)=>{

    const statusCode=500;
    const message=error.message||'something went wrong';
    const success=false;
  
    return res.status(statusCode).json({
      success,
      message,
      error:error,
    })
  
  }

  export default globalErrorHandler