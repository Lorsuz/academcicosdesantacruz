import { Request, Response, prisma, jwt, bcrypt } from '../config/router.config.js';
import { authSchema } from '../schemas/auth.schema.js';
import { sendEmailFromFormContact } from '../services/email.service.js';

type UserCreateInput = {
	name: string;
	email: string;
	password: string;
};

type UserFindFirst = {
	id: number;
	name?: string;
	email: string;
	password: string;
};

export const authRegister = async (req: Request, res: Response) => {
	try {
		const { email, password } = authSchema.parse(req.body);

		const existingUser = await prisma.user.findFirst({
			where: {
				OR: [{ email }]
			}
		});

		if (existingUser) return res.status(400).json({ status: 400, message: 'Esse e-mail ja está cadastrado' });

		const passwordHashed: string = await bcrypt.hash(password, 12);

		const username: string[] | null = email.match(/^(.+)@/);

		const newUser = await prisma.user.create({
			data: {
				name: username ? username[1] : 'user',
				email,
				password: passwordHashed
			} as UserCreateInput
		});

		console.log('User created:', newUser);

		await sendEmailFromFormContact(newUser.email);

		res.status(201).json({ status: 201, message: 'Registrado com sucesso' });
	} catch (error) {
		console.error('erro durante o registro:', error);
	}
};

export const authLogin = async (req: Request, res: Response) => {
	try {
		const { email, password } = authSchema.parse(req.body);
		const existingUser: UserFindFirst | null = await prisma.user.findFirst({
			where: {
				email
			}
		});

		if (!existingUser) {
			res.status(401).json({ status: 401, message: 'E-mail não cadastrado' });
			return;
		}
		if (!existingUser.password) {
			res.status(401).json({ status: 401, message: 'Usuário sem senha' });
			return;
		}

		const compareHash = await bcrypt.compare(password, existingUser.password);
		if (!compareHash) {
			res.status(401).json({ status: 401, message: 'Senha inválida' });
			return;
		}
		const SECRET_KEY = process.env.JWT_SECRET || 'defaultSecretKey';
		const authToken = jwt.sign({ userId: existingUser.id }, SECRET_KEY);
		res.status(201).json({ status: 201, message: 'Login successful', authToken });
	} catch (error) {
		console.error('erro durante o login:', error);
	}
};
