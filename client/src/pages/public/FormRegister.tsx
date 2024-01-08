import { useContext, useState } from 'react';
import { registerSchema } from '../../config/registerSchema';
import { AuthContext } from '../../context/AuthContext';

import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';

type FormLoginProps = {
	toggleHaveAccount: () => void;
};

function FormRegister({ toggleHaveAccount }: FormLoginProps): React.FunctionComponentElement<JSX.Element> {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [registerError, setRegisterError] = useState('');
	const { apiUrl } = useContext(AuthContext);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
		e.preventDefault();

		try {
			const formData = { username, email, password };
			registerSchema.parse(formData);
		} catch (error) {
			setRegisterError('Invalid credentials');
		}

		try {
			const response = await fetch(`${apiUrl}/register`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ username, email, password })
			});
			const data = await response.json();

			if (!response.ok) {
				setRegisterError(data.message);
			} else {
				setRegisterError(data.message);
				console.log(data.message);
			}
		} catch (error) {
			console.error('Error:', error);
		}
	};

	return (
		<>
			<h2>Registre-se</h2>
			<form onSubmit={handleSubmit}>
				<div className='input-container'>
					<span className='icon'>
						<FaUser></FaUser>
					</span>
					<input type='text' placeholder='Nome' value={username} onChange={e => setUsername(e.target.value)} />
				</div>
				<div className='input-container'>
					<span className='icon'>
						<FaEnvelope></FaEnvelope>
					</span>
					<input type='email' placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)} />
				</div>
				<div className='input-container'>
					<span className='icon'>
						<FaLock></FaLock>
					</span>
					<input type='password' placeholder='Senha' value={password} onChange={e => setPassword(e.target.value)} />
				</div>
				{registerError && <div className='error'>{registerError}</div>}
				<button type='submit' className='button-submit'>
					Registrar
				</button>
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
