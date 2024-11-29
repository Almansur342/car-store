import { CarModel } from '../car.model';
import { Car } from './car.interface';

const createCarIntoDB = async (car: Car) => {
  const result = await CarModel.create(car);
  return result;
};

const getCarFromDB = async () => {
  const result = await CarModel.find();
  return result;
};

const getSingleCarFromDB = async (id: string) => {
  const result = await CarModel.findById(id);
  return result;
};

const updateSingleCarInDB = async (id: string, updateData: Partial<Car>) => {
  const result = await CarModel.findByIdAndUpdate(
    id,
    { $set: updateData },
    { new: true },
  );
  return result;
};

const deleteSingleCarFromDB = async (id: string) => {
  const result = await CarModel.findByIdAndDelete(id);
  return result;
};

export const CarServices = {
  createCarIntoDB,
  getCarFromDB,
  getSingleCarFromDB,
  updateSingleCarInDB,
  deleteSingleCarFromDB,
};
