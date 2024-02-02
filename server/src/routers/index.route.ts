import { router, Request, Response } from '../config/router.config.js';

router.get('/', (req: Request, res: Response) => {
	res.json({ title: 'Express' });
});

export default router;
