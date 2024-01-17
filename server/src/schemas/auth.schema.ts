import { zod } from '../config/router.config.js';

export const authSchema = zod.object({
	email: zod.string().email('O email deve ser válido'),
	password: zod.string().min(8, 'A senha deve ter no mínimo 8 caracteres')
});
