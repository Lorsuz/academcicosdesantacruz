import React, { useState } from 'react';
import InputField from '../../components/inputs/InputField';
import InputSelectField from '../../components/inputs/InputSelectField';
import InputRadioField from '../../components/inputs/InputRadioField';
import Layout from '../../layouts/PagesLayout';

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

import styled from 'styled-components';

import { formatCPF, formatCEP, formatPhoneNumber, formatDate } from '../../utils/formatingValues';
const LegendForFieldset = ({ children }: { children: string }): React.FunctionComponentElement<JSX.Element> => (
	<legend>
		{/* <div className='before'></div> */}
		<span>{children}</span>
		{/* <div className='after'></div> */}
	</legend>
);
const FormFanMember = (): React.FunctionComponentElement<JSX.Element> => {
	const [currentPage, setCurrentPage] = useState(1);
	const [fildsetPages] = useState<Array<JSX.Element>>([
		<fieldset>
			<LegendForFieldset>Dados Pessoais</LegendForFieldset>
			<InputField name='name' label='Nome' placeholder='Ex.: João Silva' />
			<InputField name='birth' label='Data de Nascimento' formatValueFunction={formatDate} />
			<InputField name='cpf' label='CPF' placeholder='Ex.: 123.456.789-00' formatValueFunction={formatCPF} />
		</fieldset>,
		<fieldset>
			<LegendForFieldset>Dados de Contato</LegendForFieldset>
			<InputField name='email' label='Email' placeholder='Ex.: joao.silva@xpto.com.br' type='email' />
			<InputField
				name='tell'
				label='Telefone:'
				placeholder='Ex.: (XX) X.XXX-XXXX'
				type='tell'
				formatValueFunction={formatPhoneNumber}
			/>
		</fieldset>,
		<fieldset>
			<LegendForFieldset>Endereço</LegendForFieldset>
			<InputField name='street' label='Logradouro' placeholder='Ex.: Rua Soares' />
			<InputField name='number' label='Número' placeholder='Ex.: 123' />
			<InputField name='cep' label='CEP' placeholder='Ex.: 12345-678' formatValueFunction={formatCEP} />
			<InputField name='complement' label='Complemento' placeholder='Ex.: Apt. 456' />
			<InputField name='neighborhood' label='Bairro' placeholder='Ex.: Centro' />
			<InputField name='city' label='Cidade' placeholder='Ex.: Juatina' />

			<InputSelectField
				name='state'
				label='Estado:'
				placeholder='Selecione seu estado'
				options={[
					'Acre',
					'Alagoas',
					'Amapá',
					'Amazonas',
					'Bahia',
					'Ceará',
					'Distrito Federal',
					'Espírito Santo',
					'Goiás',
					'Maranhão',
					'Mato Grosso',
					'Mato Grosso do Sul',
					'Minas Gerais',
					'Pará',
					'Paraíba',
					'Paraná',
					'Pernambuco',
					'Piauí',
					'Rio de Janeiro',
					'Rio Grande do Norte',
					'Rio Grande do Sul',
					'Rondônia',
					'Roraima',
					'Santa Catarina',
					'São Paulo',
					'Sergipe',
					'Tocantins'
				]}
			/>
			<InputField name='country' label='País' placeholder='Ex.: Brasil' />
		</fieldset>,
		<fieldset>
			<LegendForFieldset>Perfil</LegendForFieldset>
			<InputField name='height' label='Altura' placeholder='Ex.: 1.75m' />
			<InputField name='weight' label='Peso' placeholder='Ex.: 65Kg' />
			<InputSelectField
				name='mannequin'
				label='Manequim:'
				placeholder='Selecione seu manequim'
				options={['PP', 'P', 'M', 'G', 'GG', 'XXG']}
			/>
		</fieldset>,
		<fieldset>
			<LegendForFieldset>Sobre Você</LegendForFieldset>
			<InputRadioField
				name='experience'
				placeholder='Você possui experiência em desfiles?'
				radios={[
					{
						value: 'yes',
						label: 'Sim'
					},
					{
						value: 'no',
						label: 'Não'
					}
				]}
			/>
			<InputRadioField
				name='fanMember'
				placeholder='Você é sócio torcedor da escola?'
				radios={[
					{
						value: 'yes',
						label: 'Sim'
					},
					{
						value: 'no',
						label: 'Não'
					}
				]}
				additionalInput={{
					condition: 'yes',
					name: 'experienceTime',
					label: 'N° da inscrição:',
					placeholder: 'Ex.: 123456789',
					type: 'text'
				}}
			/>
		</fieldset>
	]);

	const totalPages = fildsetPages.length;

	const setPrevPage = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
		scrollToTop();
	};

	const setNextPage = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		if (currentPage !== totalPages) setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
		scrollToTop();
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		console.log('Submit');
	};

	const scrollToTop = () => {
		const currentPosition = window.scrollY;

		if (currentPosition > 0) {
			window.requestAnimationFrame(scrollToTop);
			if (currentPosition - currentPosition / 8 < 700) {
				window.scrollTo(0, currentPosition - currentPosition / 4);
			} else {
				window.scrollTo(0, currentPosition - currentPosition / 16);
			}
		}
	};

	return (
		<Layout title='Home Page'>
			<StyledFormFanMember>
				<form onSubmit={handleSubmit}>
					<h1>Desfile Conosco</h1>
					<div className='pagination'>
						{[...Array(totalPages)].map((_, index) => (
							<>
								{index + 1 >= 2 && <div className={`line ${currentPage >= index + 1 ? 'active' : ''}`}></div>}
								<span key={index} className={currentPage >= index + 1 ? 'active' : ''}>
									{index + 1}
								</span>
							</>
						))}
					</div>
					{fildsetPages[currentPage - 1]}
					<div className='actions'>
						<button onClick={setPrevPage} disabled={currentPage === 1} className='button-prev'>
							<FaAngleLeft />
							<span>Anterior</span>
						</button>
						{/* ({currentPage} de {totalPages}) */}

						<button onClick={setNextPage} type={currentPage === totalPages ? 'submit' : 'button'}>
							{currentPage === totalPages ? (
								<span>Finalizar</span>
							) : (
								<>
									<span>Próximo</span>
									<FaAngleRight />
								</>
							)}
						</button>
					</div>
				</form>
			</StyledFormFanMember>
		</Layout>
	);
};

const StyledFormFanMember = styled.main`
	padding: 150px 0 100px;
	display: flex;
	justify-content: center;

	form {
		width: 80%;
		min-width: 300px;
		max-width: 800px;
		padding-bottom: 50px;
		/* border: 1px solid #000; */
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
		border-radius: 10px;
		overflow: hidden;

		* {
			/* outline: 1px dotted; */
		}

		h1 {
			background: var(--color-primary);
			color: #fff;
			padding: 20px 30px;
			font-size: 2.4rem;
			position: relative;

			&::after {
				content: 'dasdasdadsad';
				position: absolute;
				width: 100%;
				height: 3px;
				background: var(--color-primary);
				bottom: -6px;
				left: 0;
			}
		}
		.pagination {
			margin: 30px 50px;
			display: flex;
			justify-content: space-between;
			align-content: center;
			align-items: center;
			position: relative;

			span {
				align-items: center;
				background-color: #ccc;
				border-radius: 50%;
				color: #fff;
				display: flex;
				font-size: 20px;
				font-weight: bold;
				height: 40px;
				justify-content: center;
				min-width: 40px;
				z-index: 1;

				&.active {
					background-color: var(--color-primary-soft);
				}
			}
			.line {
				width: 100%;
				height: 3px;
				background: #ccc;

				&.active {
					background-color: var(--color-primary-soft);
				}
			}
		}

		fieldset {
			margin-bottom: 50px;
			margin: 20px 50px;
			/* width: 100%; */
			display: block;

			legend {
				width: 100%;
				position: relative;
				background: var(--color-primary);
				display: flex;
				justify-content: space-between;
				justify-content: center;
				align-items: center;
				border-radius: 10px 10px 0 0;
				margin: 20px 0px 50px;
				/* overflow: hidden; */

				span {
					font-size: 30px;
					font-weight: bold;
					color: var(--color-white);
					white-space: nowrap;
					display: block;
					padding: 15px 10px 10px;
				}

				.before,
				.after {
					width: 50%;
					height: 3px;
					background: #ffffff;
				}

				.before {
					left: 0;
				}
				.after {
					right: 0;
				}
				::after {
					content: '';
					position: absolute;
					width: 100%;
					height: 3px;
					background: #ffffff;
					/* background: var(--color-primary); */
					top: 5px;
					left: 0;
				}
			}
		}
		.actions {
			margin: 0 50px;
			display: flex;
			justify-content: space-between;

			button {
				padding: 10px;
				cursor: pointer;
				padding: 10px 20px;
				background-color: var(--color-primary-soft);
				border-radius: 5px;
				display: flex;
				justify-content: center;
				align-items: center;
				gap: 10px;

				* {
					font-size: 20px;
					font-weight: normal;
					color: var(--color-white);
				}

				&:disabled,
				&:disabled * {
					color: var(--color-white);
					opacity: 0.5;
					cursor: not-allowed;
					background: #a5a5a5;
				}
			}
		}
	}
	@media screen {
		@media (max-width: 768px) {
			form {
				button {
					* {
						font-size: 16px;
					}
				}
			}
		}
		@media (max-width: 500px) {
			form {
				button.button-prev {
					span {
						display: none;
					}
				}
			}
		}
	}
`;

export default FormFanMember;
