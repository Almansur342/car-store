import { z } from 'zod';
export const carValidationSchema = z.object({
  brand: z.string().min(1, { message: 'brand cannot be empty' }).trim(),

  model: z.string().min(1, { message: 'model cannot be empty' }),

  year: z
    .number()
    .int({ message: 'Year must be a number' })
    .min(1886, { message: 'Year cannot be earlier than 1886' })
    .max(new Date().getFullYear(), { message: 'You cannot be in the future' }),

  price: z.number().positive({ message: 'Price must be greater than 0' }),

  category: z.enum(['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible'], {
    message:
      'Invalid category. Must be one of Sedan, SUV, Truck, Coupe, or  Convertible',
  }),

  description: z
    .string()
    .max(500, { message: 'Description cannot exceed 500 characters' })
    .min(1, { message: 'Description is required' })
    .trim(),

  quantity: z
    .number()
    .int({ message: 'Quantity must be an integer' })
    .min(0, { message: 'Quantity cannot be negative' }),

  inStock: z.boolean(),
});
