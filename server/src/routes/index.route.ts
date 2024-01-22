import { router, Request, Response } from '../config/router.config.js';

router.get('/', (req: Request, res: Response) => {
	res.json({ title: 'alefe was ugly and now he is dumb and ugly' });
});

export default router;
