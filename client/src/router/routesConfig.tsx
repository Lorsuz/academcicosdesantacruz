import { lazy } from 'react';
// const HomePage = lazy(() => import('../pages/HomePage'));
import HomePage from '../pages/HomePage';
/* const ExecutiveBoard = loadable(() => import('../pages/school/ExecutiveBoard'));
const CarnivalDecades = loadable(() => import('../pages/carnivals/CarnivalDecades'));
const CarnivalDecade = loadable(() => import('../pages/carnivals/CarnivalDecade'));
const Carnival = loadable(() => import('../pages/carnivals/Carnival'));
const SupporterMember = loadable(() => import('../pages/SupporterMember'));
const AccountOutlet = loadable(() => import('../layouts/AccountOutlet'));
const FormFanMember = loadable(() => import('../pages/FormFanMember'));
const FormSign = loadable(() => import('../pages/FormSign'));
const PrivateRoutes = loadable(() => import('../layouts/PrivateRoute'));
const Details = loadable(() => import('../pages/auth/account/Details'));
const Profile = loadable(() => import('../pages/auth/account/Profile'));
const UserDetails = loadable(() => import('../pages/auth/account/UserDetails'));
const Address = loadable(() => import('../pages/auth/account/Address'));
const Password = loadable(() => import('../pages/auth/account/Password'));
const Shop = loadable(() => import('../pages/store/Shop'));
const ShopItem = loadable(() => import('../pages/store/ShopItem'));
const UserOutlet = loadable(() => import('../layouts/UserOutlet'));
const NotFound = loadable(() => import('../pages/NotFound')); */

const routes = [
	{
		path: '/',
		component: HomePage,
		exact: true
	}
	// {
	// 	path: '/executive-board',
	// 	element: <ExecutiveBoard />
	// },
	// {
	// 	path: '/carnival-decades',
	// 	element: <CarnivalDecades />
	// },
	// {
	// 	path: '/carnival-decade',
	// 	element: <CarnivalDecade />
	// },
	// {
	// 	path: '/carnival',
	// 	element: <Carnival />
	// },
	// {
	// 	path: '/supporter-member',
	// 	element: <SupporterMember />
	// },
	// {
	// 	path: '/sign',
	// 	element: <FormSign />
	// },
	// {
	// 	path: '/fan-member',
	// 	element: <FormFanMember />
	// },
	// {
	// 	path: '/store',
	// 	element: <Shop />,
	// 	children: [
	// 		{
	// 			path: '/products',
	// 			element: <Shop />
	// 		},
	// 		{
	// 			path: '/product',
	// 			element: <ShopItem />
	// 		}
	// 	]
	// },
	// {
	// 	path: '/auth',
	// 	element: <PrivateRoutes />,
	// 	children: [
	// 		{
	// 			path: '/user-details',
	// 			element: <UserDetails />
	// 		},
	// 		{
	// 			path: '/user',
	// 			element: <UserOutlet />,
	// 			children: [
	// 				{
	// 					path: '/account',
	// 					element: <AccountOutlet />,
	// 					children: [
	// 						{
	// 							path: '/profile',
	// 							element: <Profile />
	// 						},
	// 						{
	// 							path: '/address',
	// 							element: <Address />
	// 						},
	// 						{
	// 							path: '/password',
	// 							element: <Password />
	// 						}
	// 					]
	// 				}
	// 			]
	// 		}
	// 	]
	// },
	// {
	// 	path: '*',
	// 	element: <NotFound />
	// }
];

export default routes;
