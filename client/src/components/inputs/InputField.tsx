import React, { useState } from 'react';
import styled from 'styled-components';

type Props = {
	label?: string;
	type?: string;
	name?: string;
	placeholder?: string;
	onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
	error?: string;
};

const InputField = ({
	label = 'Label',
	error = '',
	name = 'name',
	placeholder = '',
	type = 'text'
}: Props): React.FunctionComponentElement<JSX.Element> => {
	const [inputValue, setInputValue] = useState<string>('');

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		console.log('handleInputChange');
		setInputValue(e.target.value);
		console.log(e.target.value);
	};

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
			<span className='error-message'>{error}</span>
		</StyledInputField>
	);
};

const StyledInputField = styled.div`
	width: 90%;
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
