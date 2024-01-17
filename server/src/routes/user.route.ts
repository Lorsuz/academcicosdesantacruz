import { router, Request, Response, prisma } from '../config/router.config.js';

router.get('/user/truncate', (req: Request, res: Response) => {
	prisma.user.deleteMany().then(() => {
		res.json({ message: 'Truncated' });
	});
});

export default router;
