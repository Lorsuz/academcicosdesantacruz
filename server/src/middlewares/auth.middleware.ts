import { jwt, Request, Response, NextFunction, secretKey } from '../config/router.config.js';
import User from '../models/user.model.js';
import expressAsyncHandler from 'express-async-handler';

const generateToken = (id: number) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });

const isAuthenticated = async (req: Request & any, res: Response, next: NextFunction) => {
	const token = req.cookies.jwt || req.header('Authorization')?.replace('Bearer ', '');

	if (!token) {
		return res.status(401).json({ message: 'Token não fornecido' });
	}

	try {
		const decoded: any = jwt.verify(token, secretKey);
		req.userId = decoded.userId;
		next();
	} catch (error) {
		console.error('Erro na verificação do token:', error);
		res.status(401).json({ message: 'Token inválido' });
	}
};

const protect = expressAsyncHandler(async (req, res, next) => {
	let token;

	if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
		try {
			token = req.headers.authorization.split(' ')[1];

			const decoded = jwt.verify(token, process.env.JWT_SECRET);

			req.user = await User.findById(decoded.id).select('-password');

			next();
		} catch (error) {
			console.error(error);
			res.status(401).json({ message: 'Not authorized, token failed' });
		}
	}

	if (!token) {
		res.status(401);
		throw new Error('Not authorized, no token');
	}
});

export { isAuthenticated, generateToken, protect };
