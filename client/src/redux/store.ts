import { combineReducers, configureStore } from '@reduxjs/toolkit';
import * as user from './reducers/UserReducer';
// import logger from 'redux-logger';

const rootReducer = combineReducers( {
	userLogin: user.LoginReducer,
	userRegister: user.RegisterReducer
} );

const userInfoFromStorage = localStorage.getItem( 'userInfo' )
	? JSON.parse( localStorage.getItem( 'userInfo' ) as string )
	: null;

const initialState = {
	userLogin: { userInfo: userInfoFromStorage }
};

export const store = configureStore( {
	reducer: rootReducer,
	preloadedState: initialState,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware( {
			serializableCheck: false,
			immutableCheck: false
		} ) /* , [logger] */
} );
