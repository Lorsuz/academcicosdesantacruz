import React from 'react';

import SocialMedia from '@component/shared/SocialMedia';

import { IoSend } from 'react-icons/io5';
import styled from 'styled-components';

const Footer = (): React.FunctionComponentElement<JSX.Element> => (
	<StyledComponent>
		<div className='wrapper'>
			<section className='structure'>
				<div className=''>
					<h3>Página Inicial</h3>
					<ul>
						<li>
							<a href=''>Capa</a>
						</li>
						<li>
							<a href=''>Notícias</a>
						</li>
						<li>
							<a href=''>Enredo</a>
						</li>
						<li>
							<a href=''>Apoiadores</a>
						</li>
						<li>
							<a href=''>Contato</a>
						</li>
					</ul>
				</div>
				<div className=''>
					<h3>A Escola</h3>
					<ul>
						<li>
							<a href=''>Diretoria</a>
						</li>
						<li>
							<a href=''>O Parvilhão</a>
						</li>
						<li>
							<a href=''>A Torcida</a>
						</li>
						<li>
							<a href=''>Desfile Conosco</a>
						</li>
						<li>
							<a href=''>Sócio Torcedor</a>
						</li>
					</ul>
				</div>
				<div className=''>
					<h3>Nossa Historia</h3>
					<ul>
						<li>
							<a href=''>A Fundação</a>
						</li>
						<li>
							<a href=''>Colocações</a>
						</li>
						<li>
							<a href=''>Presidentes</a>
						</li>
						<li>
							<a href=''>Premiações</a>
						</li>
						<li>
							<a href=''>Galeria</a>
						</li>
					</ul>
				</div>
				<div className=''>
					<h3>Créditos</h3>
					<ul>
						<li>
							<a href=''>Fotografias</a>
						</li>
						<li>
							<a href=''>Dados de Desfiles</a>
						</li>
						<li>
							<a href=''>Dev Team</a>
						</li>
						<li>
							<a href=''>Termos de Uso</a>
						</li>
						<li>
							<a href=''>Política de Privacidade</a>
						</li>
					</ul>
				</div>
			</section>
			<section className='newsletter'>
				<h3>Inscreva-se para receber nossas novidades!</h3>
				<form action=''>
					<input type='text' name='' id='' placeholder='Digite seu e-mail' />
					<button type='submit'>
						<span>Inscrever-se</span>
						<div className='icon'>
							<IoSend />
						</div>
					</button>
				</form>
				<div className='social-media'>
					<SocialMedia customStyled={true} />
				</div>
			</section>
			<section className='copyriht'>
				<p>&copy; Copyright 2023 - Todos os direitos reservados.</p>
			</section>
			<section className='terms'>
				<a href=''>Termos de Uso</a>
				<a href=''>Politica de Privacidade</a>
				<a href=''>Não Venda Minhas Informações</a>
			</section>
			<section className='dev-by'><p>
					Desenvolvido e realizado por <a href='#'>@WebPulse</a>
				</p></section>
		</div>
	</StyledComponent>
);

const StyledComponent = styled.footer`
	background: rgb(28, 59, 53);
	padding: 160px 0px 70px;
	width: 100%;

	* {
		color: #fff;
		font-size: 1rem;
		font-weight: normal;
	}

	.wrapper {
		gap: 15px;

		section {
			&.structure {
				display: grid;
				grid-template-columns: repeat(4, 1fr);
				grid-column: 2/8;
				grid-row: 1/2;
				gap: 15px;

				div {
					grid-column: 1fr;

					h3 {
						font-weight: 600;
						margin-bottom: 20px;
						text-transform: uppercase;
						font-weight: normal;
					}

					ul {
						margin-bottom: 20px;

						li {
							a {
								color: var(--color-gray);
								transition: 0;
								font-size: 0.8rem;

								&:hover {
									color: white;
									text-decoration: underline;
								}
							}
						}
					}
				}
			}

			&.newsletter {
				grid-column: 8/12;
				grid-row: 1/2;
				display: flex;
				flex-direction: column;
				align-items: flex-end;

				h3 {
					margin-bottom: 20px;
					font-size: 1.1rem;
				}

				form {
					display: flex;
					justify-content: space-between;
					width: 100%;
					margin-bottom: 30px;

					input {
						color: #1c3b35;
						background: #fff;
						height: 40px;
						width: 65%;
						padding: 0 15px;
						border-radius: 100px;
						margin-right: 10px;
					}

					button {
						background: #e9bb3b;
						width: 30%;
						display: flex;
						justify-content: center;
						align-items: center;
						border-radius: 100px;
						min-width: 130px;

						span {
							color: #1c3b35;
						}

						.icon {
							display: none;
							align-items: center;
							justify-content: center;
							* {
								color: #ffffff;
								font-size: 1.4rem;
							}
						}
					}
				}

				.social-links {
					display: flex;
					margin-bottom: 20px;
					align-items: center;

					a {
						display: flex;
						align-items: center;
						justify-content: center;
						width: 40px;
						height: 40px;
						border-radius: 50%;
						// background: var(--color-primary);
						transition: 300ms ease-in-out;
						margin: 0 10px;

						i {
							font-size: 2rem;
						}

						&:hover {
							// background: var(--color-primary-soft);
						}
					}
				}

				.logo {
					display: flex;
					justify-content: center;
					align-items: center;

					.img {
						width: 100px;
						height: 100px;
						display: flex;
						align-items: center;
						justify-content: center;
						background: #fff;
						border-radius: 50%;

						img {
							width: 100%;
							height: 100%;
							object-fit: scale-down;
						}
					}

					address {
						margin-left: 25px;
						font-size: 0.8rem;
						color: var(--color-gray);
						width: 250px;
						border-left: 3px solid #fff;
						padding-left: 15px;
					}
				}
			}

			&.copyriht {
				grid-column: 2/6;
				grid-row: 2/3;
				display: flex;
				align-items: center;
			}

			&.terms {
				grid-column: 6/12;
				grid-row: 2/3;
				display: flex;
				flex-wrap: wrap;
				justify-content: end;
				align-items: center;

				a {
					color: var(--color-gray);
					transition: 0ms;
					display: block;
					margin: 10px 12px;
					font-size: 0.9rem;

					&:hover {
						color: white;
						text-decoration: underline;
					}
				}
			}
			&.dev-by{
				grid-column: 2/12;
				grid-row: 3/4;
				display: flex;
				justify-content: center;
				align-items: center;

				p{
					font-size: 1rem;
					color: var(--color-gray);

					a{
						color: var(--color-gray);
						transition: 0;

						&:hover {
							color: white;
							text-decoration: underline;
						}
					}
				}
			}
		}
	}

	@media screen {
		@media (max-width: 1230px) {
			.wrapper {
				section {
					&.structure {
					}

					&.newsletter {
					}

					&.copyriht {
						grid-column: 2/12;
						justify-content: center;
						grid-row: 3/4;

						p {
							text-align: center;
						}
					}

					&.terms {
						grid-column: 2/12;

						justify-content: center;

						a {
							text-align: center;
						}
					}
					&.dev-by{
						grid-row: 4/5;

					}
				}
			}
		}

		@media (max-width: 1000px) {
			.wrapper {
				section {
					&.structure {
						grid-column: 2/12;
						grid-row: 2/3;

						* {
							text-align: center;
						}
					}

					&.newsletter {
						grid-row: 1/2;
						grid-column: 2/12;
						align-items: center;
					}

					&.copyriht {
						grid-row: 4/5;
					}

					&.terms {
						grid-row: 3/4;
					}
					&.dev-by{
						grid-row: 5/6;

					}
				}
			}
		}

		@media (max-width: 800px) {
			.wrapper {
				section {
					&.structure {
						grid-template-columns: repeat(2, 1fr);
					}
				}
			}
		}

		@media (max-width: 600px) {
			.wrapper {
				section {
					&.newsletter {
						form {
							input {
								width: 80%;
							}

							button {
								width: auto;
								min-width: 0;
								padding: 0 1rem;

								span {
									display: none;
								}

								.icon {
									display: flex;
								}
							}
						}
					}
				}
			}
		}
	}
`;

export default Footer;
