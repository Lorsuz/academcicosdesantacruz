import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

type Props = {
	label?: string;
	type?: string;
	name: string;
	placeholder?: string;
	error?: string;
	required?: boolean;
	onChangeFromParent: (name: string, value: string) => void;
	formatValueFunction?: (value: string) => string;
	validateValueFunctions?: Array<(value: string) => string>;
};

const InputField = ({
	label = 'Label',
	name,
	// placeholder = '',
	type = 'text',
	required = true,
	onChangeFromParent,
	formatValueFunction = (value: string): string => value,
	validateValueFunctions = []
}: Props): React.FunctionComponentElement<JSX.Element> => {
	const [inputValue, setInputValue] = useState<string>('');
	const [inputError, setInputError] = useState<string>('');
	const [colorError, setColorError] = useState<boolean>(false);
	const [itAlreadyHasContent, setItAlreadyHasContent] = useState<boolean>(false);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const formattedValue = formatValue(e.target.value);
		setInputValue(formattedValue);
		if (inputValue !== '' && !itAlreadyHasContent) {
			setItAlreadyHasContent(true);
		}
	};

	const formatValue = (value: string): string => {
		const formattedValue = formatValueFunction(value);
		return formattedValue;
	};

	useEffect(() => {
		const error = validateValueFunctions.reduce((acc, validate) => {
			if (acc) return acc;
			const errorValidate = validate(inputValue);
			if (errorValidate) return errorValidate;
			return acc;
		}, '');

		setInputError(error);

		onChangeFromParent(name, inputValue);

		if (required && itAlreadyHasContent && inputValue === '') {
			// setInputError('Campo obrigatório');
			setColorError(true);
		} else {
			setColorError(false);
		}
	}, [inputValue]);

	return (
		<StyledInputField $hasContent={inputValue !== ''} $colorError={colorError}>
			<div className='input'>
				<input
					type={type}
					// placeholder={`${placeholder}`}
					name={name}
					id={name}
					onChange={e => handleInputChange(e)}
					value={inputValue}
				/>
				<label className='label' htmlFor={name}>
					{label}
				</label>
			</div>
			<span className='error-message'>{inputError}</span>
		</StyledInputField>
	);
};

const StyledInputField = styled.div<{ $hasContent?: boolean; $colorError?: boolean }>`
	margin: 0 auto 20px;

	.input {
		position: relative;

		> input {
			background: transparent;
			border-radius: 5px;
			border: 1px solid #ccc;
			display: block;
			font-size: 1.2rem;
			height: 50px;
			outline: none;
			padding-left: 5px;
			padding: 0 10px;
			width: 100%;
			${({ $colorError }) =>
				$colorError
					? `
					border-color: red;
				`
					: ''}

			&:focus {
				border-color: var(--color-primary);

				~ label {
					background: #fff;
					color: var(--color-primary);
					font-size: 1rem;
					padding: 0 5px;
					top: -0px;
					transform: translateX(5px) translateY(-50%);
				}
			}
		}
		> .label {
			color: #999;
			display: block;
			font-size: 1.2rem;
			left: 10px;
			margin-bottom: 10px;
			pointer-events: none;
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			transition: all 0.2s ease;
			cursor: default;

			${({ $hasContent }) =>
				$hasContent
					? `
					background: #fff;
					font-size: 1rem;
					padding: 0 5px;
					top: -0px;
					transform: translateX(5px) translateY(-50%);
				`
					: ''}
			${({ $colorError }) =>
				$colorError
					? `
					color: red;
				`
					: ''}
		}
	}
	.error-message {
		color: red;
		display: block;
		height: 20px;
		font-size: 0.8rem;
		margin: 5px 0px 0 10px;
	}
`;

export default InputField;
