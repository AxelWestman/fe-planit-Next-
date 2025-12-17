import {z} from 'zod';

export const loginSchema = z.object({
    email: z.string().email({
        message: "Por favor ingrese un email válido."
    }),
    password: z.string()
})
