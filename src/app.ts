import express, { Application } from 'express';
import cors from 'cors';
import { CarRoutes } from './app/modules/car/car.route';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

app.use('/api', CarRoutes);

export default app;
