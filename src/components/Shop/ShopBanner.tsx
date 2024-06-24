import { Link } from 'react-router-dom';
import styled from 'styled-components';
import UndrawBanner from '@image/undraw/undraw_undraw-shopping_bags.svg';

const Banner = () => {
	return (
		<StyledComponent>
			<div className='wrapper'>
				<section>
					<div className='text'>
						<h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore magni ad quaerat, iste voluptates
							voluptatibus quam sint id, molestias fugiat, veniam sit aut. Facere, quos quaerat! Possimus incidunt
							facilis cumque laborum voluptatem hic, odit quo illum amet, rerum explicabo, excepturi iure facere dolores
							iste aliquid tempore sapiente sed nemo atque.
						</p>
						<Link to='/'>Vamos lá</Link>
					</div>
					<div className='image'>
						<img src={UndrawBanner} alt='' />
					</div>
				</section>
			</div>
		</StyledComponent>
	);
};

const StyledComponent = styled.article`
	padding: 50px 0;
	margin: 0 auto;
	background-color: #f5f5f5;

	section {
		grid-column: 3 / 11;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #00802430;
		box-shadow: 0 0 20px 0 #ffffff;
		padding: 80px;
		border-radius: 20px;
		gap: 50px;

		div {
			display: flex;
			flex-direction: column;
			justify-content: center;
		}

		.text {
			align-items: start;

			h2 {
				font-size: 1.5rem;
				margin-bottom: 20px;
			}
			p {
				line-height: 2;
				font-size: 0.9rem;
			}
			a {
				background: var(--color-primary);
				color: #fff;
				border-radius: 5px;
				text-decoration: none;
				margin-top: 20px;
				font-size: 1.3rem;
				padding: 15px 60px;
			}
		}
		.image {
			align-items: center;
			min-width: 40%;

			img {
				width: 100%;
				object-fit: cover;
			}
		}
	}
`;

export default Banner;
