import * as OrderController from '../controllers/order.controller.js';
import { isAuthenticated } from '../middlewares/auth.middleware.js';
import { router } from '../config/router.config.js';

router
	.route('/')
	.post(isAuthenticated, OrderController.createOrder)
	.get(isAuthenticated, OrderController.getUserOrders)
	.delete(isAuthenticated, OrderController.deleteOrder);

router.route('/:id').get(isAuthenticated, OrderController.getOrderById).delete(isAuthenticated, OrderController.deleteOrder);

export default router;
