import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoutes from '../layouts/PrivateRoute';

import HomePage from '../pages/public/HomePage';

import Board from '../pages/public/Board';
import SupporterMember from '../pages/public/SupporterMember';
import FormFanMember from '../pages/public/FormFanMember';
import NotFound from '../pages/public/NotFound';
import FormSign from '../pages/public/FormSign';

import Shop from '../pages/public/Shop';

import Application from '../pages/private/Account';
import UserOutlet from '../layouts/UserOutlet';
import AccountOutlet from '../layouts/AccountOutlet';

import Profile from '../pages/private/account/Profile';

const Router: React.FunctionComponent = () => (
	<Routes>
		<Route path='/' element={<HomePage />} />
		<Route path='/board' element={<Board />} />
		<Route path='/supporter-member' element={<SupporterMember />} />

		<Route path='/store'>
			<Route path='' element={<Shop />} />
			{/* <Route path='sign' element={<FormSign />} /> */}
		</Route>

		<Route path='/form'>
			<Route path='fan-member' element={<FormFanMember />} />
			<Route path='sign' element={<FormSign />} />
		</Route>

		<Route path='/private' element={<PrivateRoutes />}>
			<Route path='user' element={<UserOutlet />}>
				<Route path='account' element={<AccountOutlet />}>
					<Route path='profile' element={<Profile />} />
					{/* <Route path='address' element={<Application />} /> */}
					{/* <Route path='password' element={<Application />} /> */}
					{/* <Route path='password' element={<Application />} /> */}
				</Route>
				{/* <Route path='/purchase' element={<PrivateRoutes />} />
				<Route path='/notification' element={<PrivateRoutes />}>
					<Route path='order' element={<Application />} />
					<Route path='promotion' element={<Application />} />
					<Route path='updates' element={<Application />} />
				</Route>
				<Route path='/coupons' element={<PrivateRoutes />} />
				<Route path='/coin' element={<PrivateRoutes />} /> */}
			</Route>
		</Route>

		{/* <Route index element={<Navigate to='/home' />} /> */}
		<Route path='/*' element={<NotFound />} />
	</Routes>
);

export default Router;
