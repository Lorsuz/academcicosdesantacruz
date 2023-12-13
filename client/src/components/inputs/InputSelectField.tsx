import React, { useState } from 'react';
import styled from 'styled-components';

type Props = {
	label?: string;
	name?: string;
	options?: string[];
	placeholder?: string;
	onChange?: (e?: React.ChangeEvent<HTMLSelectElement>) => void;
	error?: string;
};

const InputField = ({
	label = 'Label',
	error = '',
	name = 'name',
	placeholder = 'Selecione seu dado',
	options = [],
	onChange
}: Props): React.FunctionComponentElement<JSX.Element> => {
	const [selectedValue, setSelectedValue] = useState<string>('');

	const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
		setSelectedValue(e.target.value);
		if (onChange) {
			onChange(e);
		}
	};

	return (
		<StyledInputField>
			<label className='label' htmlFor={name}>
				{label}
			</label>
			<select name={name} id={name} value={selectedValue} onChange={handleInputChange}>
				<option value='' disabled>
					{placeholder}
				</option>
				{options.map((option: string, index: number) => (
					<option value={option} key={index}>
						{option}
					</option>
				))}
			</select>
			<span className='error-message'>{error}</span>
		</StyledInputField>
	);
};

const StyledInputField = styled.div`
	width: 100%;
	margin: 0 auto 20px;
	.label {
		margin-bottom: 10px;
		display: block;
	}
	select {
		display: block;
		width: 100%;
		width:100%;
		height: 50px;
		border: 1px solid #ccc;
		border-radius: 5px;
		padding: 0 10px;
		font-size: 1.2rem;

		cursor: pointer;
		option {
			cursor: pointer;
			&:hover {
				background: #ccc;
			}
		}
	}
	.error-message {
		color: red;
		display: block;
		height: 20px;
	}
`;

export default InputField;
