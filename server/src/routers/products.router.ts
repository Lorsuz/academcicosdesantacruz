import * as productsController from '../controllers/product.controller.js';
import { protect } from '../middlewares/auth.middleware.js';
import { router } from '../config/router.config.js';

router.route('/').get(productsController.getProducts).post(protect, productsController.createProduct);

router.route('/import').post(protect, productsController.importProducts);

router
	.get('/:id', productsController.getProductById)
	.delete(protect, productsController.deleteProduct)
	.put(protect, productsController.updateProduct);

router.get('/all/tags', productsController.getAllTags);

export default router;

