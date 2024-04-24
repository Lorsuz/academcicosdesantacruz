import React from 'react';
import Layout from '@layout/MainLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from '@router/Router';
import ButtonBackToTop from '@component/shared/ButtonBackToTop';

function App(): React.FunctionComponentElement<JSX.Element> {
	return (
		<>
			<Layout title='index'>
				<Router />
			</Layout>
			<ToastContainer />
			<ButtonBackToTop />
		</>
	);
}

export default App;
