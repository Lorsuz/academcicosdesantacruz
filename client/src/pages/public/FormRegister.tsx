import { useState } from 'react';
import { FaEnvelope, FaLock, FaLockOpen } from 'react-icons/fa';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { useAuth } from '../../context/AuthContext';


import InputsForAuthForm from '../../components/inputs/InputsForAuthForm';
import toastNotificationConfig from '../../config/toastNotification.config';

import { toast } from 'react-toastify';

import { registerSchema } from '../../schemas/authFormSchema';

type FormLoginProps = {
	toggleHaveAccount: () => void;
};

function FormRegister({ toggleHaveAccount }: FormLoginProps): React.FunctionComponentElement<JSX.Element> {
	const { apiUrl } = useAuth();
	const [errorServer, setErrorServer] = useState<string>('');

	const { register, handleSubmit, formState, reset } = useForm({
		mode: 'all',
		resolver: zodResolver(registerSchema),
		defaultValues: {
			name: '',
			password: '',
			confirmPassword: ''
		}
	});

	const { errors, isSubmitting } = formState;

	const handleSubmitData = async (data: any) => {
		try {
			const formData = { name: data.name, password: data.password };

			const response = await fetch(`${apiUrl}/auth/register`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData)
			});

			const responseData = await response.json();

			if (!response.ok) {
				throw new Error(responseData.message);
			} else {
				toast.success(responseData.message, toastNotificationConfig);
				setErrorServer('');
				reset();
			}
		} catch (error: any) {
			setErrorServer(error.message);
		}
	};

	return (
		<>
			<h2>Registre-se</h2>
			<form onSubmit={handleSubmit(handleSubmitData)}>
				<InputsForAuthForm
					icon={<FaEnvelope />}
					type='name'
					placeholder='Nome de Usuário'
					register={register('name')}
					error={errors.name?.message}
				/>

				<InputsForAuthForm
					icon={<FaLockOpen />}
					type='password'
					placeholder='Senha'
					register={register('password')}
					error={errors.password?.message}
				/>

				<InputsForAuthForm
					icon={<FaLock />}
					type='password'
					placeholder='Confirmar Senha'
					register={register('confirmPassword')}
					error={errors.confirmPassword?.message}
				/>

				<button type='submit' className='button-submit' disabled={isSubmitting}>
					{isSubmitting ? 'Registrando...' : 'Registrar'}
				</button>
				<div className='error-server'>{errorServer} </div>
			</form>

			<div className='toggle'>
				<span>
					Você já tem uma conta? <button onClick={toggleHaveAccount}>Clique Aqui</button>
				</span>
			</div>
		</>
	);
}

export default FormRegister;
