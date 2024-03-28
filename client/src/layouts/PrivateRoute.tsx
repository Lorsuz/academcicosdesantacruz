import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = (): React.FunctionComponentElement<JSX.Element> => {
	const { userInfo } = useSelector((state: any) => state.userLogin);

	return userInfo?.token ? <Outlet /> : <Navigate to='/form/sign' />;
};

export default PrivateRoute;
