import React from 'react';
import { Outlet } from 'react-router-dom';

const AccountOutlet = (): React.FunctionComponentElement<JSX.Element> => {
	return (
		<>
			<Outlet />
		</>
	);
};

export default AccountOutlet;
