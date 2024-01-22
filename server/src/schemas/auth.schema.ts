import { zod } from '../config/router.config.js';

export const authSchema = zod.object({
	name: zod.string().min(3, { message: 'Seu nome deve conter pelo menos 3 caracteres' }),
	password: zod.string().min(8, 'A senha deve ter no mínimo 8 caracteres')
});
