import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { studentRoute } from './app/modules/Student/student.route';
import { userRoute } from './app/modules/User/user.route';
import globalErrorHandler from './app/modules/middleWare/globalError';
import notFound from './app/modules/middleWare/notFoundRoute';
import HandleRouter from './app/Route';
const app: Application = express();

//parsers
app.use(express());
app.use(cors());
app.use(express.json());


app.use('/api/v1' ,HandleRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!wwwwrrr    ');
});

//global errorHaandle
app.use(globalErrorHandler);

//not Found
app.use(notFound)

export default app;
