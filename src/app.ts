import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import routers from './routers';
import globalErrorHandler from './middleware/globalErrorHandler';
const app: Application = express();

// cors
// app.use(cors());
app.use(
  cors({
    origin: [
      'https://rmb-back-demo.vercel.app/',
      'rmb-back-demo.vercel.app',
      'https://rmb-back-demo.vercel.app',
    ], // Set specific origin
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

//data parse
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// application router
app.use('/api/v1/', routers);

// global error handling
app.use(globalErrorHandler);

// testing api
app.get('/', async (req: Request, res: Response) => {
  res.send('Server is running!');
});

export default app;
