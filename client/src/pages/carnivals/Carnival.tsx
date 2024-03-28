import React from 'react';
import styled from 'styled-components';

import Layout from '../../layouts/PagesLayout';
import { useParams } from 'react-router-dom';

const Carnival = () => {
	const [state, setState] = React.useState<boolean>(false);
	// pegar o id do carnaval da url
	const { year } = useParams();

	const toggleState = () => {
		setState(!state);
	};

	return (
		<Layout title='Template'>
			<StyledComponent $state={state}>
				<article className='wrapper'>
					<h1>Carnaval de {year}</h1>
					<section className='info'></section>
					<aside className='cover'>
						<img src='https://via.placeholder.com/400x500' alt='' />
					</aside>
				</article>
				<article className='wrapper'>
					<h1>Galeria do Desfile</h1>
					<section className='gallery'>
						{[...Array(10)].map((_, index) => (
							<img src='https://via.placeholder.com/400x500' alt='' key={index} />
						))}
					</section>
				</article>
			</StyledComponent>
		</Layout>
	);
};

const StyledComponent = styled.section<{ $state: boolean }>`
	padding-bottom: 50px;
	.wrapper > h1 {
		grid-column: 2 / 12;
		text-align: center;
		font-family: 'Advent Pro';
		color: var(--color-primary);
		font-size: 3.5rem;
		font-weight: 500;
		margin-bottom: 20px;
	}
	.info {
		grid-column: 2 / 8;
	}
	.cover {
		grid-column: 9 / 12;
		img {
			width: 100%;
		}
	}
	.gallery {
		display: grid;
		grid-column: 2 / 12;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 1rem;
		img {
			width: 100%;
		}
	}
`;

export default Carnival;
