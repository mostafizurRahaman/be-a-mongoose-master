import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.route';
import { UserRouter } from './app/modules/user/user.route';

// create application :
const app: Application = express();

// parsers :
app.use(express.json());
app.use(cors());

// application routes:

app.use('/api/v1/students', StudentRoutes);
app.use('/api/v1/users', UserRouter);
// main route:
app.get('/', (req: Request, res: Response) => {
  res.send('Yah!!! our server is running now.......');
});

// export :

export default app;
