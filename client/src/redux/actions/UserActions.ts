import * as Types from '../constants/ActionTypes';
import * as Apis from '../API/UserApi';
import { toast } from 'react-hot-toast';
import { ErrorAction } from '../Protection';

const loginAction = (user: any) => async (dispatch: any) => {
	try {
		dispatch({ type: Types.USER_LOGIN_REQUEST });
		const data = await Apis.loginService(user);
		dispatch({ type: Types.USER_LOGIN_SUCCESS, payload: data });
	} catch (error) {
		ErrorAction(error, dispatch, Types.USER_LOGIN_FAIL);
	}
};

const logoutAction = () => async (dispatch: any) => {
	try {
		dispatch({ type: Types.USER_LOGOUT });
		dispatch({ type: Types.USER_LOGIN_RESET });
		Apis.logoutService();
	} catch (error) {
		toast.error('Logout failed');
	}
};

export { loginAction, logoutAction };
/* export const loginUser = payload => ({
	type: Types.LOGIN,
	payload
});

export const logoutUser = () => ({
	type: Types.LOGOUT
}); */
