import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { FaEnvelope, FaLock } from 'react-icons/fa';

import InputsForAuthForm from '../../components/inputs/InputsForAuthForm';
import { AuthContext } from '../../context/AuthContext';
import { loginSchema } from '../../schemas/authFormSchema';

type FormLoginProps = {
	toggleHaveAccount: () => void;
};

type FormValues = {
	email: string;
	password: string;
};

export function FormLogin({ toggleHaveAccount }: FormLoginProps): React.FunctionComponentElement<JSX.Element> {
	const { apiUrl, setToken } = useContext(AuthContext);
	const [errorServer, setErrorServer] = React.useState<string>('');
	const navigate = useNavigate();

	const { register, handleSubmit, formState, reset } = useForm({
		mode: 'all',
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: ''
		}
	});

	const { errors, isSubmitting } = formState;

	const onSubmit = async (data: FormValues): Promise<void> => {
		try {
			const formData = { username: data.email, password: data.password };

			const response = await fetch(`${apiUrl}/login`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData)
			});

			const responseData = await response.json();

			if (!response.ok) {
				throw new Error(responseData.message);
			}

			setToken(responseData.token);
			reset();
			navigate('/private/application');
		} catch (error) {
			console.error('Error:', error);
		}
	};

	return (
		<>
			<h2>Iniciar Sessão</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<InputsForAuthForm
					icon={<FaEnvelope />}
					type='email'
					placeholder='E-mail'
					register={register('email')}
					error={errors.email?.message}
				/>

				<InputsForAuthForm
					icon={<FaLock />}
					type='password'
					placeholder='Senha'
					register={register('password', { required: 'Senha é obrigatória' })}
					error={errors.password?.message}
				/>
				<div className='forgot-password'>
					<button>Esqueceu sua senha?</button>
				</div>
				<button type='submit' className='button-submit' disabled={isSubmitting}>
					Entrar
				</button>
				<div className='error-server'>{errorServer} </div>
			</form>
			<div className='toggle'>
				<span>
					Ainda não tem uma conta? <button onClick={toggleHaveAccount}>Cadastre-se</button>
				</span>
			</div>
		</>
	);
}

export default FormLogin;
