import express from 'express';
import { CarController } from './car.controller';

const router = express.Router();

router.post('/cars', CarController.createCar);
router.get('/cars', CarController.getAllCars);
router.get('/cars/:carId', CarController.getSingleCar);
router.put('/cars/:carId', CarController.updateSingleCar);
router.delete('/cars/:carId', CarController.deleteSingleCar);

export const CarRoutes = router;
