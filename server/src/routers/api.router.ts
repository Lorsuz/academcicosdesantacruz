import { router } from '../config/router.config.js';
import { getAllUsers, getUserData } from '../controllers/api.controller.js';
import { isAuthenticated } from '../middlewares/auth.middleware.js';

router.get('/api/user', isAuthenticated, getUserData);
router.get('/api/users', getAllUsers);

export default router;
