import { Request, Response, prisma, jwt, zod, secretKey } from '../config/router.config.js';
import { authSchema } from '../schemas/auth.schema.js';

type UserCreateInput = {
	id: number;
	name: string;
	password: string;
};

type UserFindFirst = {
	id: number;
	name: string;
	password: string;
};

export const authRegister = async (req: Request, res: Response) => {
	try {
		const { name, password } = authSchema.parse(req.body);

		const existingUser = await prisma.user.findFirst({
			where: {
				OR: [{ name }]
			}
		});

		if (existingUser) return res.status(400).json({ message: 'Esse nome ja está cadastrado' });

		await prisma.user.create({
			data: {
				name,
				password
			} as UserCreateInput
		});

		res.status(201).json({ message: 'Registrado com sucesso' });
	} catch (error) {
		console.error('erro durante o registro:', error);
		res.status(401).json({ message: 'Erro no servidor' });
	}
};

export const authLogin = async (req: Request, res: Response) => {
	try {
		const { name, password } = authSchema.parse(req.body);
		const user: UserFindFirst | null = await prisma.user.findFirst({
			where: {
				name
			}
		});

		if (!user) {
			res.status(401).json({ message: 'Nome não cadastrado' });
			return;
		}

		if (password !== user.password) {
			res.status(401).json({ message: 'Senha inválida' });
			return;
		}

		const token = jwt.sign({ userId: user.id }, secretKey, {
			expiresIn: '1d'
		});

		res.cookie('jwt', token, { httpOnly: true });

		res.status(201).json({ isAuthenticated: true, message: 'Login feito com sucesso', token });
	} catch (error) {
		if (error instanceof zod.ZodError) {
			console.error('Erro de validação ZodServer:', error.errors);
			res.status(400).json({ message: 'Erro de validação ZodServer', details: error.errors });
		} else {
			console.error('Erro desconhecido:', error);
			res.status(500).json({ message: 'Erro interno do servidor' });
		}
	}
};

/*
export const getAuthenticatedUserData = async (req: Request & any, res: Response) => {
	try {
		const user = await prisma.user.findUnique({
			where: {
				id: req.userId
			},
			select: {
				id: true,
				name: true,
				email: true
			}
		});

		res.status(200).json({ user });
	} catch (error) {
		console.error('Erro ao pegar usuário:', error);
		res.status(500).json({ message: 'Erro interno do servidor' });
	}
};

export const authLogOut = async (req: Request, res: Response) => {
	try {
		res.clearCookie('jwt');
		res.status(200).json({ message: 'Usuário deslogado com sucesso!' });
	} catch (error) {
		console.error('Erro ao deslogar:', error);
		res.status(500).json({ message: 'Erro interno do servidor' });
	}
}; */
