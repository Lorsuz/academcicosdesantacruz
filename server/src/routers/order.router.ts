import * as OrderController from '../controllers/order.controller.js';
import { protect } from '../middlewares/auth.middleware.js';
import { router } from '../config/router.config.js';

router
	.route('/')
	.post(protect, OrderController.createOrder)
	.get(protect, OrderController.getUserOrders)
	.delete(protect, OrderController.deleteOrder);

router.route('/:id').get(protect, OrderController.getOrderById).delete(protect, OrderController.deleteOrder);

export default router;
