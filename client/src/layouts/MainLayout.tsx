import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Head from '../partials/Head';
import Header from '../partials/Header';
import Footer from '../partials/Footer';

type Props = {
	children: React.ReactNode;
	title?: string;
};

const Layout: React.FunctionComponent<Props> = ({ children, title }: Props) => (
	<>
		<Head title={title} />
		<Header />
		<ToastContainer />
		{children}
		<Footer />
	</>
);

export default Layout;
