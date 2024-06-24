import InputsForAuthForm from './inputs/InputsForAuthForm';
import React, { useEffect } from 'react';
import toastNotificationConfig from '@config/toastNotification.config';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { loginAction } from '@redux/actions/UserActions';
import { loginSchema } from '@schema/authFormSchema';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

type FormLoginProps = {
	toggleHaveAccount: () => void;
};

export function FormLogin({ toggleHaveAccount }: FormLoginProps): React.FunctionComponentElement<JSX.Element> {
	const [errorServer, setErrorServer] = React.useState<string>('');
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { state } = useLocation();

	const redirect = state?.from ? state.from : '/';

	const {
		userLogin: { loading, error, userInfo }
	} = useSelector(state => state);

	const { register, handleSubmit, formState, reset } = useForm({
		mode: 'all',
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: ''
		}
	});

	const { errors, isSubmitting } = formState;

	const handleSubmitLogin = async (data: any) => {
		try {
			dispatch(loginAction(data));
			reset();
		} catch (error: any) {
			setErrorServer(error.message);
		}
	};

	useEffect(() => {
		if (error) {
			toast.error(error, toastNotificationConfig);
			dispatch({ type: 'USER_LOGIN_RESET' });
		}
		if (userInfo) {
			navigate(redirect);
		}
	}, [dispatch, error, userInfo, navigate, redirect]);

	return (
		<>
			<h2>Iniciar Sessão</h2>
			<form onSubmit={handleSubmit(handleSubmitLogin)}>
				<InputsForAuthForm icon={<FaEnvelope />} type='email' placeholder='E-mail' register={register('email')} error={errors.email?.message} />

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
				<button type='submit' className='button-submit' disabled={loading}>
					{loading ? 'Validando...' : 'Entrar'}
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
