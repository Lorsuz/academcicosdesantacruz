import * as UserTypes  from '../types/user.types.js';

export const users: UserTypes.FromClientForRegister[] = [
	{
		fullName: 'Santa Cruz',
		email: 'santacruzforms@gmail.com',
		password: '@Admin01',
		phone: '1234567890',
		isAdmin: true
	},
	{
		fullName: 'João Ribeiro',
		email: 'onlineshop@gmail.com',
		password: '@Admin02',
		phone: '1234567890',
		isAdmin: true
	}
];

export const categories = [
	{
		name: 'Electronics',
		image: 'https://via.placeholder.com/400x500'
	},
	{
		name: 'Clothes',
		image: 'https://via.placeholder.com/400x500'
	},
	{
		name: 'Shoes',
		image: 'https://via.placeholder.com/400x500'
	},
	{
		name: 'Accessories',
		image: 'https://via.placeholder.com/400x500'
	}
];

export const products = [
	{
		title: 'Apple iPhone 12 Pro Max',
		price: 1099.99,
		description: '6.7-inch Super Retina XDR display',
		tags: ['Electronics', 'Mobile'],
		category: 'Electronics',
		salesOffer: {
			discount: 0,
			status: false
		},
		image: [
			'https://via.placeholder.com/400x500',
			'https://via.placeholder.com/400x500',
			'https://via.placeholder.com/400x500'
		],
		stock: 14
	},
	{
		title: 'Apple iPhone 12 Pro',
		price: 999.99,
		description: '6.1-inch Super Retina XDR display',
		image: 'https://via.placeholder.com/400x500',
		tags: ['Electronics', 'Mobile'],
		category: 'Electronics',
		salesOffer: {
			discount: 0,
			status: false
		}
	},
	{
		title: 'Apple iPhone 12',
		price: 799.99,
		description: '6.1-inch Super Retina XDR display',
		image: 'https://via.placeholder.com/400x500',
		tags: ['Electronics', 'Mobile'],
		category: 'Electronics',
		salesOffer: {
			discount: 0,
			status: false
		}
	},
	{
		title: 'Apple iPhone 11 Pro Max',
		price: 1099.99,
		description: '6.5-inch Super Retina XDR display',
		image: 'https://via.placeholder.com/400x500',
		tags: ['Electronics', 'Mobile'],
		category: 'Electronics',
		salesOffer: {
			discount: 0,
			status: false
		}
	},
	{
		title: 'Apple iPhone 11 Pro',
		price: 999.99,
		description: '5.8-inch Super Retina XDR display',
		image: 'https://via.placeholder.com/400x500',
		tags: ['Electronics', 'Mobile'],
		category: 'Electronics',
		salesOffer: {
			discount: 0,
			status: false
		}
	},
	{
		title: 'Apple iPhone 11',
		price: 699.99,
		description: '6.1-inch Liquid Retina HD display',
		image: 'https://via.placeholder.com/400x500',
		tags: ['Electronics', 'Mobile'],
		category: 'Electronics',
		salesOffer: {
			discount: 0,
			status: false
		}
	}
];
