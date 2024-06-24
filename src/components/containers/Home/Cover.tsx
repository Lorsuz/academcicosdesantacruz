import React from 'react';
import { Link } from 'react-router-dom';
import SocialMedia from '@component/shared/SocialMedia';
import LogoPng from '@image/Logo/santa-cruz-logo-removebg-preview.png';

import styled from 'styled-components';

const HomeCover = (): React.FunctionComponentElement<JSX.Element> => (
	<StyledComponent>
		<div className='wrapper'>
			<div className='left'>
				<div className='container'>
					<h2>Grêmio Recreativo Escola de Samba</h2>
					<h1>Acadêmicos de Santa Cruz</h1>
					<p>
						Bem-vindos! Aqui o samba é vida, a cultura é paixão e a alegria é eterna. No coração de Santa Cruz, encontre a felicidade em cada batida de tambor. Feliz da vida é quem
						tem a Santa Cruz no coração.
					</p>
					<Link to='/loja'>
						Ir para Loja
					</Link>
					<div className='social-media'>
						<SocialMedia />
					</div>
				</div>
			</div>
			<div className='right'>
				<div className='img'>
					<img src={LogoPng} alt='Logo' />
				</div>
				<div className='social-media'>
					<SocialMedia />
				</div>
			</div>
		</div>
	</StyledComponent>
);

const StyledComponent = styled.section`
	height: 80dvh;
	min-height: 600px;
	max-height: 1200px;

	.wrapper > div {
		&.left {
			grid-column: 2/7;
			align-items: center;
			display: flex;
			justify-content: center;

			.container {
				h2 {
					color: var(--color-primary-soft);
					font-family: wedding;
					font-size: 2.5rem;
					font-weight: 900;
					line-height: 0.4;
				}

				h1 {
					color: var(--color-primary-soft);
					font-family: wedding;
					font-size: 4rem;
					margin-bottom: 20px;
					font-weight: 900;

				}

				p {
					color: var(--color-text-soft);
					font-size: 1.1rem;
					margin-bottom: 50px;
				}

				a {
					background: var(--color-primary-soft);
					border-radius: 10px 0;
					color: var(--color-white);
					display: inline-block;
					font-weight: bold;
					padding: 10px 50px;
					margin-bottom: 25px;
					font-size: 1.2rem;

					&:hover {
						background: var(--color-primary);
						border-radius: 0px 10px;
					}
				}

				.social-media {
					display: none;
				}
			}
		}

		&.right {
			grid-column: 8/12;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			.img {
				align-items: center;
				display: flex;
				justify-content: center;
				margin-bottom: 0px;

				img {
					width: 450px;
				}
			}
			.social-media {
			}
		}
	}

	@media screen {
		@media (max-width: 1350px) {
			.wrapper > div {
				&.left {
					.container {
						h2 {
							font-size: 2rem;
						}

						h1 {
							font-size: 3.5rem;
						}

						p {
							font-size: 1rem;
						}
					}
				}
			}
		}

		@media (max-width: 1200px) {
			.wrapper > div {
				&.left {
					grid-column: 2/8;

					.container {
						p {
							width: 90%;
						}
					}
				}

				&.right {
					grid-column: 9/12;

					.img {
						width: 100%;

						img {
							width: 150%;
						}
					}
				}
			}
		}

		@media (max-width: 1000px) {
			.wrapper {
				> div {
					&.left {
						grid-column: 2/8;

						.container {
							h2 {
								font-size: 2rem;
							}

							h1 {
								font-size: 3rem;
							}
						}
					}

					&.right {
						grid-column: 9/12;

						.img {
							width: 100%;

							img {
								width: 150%;
							}
						}
					}
				}
			}
		}

		@media (max-width: 880px) {
			.wrapper {
				> div {
					&.left {
						grid-column: 2/12;
						.container {
							h2 {
								font-size: 2rem;
							}

							h1 {
								font-size: 2.8rem;
							}

							p {
								width: 100%;
							}

							span {
								padding: 15px 50px;
								font-size: 1.1rem;
							}

							.social-media {
								display: flex;
							}
						}
					}

					&.right {
						display: none;
					}
				}
			}
		}

		@media (max-width: 500px) {
			.wrapper {
				> div {
					&.left {
						grid-column: 2/12;
						.container {
							h2 {
								font-size: 1.5rem;
							}

							h1 {
								font-size: 2.1rem;
							}

							p {
								width: 100%;
							}

							span {
								padding: 15px 50px;
								font-size: 1.1rem;
							}

							.social-media {
								display: flex;
							}
						}
					}
				}
			}
		}
	}
`;

export default HomeCover;
