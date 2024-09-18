import * as z from 'zod';

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, {
    message: 'Password length should be minimum 1',
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: 'valid email is required',
  }),
  password: z.string().min(6, {
    message: 'password should be min 6 chars long',
  }),
  name: z.string().min(1, {
    message: 'name is required',
  }),
});
