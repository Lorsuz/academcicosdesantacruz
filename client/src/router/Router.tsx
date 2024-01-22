import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoutes from '../layouts/PrivateRoute';

import HomePage from '../pages/public/HomePage';

import NotFound from '../pages/public/NotFound';
import FormSign from '../pages/public/FormSign';

import Application from '../pages/private/Application';

const Router: React.FunctionComponent = () => (
	<Routes>
		<Route path='/' element={<HomePage />} />
		<Route path='/form'>
			<Route path='sign' element={<FormSign />} />
		</Route>

		<Route path='/private' element={<PrivateRoutes />}>
			<Route path='application' element={<Application />} />
		</Route>

		{/* <Route index element={<Navigate to='/home' />} /> */}
		<Route path='/*' element={<NotFound />} />
	</Routes>
);

export default Router;
