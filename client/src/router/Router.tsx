import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoutes from '../layouts/PrivateRoutes';

import HomePage from '../pages/public/HomePage';

import Board from '../pages/public/Board';
import SupporterMember from '../pages/public/SupporterMember';
import FormFanMember from '../pages/public/FormFanMember';
import NotFound from '../pages/public/NotFound';
import FormRegister from '../pages/public/FormRegister';
import FormLogin from '../pages/public/FormLogin';

import Application from '../pages/private/Application';

const Router: React.FunctionComponent = () => (
	<Routes>
		<Route path='/' element={<HomePage />} />
		<Route path='/board' element={<Board />} />
		<Route path='/supporter-member' element={<SupporterMember />} />

		<Route path='/form'>
			<Route path='fan-member' element={<FormFanMember />} />
			<Route path='login' element={<FormLogin />} />
			<Route path='register' element={<FormRegister />} />
		</Route>

		<Route path='/private' element={<PrivateRoutes />}>
			<Route path='application' element={<Application />} />
		</Route>

		{/* <Route index element={<Navigate to='/home' />} /> */}
		<Route path='/*' element={<NotFound />} />
	</Routes>
);

export default Router;
