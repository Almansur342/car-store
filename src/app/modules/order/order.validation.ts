import { z } from 'zod';
export const orderValidationSchema = z.object({
  email: z
    .string()
    .email({ message: 'Invalid email format' })
    .min(1, { message: 'email cannot be empty' })
    .trim(),

  car: z
    .string()
    .regex(/^[a-f\d]{24}$/i, { message: 'Invalid ObjectId format' }),

  quantity: z.number().positive({ message: 'quantity must be positive' }),

  totalPrice: z
    .number()
    .positive({ message: 'total price cannot be less then zero' }),
});
