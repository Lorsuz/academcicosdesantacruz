import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useEnv } from '../context/EnvContext';
import toastNotificationConfig from '../config/toastNotification.config';

export const AuthContext = createContext({
	token: '',
	user: null,
	loginAction: (data: any) => {},
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
			const response = await fetch(`${apiUrl}/auth/login`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			});
			const res = await response.json();
			if (res.token) {
				localStorage.setItem('site', res.token);
				toast.success(res.message, toastNotificationConfig);
				setToken(res.token);
				getUser();
				return true;
			} else {
				return res.message;
			}
		} catch (err) {
			console.error(err);
		}
	};

	const getUser = async () => {
		try {
			const response = await fetch(`${apiUrl}/api/user`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
					Cookie: `site=${token}`
				}
			});
			const user = await response.json();
			if (user) {
				console.log('====================================');
				console.log(user);
				console.log('====================================');
				setUser(user);
				return true;
			} else {
				return false;
			}
		} catch (err) {
			console.error(err);
		}
	};

	const logOut = () => {
		setUser(null);
		setToken('');
		localStorage.removeItem('site');
		navigate('/');
	};

	return (
		<AuthContext.Provider value={{ token, user, loginAction, logOut, apiUrl, getUser, getTokenFromLocalStorage }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
