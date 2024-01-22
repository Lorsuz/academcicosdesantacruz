import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';

import { useAuth } from '../../context/AuthContext';

import { BsCheck2 } from 'react-icons/bs';

const HomeContact = (): React.FunctionComponentElement<JSX.Element> => {
	const [formResponse, setFormResponse] = React.useState<string>('Enviar Formulário');
	const [colorButton, setColorButton] = React.useState<string>('#494949');
	const [buttonState, setButtonState] = React.useState<string>('default');
	const { apiUrl } = useAuth();
	const [name, setName] = React.useState<string>('');
	const [email, setEmail] = React.useState<string>('');
	const [tell, setTell] = React.useState<string>('');
	const [subject, setSubject] = React.useState<string>('');
	const [description, setDescription] = React.useState<string>('');
	const [terms, setTerms] = React.useState<boolean>(false);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!name || !email || !tell || !subject || !description) {
			setFormResponse('Preencha todos os campos!');
			setButtonState('error');
			return;
		}
		if (!email.includes('@')) {
			setFormResponse('E-mail inválido!');
			setButtonState('error');

			return;
		}
		if (tell.length < 10) {
			setFormResponse('Telefone inválido!');
			setButtonState('error');

			return;
		}
		if (subject.length < 5) {
			setFormResponse('Assunto inválido!');
			setButtonState('error');

			return;
		}
		if (description.length < 10) {
			setFormResponse('Descrição inválida!');
			setButtonState('error');

			return;
		}
		if (!terms) {
			setFormResponse('Você precisa aceitar os termos!');
			setButtonState('error');

			return;
		}

		setFormResponse('Enviando...');
		setButtonState('warning');

		const formData = { name, email, tell, subject, description, terms };

		fetch(`${apiUrl}form/contact`, {
			method: 'POST',
			body: JSON.stringify(formData),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(response => response.json())
			.then(json => {
				if (json.status === '200') {
					setFormResponse('Mensagem enviada com sucesso!');
					handleReset();
					setButtonState('success');

					return;
				} else if (json.status === '401') {
					setFormResponse('Erro ao enviar mensagem!');
					setButtonState('error');
					return;
				}
			});
	};
	const handleReset = () => {
		setName('');
		setEmail('');
		setTell('');
		setSubject('');
		setDescription('');
		setTerms(false);
	};

	useEffect(() => {
		if (buttonState === 'default') {
			setColorButton('#494949');
		} else if (buttonState === 'warning') {
			setColorButton('#ffcc00');
		} else if (buttonState === 'error') {
			setColorButton('#ff0000');
		} else if (buttonState === 'success') {
			setColorButton('var(--color-primary)');
		}
	}, [buttonState]);

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
					<form action='' onSubmit={handleSubmit}>
						<div>
							<label htmlFor='name'>Nome:</label>
							<input
								type='text'
								name='name'
								id='name'
								placeholder='Seu nome'
								value={name}
								onChange={e => setName(e.target.value)}
							/>
						</div>
						<div>
							<label htmlFor='email'>E-mail:</label>
							<input
								type='text'
								name='email'
								id='email'
								placeholder='exemplo@gmail.com'
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
						</div>
						<div>
							<label htmlFor='tell'>Telefone:</label>
							<input
								type='text'
								name='tell'
								id='tell'
								placeholder='+00 (00) 0 0000-0000'
								value={tell}
								onChange={e => setTell(e.target.value)}
							/>
						</div>
						<div>
							<label htmlFor='subject'>Assunto:</label>
							<input
								type='text'
								name='subject'
								id='subject'
								placeholder='Assunto da mensagem'
								value={subject}
								onChange={e => setSubject(e.target.value)}
							/>
						</div>
						<div>
							<label htmlFor='description'>Descrição:</label>
							<textarea
								name='description'
								id='description'
								placeholder='Como podemos te ajudar?'
								onChange={e => setDescription(e.target.value)}
							>
								{description}
							</textarea>
						</div>
						<div className='agree-terms'>
							<input
								type='checkbox'
								name='terms'
								id='terms'
								checked={terms}
								onChange={e => setTerms(e.target.checked)}
							/>
							<label htmlFor='terms'>
								<div className='check'>
									<BsCheck2 />
								</div>
								<span>
									Ao entrar em contato com a agremiação, seus dados pessoais fornecidos e o conteúdo e histórico da sua
									mensagem serão armazenados e poderão ser tratados e ultilizados pela agremiação. Ao enviar sua
									mensagem, você esta ciente e de acordo com estas condições, conforme nossos{' '}
									<a href=''>Termos de Uso</a>
									<span> e </span>
									<a href=''>Política de Privacidade</a>.
								</span>
							</label>
						</div>
						<button type='submit' style={{ background: colorButton }}>
							{formResponse}
						</button>
					</form>
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
		/* outline: 1px dotted; */
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
				font-size: 1.2rem;
				color: var(--color-gray);
				font-family: Playpen Sans;
			}

			h2 {
				margin-bottom: 20px;
				font-size: 2.5rem;
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

			form {
				width: 100%;

				> div {
					width: 100%;
					margin-bottom: 20px;

					label {
						display: block;
						margin-bottom: 10px;
						font-size: 1.2rem;
						font-weight: bold;
					}

					input[type='text'],
					textarea {
						background: #fff;
						width: 100%;
						height: 50px;
						font-size: 1.2rem;
						padding: 0 10px;
						color: var(--color-text-soft);
						border: 3px solid var(--color-gray);
						border-radius: 10px 0;

						&:focus {
							border: 3px solid var(--color-primary);
							border-radius: 0px 10px;
						}
					}

					textarea {
						padding: 10px;
						height: 180px;
						resize: none;
					}
				}

				div.agree-terms {
					display: flex;

					input[type='checkbox'] {
						display: none;

						+ label .check {
							display: flex;
							width: 20px;
							height: 20px;
							align-items: center;
							justify-content: center;
							border: 1px solid #000;
							background-color: #fff;
							border-radius: 4px;
							cursor: pointer;
						}

						&:checked + label .check {
							background-color: var(--color-primary);
							color: #fff;
							border: 1px solid #fff;
						}
					}

					label {
						position: relative;
						display: flex;
						justify-content: space-between;
						width: 100%;
						gap: 10px;

						span {
							font-size: 0.8rem;
							text-align: justify;
							font-weight: normal;
							color: var(--color-gray-soft);
							display: block;
							flex: 1;
							* {
								font-size: 0.8rem;
							}
							a {
								text-decoration: underline;
							}
							span {
								display: inline;
							}
						}
					}
				}

				button {
					width: 100%;
					height: 50px;
					color: var(--color-white);
					font-weight: bold;
					border-radius: 10px 0;
					font-size: 1.2rem;
					cursor: pointer;

					&:hover {
						background: var(--color-primary-soft);
						border-radius: 0px 10px;
					}
				}
			}
		}
	}
	@media screen {
		@media (max-width: 1200px) {
			main {
				.cover {
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
			}
		}

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

export default HomeContact;
