import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface ColorSelectorProps {
	colors: string[];
}

const ColorSelector: React.FC<ColorSelectorProps> = ({ colors }) => {
	const [selectedColor, setSelectedColor] = React.useState<string | null>(null);

	return (
		<div className='mb-4'>
			<h3 className='text-lg font-bold mb-2'>Choose your color</h3>
			<div className='flex items-center gap-2'>
				{colors.map(color => (
					<button
						key={color}
						style={{ backgroundColor: color }}
						className={`w-6 h-6 border rounded-full ${selectedColor === color ? 'border-blue-500' : 'border-gray-300 hover:border-gray-400'}`}
						onClick={() => setSelectedColor(color)}
						disabled={selectedColor === color}
					/>
				))}
			</div>
		</div>
	);
};

interface SizeSelectorProps {
	sizes: string[];
}

const SizeSelector: React.FC<SizeSelectorProps> = ({ sizes }) => {
	const [selectedSize, setSelectedSize] = React.useState<string | null>(null);

	return (
		<div className='mb-4'>
			<h3 className='text-lg font-bold mb-2'>Choose your size</h3>
			<div className='flex flex-wrap gap-2'>
				{sizes.map(size => (
					<button
						key={size}
						className={`px-3 py-1 rounded-md font-medium text-sm ${selectedSize === size ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
						onClick={() => setSelectedSize(size)}
						disabled={selectedSize === size}
					>
						{size}
					</button>
				))}
			</div>
		</div>
	);
};

const ProductCard: React.FC = () => {
	const { id } = useParams();
	const [product, setProduct] = useState<any | null>(null);
	useEffect(() => {
		const fetchProduct = async () => {
			const response = await fetch(`/api/products/${id}`);
			const data = await response.json();
			setProduct(data);
		};
	}, [id]);

	if (!product) {
		return <div>Loading...</div>;
	}
	return (
		<div className='bg-white shadow-md p-4 grid grid-cols-12 gap-4'>
			<div className='col-span-4'>
				<img src={imageSrc} alt={name} className='w-full h-full object-cover' />
			</div>
			<div className='col-span-8'>
				<h2 className='text-xl font-bold mb-2'>{name}</h2>
				<p className='text-gray-600 mb-4'>{description}</p>
				<p className='text-xl font-bold mb-2'>${price}</p>
				<SizeSelector sizes={sizes} />
				<ColorSelector colors={colors} />
			</div>
		</div>
	);
	// 	return (
	//     <div>
	//       <h1>Detalhes do Produto</h1>
	//       <p>ID: {product.id}</p>
	//       <p>Nome: {product.name}</p>
	//       <p>Descrição: {product.description}</p>
	//       <p>Preço: ${product.price}</p>
	//     </div>
	//   );
};

export default ProductCard;
