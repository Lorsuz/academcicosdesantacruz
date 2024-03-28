import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import BigLoader from '../components/shared/BigLoader';

import { AppRoutes } from '../config/appRoutes.config';

const HomePage = lazy(() => import('../pages/HomePage'));
const ExecutiveBoard = lazy(() => import('../pages/school/ExecutiveBoard'));
const CarnivalDecades = lazy(() => import('../pages/carnivals/CarnivalDecades'));
const CarnivalDecade = lazy(() => import('../pages/carnivals/CarnivalDecade'));
const Carnival = lazy(() => import('../pages/carnivals/Carnival'));

const SupporterMember = lazy(() => import('../pages/SupporterMember'));

const AccountOutlet = lazy(() => import('../layouts/AccountOutlet'));
const FormFanMember = lazy(() => import('../pages/FormFanMember'));
const FormSign = lazy(() => import('../pages/FormSign'));
const PrivateRoutes = lazy(() => import('../layouts/PrivateRoute'));
const Details = lazy(() => import('../pages/auth/account/Details'));
const Profile = lazy(() => import('../pages/auth/account/Profile'));
const UserDetails = lazy(() => import('../pages/auth/account/UserDetails'));
const Address = lazy(() => import('../pages/auth/account/Address'));
const Password = lazy(() => import('../pages/auth/account/Password'));
const Shop = lazy(() => import('../pages/store/Shop'));
const ShopItem = lazy(() => import('../pages/store/ShopItem'));
const UserOutlet = lazy(() => import('../layouts/UserOutlet'));

const NotFound = lazy(() => import('../pages/NotFound'));

const LazyComponent = ({ element: Component }: any) => {
	return (
		<Suspense fallback={<BigLoader />}>
			<Component />
		</Suspense>
	);
};

const Router: React.FunctionComponent = () => (
	<Routes>
		<Route path={AppRoutes.homePage} element={<LazyComponent element={HomePage} />} />
		<Route path={AppRoutes.executiveBoard} element={<LazyComponent element={ExecutiveBoard} />} />
		<Route path={AppRoutes.carnivalDecades} element={<LazyComponent element={CarnivalDecades} />} />
		<Route path={AppRoutes.carnivalDecade + ':decade'} element={<LazyComponent element={CarnivalDecade} />} />
		<Route path={AppRoutes.carnival + ':year'} element={<LazyComponent element={Carnival} />} />

		<Route path={AppRoutes.supporterMember} element={<LazyComponent element={SupporterMember} />} />

		<Route path={AppRoutes.sign} element={<LazyComponent element={FormSign} />} />
		<Route path={AppRoutes.fanMember} element={<LazyComponent element={FormFanMember} />} />

		<Route path={AppRoutes.store} element={<LazyComponent element={Shop} />} />
		<Route path={AppRoutes.storeProducts} element={<LazyComponent element={Shop} />} />
		<Route path={AppRoutes.storeProduct} element={<LazyComponent element={ShopItem} />} />

		<Route path={AppRoutes.auth} element={<LazyComponent element={PrivateRoutes} />}>
			<Route path={AppRoutes.userDetails} element={<LazyComponent element={UserDetails} />} />
			<Route path={AppRoutes.user} element={<LazyComponent element={UserOutlet} />}>
				<Route path={AppRoutes.userAccount} element={<LazyComponent element={AccountOutlet} />}>
					<Route path={AppRoutes.userAccountProfile} element={<LazyComponent element={Profile} />} />
					<Route path={AppRoutes.userAccountAddress} element={<LazyComponent element={Address} />} />
					<Route path={AppRoutes.userAccountPassword} element={<LazyComponent element={Password} />} />
				</Route>
				{/* <Route path='/purchase' element={<LazyComponent element={Profile} />} /> */}
				{/* <Route path='/notification' element={<LazyComponent element={Profile} />}>
					<Route path='order' element={<LazyComponent element={Profile} />} />
					<Route path='promotion' element={<LazyComponent element={Profile} />} />
					<Route path='updates' element={<LazyComponent element={Profile} />} />
				</Route> */}
				{/* <Route path='/coupons' element={<LazyComponent element={Profile} />} /> */}
				{/* <Route path='/coin' element={<LazyComponent element={Profile} />} /> */}
			</Route>
		</Route>
		<Route path='*' element={<LazyComponent element={NotFound} />} />
	</Routes>
);

export default Router;

// () => (
// <ShopItem
// name='all'
// colors={['#000000', '#cccccc']}
// description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, minus? Eum porro ex quam impedit quos aliquid natus, eaque molestias fugit molestiae est? Aspernatur vitae nesciunt aliquid itaque, laborum dolor.'
// imageSrc='https://via.placeholder.com/400x500'
// price='300.00'
// sizes={['p', 'pp', 'm', 'g', 'gg']}
// />
// )
