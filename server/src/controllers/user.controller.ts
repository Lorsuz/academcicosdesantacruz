import { users } from '../../database/data.js';
import User from '../models/user.model.js';
import expressAsyncHandler from 'express-async-handler';
import Order from '../models/order.model.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../middlewares/auth.middleware.js';

import { Request, Response, prisma, zod } from '../config/router.config.js';

export const updateUserAuth = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const { name, email, password } = req.body;

		const user = await prisma.user.update({
			where: {
				id: Number(id)
			},
			data: {
				name,
				email,
				password
			}
		});

		res.status(200).json(user);
	} catch (error) {
		console.error('Erro ao atualizar usuário:', error);
		res.status(401).json({ message: 'Erro ao atualizar usuário' });
	}
};

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Private/Admin

const importUsers = expressAsyncHandler(async (req, res) => {
	await User.deleteMany({});
	const createdUsers = await User.insertMany(users);
	res.status(201).send(createdUsers);
});

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public

const login = expressAsyncHandler(async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email });
		if (user) {
			if (bcrypt.compareSync(password, user.password)) {
				res.json({
					_id: user._id,
					name: user.fullName,
					email: user.email,
					phone: user.phone,
					image: user.image,

					isAdmin: user.isAdmin,
					token: generateToken(user._id)
				});
			} else {
				res.status(401).send({ message: 'Invalid password' });
			}
		} else {
			res.status(401).send({ message: 'Invalid email' });
		}
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

const register = expressAsyncHandler(async (req, res) => {
	console.log('====================================');
	console.log(req.body);
	console.log('====================================');
	try {
		const { fullName, email, password, phone } = req.body;
		const existUser = await User.findOne({ email });
		if (existUser) {
			res.status(400);
			throw new Error('Email already exists');
		} else {
			const newUser = await User.create({
				fullName,
				email,
				password: bcrypt.hashSync(password, 10),
				phone
			});
			if (newUser) {
				res.status(201).json({
					_id: newUser._id,
					name: newUser.fullName,
					email: newUser.email,
					phone: newUser.phone,
					image: newUser.image,
					isAdmin: newUser.isAdmin,
					token: generateToken(newUser._id)
				});
			} else {
				res.status(400);
				throw new Error('Invalid user data');
			}
		}
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private

const updateProfile = expressAsyncHandler(async (req, res) => {
	try {
		const user = await User.findById(req.user._id);
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
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

// @desc    Change user password
// @route   PUT /api/users/change-password
// @access  Private

const changePassword = expressAsyncHandler(async (req, res) => {
	try {
		const { oldPassword, newPassword } = req.body;
		const user = await User.findById(req.user._id);
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
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

// @desc Delete user
// @route DELETE /api/users/users
// @access Private/Admin

const deleteUser = expressAsyncHandler(async (req, res) => {
	try {
		const user = await User.findByIdAndDelete(req.user._id);
		if (user) {
			await Order.deleteMany({ user: user._id });
			res.json({ message: 'User removed' });
		} else {
			res.status(404);
			throw new Error('User not found');
		}
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

export { importUsers, login, register, updateProfile, changePassword, deleteUser };
