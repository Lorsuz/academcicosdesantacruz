import React from 'react';
import { FaPhone } from 'react-icons/fa6';
import { FaEnvelope } from 'react-icons/fa';
import styled from 'styled-components';
const HomeNavInfo = (): React.FunctionComponentElement<JSX.Element> => (
	<StyledComponent>
		<div className='wrapper'>
			<section className='contact'>
				<div>
					<FaPhone />
					<span>+55 (43) 9 3421-7348</span>
				</div>
				<div>
					<FaEnvelope />
					<span>gresasc@academicos.com</span>
				</div>
			</section>
			<p>Siga-nos para ficar por dentro das novidades!</p>
			<section className='slogan'>
				<span>As Bruxas Estão Soltas!</span>
			</section>
		</div>
	</StyledComponent>
);

const StyledComponent = styled.section`
	background: var(--color-primary);
	height: 40px;
	width: 100%;

	* {
		color: #ffffff;
	}

	.wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 2%;

		> p {
			font-size: 0.8rem;

			&:hover {
				color: white;
			}
		}

		section {
			display: flex;

			&.contact {
				gap: 30px;
				flex-direction: row;

				div {
					display: flex;
					align-items: center;
					cursor: pointer;

					svg {
						margin-right: 5px;
					}

					span {
						font-size: 0.8rem;
					}

					&:hover {
						i,
						span {
							color: white;
						}
					}
				}
			}

			&.slogan {
				display: flex;
				align-items: center;
				justify-content: center;

				span {
					font-size: 0.8rem;
				}

				a {
					margin: 0 3px;

					i {
						font-size: 1.2rem;
					}

					&:hover {
						i {
							color: white;
							cursor: pointer;
						}
					}
				}
			}
		}
	}

	@media screen {
		@media (max-width: 880px) {
			p {
				display: none;
			}
		}

		@media (max-width: 650px) {
			.wrapper {
				section {
					&.contact {
						width: 100%;
						justify-content: space-evenly;
					}

					&.slogan {
						display: none;
					}
				}
			}
		}

		@media (max-width: 370px) {
			.wrapper {
				section {
					&.contact {
						div:nth-child(2) {
							display: none;
						}
					}
				}
			}
		}
	}
`;

export default HomeNavInfo;
