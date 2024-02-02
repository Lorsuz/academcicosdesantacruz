import React from 'react';

type InputsForAuthFormProps = {
	icon: React.ReactNode;
	type: string;
	placeholder: string;
	error?: string | undefined;
	register: any; // You might want to replace this with the correct type for register
};

const InputsForAuthForm: React.FC<InputsForAuthFormProps> = ({ icon, type, placeholder, error, register }) => {
	return (
		<div className='input-field'>
			<div className='input-container'>
				<span className='icon'>{icon}</span>
				<input type={type} placeholder={placeholder} {...register} />
			</div>
			<div className='error'>{error && <span>{error}</span>}</div>
		</div>
	);
};

export default InputsForAuthForm;
