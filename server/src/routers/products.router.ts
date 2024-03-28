import * as productsController from '../controllers/product.controller.js';
import { isAuthenticated } from '../middlewares/auth.middleware.js';
import { router } from '../config/router.config.js';

router.route('/').get(productsController.getProducts).post(isAuthenticated, productsController.createProduct);

router.route('/import').post(/* isAuthenticated, */ productsController.importProducts);

router.route('/:id')
	.get(productsController.getProductById)
	.delete(isAuthenticated, productsController.deleteProduct)
	.put(isAuthenticated, productsController.updateProduct);

router.get('/all/tags', productsController.getAllTags);

export default router;

