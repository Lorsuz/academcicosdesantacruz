import { createContext } from 'react';

export const EnvContext = createContext({
	apiUrl: ''
} as {
	apiUrl: string;
});

const EnvProvider = ({ children }: { children: any }): any => {
	const apiUrl = 'http://localhost:3001';

	return <EnvContext.Provider value={{ apiUrl }}>{children}</EnvContext.Provider>;
};

export default EnvProvider;
