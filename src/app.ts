import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { studentRoute } from './app/modules/Student/student.route';
import { userRoute } from './app/modules/User/user.route';
const app: Application = express();

//parsers
app.use(express());
app.use(cors());
app.use(express.json());

app.use('/api/v1/students', studentRoute);
app.use('/api/v1/users' ,userRoute)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!wwwwrrr    ');
});

app.use((error:any,req:Request,res:Response,next:NextFunction)=>{

  const statusCode=500;
  const message=error.message||'something went wrong';
  const success=false;

  return res.status(statusCode).json({
    success,
    message,
    error:error,
  })

})

export default app;
