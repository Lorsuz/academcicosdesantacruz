import React from 'react';
import AuthProvider from './providers/AuthProvider';
import EnvProvider from './providers/EnvProvider';
import Layout from './layouts/MainLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from './router/Router';
import ButtonBackToTop from './components/shared/ButtonBackToTop';

function App(): React.FunctionComponentElement<JSX.Element> {
	return (
		<EnvProvider>
			<AuthProvider>
				<Layout title='index'>
					<Router />
				</Layout>
				<ToastContainer />
				<ButtonBackToTop />
			</AuthProvider>
		</EnvProvider>
	);
}

export default App;
