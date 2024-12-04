import express, { Application } from 'express';
import cors from 'cors';
import { CarRoutes } from './app/modules/car/car.route';
import { OrderRoutes } from './app/modules/order/order.route';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to the Car Store Project');
});

app.use('/api', CarRoutes);
app.use('/api', OrderRoutes);

export default app;
