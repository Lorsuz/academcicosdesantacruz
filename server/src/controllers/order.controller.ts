import Orders from '../models/order.model.js';
import Products from '../models/product.model.js';
import expressAsyncHandler from 'express-async-handler';

const createOrder = expressAsyncHandler(async (req, res) => {
	try {
		const { orderItems, subTotalPrice, totalPrice } = req.body;

		if (orderItems && orderItems.length === 0) {
			res.status(400).json({ message: 'No order items' });
		} else {
			const order = new Orders({
				orderItems,
				subTotalPrice,
				totalPrice,
				user: req.user._id
			});

			orderItems.array.forEach(async item => {
				const product = await Products.findById(item.product);
				product.stock = product.stock - item.qty;
				await product.save();
			});

			const createdOrder = await order.save();

			res.status(201).json(createdOrder);
		}
	} catch (error: any) {
		res.status(400).json({ message: error.message });
	}
});

const getUserOrders = expressAsyncHandler(async (req, res) => {
	try {
		const orders = await Orders.find({ user: req.user._id }).sort({ createdAt: -1 });

		const totalOrders = await Orders.countDocuments({ user: req.user._id });

		const pendingOrders = await Orders.countDocuments({ user: req.user._id, 'payments.status': 'pending' });

		const completeOrders = await Orders.countDocuments({ user: req.user._id, 'payments.status': 'complete' });

		const cancelledOrders = await Orders.countDocuments({ user: req.user._id, 'payments.status': 'cancelled' });
		res.json({
			orders,
			total: totalOrders,
			pending: pendingOrders,
			complete: completeOrders,
			cancelled: cancelledOrders
		});
	} catch (error: any) {
		res.status(400).json({ message: error.message });
	}
});

const deleteOrder = expressAsyncHandler(async (req, res) => {
	try {
		const order = await Orders.findByIdAndDelete(req.params.id);

		if (order) {
			res.json({ message: 'Order removed' });
		} else {
			res.status(404).json({ message: 'Order not found' });
		}
	} catch (error: any) {
		res.status(400).json({ message: error.message });
	}
});

const getOrderById = expressAsyncHandler(async (req, res) => {
	try {
		const order = await Orders.findById(req.params.id).populate('user', 'fullName email phone');

		if (order) {
			res.json(order);
		} else {
			res.status(404).json({ message: 'Order not found' });
		}
	} catch (error: any) {
		res.status(400).json({ message: error.message });
	}
});

const deleteAllOrders = expressAsyncHandler(async (req, res) => {
	try {
		await Orders.deleteMany({ user: req.user._id });

		res.json({ message: 'All orders removed' });
	} catch (error: any) {
		res.status(400).json({ message: error.message });
	}
});

export { createOrder, getUserOrders, deleteOrder, getOrderById, deleteAllOrders };
