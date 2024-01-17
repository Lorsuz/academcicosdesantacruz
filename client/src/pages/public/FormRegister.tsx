import { useContext, useState } from 'react';
import { FaEnvelope, FaLock, FaLockOpen } from 'react-icons/fa';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormState } from 'react-hook-form';

import { AuthContext } from '../../context/AuthContext';
import InputsForAuthForm from '../../components/inputs/InputsForAuthForm';

import { toast } from 'react-toastify';

import { registerSchema } from '../../schemas/authFormSchema';

type FormLoginProps = {
	toggleHaveAccount: () => void;
};

function FormRegister({ toggleHaveAccount }: FormLoginProps): React.FunctionComponentElement<JSX.Element> {
	const { apiUrl } = useContext(AuthContext);
	const [errorServer, setErrorServer] = useState<string>('');

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

	const handleSubmitData = async (data: any) => {
		try {
			const formData = { email: data.email, password: data.password };

			const response = await fetch(`${apiUrl}/auth/register`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData)
			});

			const responseData = await response.json();

			if (!response.ok) {
				throw new Error(responseData.message);
			} else {
				toast.success(responseData.message, {
					position: 'top-right',
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					closeButton: true
				});
				setErrorServer('');
				reset();
			}
		} catch (error) {
			setErrorServer(error.message);
		}
	};

	return (
		<>
			<h2>Registre-se</h2>
			<form onSubmit={handleSubmit(handleSubmitData)}>
				<InputsForAuthForm
					icon={<FaEnvelope />}
					type='email'
					placeholder='E-mail'
					register={register('email')}
					error={errors.email?.message}
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
