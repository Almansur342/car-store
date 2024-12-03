import { Request, Response } from 'express';
import { orderValidationSchema } from './order.validation';
import { CarModel } from '../car.model';
import { OrderService } from './order.service';
import mongoose from 'mongoose';

//create order
const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const validateOrderData = orderValidationSchema.parse(orderData);
    const { email, car, totalPrice, quantity } = validateOrderData || {};
    const carDetails = await CarModel.findById(car);
    if (!carDetails) {
      return res.status(404).json({
        status: false,
        message: 'Car not found',
      });
    }

    if (carDetails.quantity < quantity) {
      return res.status(400).json({
        status: false,
        message: 'Insufficient stock available',
      });
    }

    const expectedPrice = carDetails.price * quantity;
    if (totalPrice !== expectedPrice) {
      return res.status(400).json({
        status: false,
        message: `TotalPrice mismatch. Expected: ${expectedPrice}, provided: ${totalPrice}`,
      });
    }

    const order = {
      email,
      car: new mongoose.Types.ObjectId(car),
      quantity,
      totalPrice,
    };
    const result = await OrderService.createOrderIntoDB(order);

    carDetails.quantity -= quantity;
    if (carDetails.quantity === 0) {
      carDetails.inStock = false;
    }
    await carDetails.save();

    res.status(201).json({
      message: 'Order created successfully',
      success: true,
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'An error occurred while creating the order',
      error: err,
    });
  }
};

//get the revenue fron the order
const getTheRevenue = async (req: Request, res: Response) => {
  try {
    const revenue = await OrderService.getTheRevenueFromDB();
    return res.status(200).json({
      message: 'Revenue calculated successfully',
      success: true,
      data: revenue,
    });
  } catch (err) {
    return res.status(500).json({
      message: 'An error occurred while calculating revenue',
      success: false,
      error: err,
    });
  }
};

export const OrderControler = {
  createOrder,
  getTheRevenue,
};
