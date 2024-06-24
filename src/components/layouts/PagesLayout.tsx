import React from 'react';
import SvgInWavesForFooter from '@partial/SvgInWavesForFooter';

import Head from '@partial/Head';

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
