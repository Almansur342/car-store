import { model, Schema } from 'mongoose';
import { Order } from './order/order.interface';

const orderSchema = new Schema<Order>(
  {
    email: {
      type: String,
      required: [true, 'emial is required'],
      trim: true,
    },
    car: {
      type: Schema.Types.ObjectId,
      ref: 'Car',
      required: true,
    },
    quantity: {
      type: Number,
      required: [true, 'quantity is required'],
      min: [0, 'quantity cannot be negative'],
    },
    totalPrice: {
      type: Number,
      required: [true, 'Total price is required'],
      min: [0, 'Total Pice cannot be negative'],
    },
  },
  {
    timestamps: true,
  },
);

export const OrderModel = model<Order>('Order', orderSchema);
