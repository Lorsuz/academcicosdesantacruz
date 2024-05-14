import { createSlice } from '@reduxjs/toolkit';
import * as Types from '../constants/ActionTypes';
import * as Apis from '../API/UserApi';
import { toast } from 'react-hot-toast';
import { ErrorAction } from '../Protection';

const initialState = {
	userLogin: { userInfo: userInfoFromStorage }
};

const userSlice = createSlice( {
	name: 'user',
	initialState,
	reducers: {
		userLoginRequest: ( state: any ) =>
		{
			state.userLogin.loading = true;
		},
		userLoginSuccess: ( state: any, action: any ) =>
		{
			state.userLogin.loading = false;
			state.userLogin.userInfo = action.payload;
		},
		userLoginFail: ( state: any, action: any ) =>
		{
			state.userLogin.loading = false;
			state.userLogin.error = action.payload;
		},
		userLoginReset: ( state: any ) =>
		{
			state.userLogin = {};
		}
	}
} );

export const { } = userSlice.actions;

export default userSlice.reducer;
