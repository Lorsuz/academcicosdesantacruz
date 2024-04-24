import React, { useEffect } from 'react';

import Head from '@partial/Head';
import Header from '@partial/Header';
import Footer from '@partial/Footer';
// import { useAuth } from '@context/AuthContext';

type Props = {
	children: React.ReactNode;
	title?: string;
};

const Layout: React.FunctionComponent<Props> = ({ children, title }: Props) => {
	// const { getTokenFromLocalStorage, getUser } = useAuth();
	useEffect(() => {
		// getTokenFromLocalStorage();
		// getUser();
	}, []);
	return (
		<>
			<Head title={title} />
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
