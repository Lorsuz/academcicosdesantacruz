import React from 'react';
import styled from 'styled-components';

import Layout from '../../layouts/PagesLayout';
import BackgroundForOverlay from '../../assets/images/Logo/gresasc-overlay.jpg';
import { Link, useParams } from 'react-router-dom';
import { AppRoutes } from '../../config/appRoutes.config';

const CarnivalDecade = () => {
	console.log('CarnivalDecade');

	const [state, setState] = React.useState<boolean>(false);
	const { decade } = useParams() as { decade: string };
	const years = [];

	const decadeNumber = parseInt(decade);
	const yearCurrent = new Date().getFullYear();
	const toggleState = () => {
		setState(!state);
	};
	if (
		decadeNumber < yearCurrent &&
		decadeNumber > 0 &&
		decadeNumber < 10000 &&
		decadeNumber.toString().length === 4 &&
		decadeNumber !== yearCurrent &&
		decadeNumber !== yearCurrent - 1 &&
		!Number.isNaN(decadeNumber) &&
		decadeNumber !== undefined &&
		decadeNumber !== null &&
		decadeNumber !== 0 &&
		decadeNumber % 10 === 0 &&
		decadeNumber >= 1960
	) {
		for (let i = 0; i < 10; i++) {
			const year = parseInt(decade) + i;
			if (year > yearCurrent) {
				break;
			}
			years.push(year);
		}
	} else {
		return (
			<Layout title='Template'>
				<StyledComponent $state={state}>
					<article className='wrapper'>
						<section className='all-carnivals'>
							<h1>Decada inválida</h1>
						</section>
					</article>
				</StyledComponent>
			</Layout>
		);
	}

	return (
		<Layout title='Template'>
			<StyledComponent $state={state}>
				<article className='wrapper'>
					<section className='all-carnivals'>
						{years.map((year, index) => (
							<Link to={AppRoutes.carnival + year} key={index} className='carnival-card'>
								<img src={BackgroundForOverlay} alt={`Carnaval ${decade}`} />
								<h2>{year}</h2>
								<h3>Titulo do Carnaval</h3>
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

	.all-carnivals {
		display: grid;
		grid-column: 2 / 12;
		grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
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
			h3 {
				position: absolute;
				color: #ffffff;
				bottom: 0;
				background: rgba(0, 0, 0, 0.5);
				width: 100%;
				text-align: center;
				font-size: 1.2rem;
				padding: 5px 0;
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

export default CarnivalDecade;
