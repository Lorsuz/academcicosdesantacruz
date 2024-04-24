import React from 'react';
import Layout from '@layout/PagesLayout';
import styled from 'styled-components';
import data from '@json/data.json';
import CardsForSupporterMember from '@component/cards/CardsForSupporterMember';

const SupporterMember = (): React.FunctionComponentElement<JSX.Element> => {
	const plans = data.supporterMember;

	return (
		<Layout title='Diretoria'>
			<StyledComponent>
				<section className='plansForSupporterMemberSection'>
					<h2>Planos de Socio Torcedor</h2>
					<div className='container'>
						{plans.map((element, index) => (
							<CardsForSupporterMember key={index} element={element} />
						))}
					</div>
				</section>
			</StyledComponent>
		</Layout>
	);
};

const StyledComponent = styled.main`
	background: #ffffff;
	padding: 50px 0 100px;

	.plansForSupporterMemberSection {
		h2 {
			font-weight: bold;
			font-size: 3rem;
			color: #000000;
			text-align: center;
			margin-bottom: 100px;
			font-family: 'Advent Pro', sans-serif;
			color: var(--color-primary);
			font-weight: 400;
		}
		.container {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			grid-gap: 100px;
			justify-content: center;
			align-items: center;

			article.card {
				background: #ffffff;
				border-radius: 10px;
				box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
				padding: 20px;
				margin: 20px;

				h2 {
					font-weight: bold;
					font-size: 24px;
					line-height: 28px;
					color: #000000;
				}

				p {
					font-weight: bold;
					font-size: 24px;
					line-height: 28px;
					color: #000000;
				}

				ul {
					li {
						font-weight: normal;
						font-size: 18px;
						line-height: 21px;
						color: #000000;
					}
				}
			}
		}
	}
`;

export default SupporterMember;
