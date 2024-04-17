import React from 'react';
import SvgInWavesForFooter from '../partials/SvgInWavesForFooter';

import Head from '../partials/Head';

type Props = {
	children: React.ReactNode;
	title?: string;
	backgroundColor?: string;
};

const Layout = ({ children, title, backgroundColor }: Props): JSX.Element => (
	<>
		<Head title={title} />
		{children}
		<SvgInWavesForFooter backgroundColor={backgroundColor} />
	</>
);

export default Layout;
