import { model, Schema } from 'mongoose';
import { Car } from './car/car.interface';

const carSchema = new Schema<Car>(
  {
    brand: {
      type: String,
      required: [true, 'brand name is required'],
      trim: true,
    },
    model: {
      type: String,
      required: [true, 'model is required'],
      trim: true,
    },
    year: {
      type: Number,
      required: [true, 'year is required'],
      min: [
        1886,
        'As the first car was invented in 1886, so it cannot be less then 1886',
      ],
    },
    price: {
      type: Number,
      required: [true, 'price is required'],
      min: [0, 'Pice cannot be negative'],
    },
    category: {
      type: String,
      required: [true, 'category is required'],
      enum: ['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible'],
    },
    description: {
      type: String,
      required: [true, 'description is required'],
      trim: true,
      max: [500, 'description cannot be longer then 500 characters'],
    },
    quantity: {
      type: Number,
      required: [true, 'quantity is required'],
      min: [0, 'quantity cannot be negative'],
    },
    inStock: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const CarModel = model<Car>('Car', carSchema);
