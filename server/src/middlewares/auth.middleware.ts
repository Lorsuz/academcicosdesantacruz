import { jwt, Request, Response, util, NextFunction } from '../config/router.config';

export const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const token = req.cookies.jwt;
		console.log('token', token);
		console.log('env ', process.env.JWT_SECRET);
		const verifyAsync = util.promisify(jwt.verify);
		const decoded = await verifyAsync(token, process.env.JWT_SECRET);
		req.user = decoded;
		return next();
	} catch (error) {
		return res.status(401).json({ auth: false, message: error.message });
	}
};

export default isAuthenticated;
