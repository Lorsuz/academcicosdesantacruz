import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

import { toast } from 'react-toastify';

import { useAuth } from '../context/AuthContext';
import toastNotificationConfig from '../config/toastNotification.config';

const PrivateRoute = (): React.FunctionComponentElement<JSX.Element> => {
	const { token }: any = useAuth();

	if (!token) {
		toast.error('Faça login para continuar', toastNotificationConfig);
		return <Navigate to='/form/sign' />;
	} else {
		return <Outlet />;
	}
};

export default PrivateRoute;
