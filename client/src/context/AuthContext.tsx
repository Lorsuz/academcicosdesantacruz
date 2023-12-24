import React from 'react';

export type AuthContextType = {
	apiUrl: string;
	token: string;
	setToken: React.Dispatch<React.SetStateAction<string>>;
};

const defaultValue: AuthContextType = {
	apiUrl: '',
	token: '',
	setToken: () => {}
};

export const AuthContext: React.Context<AuthContextType> = React.createContext(defaultValue);
