import { CarModel } from '../car.model';
import { Car } from './car.interface';

const createCarIntoDB = async (car: Car) => {
  const result = await CarModel.create(car);
  return result;
};

export const CarServices = {
  createCarIntoDB,
};
