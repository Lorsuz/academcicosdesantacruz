import { string, object } from 'zod';

export const registerSchema: any = object({
	email: string().email({ message: 'Insira um endereço de e-mail válido' }),
	password: string().min(8, 'A senha deve ter pelo menos 8 caracteres'),
	confirmPassword: string()
}).refine(({ password, confirmPassword }) => password === confirmPassword, {
	message: 'Senhas não conferem',
	path: ['confirmPassword']
});

export const loginSchema = object({
	email: string().email({ message: 'Insira um endereço de e-mail válido' }),
	password: string().min(8, 'A senha deve ter pelo menos 8 caracteres')
});
