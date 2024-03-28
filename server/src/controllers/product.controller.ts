import { products } from '../exports/preDatabase.js';
import Products from '../models/product.model.js';
import asyncHandler from 'express-async-handler';

const importProducts = asyncHandler(async (req, res) => {
	try {
		await Products.deleteMany({});
		const createdProducts = await Products.insertMany(products);
		res.status(201).json(createdProducts);
	} catch (error: any) {
		res.status(400).json({ message: error.message });
	}
});

const createProduct = asyncHandler(async (req, res) => {
	try {
		const { title, price, description, image, tags, category, salesOffer } = req.body;
		const product = new Products({
			title,
			price,
			description,
			image,
			tags,
			category,
			salesOffer
		});
		const createdProduct = await product.save();
		res.status(201).json(createdProduct);
	} catch (error:any) {
		res.status(400).json({ message: error.message });
	}
});

const getProducts = asyncHandler(async (req, res) => {
	try {
		const { category, tag, search, sort } = req.body;
		const pageSize = 10;
		const pageNumber = Number(req.query.pageNumber) || 1;

		// const order = sort === 'lowest' ? {price: 1} : sort === 'highest' ? {price: -1} : {_id: -1}

		const order =
			sort === 'newest'
				? { _id: -1 }
				: sort === 'oldest'
					? { _id: 1 }
					: sort === 'lowest'
						? { price: 1 }
						: sort === 'highest'
							? { price: -1 }
							: { _id: -1 };

		const tagFilter = tag ? { tags: { $in: tag } } : {};

		const searchKeyword = search ? { title: { $regex: search, $options: 'i' } } : {};

		const categoryFilter = category ? { category } : {};

		const count = await Products.countDocuments({
			...tagFilter,
			...searchKeyword,
			...categoryFilter
		})
			.sort({ createdAt: order })
			.limit(pageSize)
			.skip(pageSize * (pageNumber - 1));

		const offers = await Products.aggregate([
			{
				$match: {
					'salesOffer.status': true
				}
			},
			{
				$sample: { size: 10 }
			}
		]);

		res.json({ offers, products, pageNumber, pages: Math.ceil(count / pageSize) });
	} catch (error:any) {
		res.status(404).json({ message: error.message });
	}
});

const getProductById = asyncHandler(async (req, res) => {
	try {
		const product = await Products.findById(req.params.id);
		if (product) {
			const relatedProducts = await Products.find({ category: product.category, _id: { $ne: product._id } }).limit(4);
			res.json(product, relatedProducts);
		} else {
			res.status(404).json({ message: 'Product not found' });
		}
	} catch (error:any) {
		res.status(404).json({ message: error.message });
	}
});

const updateProduct = asyncHandler(async (req, res) => {
	try {
		const { title, price, description, image, tags, category, salesOffer } = req.body;
		const product = await Products.findById(req.params.id);
		if (product) {
			product.title = title || product.title;
			product.price = price || product.price;
			product.description = description || product.description;
			product.image = image || product.image;
			product.tags = tags || product.tags;
			product.category = category || product.category;
			product.salesOffer = salesOffer || product.salesOffer;

			const updatedProduct = await product.save();
			res.json(updatedProduct);
		} else {
			res.status(404).json({ message: 'Product not found' });
		}
	} catch (error:any) {
		res.status(404).json({ message: error.message });
	}
});

const deleteProduct = asyncHandler(async (req, res) => {
	try {
		const product = await Products.findByIdAndDelete(req.params.id);
		if (product) {
			await product.remove();
			res.json({ message: 'Product removed' });
		} else {
			res.status(404).json({ message: 'Product not found' });
		}
	} catch (error:any) {
		res.status(404).json({ message: error.message });
	}
});

const getAllTags = asyncHandler(async (req, res) => {
	try {
		const tags = await Products.aggregate([
			{
				$unwind: '$tags'
			},
			{
				$group: {
					_id: '$tags',
					count: { $sum: 1 }
				}
			},
			{
				$sort: { count: -1 }
			},
			{
				$limit: 10
			}
		]);
		res.json(tags);
	} catch (error:any) {
		res.status(404).json({ message: error.message });
	}
});

export { importProducts, createProduct, getProducts, getProductById, updateProduct, deleteProduct, getAllTags };
