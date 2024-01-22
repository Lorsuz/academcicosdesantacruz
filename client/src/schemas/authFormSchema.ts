import { string, object } from 'zod';

export const registerSchema: any = object({
	name: string().min(3, { message: 'Seu nome deve conter pelo menos 3 caracteres' }),
	password: string().min(8, 'A senha deve ter pelo menos 8 caracteres'),
	confirmPassword: string()
}).refine(({ password, confirmPassword }) => password === confirmPassword, {
	message: 'Senhas não conferem',
	path: ['confirmPassword']
});

export const loginSchema = object({
	name: string().min(3, { message: 'Este campo deve conter pelo menos 3 caracteres' }),
	password: string().min(8, 'A senha deve ter pelo menos 8 caracteres')
});
