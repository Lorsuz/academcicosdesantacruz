import { jwt, Request, Response, NextFunction, secretKey } from '../config/router.config';

const isAuthenticated = async (req: Request & any, res: Response, next: NextFunction) => {
	const token = req.cookies.jwt || req.header('Authorization')?.replace('Bearer ', '');

	if (!token) {
		return res.status(401).json({ isAuthenticated: false, message: 'Token não fornecido' });
	}

	try {
		const decoded: any = jwt.verify(token, secretKey);
		console.log('====================================');
		console.log('decoded:', decoded);
		console.log('====================================');
		req.userId = decoded.userId;
		next();
	} catch (error) {
		console.error('Erro na verificação do token:', error);
		res.status(401).json({ isAuthenticated: false, message: 'Token inválido' });
	}
};

export default isAuthenticated;
