import * as UserTypes from '../types/user.types.js';
import OrderModel from '../models/order.model.js';
import UserModel from '../models/user.model.js';
import TokenModel from '../models/token.model.js';
import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';
import { generateToken } from '../middlewares/auth.middleware.js';
import { users } from '../exports/preDatabase.js';

import { crypto } from '../config/router.config.js';
import { generateProfileImageUrl, getFirstAndLastName } from '../utils/stringOperations.js';
import { verifyEmail } from '../services/email.service.js';

const importUsers = expressAsyncHandler(async (req, res) => {
	await UserModel.deleteMany({});
	await TokenModel.deleteMany({});
	users.forEach((user) => {
		user.password = bcrypt.hashSync(user.password, 10);
		user.profileImage = generateProfileImageUrl(user.fullName);
	});
	const createdUsers = await UserModel.insertMany(users);
	res.status(201).send(createdUsers);
});

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public

const login = expressAsyncHandler(async (req, res) => {
	try {
		const { email, password } = req.body;
		if (!email || !password) {
			throw new Error('Email e senha são obrigatórios');
		}
		const user: UserTypes.FromDatabaseForClient | null = await UserModel.findOne({ email });
		if (user && user.verified) {
			if (bcrypt.compareSync(password, user.password)) {
				res.json({
					_id: user._id,
					name: getFirstAndLastName(user.fullName),
					email: user.email,
					phone: user.phone,
					profileImage: user.profileImage,
					isAdmin: user.isAdmin,
					token: generateToken(user._id.toString())
				});
			} else {
				throw new Error('Senha invalida');
			}
		} else {
			throw new Error('Email não cadastrado');
		}
	} catch (error: any) {
		const status = error.message ? 401 : 500;
		res.status(status).json({ message: error.message });
	}
});

const register = expressAsyncHandler(async (req, res) => {
	try {
		const { fullName, email, password, phone  }: UserTypes.FromClientForRegister = req.body;
		const existUser: UserTypes.FromDatabaseForClient | null = await UserModel.findOne({ email });
		if (existUser) {
			res.status(400);
			throw new Error('Email already exists');
		} else {
			
			const profileImage = generateProfileImageUrl(fullName)

			const newUser = await UserModel.create({
				fullName,
				email,
				password: bcrypt.hashSync(password, 10),
				profileImage,
				phone
			});
			const registerToken = new TokenModel(
				{ userId: newUser._id, token: crypto.randomBytes(16).toString('hex') }
			)
			await registerToken.save();
			const url = `${process.env.API_URL}/user/verify?token=${registerToken.token}`;
			await verifyEmail(newUser.email, url);

			
			if (newUser) {

				res.status(201).json({
					// _id: newUser._id,
					// name: getFirstAndLastName(newUser.fullName),
					// email: newUser.email,
					// phone: newUser.phone,
					// profileImage: newUser.profileImage,
					// isAdmin: newUser.isAdmin,
					message: 'User created successfully. Please verify your email to login'
					// token: generateToken(newUser._id.toString())
				});
			} else {
				res.status(400);
				throw new Error('Dados de Usuario Invalidos');
			}
		}
	} catch (error: any) {
		res.status(500).json({ message: error.message });
	}
});

const verifyToken = expressAsyncHandler(async (req: any, res) => {
	console.log(req.query.token);
	
	try {
		const token = await TokenModel.findOne({ token: req.query.token });
		if (token) {
			await UserModel.updateOne({ _id: token.userId }, {$set: { verified: true }});
			await TokenModel.findByIdAndDelete( token._id )

			res.status(200).json({ message: 'Email verified successfully' });
		}else{
			res.status(400).json({ message: 'Invalid token' });
		}
	} catch (error: any) {
		res.status(500).json({ message: error.message });
	}
})

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private

const updateProfile = expressAsyncHandler(async (req: any, res) => {
	try {
		const user: any = await UserModel.findById(req.user._id);
		if (user) {
			user.fullName = req.body.fullName || user.fullName;
			user.email = req.body.email || user.email;
			user.phone = req.body.phone || user.phone;
			user.image = req.body.image || user.image;

			// if(req.body.password){
			// 	user.password = bcrypt.hashSync(req.body.password, 10)
			// }
			
			const updatedUser = await user.save();
			res.json({
				_id: updatedUser._id,
				name: updatedUser.fullName,
				email: updatedUser.email,
				phone: updatedUser.phone,
				image: updatedUser.image,
				isAdmin: updatedUser.isAdmin,
				token: generateToken(updatedUser._id)
			});
		} else {
			res.status(404);
			throw new Error('User not found');
		}
	} catch (error: any) {
		res.status(400).json({ message: error.message });
	}
});

// @desc    Change user password
// @route   PUT /api/users/change-password
// @access  Private

const changePassword = expressAsyncHandler(async (req:any, res) => {
	try {
		const { oldPassword, newPassword } = req.body;
		const user: any = await UserModel.findById(req.user._id);
		if (user) {
			if (bcrypt.compareSync(oldPassword, user.password)) {
				user.password = bcrypt.hashSync(newPassword, 10);
				await user.save();
				res.json({ message: 'Password changed successfully' });
			} else {
				res.status(401);
				throw new Error('Invalid old password');
			}
		} else {
			res.status(404);
			throw new Error('User not found');
		}
	} catch (error: any) {
		res.status(400).json({ message: error.message });
	}
});

// @desc Delete user
// @route DELETE /api/users/users
// @access Private/Admin

const deleteUser = expressAsyncHandler(async (req:any, res) => {
	try {
		const user: any = await UserModel.findByIdAndDelete(req.user._id);
		if (user) {
			await OrderModel.deleteMany({ user: user._id });
			res.json({ message: 'User removed' });
		} else {
			res.status(404);
			throw new Error('User not found');
		}
	} catch (error: any) {
		res.status(400).json({ message: error.message });
	}
});

// const getAllUsers = async (req: Request, res: Response) => {
// 	try {
// 		const users = await prisma.user.findMany();
// 		res.json(users);
// 	} catch (error) {
// 		res.status(500).json({ error: 'An unexpected error occurred', message: 'Error fetching users' });
// 	}
// };

const getAllUsers = expressAsyncHandler(async (req, res) => {
	try {
	const users = await UserModel.find({});
	res.json(users);}
	catch (error: any) {
		res.status(500).json({ message: error.message });
	}
});

export { importUsers, login, register, updateProfile, changePassword, deleteUser, getAllUsers, verifyToken };
