import { router } from '../config/router.config.js';
import { formForContactWithEmail } from '../controllers/form.controller.js';

router.post('/form/contact', formForContactWithEmail);

export default router;
