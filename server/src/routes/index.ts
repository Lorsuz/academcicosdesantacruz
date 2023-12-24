import { Router, Request, Response } from 'express';
import { sendEmailFromFormContact } from '../services/sendMail.js';
const router: Router = Router();

/* GET home page. */
router.get('/', (req: Request, res: Response) => {
	res.json({ title: 'Express' });
});

router.post('/form/contact', async (req: Request, res: Response) => {
	const data = req.body;

	try {
		(await sendEmailFromFormContact(data)) ? res.json({ status: '200' }) : res.json({ status: '401' });
	} catch (error) {
		res.json({ status: '401' });
	}
});

export default router;
