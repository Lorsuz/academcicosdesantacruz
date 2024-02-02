import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true
		},
		images: [
			{
				type: String
			}
		],
		price: {
			type: Number,
			required: true
		},
		description: {
			type: String,
			required: true
		},
		category: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Categories',
			required: true
		},
		tags: [
			{
				type: String
			}
		],
		salesOffer: {
			status: {
				type: Boolean,
				default: false,
				required: true
			},
			discount: {
				type: Number,
				required: true
			}
		},
		stock: {
			type: Number,
			required: true,
			default: 0
		}
	},
	{
		timestamps: true
	}
);
const productModel = mongoose.model('Products', productSchema);
export default productModel;
