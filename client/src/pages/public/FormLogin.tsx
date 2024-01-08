import React, { useState, useContext } from 'react';
import { loginSchema } from '../../config/LoginSchema';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

import { FaEnvelope, FaLock } from 'react-icons/fa';

type FormLoginProps = {
	toggleHaveAccount: () => void;
};

export function FormLogin({ toggleHaveAccount }: FormLoginProps): React.FunctionComponentElement<JSX.Element> {
	const [email, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setLoginError] = useState('');
	const { apiUrl, token, setToken } = useContext(AuthContext);
	console.log(token);
	const navigate = useNavigate();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
		e.preventDefault();

		console.log(email, password);

		try {
			const formData = { username: email, password };
			loginSchema.parse(formData);
		} catch (error) {
			setLoginError('Invalid credentials');
		}
		try {
			const response = await fetch(`${apiUrl}/login`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ username: email, password })
			});
			const data = await response.json();
			if (!response.ok) {
				setLoginError(data.message);
			} else {
				setLoginError('');
				console.log(data.token);
				setToken(data.token);
				navigate('/private/application');
			}
		} catch (error) {
			console.error('Error:', error);
		}
	};

	return (
		<>
			<h2>Iniciar Sessão</h2>
			<form onSubmit={handleSubmit}>
				<div className='input-container'>
					<span className='icon'>
						<FaEnvelope></FaEnvelope>
					</span>
					<input type='text' placeholder='E-mail' value={email} onChange={e => setUsername(e.target.value)} />
				</div>
				<div className='input-container'>
					<span className='icon'>
						<FaLock></FaLock>
					</span>
					<input type='password' placeholder='Senha' value={password} onChange={e => setPassword(e.target.value)} />
				</div>
				<div className='forgot-password'>
					<button>Esqueceu sua senha?</button>
				</div>
				<button type='submit' className='button-submit'>
					Entrar
				</button>
				{error && <div className='error'>{error}</div>}
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
