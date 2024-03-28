import mongoose from 'mongoose';
const userSchema = new mongoose.Schema( {
	fullName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true,
		trim: true
	},
	password: {
		type: String,
		required: true
	},
	phone: {
		type: String,
		required: true
	},
	profileImage: {
		type: String,
		required: true,
		default: 'https://ui-avatars.com/api/?background=008025&color=ffffff&name=Profile&size=100'
	},
	backgroundImage: {
		type: String,
		required: true,
		default: 'https://ui-avatars.com/api/?background=008025&color=ffffff&name=Profile&size=100'
	},
	isAdmin: {
		type: Boolean,
		required: true,
		default: false
	},
	verified: {
		type: Boolean,
		default: false
	},
	jewel:{
		type: Number,
		default: 0
	}
	},
	{
		timestamps: true
	} );
const userModel = mongoose.model('User', userSchema);
export default userModel;
