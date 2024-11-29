import express from 'express';
import { OrderControler } from './order.controller';

const router = express.Router();

router.post('/orders', OrderControler.createOrder);
router.get('/orders/revenue', OrderControler.getTheRevenue);

export const OrderRoutes = router;
