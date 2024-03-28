import { authRegister, authLogin, getAuthenticatedUserData, authLogOut } from '../controllers/auth.controller.js';
import { router } from '../config/router.config.js';
import { isAuthenticated } from '../middlewares/auth.middleware.js';

/* router.get('/user/truncate', (req: Request, res: Response) => {
	prisma.user.deleteMany().then(() => {
		res.json({ message: 'Truncated' });
	});
}); */

router.post('/auth/register', authRegister);

router.post('/auth/login', authLogin);

router.get('/auth/me', isAuthenticated, getAuthenticatedUserData);

router.get('/auth/logout', authLogOut);

export default router;
