import mongoose from 'mongoose';
const CategorySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true
		},
		image: {
			type: String,
			required: true
		},
		isAdmin: {
			type: Boolean,
			required: true,
			default: false
		}
	},
	{
		timestamps: true
	}
);
const categoryModel = mongoose.model('Categories', CategorySchema);
export default categoryModel;
