import mongoose from 'mongoose';
const orderSchema = new mongoose.Schema(
	{
		user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Users' },
		orderItems: [
			{
				size: { type: String, required: true },
				color: { type: String, required: true },
				qty: { type: Number, required: true },
				image: { type: String, required: true },
				price: { type: Number, required: true },
				product: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Products' }
			}
		],
		shippingAddress: {
			fullName: { type: String, required: true },
			address: { type: String, required: true },
			email: { type: String, required: true, lowercase: true },
			location: { type: String, required: true },
			phoneNumber: { type: String, required: true },
			shippingMethod: { type: String, required: true },
			shippingCost: { type: Number, required: true },
			payments: {
				paymentMethod: { type: String },
				status: { type: String, default: 'pending', required: true },
				paymentDate: { type: Date }
			}
		},
		delivery: {
			status: { type: String, default: 'awaiting', required: true },
			deliveryDate: { type: Date },
			deliveryMethod: { type: String, required: true }
		},
		totalPrice: { type: Number, required: true },
		subTotalPrice: { type: Number, required: true },
		taxPrice: { type: Number, required: true, default: 0.0 }
	},
	{
		timestamps: true
	}
);

const ordersModel = mongoose.model('Orders', orderSchema);
export default ordersModel;
