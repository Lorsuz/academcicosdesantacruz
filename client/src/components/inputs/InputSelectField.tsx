import React, { useState } from 'react';
import styled from 'styled-components';

type Props = {
	label?: string;
	name?: string;
	options?: string[];
	placeholder?: string;
	onChangeFromParent: (name: string, value: string) => void;
	error?: string;
};

const InputField = ({
	label = 'Label',
	error = '',
	name = 'name',
	placeholder = 'Selecione seu dado',
	options = [] // onChangeFromParent
}: Props): React.FunctionComponentElement<JSX.Element> => {
	const [selectedValue, setSelectedValue] = useState<string>('');

	const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
		setSelectedValue(e.target.value);
		// if (onChange) {
		// 	onChangeFromParent(name, inputValue);
		// }
	};

	return (
		<StyledInputField>
			<div className='input'>
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
				<label className='label' htmlFor={name}>
					{label}
				</label>
			</div>
			<span className='error-message'>{error}</span>
		</StyledInputField>
	);
};

const StyledInputField = styled.div`
	width: 100%;
	margin: 0 auto 20px;

	.input {
		position: relative;

		select {
			border-radius: 5px;
			border: 1px solid #ccc;
			display: block;
			font-size: 1.2rem;
			height: 50px;
			padding: 0 10px;
			width: 100%;

			cursor: pointer;
			option {
				cursor: pointer;
				&:hover {
					background: #ccc;
				}
			}
			&:focus {
				& ~ label {
				}
			}
		}
		label {
			background: #ffffff;
			color: var(--color-primary);
			display: block;
			font-size: 1rem;
			left: 10px;
			margin-bottom: 10px;
			padding: 0 5px;
			pointer-events: none;
			position: absolute;
			top: 0px;
			transform: translateY(-50%);
			transition: all 0.2s ease;
		}
	}
	.error-message {
		color: red;
		display: block;
		height: 20px;
	}
`;

export default InputField;
