import React from 'react';
import pavillion from '@image/pavillion.jpeg';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AboutSchool = (): React.FunctionComponentElement<JSX.Element> => {
	return (
		<StyledComponent>
			<div className='wrapper'>
				<div className='text-container'>
					<div className='wiki'>
						<p>
							Grêmio Recreativo Escola de Samba Acadêmicos de Santa Cruz (ou simplesmente Santa Cruz) é uma escola de samba brasileira da cidade do Rio de Janeiro, com sede no
							bairro de Santa Cruz, na zona oeste da cidade. Dentre as escolas de samba do carnaval carioca que já desfilaram na Marquês de Sapucaí, é a que se situa mais distante
							do sambódromo, localizada na Rua do Império em Santa Cruz. Atualmente é filiada a LIGA RJ, entidade criada juntamente com outras oito escolas em 2019, e participa da
							Série Ouro, grupo de acesso à elite do carnaval carioca.
						</p>
						<p>
							Desde a sua estreia no carnaval carioca sempre foi tida como a escola de samba representante da zona rural do Rio, fato este que, por vezes implicava em preconceito
							por parte da mídia e de sambistas de outras escolas. Já no seu quarto ano de desfiles no Rio de Janeiro figurava entre as grandes do carnaval carioca. Fato este que
							se repetiria por mais oito vezes. A Acadêmicos de Santa Cruz porém, nunca permaneceu neste grupo.
						</p>
						<p>
							A Santa Cruz sempre esteve atrelada às manifestações culturais do seu bairro e ligada aos projetos sociais. Estes já beneficiaram crianças e jovens, adultos e idosos
							ao longo dos anos. Acordos com a iniciativa privada, principalmente empresários e comerciantes locais, sempre foram fundamentais para a realização dos seus desfiles e
							a manutenção destes projetos.
						</p>
						<div className='read-more'>
							{/* <a target='_blank' href='https://pt.wikipedia.org/wiki/Acad%C3%AAmicos_de_Santa_Cruz'> */}
							<Link to='/school'>
								<i className='fa-solid fa-arrow-up-right-from-square'></i>
								<span>Continuar Lendo</span>
							</Link>
							{/* </a> */}
						</div>
					</div>
				</div>
				<div className='img-container'>
					<div className='img'>
						<img src={pavillion} alt='Pavilhão' />
					</div>
				</div>
			</div>
		</StyledComponent>
	);
};
const StyledComponent = styled.section`
	padding: 50px 0 100px;

	.wrapper {
		.text-container {
			grid-column: 2/7;

			.wiki {
				position: relative;

				p {
					color: var(--color-text-soft);
					line-height: 1.5rem;
					text-indent: 1rem;
					text-align: justify;
					margin-bottom: 20px;
				}

				.read-more {
					display: flex;
					align-items: end;
					justify-content: center;
					width: 100%;
					position: absolute;
					bottom: -50px;
					background: linear-gradient(0deg, #ffffff 15%, #ffffff00 100%);
					height: 300px;

					a {
						background: var(--color-primary-soft);
						padding: 15px 30px;
						display: flex;
						align-items: center;
						justify-content: center;
						border-radius: 10px 0;

						i {
							color: var(--color-white);
							font-size: 1.2rem;
							padding: 0;
							margin-right: 10px;
						}

						span {
							color: var(--color-white);
						}

						&:hover {
							border-radius: 0px 10px;
						}
					}
				}
			}
		}

		.img-container {
			grid-column: 8/12;
			display: flex;
			justify-content: center;
			align-items: center;
			height: auto;

			.img {
				position: relative;
				display: flex;
				justify-content: center;
				align-items: center;
				max-width: 450px;
				width: 100%;
				height: auto;

				img {
					width: 100%;
					object-fit: scale-down;
					border-radius: 0px 10px;
					border: 3px solid var(--color-gray);
					box-shadow: 0 0 15px 0 #0000006e;

					&:hover {
						border-radius: 10px 0;
					}
				}

				&::before,
				&::after {
					content: '';
					width: 100px;
					height: 100px;
					position: absolute;
					border: 10px solid var(--color-primary);
				}

				&::before {
					top: -30px;
					right: -30px;
					border-left: none;
					border-bottom: none;
				}

				&::after {
					bottom: -30px;
					left: -30px;
					border-right: none;
					border-top: none;
				}
			}
		}
	}

	@media screen {
		@media (max-width: 880px) {
			.wrapper {
				.text-container {
					grid-column: 2/12;
					margin-bottom: 100px;
				}
				.img-container {
					grid-column: 2/12;
				}
			}
		}
	}
`;
export default AboutSchool;
