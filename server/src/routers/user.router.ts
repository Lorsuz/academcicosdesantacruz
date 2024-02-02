import * as UserController from '../controllers/user.controller.js';
import { protect } from '../middlewares/auth.middleware.js';

import { router, Request, Response, prisma } from '../config/router.config.js';
router.get('/user/truncate', (req: Request, res: Response) => {
	prisma.user.deleteMany().then(() => {
		res.json({ message: 'Truncated' });
	});
});

router.post('/import/all', UserController.importUsers);
router.post('/login', UserController.login);
router.post('/register', UserController.register);
router.put('/', protect, UserController.updateProfile);
router.put('/', protect, UserController.changePassword);
router.delete('/', protect, UserController.deleteUser);

export default router;
