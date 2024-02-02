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
	image: {
		type: String,
		required: true,
		default: 'https://ui-avatars.com/api/?background=DDEFC&color=3474e3&name=Profile&size=1'
	},
	isAdmin: {
		type: Boolean,
		required: true,
		default: false
	}
},
	{
		timestamps: true
	} );
const userModel = mongoose.model('User', userSchema);
export default userModel;
