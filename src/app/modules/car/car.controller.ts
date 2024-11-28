import { Request, Response } from 'express';
import { carValidationSchema } from './car.validation';
import { CarServices } from './car.service';
import { z } from 'zod';

const createCar = async (req: Request, res: Response) => {
  try {
    const { cars: carData } = req.body;
    const zodParseData = carValidationSchema.parse(carData);
    const result = await CarServices.createCarIntoDB(zodParseData);
    return res.status(200).json({
      message: 'car created successfully',
      success: true,
      data: result,
    });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({
        message: 'Validation failed',
        success: false,
        errors: err.errors,
      });
    }
    return res.status(500).json({
      message: 'Internal server error',
      success: false,
    });
  }
};

const getAllCars = async (req: Request, res: Response) => {
  try {
    const result = await CarServices.getCarFromDB();
    res.status(200).json({
      success: true,
      message: 'cars retrieved successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to reetrieve cars',
      error: err,
    });
  }
};

const getSingleCar = async (req: Request, res: Response) => {
  try {
    const { carId } = req.params;
    const result = await CarServices.getSingleCarFromDB(carId);
    res.status(200).json({
      success: true,
      message: 'cars retrieved successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to reetrieve cars',
      error: err,
    });
  }
};

export const CarController = {
  createCar,
  getAllCars,
  getSingleCar,
};
