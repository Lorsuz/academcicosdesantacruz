// import React from 'react';
import { FaCheck } from 'react-icons/fa';
import styled from 'styled-components';
import wallpaperGrayLines from '@image/wallpaper-gray-lines.avif';

type CardsForSupporterMemberElementProps = {
	id: string;
	slogan: string;
	status: string;
	price: string;
	color: string;
	benefits: string[];
};

type CardsForSupporterMemberProps = {
	element: CardsForSupporterMemberElementProps;
};

const CardsForSupporterMember = ({ element }: CardsForSupporterMemberProps): React.FunctionComponentElement<JSX.Element> => {
	return (
		<StyledComponent $background={element.color}>
			<div className='background'></div>
			<div className='printer'>
				<div className='priceContainer'>
					<span className='rs'>R$</span>
					<span className='price'>{element.price},00</span>
					<span className='forMoth'>/mês</span>
				</div>
				<div className='statusContainer'>
					<h3 className='status'>{element.status}</h3>
					<span className='slogan'>"{element.slogan}"</span>
				</div>
				<div className='printer-base'></div>
			</div>
			<div className='benefitsContainer'>
				<h4>Benefícios</h4>
				<ul>
					{element.benefits.map((element, index) => (
						<li key={index}>
							<div className='icon'>
								<FaCheck />
							</div>
							<span>{element}</span>
						</li>
					))}
				</ul>
			</div>
			<div className='buttonContainer'>
				<button className='button'>Comprar Agora</button>
			</div>
		</StyledComponent>
	);
};
type StyledComponentProps = {
	$background: string;
};
const StyledComponent = styled.article<StyledComponentProps>`
	width: 370px;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 10px;
	box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
	position: relative;
	height: auto;
	* {
		z-index: 1;
	}
	.background {
		width: 100%;
		height: 100%;
		position: absolute;
		background: #ffffff url(${wallpaperGrayLines}) no-repeat center center;
		background-size: cover;
		z-index: 0;
		opacity: 0.2;
	}

	.printer {
		display: flex;
		flex-direction: column;
		align-items: center;
		border-radius: 10px 10px 0 0;
		width: 110%;
		background: var(--color-primary);
		position: relative;
		box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
		/* height: 180px; */

		.priceContainer {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			position: absolute;
			transform: translateY(-50%);
			height: 150px;
			/* width: 150px; */
			width: 150px;
			background: #ffffff;
			border-radius: 50%;
			top: 0%;
			box-shadow:
				0px -4px 4px rgba(0, 0, 0, 0.25),
				0px 4px 4px rgb(0, 0, 0, 0.5);
			.rs {
				font-weight: bold;
				color: var(--color-primary);
				font-size: 2rem;
				line-height: 1rem;
				font-family: wedding;
			}
			.price {
				font-weight: bold;
				font-size: 2.5rem;
				color: var(--color-primary);
			}
			.forMoth {
				font-weight: bold;
				font-size: 24px;
				color: #989898;
				font-size: 18px;

				text-transform: capitalize;
			}
		}
		.printer-base {
			position: absolute;
			top: 100%;
			height: 30px;
			width: 100%;
			background: var(--color-primary);
			clip-path: polygon(0% 0%, 100% 0%, 50% 100%);
		}
	}

	.statusContainer {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 100px 0 5px;
		width: 100%;
		.status {
			background: ${props => props.$background};
			border-bottom: 3px solid #ffffff;
			border-top: 3px solid #ffffff;
			color: #ffffff;
			font-size: 1.6rem;
			font-weight: bold;
			line-height: 2rem;
			margin-bottom: 15px;
			padding: 13px 0;
			text-align: center;
			text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
			text-transform: uppercase;
			width: 100%;
		}
		.slogan {
			font-weight: bold;
			font-size: 0.8rem;
			text-align: center;
			line-height: 21px;
			color: #ffffff;
			justify-self: end;
			text-transform: uppercase;
			width: 80%;
		}
	}
	.benefitsContainer {
		margin-top: 50px;
		padding: 0 20px;
		margin-bottom: 40px;
		h4 {
			text-align: center;
			color: #626262;

			font-size: 1.5rem;
		}
		ul {
			li {
				display: flex;
				align-items: center;
				margin: 10px 0;
				.icon {
					margin-right: 10px;
					* {
						color: var(--color-primary);
					}
				}
				span {
					font-size: 0.75rem;
					font-weight: bold;
					color: #686868;
				}
			}
		}
	}
	.buttonContainer {
		position: absolute;
		bottom: 0;
		transform: translateY(50%);
		button {
			background: var(--color-primary);
			border-radius: 50px;
			border: none;
			padding: 15px 30px;
			color: #ffffff;
			font-weight: bold;
			font-size: 18px;
			line-height: 21px;
			cursor: pointer;
			box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2);
		}
	}
`;

export default CardsForSupporterMember;
