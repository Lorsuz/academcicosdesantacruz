import React from 'react';
import styled from 'styled-components';

import CoverBanner from '@component/Shop/CoverBanner';
import CategoriesSection from '@component/Shop/CategoriesSection';
import ProductsSection from '@component/Shop/ProductsSection';
// import SessionTitle from '../../components/Shop/SessionTitle';
// import ShopInfo from '../../components/Shop/ShopInfo';

import Layout from '@layout/PagesLayout';
import Banner from '@component/Shop/ShopBanner';

const Shop = () => {
	const [haveAccount, setHaveAccount] = React.useState<boolean>(false);

	const toggleHaveAccount = () => {
		setHaveAccount(!haveAccount);
	};
	const a = [
		'Populares',
		'Recentes',
		'Promoções',
		'camisas',
		'masculino',
		'Feminino',
		'Infantil',
		'Infantil',
		'Infantil',
		'Infantil',
		'Infantil',
		'Infantil',
		'Infantil',
		'Infantil',
		'Shorts',
		'calças',
		'bonés',
		'meias',
		'relógios',
		'óculos',
		'tênis',
		'bolsas'
	];

	return (
		<Layout title='Formulario de Authenticação' backgroundColor='#f5f5f5'>
			<CoverBanner></CoverBanner>
			<CategoriesSection list={a}></CategoriesSection>
			{a.map((item, index) => {
				if (index <= 5) {
					if (index === 2) return <Banner></Banner>;
					return <ProductsSection title={item} key={index}></ProductsSection>;
				}
			})}
			{/* brands */}
		</Layout>
	);
};

const StyledComponent = styled.section<{ $haveAccount: boolean }>`
	.banner {
		background-color: var(--color-background);
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;

		.carousel-container {
			display: flex;
			justify-content: center;
			align-items: center;
			overflow: hidden;
			position: relative;
			width: 100%;
			height: 600px;

			.carousel-item {
				width: 100%;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				overflow: hidden;
				position: absolute;

				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}
		}
		.cover-gradient {
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			background: #000;
			opacity: 0.5;
		}

		.search-container {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			position: absolute;
			z-index: 1;

			h1 {
				font-size: 2rem;
				margin-bottom: 10px;
				color: #fff;
			}
			p {
				color: #dcdbdb;
				margin-bottom: 20px;
			}

			form {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 100%;
				max-width: 600px;
				margin-bottom: 20px;
				padding: 10px;
				/* border: 1px solid var(--color-text); */
				border-radius: 5px;
				background-color: #fff;

				input {
					width: 100%;
					height: 40px;
					padding: 0 10px;
					font-size: 1.2rem;
				}

				button {
					width: 50px;
					height: 40px;
					border: none;
					background-color: var(--color-primary);
					border-radius: 5px;
					cursor: pointer;
					display: flex;
					justify-content: center;
					align-items: center;

					* {
						color: #fff;
						font-size: 1.2rem;
					}
				}
			}

			.tags-container {
				display: flex;
				justify-content: center;
				align-items: center;
				gap: 10px;
				margin-bottom: 20px;

				span {
					padding: 5px 10px;
					/* border: 1px solid var(--color-text); */
					border-radius: 5px;
					cursor: pointer;
					color: #fff;
					font-size: 0.8rem;
					background: #ffffff42;
				}
			}
		}
	}
`;

export default Shop;
