import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { FaEnvelope, FaLock } from 'react-icons/fa';

import InputsForAuthForm from '../../components/inputs/InputsForAuthForm';
import { loginSchema } from '../../schemas/authFormSchema';
import { useAuth } from '../../context/AuthContext';

type FormLoginProps = {
	toggleHaveAccount: () => void;
};

export function FormLogin({ toggleHaveAccount }: FormLoginProps): React.FunctionComponentElement<JSX.Element> {
	const [errorServer, setErrorServer] = React.useState<string>('');
	const navigate = useNavigate();
	const { loginAction, token } = useAuth();

	const { register, handleSubmit, formState, reset } = useForm({
		mode: 'all',
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: ''
		}
	});
	useEffect(() => {
		if (token) {
			setErrorServer('');
			reset();
			navigate('/private/application');
		}
	}, [token]);

	const { errors, isSubmitting } = formState;

	const onSubmit = async (data: any) => {
		try {
			const formData = { email: data.email, password: data.password };

			const responseData = await loginAction(formData);

			if (!responseData) {
				throw new Error(responseData as string);
			}
		} catch (error: any) {
			setErrorServer(error.message);
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
					{isSubmitting ? 'Validando...' : 'Entrar'}
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
