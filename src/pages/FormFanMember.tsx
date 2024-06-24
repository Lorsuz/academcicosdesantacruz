import React, { useEffect, useState } from 'react';
import InputField from '@/components/forms/inputs/InputField';
import InputSelectField from '@/components/forms/inputs/InputSelectField';
import InputRadioField from '@/components/forms/inputs/InputRadioField';
import Layout from '@layout/PagesLayout';

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

import styled from 'styled-components';

import { formatCPF, formatCEP, formatPhoneNumber, formatDate } from '@formatter/values';
import { validateEmail, validateNoLetters, validateNoNumbers, validateNoSpecialChars } from '@validator/string';

const LegendForFieldset = ({ children }: { children: string }): React.FunctionComponentElement<JSX.Element> => (
	<legend>
		<div className='before'></div>
		<span>{children}</span>
		<div className='after'></div>
	</legend>
);

const FormFanMember = (): React.FunctionComponentElement<JSX.Element> => {
	const [currentPage, setCurrentPage] = useState(1);
	const [formData, setFormData] = useState({});
	
	

	const SendInputValueForParent = (name: string, value: string): void => {
		setFormData(prevFormData => ({
			...prevFormData,
			[name]: value
		}));
	};

	const [fieldsetPages] = useState<Array<JSX.Element>>([
		<>
			<LegendForFieldset>Dados Pessoais</LegendForFieldset>
			<InputField
				onChangeFromParent={SendInputValueForParent}
				name='name'
				label='Nome'
				placeholder='Ex.: João Silva'
				validateValueFunctions={[validateNoNumbers, validateNoSpecialChars]}
			/>

			<InputField
				onChangeFromParent={SendInputValueForParent}
				name='birth'
				label='Data de Nascimento'
				formatValueFunction={formatDate}
				validateValueFunctions={[validateNoLetters]}
			/>
			<InputField
				onChangeFromParent={SendInputValueForParent}
				name='cpf'
				label='CPF'
				placeholder='Ex.: 123.456.789-00'
				formatValueFunction={formatCPF}
				validateValueFunctions={[validateNoLetters]}
			/>
		</>,
		<>
			<LegendForFieldset>Dados de Contato</LegendForFieldset>
			<InputField
				onChangeFromParent={SendInputValueForParent}
				name='email'
				label='Email'
				placeholder='Ex.: joao.silva@xpto.com.br'
				type='email'
				validateValueFunctions={[validateEmail]}
			/>
			<InputField
				onChangeFromParent={SendInputValueForParent}
				name='tell'
				label='Telefone'
				placeholder='Ex.: (XX) X.XXX-XXXX'
				type='tell'
				formatValueFunction={formatPhoneNumber}
				validateValueFunctions={[]}
			/>
		</>,
		<>
			<LegendForFieldset>Endereço</LegendForFieldset>
			<InputField onChangeFromParent={SendInputValueForParent} name='street' label='Logradouro' placeholder='Ex.: Rua Soares' />
			<InputField onChangeFromParent={SendInputValueForParent} name='number' label='Número' placeholder='Ex.: 123' />
			<InputField onChangeFromParent={SendInputValueForParent} name='cep' label='CEP' placeholder='Ex.: 12345-678' formatValueFunction={formatCEP} />
			<InputField onChangeFromParent={SendInputValueForParent} name='complement' label='Complemento' placeholder='Ex.: Apt. 456' />
			<InputField onChangeFromParent={SendInputValueForParent} name='neighborhood' label='Bairro' placeholder='Ex.: Centro' />
			<InputField onChangeFromParent={SendInputValueForParent} name='city' label='Cidade' placeholder='Ex.: Juatina' />

			<InputSelectField
				name='state'
				onChangeFromParent={SendInputValueForParent}
				label='Estado'
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
			<InputField onChangeFromParent={SendInputValueForParent} name='country' label='País' placeholder='Ex.: Brasil' />
		</>,
		<>
			<LegendForFieldset>Perfil</LegendForFieldset>
			<InputField onChangeFromParent={SendInputValueForParent} name='height' label='Altura' placeholder='Ex.: 1.75m' />
			<InputField onChangeFromParent={SendInputValueForParent} name='weight' label='Peso' placeholder='Ex.: 65Kg' />
			<InputSelectField
				name='mannequin'
				onChangeFromParent={SendInputValueForParent}
				label='Manequim'
				placeholder='Selecione seu manequim'
				options={['PP', 'P', 'M', 'G', 'GG', 'XXG']}
			/>
		</>,
		<>
			<LegendForFieldset>Sobre Você</LegendForFieldset>
			<InputRadioField
				name='experience'
				// onChangeFromParent={SendInputValueForParent}
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
				// onChangeFromParent={SendInputValueForParent}
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
		</>
	]);

	const totalPages = fieldsetPages.length;

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

	const scrollToTop = (): void => {
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

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		await fetch('https://api.sheetmonkey.io/form/wWVMUL5B6kh4HWcTZoJHqA', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(formData)
		}).then(response => {
			console.log(response);
		});
	};

	useEffect(() => {
		console.log(formData);
	}, [formData]);

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
					{fieldsetPages.map((fieldset, index) => (
						<fieldset key={index} className={currentPage === index + 1 ? 'active' : ''}>
							{fieldset}
						</fieldset>
					))}
					<div className='actions'>
						<button onClick={setPrevPage} disabled={currentPage === 1} className='button-prev'>
							<FaAngleLeft />
							<span>Anterior</span>
						</button>

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
	padding: 50px 0 100px;
	display: flex;
	justify-content: center;
	align-items: center;

	form {
		width: 80%;
		min-width: 300px;
		max-width: 800px;
		padding-bottom: 50px;
		/* border: 1px solid #000; */
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
		border-radius: 10px;
		overflow: hidden;
		/* height: 500px; */

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
			display: none;

			&.active {
				display: block;
			}

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
				overflow: hidden;

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
					height: 2px;
					background: #ffffff;
					bottom: 2px;
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

	@keyframes shake {
		50% {
			transform: translateX(10px);
		}
	}
`;

export default FormFanMember;
