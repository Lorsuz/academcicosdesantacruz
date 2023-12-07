import React, { useState } from 'react';
import InputField from '../../components/inputs/InputField';
import InputSelectField from '../../components/inputs/InputSelectField';
import InputRadioField from '../../components/inputs/InputRadioField';
import Layout from '../../layouts/PagesLayout';

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

import styled from 'styled-components';

const FormFanMember = (): React.FunctionComponentElement<JSX.Element> => {
	const [currentPage, setCurrentPage] = useState(1);
	const [fildsetPages] = useState<Array<JSX.Element>>([
		<fieldset>
			<legend>Dados Pessoais</legend>
			<InputField name='name' label='Nome:' placeholder='Ex.: João Silva' />
			<InputField name='birth' label='Data de Nascimento:' type='date' />
			<InputField name='cpf' label='CPF:' placeholder='Ex.: 123.456.789-00' />
		</fieldset>,
		<fieldset>
			<legend>Dados de Contato</legend>
			<InputField name='email' label='Email:' placeholder='Ex.: joao.silva@xpto.com.br' type='email' />
			<InputField name='tell' label='Telefone:' placeholder='Ex.: (XX) X.XXX-XXXX' type='tell' />
		</fieldset>,
		<fieldset>
			<legend>Endereço</legend>
			<InputField name='street' label='Logradouro:' placeholder='Ex.: Rua Soares' />
			<InputField name='number' label='Número:' placeholder='Ex.: 123' />
			<InputField name='cep' label='CEP:' placeholder='Ex.: 12345-678' />
			<InputField name='complement' label='Complemento:' placeholder='Ex.: Apt. 456' />
			<InputField name='neighborhood' label='Bairro:' placeholder='Ex.: Centro' />
			<InputField name='city' label='Cidade:' placeholder='Ex.: Juatina' />

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
			<InputField name='country' label='País:' placeholder='Ex.: Brasil' />
		</fieldset>,
		<fieldset>
			<legend>Perfil</legend>
			<InputField name='height' label='Altura:' placeholder='Ex.: 1.75m' />
			<InputField name='weight' label='Peso:' placeholder='Ex.: 65Kg' />
			<InputSelectField
				name='mannequin'
				label='Manequim:'
				placeholder='Selecione seu manequim'
				options={['PP', 'P', 'M', 'G', 'GG', 'XXG']}
			/>
		</fieldset>,
		<fieldset>
			<legend>Sobre Você</legend>
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
	};

	const setNextPage = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		if (currentPage !== totalPages) setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		console.log('Submit');
	};

	return (
		<Layout title='Home Page'>
			<StyledFormFanMember>
				<form onSubmit={handleSubmit}>
					{fildsetPages[currentPage - 1]}
					<div className='pagination'>
						<button onClick={setPrevPage} disabled={currentPage === 1} className='button-prev'>
							<FaAngleLeft />
							<span>Anterior</span>
						</button>
						{/* ({currentPage} de {totalPages}) */}
						<div className='dots'>
							{[...Array(totalPages)].map((_, index) => (
								<span key={index} className={currentPage === index + 1 ? 'active' : ''}></span>
							))}
						</div>

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
	margin: 150px 0 100px;
	display: flex;
	justify-content: center;

	* {
		/* outline: 1px dotted; */
	}

	form {
		width: 80%;
		min-width: 300px;
		max-width: 800px;
		padding-bottom: 50px;

		fieldset {
			border: 1px solid #ccc;
			border-radius: 10px;
			margin-bottom: 50px;
			padding: 20px 0;

			legend {
				font-size: 30px;
				font-weight: bold;
				margin: 0 0 20px 25px;
				padding: 0 10px;
			}
		}
		.pagination {
			margin-top: 20px;
			display: flex;
			justify-content: space-between;
			align-content: center;
		}
		span {
			font-size: 20px;
			font-weight: bold;
			color: var(--color-primary-soft);
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.dots {
			display: flex;
			justify-content: center;
			align-items: center;

			span {
				display: inline-block;
				width: 10px;
				height: 10px;
				border-radius: 50%;
				background-color: #ccc;
				margin: 0 5px;

				&.active {
					background-color: var(--color-primary-soft);
				}
			}
		}

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
