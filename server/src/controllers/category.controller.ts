import Categories from '../models/category.model.js';
import { categories } from '../exports/preDatabase.js';
import expressAsyncHandler from 'express-async-handler';

// @desc    Import categories
// @route   POST /api/categories/import
// @access  Private/Admin

const importCategories = expressAsyncHandler(async (req, res) => {
	try {
		await Categories.deleteMany({});
		const createdCategories = await Categories.insertMany(categories);

		res.status(201).json(createdCategories);
	} catch (error: any) {
		res.status(400).json({ message: error.message });
	}
});

// @desc    Get all categories
// @route   GET /api/categories
// @access  Public

const getCategories = expressAsyncHandler(async (req, res) => {
	try {
		const categories = await Categories.find({});
		res.status(200).json(categories);
	} catch (error:any) {
		res.status(400).json({ message: error.message });
	}
});

// @desc    Create a category
// @route   POST /api/categories
// @access  Private/Admin

const createCategory = expressAsyncHandler(async (req, res) => {
	try {
		const { name, image } = req.body;
		const existCategory = await Categories.findOne({ name });
		if (existCategory) {
			res.status(400).json({ message: 'Category already exists' });
		} else {
			const createdCategory = new Categories({ name, image });
			const savedCategory = await createdCategory.save();
			res.status(201).json(savedCategory);
		}
	} catch (error: any) {
		res.status(400).json({ message: error.message });
	}
});

// @desc    Update a category
// @route   PUT /api/categories/:id
// @access  Private/Admin

const updateCategory = expressAsyncHandler(async (req, res) => {
	try {
		const { name, image } = req.body;
		const category = await Categories.findById(req.params.id);
		if (category) {
			category.name = name || category.name;
			category.image = image || category.image;
			const updatedCategory = await category.save();
			res.status(200).json(updatedCategory);
		} else {
			res.status(404).json({ message: 'Category not found' });
		}
	} catch (error:any) {
		res.status(400).json({ message: error.message });
	}
});

// @desc    Delete a category
// @route   DELETE /api/categories/:id
// @access  Private/Admin

const deleteCategory = expressAsyncHandler(async (req, res) => {
	try {
		const category = await Categories.findById(req.params.id);
		if (category) {
			await category.remove();
			res.status(200).json({ message: 'Category deleted' });
		} else {
			res.status(404).json({ message: 'Category not found' });
		}
	} catch (error:any) {
		res.status(400).json({ message: error.message });
	}
});

export { importCategories, getCategories, createCategory, updateCategory, deleteCategory };
