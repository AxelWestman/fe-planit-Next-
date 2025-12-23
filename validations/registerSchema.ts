import {z} from 'zod';

export const registerSchema = z.object({
  email: z.string().email({ message: 'Por favor, ingrese un email válido' }),
  password: z
    .string()
    .min(8, { message: 'La contraseña debe tener al menos 8 caracteres' }),
});
