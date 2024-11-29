import { OrderModel } from '../order.model';
import { Order } from './order.interface';

const createOrderIntoDB = async (order: Order) => {
  const result = await OrderModel.create(order);
  return result;
};

const getTheRevenueFromDB = async () => {
  const result = await OrderModel.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
    {
      $project: {
        _id: 0,
        totalRevenue: 1,
      },
    },
  ]);
  return result.length > 0 ? result[0] : { totalRevenue: 0 };
};

export const OrderService = {
  createOrderIntoDB,
  getTheRevenueFromDB,
};
