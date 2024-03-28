import * as CategoryController from '../controllers/category.controller.js';
// import { isAdmin, isAuth } from "../middleware/authMiddleware.js";
import { isAuthenticated } from '../middlewares/auth.middleware.js';
import { router } from '../config/router.config.js';

router.route('/').get(CategoryController.getCategories).post(isAuthenticated, CategoryController.createCategory);

router.route('/import').post(isAuthenticated, CategoryController.importCategories);

router.route('/:id').put(isAuthenticated, CategoryController.updateCategory).delete(isAuthenticated, CategoryController.deleteCategory);

export default router;