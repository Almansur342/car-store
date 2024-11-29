import { Request, Response } from 'express';
import { carValidationSchema } from './car.validation';
import { CarServices } from './car.service';
import { z } from 'zod';

const createCar = async (req: Request, res: Response) => {
  try {
    const carData = req.body;
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
    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'Car not found',
      });
    }
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

const updateSingleCar = async (req: Request, res: Response) => {
  try {
    const { carId } = req.params;
    const updateData = req.body;
    const zodParseUpdateData = carValidationSchema
      .partial()
      .safeParse(updateData);
    if (!zodParseUpdateData || Object.keys(zodParseUpdateData).length == 0) {
      return res.status(400).json({
        success: false,
        message: 'No update data provided',
      });
    }
    const result = await CarServices.updateSingleCarInDB(carId, updateData);
    res.status(200).json({
      success: true,
      message: 'cars info updated successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to update car',
      error: err,
    });
  }
};

const deleteSingleCar = async (req: Request, res: Response) => {
  try {
    const { carId } = req.params;
    const result = await CarServices.deleteSingleCarFromDB(carId);
    res.status(200).json({
      success: true,
      message: 'cars  deleted successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to Delete car',
      error: err,
    });
  }
};

export const CarController = {
  createCar,
  getAllCars,
  getSingleCar,
  updateSingleCar,
  deleteSingleCar,
};
