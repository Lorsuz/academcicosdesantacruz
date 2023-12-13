import React, { useState } from 'react';
import styled from 'styled-components';

type Props = {
	label?: string;
	type?: string;
	name?: string;
	placeholder?: string;
	error?: string;
	regex?: RegExp;
	required?: boolean;
	onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
	formatValueFunction?: (value: string) => string;
	validateValueFunction?: (value: string | number) => string | number;
};

const InputField = ({
	label = 'Label',
	name = 'name',
	placeholder = '',
	type = 'text',
	required = true,
	formatValueFunction = (value: string): string => value
}: Props): React.FunctionComponentElement<JSX.Element> => {
	const [inputValue, setInputValue] = useState<string>('');
	const [inputError, setInputError] = useState<string>('');

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		formatValue(e.target.value);
		// validateInput(e.target.value);
	};

	const formatValue = (value: string): void => {
		const formattedValue = formatValueFunction(value);
		setInputValue(formattedValue);
	};

	// const validateInput = (value: string | number): string | number => {
	// 	if (value === '' && required) {
	// 		setInputError('Campo obrrigatório');
	// 	} else if (value !== '' && !regex.test(value)) {
	// 		setInputError('Campo inválido');
	// 	} else {
	// 		setInputError('');
	// 	}
	// };

	return (
		<StyledInputField>
			<label className='label' htmlFor={name}>
				{label}
			</label>

			{type === 'date' ? (
				<input
					type={type}
					placeholder={`${placeholder}`}
					name={name}
					id={name}
					onChange={e => handleInputChange(e)}
					value={inputValue}
					pattern='\d{2}/\d{2}/\d{4}'
				/>
			) : (
				<input
					type={type}
					placeholder={`${placeholder}`}
					name={name}
					id={name}
					onChange={e => handleInputChange(e)}
					value={inputValue}
				/>
			)}
			<span className='error-message'>{inputError}</span>
		</StyledInputField>
	);
};

const StyledInputField = styled.div`
	/* width: 90%; */
	margin: 0 auto 20px;
	.label {
		margin-bottom: 10px;
		display: block;
	}
	input {
		display: block;
		width: 100%;
		height: 50px;
		border: 1px solid #ccc;
		border-radius: 5px;
		/* background-color: #e2e2e2; */
		padding: 0 10px;
		font-size: 1.2rem;
	}
	.error-message {
		color: red;
		display: block;
		height: 20px;
	}
`;

export default InputField;
