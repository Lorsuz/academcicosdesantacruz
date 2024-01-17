import { router } from '../config/router.config.js';
import { getAllUsers } from '../controllers/api.controller.js';

router.get('/api/users', getAllUsers);

export default router;
