import * as Types from '../constants/ActionTypes';
import { Dispatch } from 'redux';
import * as Apis from '../API/UserApi';
import { toast } from 'react-hot-toast';
import { ErrorAction } from '../Protection';

const loginAction = (user: any) => async (dispatch: Dispatch) => {
	try {
		dispatch({ type: Types.USER_LOGIN_REQUEST });
		const data = await Apis.loginService(user);
		dispatch({ type: Types.USER_LOGIN_SUCCESS, payload: data });
		toast.success(`Bem-vindo de volta ${data.name}`);
	} catch (error) {
		ErrorAction(error, dispatch, Types.USER_LOGIN_FAIL);
	}
};

const registerAction = (user: any) => async (dispatch: Dispatch) => {
	try {
		dispatch({ type: Types.USER_REGISTER_REQUEST });
		const data = await Apis.registerService(user);
		dispatch({ type: Types.USER_REGISTER_SUCCESS, payload: data });
		dispatch({ type: Types.USER_LOGIN_SUCCESS, payload: data });
		toast.success(`Bem-vindo ${data.name}`);
	} catch (error) {
		ErrorAction(error, dispatch, Types.USER_REGISTER_FAIL);
	}
};

const logoutAction = () => async (dispatch: Dispatch) => {
	try {
		dispatch({ type: Types.USER_LOGOUT });
		dispatch({ type: Types.USER_LOGIN_RESET });
		Apis.logoutService();
	} catch (error) {
		toast.error('ocorreu um erro ao sair da conta');
	}
};

export { loginAction, logoutAction, registerAction };
