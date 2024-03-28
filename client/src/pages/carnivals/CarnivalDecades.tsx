import React from 'react';
import styled from 'styled-components';

import Layout from '../../layouts/PagesLayout';
import BackgroundForOverlay from '../../assets/images/Logo/gresasc-overlay.jpg';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../config/appRoutes.config';

const CarnivalDecades = () => {
	const [state, setState] = React.useState<boolean>(false);

	const toggleState = () => {
		setState(!state);
	};
	const carnivals = ['2020', '2010', '2000', '1990', '1980', '1970', '1960'];

	return (
		<Layout title='Template'>
			<StyledComponent $state={state}>
				<article className='wrapper'>
					<section className='last-carnival'>
						<Link to={AppRoutes.carnival + '2024'} className='carnival-card'>
							<img src={BackgroundForOverlay} alt='Carnaval 1' />
							<h2>2024</h2>
						</Link>
					</section>
					<section className='all-carnivals'>
						{carnivals.map((decade, index) => (
							<Link to={AppRoutes.carnivalDecade + decade} key={index} className='carnival-card'>
								<img src={BackgroundForOverlay} alt={`Carnaval ${decade}`} />
								<h2>{decade}</h2>
							</Link>
						))}
					</section>
				</article>
			</StyledComponent>
		</Layout>
	);
};

const StyledComponent = styled.section<{ $state: boolean }>`
	padding-bottom: 50px;

	.last-carnival {
		grid-column: 2 / 12;
		.carnival-card {
			display: flex;
			position: relative;
			align-items: center;
			justify-content: center;
			border-radius: 5px;
			overflow: hidden;
			height: 300px;
			margin-bottom: 30px;
			img {
				width: 100%;
			}
			h2 {
				font-size: 9rem;
				position: absolute;
				color: #ffffff;
				font-family: 'wedding';
				text-shadow: 5px 5px 5px #000;

			}
			&:hover {
				background: rgba(0, 0, 0, 0.5);
				img {
					scale: 1.1;
				}
			}
		}

		p {
			font-size: 1.5rem;
			margin: 1rem 0;
		}
	}

	.all-carnivals {
		display: grid;
		grid-column: 2 / 12;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		justify-content: center;
		align-items: center;
		gap: 1.5rem;
		.carnival-card {
			display: flex;
			position: relative;
			align-items: center;
			justify-content: center;
			border-radius: 5px;
			overflow: hidden;
			img {
				width: 100%;
			}
			h2 {
				font-size: 9rem;
				position: absolute;
				color: #ffffff;
				font-family: 'wedding';
				text-shadow: 5px 5px 5px #000;

			}
			&:hover {
				background: rgba(0, 0, 0, 0.5);
				img {
					scale: 1.1;
				}
			}
		}
	}
`;

export default CarnivalDecades;
