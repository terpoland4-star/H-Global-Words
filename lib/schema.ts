import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Nom trop court').max(100),
  email: z.string().email('Email invalide'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message trop court').max(2000),
  honeypot: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
