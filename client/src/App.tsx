import React from 'react';
import { AuthContext, AuthContextType } from './context/AuthContext';
import Layout from './layouts/MainLayout';

import Router from './router/Router';
import ButtonBackToTop from './components/shared/ButtonBackToTop';

function App(): React.FunctionComponentElement<JSX.Element> {
	const [token, setToken] = React.useState<string>('');

	const authContext: AuthContextType = {
		apiUrl: 'http://localhost:3001/',
		token,
		setToken
	};

	return (
		<AuthContext.Provider value={authContext}>
			<Layout title='index'>
				<Router />
			</Layout>
			<ButtonBackToTop></ButtonBackToTop>
		</AuthContext.Provider>
	);
}

export default App;
