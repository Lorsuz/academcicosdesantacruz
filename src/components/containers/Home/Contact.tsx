import React from 'react';
import styled from 'styled-components';
import ContactForm from '@component/forms/ContactForm';

const Contact = (): React.FunctionComponentElement<JSX.Element> => {
	return (
		<StyledComponent>
			<div className='wrapper'>
				<div className='text'>
					<h3>Formulário de contato</h3>
					<h2>Fale Com Nossa Agremiação!</h2>
					<p>Tire suas dúvidas com nosso time. Deixe suas informações de contato e será um prazer lhe retonar!</p>
					<ul className='info'>
						<li>
							<i className='fa-solid fa-phone'></i>
							<span></span> +55 (00) 0 0000-0000
						</li>
						<li>
							<i className='fa-solid fa-envelope'></i>
							<span></span> exemplo@academicos.com.br
						</li>
						<li>
							<i className='fa-solid fa-map-location-dot'></i>
							<address>Rua do Império, nº 573; Santa Cruz, Rio de Janeiro - RJ; CEP 23.555-024</address>
						</li>
					</ul>
					<div className='map'>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.902216920123!2d-43.69324992558163!3d-22.916977238233624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bf7524c69eb5b%3A0xc5d324fb7fbbd336!2sR.%20do%20Imp%C3%A9rio%2C%20573%20-%20Santa%20Cruz%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2023555-024!5e0!3m2!1spt-BR!2sbr!4v1698871972883!5m2!1spt-BR!2sbr'
							width='600'
							height='450'
							loading='lazy'
						></iframe>
					</div>
				</div>
				<div className='form'>
					<ContactForm></ContactForm>
				</div>
			</div>
		</StyledComponent>
	);
};

const StyledComponent = styled.section`
	background: linear-gradient(0deg, #0b1127 0%, #1f2a4b 100%);
	height: auto;
	padding: 70px 0 80px;

	* {
		color: #ffffff;
	}

	.wrapper {
		> div {
			display: flex;
			justify-content: center;
			max-width: 1000px;
		}

		.text {
			grid-column: 2/7;
			flex-direction: column;

			> h3 {
				font-size: 2rem;
				color: #d2d2d2;
				font-family: 'Advent Pro', sans-serif;
				font-weight: 600;
			}

			h2 {
				margin-bottom: 20px;
				font-size: 3rem;
				font-family: 'Advent Pro', sans-serif;
				font-weight: 500;
			}

			> p {
				margin-bottom: 50px;
			}

			ul {
				margin-bottom: 50px;
				border-left: 3px solid var(--color-white);
				padding-left: 20px;

				li {
					margin: 10px 0;
					display: flex;

					// i {}

					span,
					address {
						margin-left: 10px;
						display: block;
					}
				}
			}

			.map {
				width: 100%;
				height: 400px;

				position: relative;

				iframe {
					width: 100%;
					height: 100%;
					border-radius: 10px 0px;
				}

				&::before,
				&::after {
					content: '';
					width: 100px;
					color: #fff;
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

		.form {
			align-items: center;
			grid-column: 8/12;
		}
	}
	@media screen {
		@media (max-width: 1000px) {
			.wrapper > .text {
				grid-column: 2/12;
				margin-bottom: 100px;
			}

			.wrapper > .form {
				grid-column: 2/12;
			}
		}
	}
`;

export default Contact;
