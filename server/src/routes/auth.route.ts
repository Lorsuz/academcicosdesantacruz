import { authRegister, authLogin } from '../controllers/auth.controller.js';
import { router } from '../config/router.config.js';

router.post('/auth/register', authRegister);

router.post('/auth/login', authLogin);

export default router;
