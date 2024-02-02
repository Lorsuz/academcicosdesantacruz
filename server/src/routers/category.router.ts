import * as CategoryController from '../controllers/category.controller.js';
// import { isAdmin, isAuth } from "../middleware/authMiddleware.js";
import { protect } from '../middlewares/auth.middleware.js';
import { router } from '../config/router.config.js';

router.route('/').get(CategoryController.getCategories).post(protect, CategoryController.createCategory);

router.route('/import').post(protect, CategoryController.importCategories);

router.route('/:id').put(protect, CategoryController.updateCategory).delete(protect, CategoryController.deleteCategory);

export default router;
