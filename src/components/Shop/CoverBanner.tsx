import React from 'react';
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';

const CoverBanner = (): React.FunctionComponentElement<JSX.Element> => {
	return (
		<StyledComponent>
			<article className='banner'>
				<div className='carousel-container'>
					{/* <div className='carousel-item'>
							<img src='https://media.istockphoto.com/id/1203765223/pt/foto/carnival-in-olinda.jpg?s=2048x2048&w=is&k=20&c=s0ktK2u0GFA2296H4a7DRbV1W6RTf-yIxSmYZWnQ82A=' />
						</div> */}
					<div className='carousel-item'>
						<img src='https://media.istockphoto.com/id/689911172/pt/foto/abstract-blurred-background-of-department-store.jpg?s=2048x2048&w=is&k=20&c=KJ2Mtjjw3Bdr3twhfHHXtVA_uk8GRrRW4DlGQWCVrcQ=' />
					</div>
					{/* <div className='carousel-item'>
							<img src='https://via.placeholder.com/1500x500' alt='carousel' />
						</div>
						<div className='carousel-item'>
							<img src='https://via.placeholder.com/1500x500' alt='carousel' />
						</div> */}
				</div>
				<div className='cover-gradient'></div>
				<section className='search-container'>
					<h1>Tudo o que voce precisar em um só lugar</h1>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi quibusdam.</p>
					<form action=''>
						<input type='text' placeholder='Pesquise por produtos aqui' />
						<button>
							<FaSearch></FaSearch>
						</button>
					</form>
					<div className='tags-container'>
						<span>Camisetas</span>
						<span>Calças</span>
						<span>Meias</span>
						<span>Chapéus</span>
						<span>Relógios</span>
					</div>
				</section>
			</article>
		</StyledComponent>
	);
};

const StyledComponent = styled.section`

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
				align-items: start;
				overflow: hidden;
				position: absolute;

				img {
					width: 100%;
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

export default CoverBanner;
