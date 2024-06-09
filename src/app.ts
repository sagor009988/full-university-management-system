import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { studentRoute } from './app/modules/Student/student.route';
const app: Application = express();

//parsers
app.use(express()), app.use(cors());

app.use('/api/v1/students', studentRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!wwwwrrr    ');
});

export default app;
