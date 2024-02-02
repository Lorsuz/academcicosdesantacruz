import React, { useState } from 'react';
import styled from 'styled-components';

// import InputField from './InputField';

type RadiosProps = {
	label: string;
	value: string;
};

type AdditionalInputProps = {
	condition: string;
	label: string;
	name: string;
	type: string;
	placeholder: string;
};

type Props = {
	name: string;
	radios: RadiosProps[];
	placeholder: string;
	error?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	additionalInput?: AdditionalInputProps;
};

const InputRadioField = ({
	error = '',
	name = 'name',
	placeholder = 'Selecione seu dado',
	radios = [],
	onChange,
	additionalInput: additionalInput
}: Props): React.FunctionComponentElement<JSX.Element> => {
	const [selectedValue, setSelectedValue] = useState<string>('');

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setSelectedValue(e.target.value);
		if (onChange) {
			onChange(e);
		}
	};
	console.log(additionalInput);
	

	return (
		<StyledComponent>
			<span className='label'>{placeholder}</span>
			<div className='radios'>
				{radios.map((radio: RadiosProps, index: number) => (
					<div className='radio' key={index}>
						<input
							type='radio'
							name={name}
							id={`${name}-${index}`}
							value={radio.value}
							checked={selectedValue === radio.value}
							onChange={handleInputChange}
						/>
						<label htmlFor={`${name}-${index}`}>{radio.label}</label>
					</div>
				))}
			</div>
			<div className='input'>
				{/* {additionalInput && typeof additionalInput === 'object' && selectedValue === additionalInput.condition && (
					<InputField
						name={additionalInput.name}
						label={additionalInput.label}
						placeholder={additionalInput.placeholder}
						type={additionalInput.type}
					/>
				)} */}
			</div>
			<span className='error-message'>{error}</span>
		</StyledComponent>
	);
};

const StyledComponent = styled.div`
	width: 100%;
	margin: 0 auto 0px;
	.label {
		margin-bottom: 10px;
		display: block;
		font-size: 1.2rem;
	}
	.radios {
		display: block;
		padding: 0 10px;
		margin-bottom: 20px;

		.radio {
			display: inline-block;
			margin-right: 20px;

			input {
				margin-right: 5px;
				cursor: pointer;
			}
			label {
				font-size: 1.2rem;
				cursor: pointer;
			}
		}
	}
	.error-message {
		color: red;
		display: block;
		height: 20px;
	}
`;

export default InputRadioField;
