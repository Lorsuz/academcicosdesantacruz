import * as UserController from '../controllers/user.controller.js';
import { isAdmin, isAuthenticated } from '../middlewares/auth.middleware.js';
import { router} from '../config/router.config.js';

router.get('/all', isAuthenticated, isAdmin, UserController.getAllUsers);

router.post('/import/all', UserController.importUsers);
router.post('/register', UserController.register);
router.get('/verify', UserController.verifyToken);
router.post('/login', UserController.login);

router.put('/', isAuthenticated, UserController.updateProfile);
router.put('/', isAuthenticated, UserController.changePassword);

router.delete('/', isAuthenticated, UserController.deleteUser);

export default router;
