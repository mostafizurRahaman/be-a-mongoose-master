import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { notFound } from './app/middlewares/notFound';
import router from './app/routes';

// create application :
const app: Application = express();

// parsers :
app.use(express.json());
app.use(cors());

// application routes:

app.use('/api/v1', router);
// main route:
app.get('/', (req: Request, res: Response) => {
  res.send('Yah!!! our server is running now.......');
});

// global Error Handler:
app.use(globalErrorHandler);

// notFound:
app.use(notFound);

// export :

export default app;
