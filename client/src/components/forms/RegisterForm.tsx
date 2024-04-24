import InputsForAuthForm from '@/components/forms/inputs/InputsForAuthForm';
import toastNotificationConfig from '@config/toastNotification.config';
import { FaEnvelope, FaLock, FaLockOpen } from 'react-icons/fa';
import { registerSchema } from '@schema/authFormSchema';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

type FormLoginProps = {
	toggleHaveAccount: () => void;
};

function FormRegister({ toggleHaveAccount }: FormLoginProps): React.FunctionComponentElement<JSX.Element> {
	const [errorServer, setErrorServer] = useState<string>('');
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { state } = useLocation();

	const redirect = state?.from ? state.from : '/';

	const {
		userRegister: { loading, error, userInfo }
	} = useSelector(state => state);

	const { register, handleSubmit, formState, reset } = useForm({
		mode: 'all',
		resolver: zodResolver(registerSchema),
		defaultValues: {
			email: '',
			password: '',
			confirmPassword: ''
		}
	});

	const { errors, isSubmitting } = formState;

	const handleSubmitRegister = async (data: any) => {
		dispatch({ type: 'USER_REGISTER_REQUEST' });
	};

	useEffect(() => {
		if (error) {
			toast.error(error, toastNotificationConfig);
			dispatch({ type: 'USER_REGISTER_RESET' });
		}
		if (userInfo) {
			navigate(redirect);
		}
	}, [error, dispatch, reset, state, redirect]);

	return (
		<>
			<h2>Registre-se</h2>
			<form onSubmit={handleSubmit(handleSubmitRegister)}>
				<InputsForAuthForm icon={<FaEnvelope />} type='email' placeholder='E-mail' register={register('email')} error={errors.email?.message} />

				<InputsForAuthForm icon={<FaLockOpen />} type='password' placeholder='Senha' register={register('password')} error={errors.password?.message} />

				<InputsForAuthForm icon={<FaLock />} type='password' placeholder='Confirmar Senha' register={register('confirmPassword')} error={errors.confirmPassword?.message} />

				<button type='submit' className='button-submit' disabled={loading}>
					{loading ? 'Registrando...' : 'Registrar'}
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
