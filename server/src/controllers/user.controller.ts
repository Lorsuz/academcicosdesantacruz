import { Request, Response, prisma, zod } from '../config/router.config.js';

export const updateUserAuth = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const { name, email, password } = req.body;

		const user = await prisma.user.update({
			where: {
				id: Number(id)
			},
			data: {
				name,
				email,
				password
			}
		});

		res.status(200).json(user);
	} catch (error) {
		console.error('Erro ao atualizar usuário:', error);
		res.status(401).json({ message: 'Erro ao atualizar usuário' });
	}
};
