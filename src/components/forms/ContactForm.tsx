import styled from 'styled-components';

import React, { useEffect } from 'react';

import { AppConfig } from '@config/app.config';

import { BsCheck2 } from 'react-icons/bs';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm();
	const { apiUrl } = AppConfig;

	const [formResponse, setFormResponse] = React.useState<string>('Enviar Formulário');
	const [colorButton, setColorButton] = React.useState<string>('#494949');
	const [buttonState, setButtonState] = React.useState<string>('default');

	const onSubmit = async (data: any) => {
		if (!data.name || !data.email || !data.tell || !data.subject || !data.description) {
			setFormResponse('Preencha todos os campos!');
			setButtonState('error');
			return;
		}
		if (!data.email.includes('@')) {
			setFormResponse('E-mail inválido!');
			setButtonState('error');
			return;
		}
		if (data.tell.length < 10) {
			setFormResponse('Telefone inválido!');
			setButtonState('error');
			return;
		}
		if (data.subject.length < 5) {
			setFormResponse('Assunto inválido!');
			setButtonState('error');
			return;
		}
		if (data.description.length < 10) {
			setFormResponse('Descrição inválida!');
			setButtonState('error');
			return;
		}
		if (!data.terms) {
			setFormResponse('Você precisa aceitar os termos!');
			setButtonState('error');
			return;
		}

		setFormResponse('Enviando...');
		setButtonState('warning');

		const formData = { name: data.name, email: data.email, tell: data.tell, subject: data.subject, description: data.description, terms: data.terms };

		try {
			const response = await fetch(`${apiUrl}form/contact`, {
				method: 'POST',
				body: JSON.stringify(formData),
				headers: {
					'Content-Type': 'application/json'
				}
			});

			const json = await response.json();

			if (json.status === '200') {
				setFormResponse('Mensagem enviada com sucesso!');
				reset();
				setButtonState('success');
			} else if (json.status === '401') {
				setFormResponse('Erro ao enviar mensagem!');
				setButtonState('error');
			}
		} catch (error) {
			console.error('Error submitting form:', error);
			setFormResponse('Servidor não encontrado!');
			setButtonState('error');
		}
	};

	/* const handleReset = () => {
		reset();
		setFormResponse('Enviar Formulário');
		setButtonState('default');
	}; */

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
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label htmlFor='name'>Nome:</label>
					<input type='text' {...register('name')} placeholder='Seu nome' />
					{errors.name && <span>Preencha este campo corretamente.</span>}
				</div>

				<div>
					<label htmlFor='email'>E-mail:</label>
					<input type='text' {...register('email')} placeholder='exemplo@gmail.com' />
					{errors.email && <span>E-mail inválido.</span>}
				</div>

				<div>
					<label htmlFor='tell'>Telefone:</label>
					<input type='text' {...register('tell')} placeholder='+00 (00) 0 0000-0000' />
					{errors.tell && <span>Telefone inválido.</span>}
				</div>

				<div>
					<label htmlFor='subject'>Assunto:</label>
					<input type='text' {...register('subject')} placeholder='Assunto da mensagem' />
					{errors.subject && <span>Assunto inválido.</span>}
				</div>

				<div>
					<label htmlFor='description'>Descrição:</label>
					<textarea {...register('description')} placeholder='Como podemos te ajudar?' />
					{errors.description && <span>Descrição inválida.</span>}
				</div>

				<div className='agree-terms'>
					<input type='checkbox' {...register('terms')} id='terms'/>
					<label htmlFor='terms'>
						<div className='check'>
							<BsCheck2 />
						</div>
						<span>
							Ao entrar em contato com a agremiação, seus dados pessoais fornecidos e o conteúdo e histórico da sua mensagem serão armazenados e poderão ser tratados e ultilizados
							pela agremiação. Ao enviar sua mensagem, você está ciente e de acordo com estas condições, conforme nossos <a href=''>Termos de Uso</a>
							<span> e </span>
							<a href=''>Política de Privacidade</a>.
						</span>
					</label>
				</div>

				<button type='submit' style={{ background: colorButton }}>
					{formResponse}
				</button>
			</form>
		</StyledComponent>
	);
};

const StyledComponent = styled.section`
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
`;

export default ContactForm;
