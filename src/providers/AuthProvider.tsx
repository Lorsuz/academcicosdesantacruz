import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useEnv } from '../context/EnvContext';
import toastNotificationConfig from '@config/toastNotification.config';

export const AuthContext = createContext({
	token: '',
	user: null,
	loginAction: (data: any) => data,
	getUser: () => {},
	logOut: () => {},
	getTokenFromLocalStorage: () => {},
	apiUrl: ''
} as {
	token: string;
	user: any;
	loginAction: (data: any) => void;
	getUser: () => void;
	logOut: () => void;
	getTokenFromLocalStorage: () => void;
	apiUrl: string;
});

const AuthProvider = ({ children }: { children: any }): any => {
	const [user, setUser] = useState(null);
	const [token, setToken] = useState(localStorage.getItem('site') || '');
	const { apiUrl } = useEnv();
	const navigate = useNavigate();

	const getTokenFromLocalStorage = () => {
		const token = localStorage.getItem('site');
		if (token) {
			setToken(token);
		}
	};

	const loginAction = async (data: any) => {
		try {
			const responseData = await fetch(`${apiUrl}/auth/login`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			}).then((response: any) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error('Erro ao fazer login');
				}
			});
			if (responseData && responseData.token) {
				localStorage.setItem('site', responseData.token);
				toast.success(responseData.message, toastNotificationConfig);
				setToken(responseData.token);
			} else {
				return responseData.message;
			}
		} catch (err) {
			console.error(err);
		}
	};
	useEffect(() => {
		if (token) {
			getUser();
		}
	}, [token]);

	const getUser = async () => {
		try {
			const responseData = await fetch(`${apiUrl}/api/user`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
					Cookie: `site=${token}`
				}
			}).then(response => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error('Erro ao obter dados do usuário');
				}
			});
			if (responseData) {
				setUser(responseData.user);
				return true;
			} else {
				return false;
			}
		} catch (err) {
			console.error(err);
		}
	};

	const logOut = async () => {
		navigate('/');

		setUser(null);
		setToken('');
		localStorage.removeItem('site');
		const responseData = await fetch(`${apiUrl}/auth/logout`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
				Cookie: `site=${token}`
			}
		}).then(response => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error('Erro no server');
			}
		});

		if (responseData) {
			toast.success(responseData.message, toastNotificationConfig);
		} else {
			toast.error(responseData.message, toastNotificationConfig);
		}
	};

	return (
		<AuthContext.Provider value={{ token, user, loginAction, logOut, apiUrl, getUser, getTokenFromLocalStorage }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
