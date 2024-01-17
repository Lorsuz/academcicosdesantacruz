import { Request, Response, prisma } from '../config/router.config.js';

export const getAllUsers = async (req: Request, res: Response) => {
	try {
		const users = await prisma.user.findMany();
		res.json(users);
	} catch (error) {
		res.status(500).json({ error: 'An unexpected error occurred', message: 'Error fetching users' });
	}
};
